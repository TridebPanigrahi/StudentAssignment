import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const StudentLists = () => {
  const [recive, setRecive] = useState([]);

  function student_details() {
    axios
      .get("http://localhost:5000/student_data")
      .then((res) => {
        setRecive(res.data.std);
        console.log(res.data.std);
      })
      .catch(() => {
        console.log("error reciving student Details");
      });
  }

  useEffect(() => {
    student_details();
  }, []);

  const columns = [
    {
      name: <p>Id </p>,
      selector: (row) => row.id,
    },
    {
      name: <p>Name </p>,
      selector: (row) => row.student_name,
    },
    {
      name: <p>Class</p>,
      selector: (row) => row.student_class,
    },
    {
      name: <p>Total Marks</p>,
      selector: (row) => row.student_marks,
    },
    {
      name: <p>Date of creation</p>,
      selector: (row) => row.creation_date,
    },
  ];

  return (
    <>
      <div>
        <h4 style={{textAlign:"center", color:"white", margin: "20px"}}>Student Lists</h4>
        <DataTable
          columns={columns}
          data={recive}
          pagination
        />
      </div>
    </>
  );
};

export default StudentLists;
