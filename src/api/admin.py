  
import os
from flask_admin import Admin
from api.models import db, User, Customer, Seller, Product, TransactionLog
from flask_admin.contrib.sqla import ModelView
from flask_jwt_extended import JWTManager,create_access_token,jwt_required, get_jwt_identity

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Customer, db.session))
    admin.add_view(ModelView(Seller, db.session))
    admin.add_view(ModelView(TransactionLog, db.session))
    admin.add_view(ModelView(Product, db.session))
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))