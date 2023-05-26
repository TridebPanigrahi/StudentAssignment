from flask import Flask
from flask_cors import CORS
import pymysql
pymysql.install_as_MySQLdb()
from flask_mysqldb import MySQL
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import os
from os.path import join, dirname, realpath

UPLOAD_FOLDER = 'D:\\CRUD operation using RFM\\client\\src\\components\\assets'

app = Flask(__name__)
CORS(app)

username = 'root'
password = 'root'
host = 'localhost:3306'
db = 'student_assignment'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = username
app.config['MYSQL_PASSWORD'] = password
app.config['MYSQL_DB'] =db
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{username}:{password}@{host}/{db}'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

mysql = MySQL(app)
db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)

from app.models.student_details import *

from app.routes.routes import routes
app.register_blueprint(routes)