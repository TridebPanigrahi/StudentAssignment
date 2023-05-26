from app import db, ma
from sqlalchemy.sql import func

class StudentData(db.Model):
    __tablename__ = 'student_details'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    student_name = db.Column(db.String(100), nullable = False)
    student_class = db.Column(db.Integer, nullable =False)
    student_marks = db.Column(db.String(100),nullable =False)
    creation_date = db.Column(db.DateTime, default = func.now())


class StudentDataSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = StudentData
    