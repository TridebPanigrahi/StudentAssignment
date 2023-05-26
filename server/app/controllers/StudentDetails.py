from app import app, db, mysql
from flask import jsonify, request
from app.models.student_details import StudentData, StudentDataSchema

def Student_Details():
    if request.method == 'POST':
        res = request.get_json()
        std_data =StudentData(
            student_name = res["studentName"],
            student_class = res["studentClass"],
            student_marks = res["marks"],
        )
        db.session.add(std_data)
        db.session.commit()
        return f"Data reached"
    if request.method == 'GET':
        std = StudentData.query.all()
        stddata = StudentDataSchema(many = True)
        return jsonify({'std' : stddata.dump(std)})