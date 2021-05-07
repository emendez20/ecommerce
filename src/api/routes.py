"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import redis
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Product, Orders
from api.utils import generate_sitemap, APIException
from sqlalchemy import select
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_jwt_extended import get_jwt
from passlib.hash import sha256_crypt

api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200
# Create a route to authenticate your users and return JWT Token. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email")
    password = request.json.get("password")

    # Query your database for email and password
    user = User.query.filter_by(email=email, password=password).first()
   
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({"token": access_token, "email": user.email})

#USER ENPOINTS START HERE#

# Endpoint for revoking the current users access token. Save the JWTs unique
# identifier (jti) in redis. Also set a Time to Live (TTL)  when storing the JWT
# so that it will automatically be cleared out of redis after the token expires.
# Endpoint for revoking the current users access token. Save the JWTs unique
# identifier (jti) in redis. Also set a Time to Live (TTL)  when storing the JWT
# so that it will automatically be cleared out of redis after the token expires.
@api.route("/logout", methods=["DELETE"])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    jwt_redis_blocklist.set(jti, "", ex=ACCESS_EXPIRES)
    return jsonify(msg="Access token revoked")

#LIST ALL USERS#
@api.route('/user', methods=['GET'])
def get_users():
    all_users = User.query.all()
    all_users_list = list(map(lambda x: x.serialize(), all_users))
    response_body = {
        "msg": "Listing all users"
    }

    return jsonify(all_users_list), 200

#LIST SINGLE USER
@api.route('/user/<int:id>', methods=['GET'])
def get_single_user(id):
    user = User.query.get(id)

    if user is None:
        raise APIException("User does not exist", status_code=404)
    response_body = {
        "msg": "Listing single user"
    }
    return jsonify(user.serialize()), 200    


#USER REGISTRATION ROUTE
@api.route('/register', methods=['POST'])
def create_user():
   
    request_body = request.get_json()
    user = User(email=request_body["email"], password=request_body["password"], is_active=True)
    db.session.add(user)
    db.session.commit()

    
    print("User created: ", request_body)
    return jsonify(request_body), 200

