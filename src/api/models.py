from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey, String, Boolean, Text,Float
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False,default=True)
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active" : self.is_active,
            # "seller" : self.seller,
            # "customer" : self.customer
            # do not serialize the password, its a security breach
        }


class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.Integer,unique=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    available = db.Column(db.Boolean)
    price = db.Column(db.Integer, unique=False, nullable=False)
    url = db.Column(db.String(300))

    def __repr__(self):
        return '<Product %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "code": self.code,
            "name": self.name,
            "description": self.description,
            "available": self.available,
            "price": self.price,
            "url": self.url
            # do not serialize the password, its a security breach
        }         

class Orders(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String,unique=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    status = db.Column(db.String(50), unique=False, nullable=False)

 
    def __repr__(self):
        return '<Orders %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "date": self.date,
            "amount": self.amount,
            "status": self.status
        }            
