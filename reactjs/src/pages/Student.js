
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import { Link} from "react-router-dom";
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import axios from "axios";

function Student() {

   const  [studentList, setStudentList] = useState([])
  
    useEffect(() => {
        fetchStudentList()
    }, [])
  
    const fetchStudentList = () => {
        axios.get('http://localhost:4000/api/students')
        .then(function (response) {
          setStudentList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/api/students/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Student deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchStudentList()
                })
                .catch(function (error) {
                    Swal.fire({
                         icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
          })
    } 
    //studentList
    
    return (
    <Fragment>
     <Navbar/>
    <section className="dashboard--1 ">
      <div className="d-flex">
        
      <div className="sidebar">
      <Sidebar/>
    
      </div>
      <div className="side-bar content">
    <div className="d-flex align-items-center">
                <div className="title-dash">
                    <h4>Manage Students </h4>
                    <ul>
                        <li className="list-inline-item"><Link>Home </Link></li>
                        <li className="list-inline-item"><span>/</span> Students</li>
                    </ul>
                </div>

                <div className="button-table text-end ms-auto">
                <Link to={`/author`} className="btn btn-dash--1">
                            <i className="fa fa-download me-2"></i>Export</Link> &nbsp;
                    <a href="./addstudent" className="btn btn-dash--1"><i className="fa fa-plus me-2"></i>Add
                        Student </a>

                </div>
            </div>
  <div className="user-profile-dash">
    <table id="example" className="table table-striped table-dash">
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Name </th>
                <th>Mobile</th>
                <th>Email</th>
                <th>City</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {studentList?.map((student,key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{student.fullname}</td>
                <td>{student.mobile}</td>
                <td>{student.emaiid}</td>
                <td>{student.city}</td>
                <td>{student.address}</td>
                <td>
                 <Link
                  to={`/showstudent/${student._id}`}
                   className="me-3"> <i className="fa fa-eye"></i>
                  </Link>
                  <Link
                  to={`/editstudent/${student._id}`}
                   className="me-3">  <i className="fa fa-pencil-square-o"></i>
                  </Link>
                <button 
                     onClick={()=>handleDelete(student.id)}
                      className="btn-outline-danger mx-1">
                  <i className="fa fa-trash"></i>
                 </button>
                   
                
                </td>
            </tr>
              ))}
          
        </tbody>
    </table>
  </div>


</div>
  </div>
</section>

  <Footer/>

  </Fragment>
    );
}

export default Student;