import { Fragment } from 'react';
import { Link } from "react-router-dom";

import React, { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';

function Home() {
    const [emailid, setEmailid] = useState('');
    const [password, setPassword] = useState('');
    const [isSaving, setIsSaving] = useState(false);


    const handleLogin = () => {
        axios.post('http://localhost:4000/api/login', {
            emailid: emailid,
            password: password
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'User saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })

          })
          .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
          });
    }  
  
    return (
        <Fragment>
<section className="dashboard--1 ">
	<div classNameName="dash-login-page">
        <div className="dash-content-page">
            <div className="container">
           
                <div className="row g-5 row-cols-1 row-cols-lg-2 row-cols-md-2 justify-content-center align-items-center">
                    
                    <div className="col">
                        <div className="form">
                            <div className="logo">
                                <div className="logo-icon">
                                    {/* <img src="admin/images/logo.jpeg" alt="logo"/> */}
                                </div>
                            </div>
                            <form id="step1" className="login-form"  method="post">
                                <div className="input-field">
                                    <input type="text" placeholder="Username" required=""   onChange={(event)=>{setEmailid(event.target.value)}}/>
                                    <i className="fa fa-user-o field-icon"></i>
                                </div>
                                <div className="input-field">
                                    <input type="password" placeholder="Password" required=""   onChange={(event)=>{setPassword(event.target.value)}}/>
                                    <i className="fa fa-eye-slash field-icon" id="eye"></i>
                                </div>
                                <div className="bottom-dash-check d-flex justify-content-between flex-wrap">
                                    <div className="rememberme">
                                        <input type="checkbox"/>
                                        <label>Remember Me</label>
                                    </div>
                                    <Link TO="#" className="forget-dash">Forget password</Link>
                                </div>
                                <div className="login-btn">
                                <button 
                                disabled={isSaving}
                                onClick={handleLogin} 
                                type="button"
                                className="btn btn-dash--1 mt-4">
                                Login
                            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
	    </div>
	</div>
</section>
</Fragment>
  );
}

export default Home;