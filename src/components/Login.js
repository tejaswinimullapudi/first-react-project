import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import pic from '../resources/unnamed.png'


function Login(props) {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [logging, setlogging] = useState(0);
    const navigate = useNavigate();
    const signUp = () => {
        navigate("/signup")
    }
    function userLogin(event) {
        event.preventDefault();
        console.log("logged in!!");

        const loginData = {
            userName: userName,
            password: password
        };
        console.log(loginData);
        props.loginDatafromLogin(loginData);
        if (loginData.userName === 'teja' && loginData.password === 'passcode') {
            console.log("you can route now");
            navigate("/")
            setlogging(0)
        } else {
            setlogging(1)
            console.log("invalid creds");
        }
    }
    const userNameset = (event) => {

        setuserName(event.target.value);
    }
    const passwordset = (event) => {
        setpassword(event.target.value);
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
                        {logging === 1 &&
                            <h6 >invalid credentials</h6>
                        }
                        <form onSubmit={userLogin}>

                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="name">Username:</h4>
                                </div>
                                <div className="col-md-6">
                                    <input type='text' value={userName} onChange={userNameset} />
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="name">Password:</h4>
                                </div>
                                <div className="col-md-6">
                                    <input type='password' value={password} onChange={passwordset} />
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="col">
                                        <Button type='submit' label="Login" />
                                    </div>
                                    <div className="col padding">
                                        <a onClick={signUp} className="options" role="button">Sign up</a>
                                    </div>

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
export default Login;