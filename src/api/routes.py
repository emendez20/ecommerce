"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Seller,Customer, Product, TransactionLog
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
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
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    # Query your database for email and password
    user = User.filter.query(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

#USER ENPOINTS START HERE#

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
@api.route('/user', methods=['POST'])
def create_user():
    request_body = request.get_json()
    user = User(email=request_body["email"], password=sha256_crypt.encrypt(str(request_body["password"])))
    user_type=request_body["user_type"]
    db.session.add(user)
    db.session.commit()
    
    requesting_user = User.query.filter_by(email=request_body["email"]).first()
    user_id = requesting_user.id
    if( user_type == "seller" ):
        seller = Seller(
            company_legal_id=request_body["company_legal_id"],
            company_name=request_body["company_name"],
            company_address=request_body["company_address"],
            company_phone=request_body["company_phone"],
            company_rep_name=request_body["company_rep_name"],
            company_rep_number=request_body["company_rep_number"],
            user_id=user_id)
        db.session.add(seller)
        
    if( user_type == "customer" ):
        customer = Customer(
            name=request_body["name"],
            last_name=request_body["last_name"],
            phone=request_body["phone"],
            address=request_body["address"],
            user_id=user_id) 
        db.session.add(customer)
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
    
    
@api.route('/seller', methods=['GET'])
def get_sellers():
    all_sellers = Seller.query.all()
    all_sellers_list = list(map(lambda x: x.serialize(), all_sellers))
    response_body = {
        "msg": "Listing all sellers"
    }

    return jsonify(all_sellers_list), 200

@api.route('/seller/<int:id>', methods=['GET'])
def get_single_seller(id):
    seller = Seller.query.get(id)

    if seller is None:
        raise APIException("Seller does not exist", status_code=404)
    response_body = {
        "msg": "Listing single seller"
    }
    return jsonify(seller.serialize()), 200    


@api.route('/seller', methods=['POST'])
def create_seller():
    request_body = request.get_json()
    seller = Seller(
        company_legal_id=request_body["company_legal_id"], company_name=request_body["company_name"],
        company_address=request_body["company_address"],
        company_phone=request_body["company_phone"],
        company_rep_name=request_body["company_rep_name"],
        company_rep_number=request_body["company_rep_number"])
    db.session.add(seller)
    db.session.commit()
    print("Seller created: ", request_body)
    return jsonify(request_body), 200

@api.route('/seller/<int:seller_id>', methods=['PUT'])
def update_seller(seller_id):
    request_body = request.get_json()
    seller = Seller.query.get(seller_id)

    if seller is None:
        raise APIException('Seller not found', status_code=404)
    if "company_legal_id" in request_body:
        seller.company_legal_id = request_body["company_legal_id"]
    if "company_name" in request_body:
        seller.company_name = request_body["company_name"]
    if "company_address" in request_body:
        seller.company_address = request_body["company_address"]     
    if "company_phone" in request_body:
        seller.company_phone = request_body["company_phone"]
    if "company_rep_name" in request_body:
        seller.company_rep_name = request_body["company_rep_name"]
    if "company_legal_id" in request_body:
        seller.company_rep_number = request_body["company_rep_number"]               
    
    db.session.commit()

    print("Seller property updated: ", request_body)
    return jsonify(request_body), 200


@api.route('/seller/<int:id>', methods=['DELETE'])
def delete_seller(id):
    seller = Seller.query.get(id)

    if seller is None:
        raise APIException('Seller not found', status_code=404)

    db.session.delete(seller)
    db.session.commit()
    response_body = {
         "msg": "Seller deleted successfully",
    }
    return jsonify(response_body), 200      



    
    
    #SELLER ENPOINTS END HERE#
    #CUSTOMER ENPOINTS START HERE#
    
    
@api.route('/customer', methods=['GET'])
def get_customers():
    all_customers = Customer.query.all()
    all_customers_list = list(map(lambda x: x.serialize(), all_customers))
    response_body = {
        "msg": "Listing all sellers"
    }

    return jsonify(all_customers_list), 200

@api.route('/customer/<int:id>', methods=['GET'])
def get_single_customer(id):
    customer = Customer.query.get(id)

    if customer is None:
        raise APIException("Customer does not exist", status_code=404)
    response_body = {
        "msg": "Listing single customer"
    }
    return jsonify(customer.serialize()), 200    


@api.route('/customer', methods=['POST'])
def create_customer():
    request_body = request.get_json()
    customer = Customer(
        name=request_body["name"],
        last_name=request_body["last_name"],
        phone=request_body["phone"],
        address=request_body["address"])

    db.session.add(customer)
    db.session.commit()
    print("Customer created: ", request_body)
    return jsonify(request_body), 200

@api.route('/customer/<int:customer_id>', methods=['PUT'])
def update_customer(customer_id):
    request_body = request.get_json()
    customer = Customer.query.get(customer_id)

    if seller is None:
        raise APIException('Seller not found', status_code=404)
    if "name" in request_body:
        seller.name = request_body["name"]
    if "last_name" in request_body:
        seller.last_name = request_body["last_name"]
    if "company_address" in request_body:
        seller.company_address = request_body["company_address"]     
    if "phone" in request_body:
        seller.phone = request_body["phone"]
    if "address" in request_body:
        seller.address = request_body["address"]
    if "is_active" in request_body:
        seller.is_active = request_body["is_active"]               
    
    db.session.commit()

    print("Seller property updated: ", request_body)
    return jsonify(request_body), 200


@api.route('/customer/<int:id>', methods=['DELETE'])
def delete_customer(id):
    customer = Customer.query.get(id)

    if customer is None:
        raise APIException('Customer not found', status_code=404)

    db.session.delete(customer)
    db.session.commit()
    response_body = {
         "msg": "Customer deleted successfully",
    }
    return jsonify(response_body), 200     



    
    # 
    #CUSTOMER ENPOINTS END HERE#    
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
        category=request_body["category"],
        quantity=request_body["quantity"],
        price=request_body["price"],
        discount=request_body["discount"],
        seller_id=request_body["seller_id"]
        )

    db.session.add(customer)
    db.session.commit()
    print("Customer created: ", request_body)
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
    if "quantity" in request_body:
        product.quantity = request_body["quantity"]
    if "price" in request_body:
        product.price = request_body["price"]
    if "discount" in request_body:
        product.discount = request_body["discount"]               
    
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
    
    

