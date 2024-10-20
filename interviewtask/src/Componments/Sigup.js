import React, { useState } from 'react';
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/signup/login", { email, password })
            .then((res) => {
                
            })
            .catch((err) => {
                console.log(err);
            });
           
                navigate("/features")
           
    };

    return (
        <div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <input type='text' name='email' placeholder='username' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type='password' name='password' placeholder='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div>
                                    <input type='submit' value="Login" className='btn btn-success'  />
                                </div>
                            </form>
                            <NavLink to='/register'>New User?</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
