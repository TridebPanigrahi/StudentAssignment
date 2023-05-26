from flask import Blueprint
from app.controllers.StudentDetails import Student_Details

routes = Blueprint('routes', __name__)

routes.route('/student_data', methods = ['POST','GET'])(Student_Details)