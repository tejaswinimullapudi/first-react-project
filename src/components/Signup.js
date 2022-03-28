import './Signup.css'
import { Button } from 'primereact/button';
import pic from '../resources/unnamed.png'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();
    const userNameset = (event) => {

        setuserName(event.target.value);
    }
    const passwordset = (event) => {
        setpassword(event.target.value);
    }
    const addressset = (event) => {
        setaddress(event.target.value);
    }
    const phoneset = (event) => {
        setphone(event.target.value);
    }
    const emailset = (event) => {
        setemail(event.target.value);
    }

    const signup = () => {
        //post request
        navigate("/login");

    }
    return (
        <div className="background">
            <div className="row ">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card">
                        <div >
                            <h1><img src={pic} alt="spinny logo" width="50" height="50"></img>
                                Spinny</h1>
                        </div>

                        <div className="spacer"></div>

                        <form onSubmit={signup}>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Username:</h5>
                                </div>
                                <div className="col-md-6">
                                    <input type='text' value={userName} onChange={userNameset} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Password:</h5>
                                </div>
                                <div className="col-md-6">
                                    <input type='password' value={password} onChange={passwordset} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Address:</h5>
                                </div>
                                <div className="col-md-6">
                                    <textarea type='text' value={address} onChange={addressset} name="w3review" rows="3" cols="23">

                                    </textarea>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Phone number:</h5>
                                </div>
                                <div className="col-md-6">
                                    <input type='text' value={phone} onChange={phoneset} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">E-mail:</h5>
                                </div>
                                <div className="col-md-6">
                                    <input type='text' value={email} onChange={emailset} />
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">

                                    <Button type='submit' label="Sign up" onClick={signup} />



                                </div>
                                <div className="col-md-4"></div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}
export default Signup;