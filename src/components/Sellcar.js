import React, { useEffect, useState } from 'react';
import Title from './Title';
import { Button } from 'primereact/button';
import './Sellcar.css'
function Sellcar(props) {
    const [user, setuserName] = useState('');
    const [carName, setCarName] = useState('');
    const [car_model, setCarModel] = useState('');
    const [car_color, setCarColor] = useState('');
    const [car_model_year, setYear] = useState('');
    const [carPrice, setPrice] = useState('');

    const sell = ((event) => {

    })
    const carNameset = (event) => {

        setCarName(event.target.value);
    }
    const carModelset = (event) => {

        setCarModel(event.target.value);
    }
    const carColorset = (event) => {
        setCarColor(event.target.value);
    }
    const carYearset = (event) => {
        setYear(event.target.value);
    }
    const carPricerset = (event) => {
        setPrice(event.target.value);
    }

    useEffect(() => {

        setuserName(props.userName)

    }, [props.userName]);
    return (
        <div>
            <Title userName={user}></Title>
            <div className="background1">
                <div className="row ">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="card1">
                            <h2>Enter Car Details</h2>
                            <div className="spacer1"></div>

                            <form onSubmit={sell}>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Car Name:</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input type='text' className="input1" value={carName} onChange={carNameset} />
                                    </div>
                                </div>
                                <div className="spacer1"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Car Model:</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input type='text' className="input1" value={car_model} onChange={carModelset} />
                                    </div>
                                </div>
                                <div className="spacer1"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Car color:</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input type='text' className="input1" value={car_color} onChange={carColorset} />
                                    </div>
                                </div>
                                <div className="spacer1"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Car Year:</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input type='text' className="input1" value={car_model_year} onChange={carYearset} />
                                    </div>
                                </div>
                                <div className="spacer1"></div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Car Price:</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <input type='text' className="input1" value={carPrice} onChange={carPricerset} />
                                    </div>
                                </div>
                                <div className="spacer1"></div>
                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <Button type='submit' label="Sell" />

                                    </div>
                                    <div className="col-md-4"></div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}
export default Sellcar;