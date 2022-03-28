import './Title.css'
import React, { useState } from 'react';
import pic from '../resources/unnamed.png'
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Login from './Login';



function Title(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    const [searchValue, setValue1] = useState('');
    const [displayBasic, setDisplayBasic] = useState(false);
    const cities = [
        { name: 'Hyderabad', code: 'HYD' },
        { name: 'Bangalore', code: 'BLR' },
        { name: 'Raipur', code: 'RPR' },
        { name: 'Mumbai', code: 'M' },
        { name: 'Delhi', code: 'D' }
    ];
    const navigate = useNavigate();
    const sell = () => {
        navigate("/sell")
    }
    const onClick = () => {
        navigate("/login")
    }
    const onHide = () => {
        setDisplayBasic(false);
    }

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    }
    return (
        <div>
            <div className='row'>
                <div className="col-md-2">
                    <h1><img src={pic} alt="spinny logo" width="50" height="50"></img>
                        Spinny</h1>
                </div>
                <div className="col-md-2 padding">
                    <Dropdown value={selectedCity} options={cities}
                        onChange={onCityChange} optionLabel="name" optionValue="name" placeholder="Select a City" />
                </div>
                <div className="col-md-2 padding">
                    <span className="p-input-icon-right">

                        <InputText value={searchValue} onChange={(e) => setValue1(e.target.value)} placeholder="Search" />
                        <i className="pi pi-search" />
                    </span>
                </div>
                <div className="col-md-1 padding">

                    {!props.userName && <a className="options" role="button" onClick={onClick}>Login</a>}

                </div>
                <div className="col-md-1 padding">
                    <a onClick={sell} className="options" role="button">Sell Car</a>
                </div>

                <div className="col-md-4">
                    <div className="row">
                        <div className="col padding">
                            <span className="welcome">Welcome {props.userName}</span>
                        </div>
                        <div className="col padding">
                            <span className="call"><span className="small">Call us at 727-727-7275</span> </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Title;