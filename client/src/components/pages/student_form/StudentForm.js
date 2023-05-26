import React, { useRef, useState } from "react";
import s from "./StudentForm.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { GrScorecard } from "react-icons/gr";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [data, setData] = useState({
    studentName: "",
    studentClass: "",
    marks: "",
  });

  const nameRef = useRef()
  const classRef = useRef()
  const marksRef = useRef()
  const submitRef = useRef()

  const jump = useNavigate()

  function clearmsg() {
    setTimeout(() => {
      nameRef.current.innerHTML = "";
      classRef.current.innerHTML = "";
      marksRef.current.innerHTML = "";
      submitRef.current.innerHTML = "";
    }, 4000);
  }

  const payload = {
    ...data,
  };

  const numberformat = /^[0-9]+$/;
  const nameformat = /^[A-Za-z" "_.]+$/;

  function formSubmit(e){
    e.preventDefault()
    if(data.studentName === ""){
      nameRef.current.innerHTML = "Enter Name";
      clearmsg();
    }
    else if (!data.studentName.match(nameformat)) {
      nameRef.current.innerHTML = "Enter Valid Name";
      clearmsg();
    }
    else if (data.studentClass === "") {
      classRef.current.innerHTML = "Enter Your Class";
      clearmsg();
    }
    else if (!data.studentClass.match(numberformat)){
      classRef.current.innerHTML = "Enter Your Class in number format";
      clearmsg();
    }
    else if (data.studentClass<1 || data.studentClass>12){
      classRef.current.innerHTML = "Your Class should be in between 1 to 12";
      clearmsg();
    }
    else if (data.marks === ""){
      marksRef.current.innerHTML = "Enter Your Marks";
      clearmsg();
    }
    else if (!data.marks.match(numberformat)){
      marksRef.current.innerHTML = "Enter Valid Marks";
      clearmsg();
    }
    else if (data.marks<1 || data.marks>600){
      marksRef.current.innerHTML = "Your Total Marks should be in between 1 to 600";
      clearmsg();
    }
    else{
      axios.post('http://localhost:5000/student_data', payload)
      .then((res)=>{
        console.log("Data Reached")
        submitRef.current.innerHTML = "details submited successfully";
        setTimeout(()=>{
          jump("/student_list")
        },1000)
      })
      .catch((res)=>{
        console.log("Error in post data")
        submitRef.current.innerHTML = "submission failed";
        clearmsg();
      })
    }
  }

  return (
    <>
      <div className={s.studentContainer}>
        <h3>Student Registration</h3>
        <form>
          <div className={s.input_field}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setData({ ...data, studentName: e.target.value });
              }}
              className={s.input}
            />
            <i>
              <BsFillPersonFill size={20} />
            </i>
          </div>
          <div
                ref={nameRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
          <div className={s.input_field}>
            <input
              type="text"
              placeholder="Class"
              className={s.input}
              onChange={(e) => {
                setData({ ...data, studentClass: e.target.value });
              }}
            />
            <i>
              <IoMdSchool size={20} />
            </i>
          </div>
          <div
                ref={classRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
          <div className={s.input_field}>
            <input
              type="number"
              placeholder="Total Marks"
              className={s.input}
              onChange={(e) => {
                setData({ ...data, marks: e.target.value });
              }}
            />
            <i>
              {" "}
              <GrScorecard size={20} />
            </i>
          </div>
          <div
                ref={marksRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
          <div className={s.btn}>
            <p onClick={formSubmit}>Submit</p>
          </div>
          <div
                ref={submitRef}
                className={`${s.tinyText} ${s.secondaryColor}`}
              ></div>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