@api.route('/transactionlog', methods=['GET'])
def get_logs():
    all_logs = Product.query.all()
    all_logs_list = list(map(lambda x: x.serialize(), all_logs))
    response_body = {
        "msg": "Listing all sellers"
    }

    return jsonify(all_logs_list), 200

@api.route('/transactionlog/<int:id>', methods=['GET'])
def get_single_log(id):
    log = Product.query.get(id)

    if log is None:
        raise APIException("Log does not exist", status_code=404)
    response_body = {
        "msg": "Listing single log"
    }
    return jsonify(log.serialize()), 200    


@api.route('/transactionlog', methods=['POST'])
def create_log():
    request_body = request.get_json()
    log = TransactionLog(
        transaction_id=request_body["transaction_id"],
        seller_id=request_body["seller_id"],
        customer_id=request_body["customer_id"],
        product_id=request_body["product_id"]
        )

    db.session.add(log)
    db.session.commit()
    print("Log created: ", request_body)
    return jsonify(request_body), 200



@api.route('/transactionlog/<int:id>', methods=['DELETE'])
def delete_log(id):
    log = TransactionLog.query.get(id)

    if log is None:
        raise APIException('Log not found', status_code=404)

    db.session.delete(log)
    db.session.commit()
    response_body = {
         "msg": "Log deleted successfully",
    }
    return jsonify(response_body), 200    



    
    
    #TRANSACTIONLOGS ENPOINTS END HERE#        