@api.route('/user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    request_body = request.get_json()
    user = User.query.get(user_id)

    if user is None:
        raise APIException('User not found', status_code=404)
    if "email" in request_body:
        user.email = request_body["email"]
    if "password" in request_body:
        user.password = request_body["password"]
    if "is_active" in request_body:
        user.is_active = request_body["is_active"]        
    
    db.session.commit()

    print("User property updated: ", request_body)
    return jsonify(request_body), 200


@api.route('/user/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)

    if user is None:
        raise APIException('User not found', status_code=404)

    db.session.delete(user)
    db.session.commit()
    response_body = {
         "msg": "User deleted successfully",
    }
    return jsonify(response_body), 200      

    #USER ENPOINTS END HERE#
    #SELLER ENPOINTS START HERE#
    
    #PRODUCT ENPOINTS START HERE#
    
    

@api.route('/product', methods=['GET'])
def get_products():
    all_products = Product.query.all()
    all_products_list = list(map(lambda x: x.serialize(), all_products))
    response_body = {
        "msg": "Listing all sellers"
    }

    return jsonify(all_products_list), 200

@api.route('/product/<int:id>', methods=['GET'])
def get_single_product(id):
    product = Product.query.get(id)

    if product is None:
        raise APIException("Product does not exist", status_code=404)
    response_body = {
        "msg": "Listing single product"
    }
    return jsonify(product.serialize()), 200    


@api.route('/product', methods=['POST'])
def create_product():
    request_body = request.get_json()
    product = Product(
        code=request_body["code"],
        name=request_body["name"],
        description=request_body["description"],
        available=request_body["available"],
        price=request_body["price"],
        url=request_body["url"]
        )       

    db.session.add(product)
    db.session.commit()
    print("Product added: ", request_body)
    return jsonify(request_body), 200

@api.route('/product/<int:product_id>', methods=['PUT'])
def update_product(product_id):
    request_body = request.get_json()
    product = Product.query.get(product_id)

    if product is None:
        raise APIException('Product not found', status_code=404)
    if "code" in request_body:
        product.code = request_body["code"]
    if "name" in request_body:
        product.name = request_body["name"]
    if "description" in request_body:
        product.description = request_body["description"]     
    if "available" in request_body:
        product.quantity = request_body["available"]
    if "price" in request_body:
        product.price = request_body["price"]
    if "url" in request_body:
        product.discount = request_body["url"]               
    
    db.session.commit()

    print("Seller property updated: ", request_body)
    return jsonify(request_body), 200


@api.route('/product/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)

    if product is None:
        raise APIException('Product not found', status_code=404)

    db.session.delete(product)
    db.session.commit()
    response_body = {
         "msg": "Product deleted successfully",
    }
    return jsonify(response_body), 200     


    
    #
    #PRODUCT ENPOINTS END HERE#       
    #TRANSACTIONLOGS ENPOINTS START HERE#

# #USE THIS ROUTE TO ADD PRODUCTS TO THE CART 
# @api.route('/add_to_cart/<int:id>', methods=['POST'])
# @jwt_required()
# def add_prod(id):
#     request_body = request.get_json()
#     log = TransactionLog(
#         token=request_body["token"],
#         quantity=request_body["quantity"],
#         amount=request_body["amount"],
#         discount_percent=request_body["discount_percent"],
#         status=request_body["status"],
#         seller_id=request_body["seller_id"],
#         customer_id=request_body["customer_id"],
#         product_id=request_body["product_id"]
#         )

#     db.session.add(customer)
#     db.session.commit()
#     print("Customer created: ", request_body)
#     return jsonify(request_body), 200
    
# #USE THIS ROUTE TO GET THE CART FOR THE CURRENT USER
# @api.route('/get_cart/<int:id>', methods=['GET'])
# @jwt_required()
# def get_current_cart(id):
#     cart = select(all).where(TransactionLog.token == current_token) #CART IS ONLY GOOD FOR THE CURRENT TOKEN, THIS QUERY CHECK LOGS ASSOCIATED TO THE CURRENT TOKEN AND RETURNS ALL THE ITEMS RELATED AND THE CART TOTAL AMOUNT
#     return jsonify(cart), 200  

#USE THIS ROUTE TO MODIFY THE STATUS OF THE ORDERS. STATUS OPTIONS ARE:
#cart, paid, dispatched, cancelled

@api.route('/order/<int:id>', methods=['PUT'])
@jwt_required()
def update_order_status(id):
    request_body = request.get_json()
    order = Orders.query.get(id)

    if order is None:
        raise APIException('Order not found', status_code=404)
    if "status" in request_body:
        order.status = request_body["status"]       
    
    db.session.commit()

    print("Order status updated: ", request_body)
    return jsonify(request_body), 200

#-------------------------------------------------------------------  
#USE THIS ROUTE TO UPDATE THE INVENTORY FOR EACH PRODUCT AFTER THE ORDER STATUS UPDATES TO PAID --- CALCULATE ON FRONT END AND SUBMIT THE NEW INVENTORY IN THE JSON REQUEST

@api.route('/orders/<string:email>', methods=['GET'])
def get_user_orders(email):
    user_orders =  session.execute(
        select(Orders.id, Orders.paypal_id, Orders.status, Orders.amount).
        filter_by(email).order_by(Orders.id)
        )

    user_orders_list = list(map(lambda x: x.serialize(), user_orders))
    response_body = {
        "msg": "Listing orders"
    }

    return jsonify(user_orders_list), 200

@api.route('/orders/<int:id>', methods=['GET'])
def get_single_log(id):
    log = Product.query.get(id)

    if log is None:
        raise APIException("Log does not exist", status_code=404)
    response_body = {
        "msg": "Listing single log"
    }
    return jsonify(log.serialize()), 200    


@api.route('/orders', methods=['POST'])
def create_order():
    request_body = request.get_json()
    order = Orders(
        date=request_body["date"],
        amount=request_body["amount"],
        status=request_body["status"]
        )       

    db.session.add(order)
    db.session.commit()
    print("Order added: ", request_body)
    return jsonify(request_body), 200

    #USER REGISTRATION ROUTE
# @api.route('/register', methods=['POST'])
# def create_user():
   
#     request_body = request.get_json()
#     user = User(email=request_body["email"], password=request_body["password"], is_active=True)
#     db.session.add(user)
#     db.session.commit()

    
#     print("User created: ", request_body)
#     return jsonify(request_body), 200