from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, Boolean, Float
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False,default=True)
    seller = db.relationship('Seller',back_populates="user")
    customer = db.relationship('Customer',back_populates="user")
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active" : self.is_active,
            "seller" : self.seller,
            "customer" : self.customer
            # do not serialize the password, its a security breach
        }

class Seller(db.Model):
    __tablename__ = 'seller'
    id = db.Column(db.Integer, primary_key=True)
    is_active = db.Column(db.Boolean(), unique=False,default=True, nullable=False)
    company_legal_id  = db.Column(db.Integer, unique=False, nullable=False)
    company_name  = db.Column(db.String(80), unique=False, nullable=False)
    company_address  = db.Column(db.String(280), unique=False, nullable=False)
    company_phone  = db.Column(db.String(80), unique=False, nullable=False)
    company_rep_name  = db.Column(db.String(80), unique=False, nullable=False)
    company_rep_number  = db.Column(db.String(80), unique=False, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = relationship("User", back_populates="seller")

    product = db.relationship("Product",back_populates="seller")
    transactionlog = db.relationship("TransactionLog",back_populates="seller")
    #order_id = db.relationship('Order', backref='seller', lazy=True)

    # def __repr__(self):
    #     return '<Seller %r>' % self.company_name

    def serialize(self):
        return {
            "id": self.id,
            "is_active": self.is_active,
            "company_legal_id": self.company_legal_id,
            "company_name": self.company_name,
            "company_address": self.company_address,
            "company_phone": self.company_phone,
            "company_rep_name": self.company_rep_name,
            "company_rep_number": self.company_rep_number,
            "user_id": self.user_id
            # do not serialize the password, its a security breach
        }

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Integer)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    category = db.Column(db.String(80), unique=False, nullable=False)
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float, unique=False, nullable=False)
    discount = db.Column(db.Float, unique=False, nullable=False)

    seller_id = db.Column(db.Integer, db.ForeignKey("seller.id"))
    seller = db.relationship("Seller", back_populates="product")

    transactionlog = db.relationship("TransactionLog",back_populates="product")

    def __repr__(self):
        return '<Product %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "code": self.code,
            "name": self.name,
            "description": self.description,
            "category": self.category,
            "quantity": self.quantity,
            "price": self.price,
            "discount": self.discount,
            "seller_id": self.seller_id
            # do not serialize the password, its a security breach
        }         

class Customer(db.Model):
    __tablename__ = 'customer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(280), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, default=True,nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = relationship("User", back_populates="customer")
    transactionlog = db.relationship("TransactionLog",back_populates="customer")
    #order_id = db.relationship('Order', backref='customer', lazy=True)

    def __repr__(self):
        return '<Customer %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone,
            "address": self.address,
            "is_active": self.is_active,
            "user_id": self.user_id
            # do not serialize the password, its a security breach
        }        

   

class TransactionLog(db.Model):
    __tablename__ = 'transactionlog'
    id = db.Column(db.Integer, primary_key=True)
    transaction_id  = db.Column(db.Integer) 
    quantity = db.column(db.Integer)
    amount = db.column(db.Float)
    discount_percent = db.column(db.String)
    status = db.column(db.String) #cart, paid, dispatched, cancelled
    #this is a number shared by all logs in the same transaction
    seller_id = db.Column(db.Integer, db.ForeignKey("seller.id"))
    seller = db.relationship("Seller", back_populates="transactionlog")

    customer_id = db.Column(db.Integer, db.ForeignKey("customer.id"))
    customer = db.relationship("Customer", back_populates="transactionlog")

    product_id = db.Column(db.Integer, db.ForeignKey("product.id"))
    product = db.relationship("Product", back_populates="transactionlog")    

    
    def __repr__(self):
        return '<TransactionLog %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "transaction_id": self.transaction_id,
            "quantity":self.quantity,
            "amount":self.amount,
            "discount_percent":self.discount_percent,
            "status": self.status,
            "seller_id": self.seller_id,
            "customer_id": self.customer_id,
            "product_id": self.product_id

        }            


# class Order(db.Model):
#     __tablename__ = 'order'
#     id = db.Column(db.Integer, primary_key=True)
#     order_id = db.Column(db.Integer, primary_key=True) #same transaction id from the logs
#     #order_amount  = db.Column(db.Float, unique=False, nullable=False)
#     tax_percent  = db.Column(db.Float, unique=False, nullable=False)
#     tax_amount  = db.Column(db.Float, unique=False, nullable=False)
#     total_discount  = db.Column(db.Float, unique=False, nullable=False)
#     total_order_amount  = db.Column(db.Float, unique=False, nullable=False)
#     seller_id = db.Column(db.Integer, db.ForeignKey("seller.id"))
#     customer_id = db.Column(db.Integer, db.ForeignKey("customer.id"))
#     status= db.Column(db.String(80), unique=False, nullable=False)

#     @aggregated('order_amount', db.Column(sa.Integer))
#         def order_amount_sum(self):
#             return db.func.sum(TransactionLog.price)
#     orders = db.relationship('TransactionLog')



#     def __repr__(self):
#         return '<Order %r>' % self.id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "order_id": self.order_id,
#             "order_amount": self.order_amount,
#             "tax_percent": self.tax_percent,
#             "tax_amount": self.tax_amount,
#             "total_discount": self.total_discount,
#             "total_order_amount": self.total_order_amount,
#             "status": self.status
#             # do not serialize the password, its a security breach
#         }     
        