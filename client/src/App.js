import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import StudentForm from './components/pages/student_form/StudentForm'
import StudentLists from './components/pages/studentLIst/StudentLists';


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StudentForm/>}/>
            <Route path='/student_list' element={<StudentLists/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App