import './Shoppingpage.css';
import React, { useEffect, useState, useCallback } from 'react';
import Title from './Title';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";
function Shoppingpage(props) {
    const navigate = useNavigate();
    const menuitems = [
        {
            label: 'Budget',
            icon: 'pi pi-fw pi-money-bill',
            items: [
                {
                    label: '3-4 lakhs',


                },
                {
                    label: '4-5 lakhs',

                },
                {
                    label: '5-7 lakhs',

                },
                {
                    label: '7+ lakhs',

                }
            ]
        },
        {
            label: 'Year',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: '2020 & above',

                },
                {
                    label: '2018 & above',

                },
                {
                    label: '2016 & above',

                },
                {
                    label: '2014 & above',

                },

            ]
        },
        {
            label: 'Kilometers driven',
            icon: 'pi pi-fw pi-car',
            items: [
                {
                    label: '10000 and below',


                },
                {
                    label: '30000 and below',


                },
                {
                    label: '50000 and below',


                }
            ]
        },
        {
            label: 'Fuel type',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'Petrol',
                },
                {
                    label: 'Diesel',

                },
                {
                    label: 'CNG'
                }
            ]
        },

    ];

    const [items, setItems] = useState([]);
    const [user, setuserName] = useState('');

    const fetchItems = useCallback(async () => {
        fetch('http://127.0.0.1:5000/cars')
            .then(res => res.json())
            .then(json => {
                console.log(json.data);
                setItems(JSON.parse(json.data));
            });
    }, []);

    const checkout = (event) => {

        if (user) {
            console.log("event=" + event.Image_URL);
            const carData = {
                car_name: event.car_name,
                car_model: event.car_model,
                car_location: event.Location,
                car_model_year: event.year,
                car_price: event.car_price,
                car_image: event.Image_URL
            };
            console.log("=" + event.car);
            props.carinfo(carData);
            navigate("/checkout")
        } else {
            navigate("/login")
        }

    }

    useEffect(() => {
        fetchItems();
        setuserName(props.userName)

    }, [fetchItems, props.userName]);

    const start = <h6>explore by &nbsp;</h6>
    return (

        <div>
            <Title userName={user}></Title>
            <Menubar model={menuitems} start={start} />

            <div className="col-md-12 " >

                <div className="row">
                    {
                        items.length > 0 && items.map((item) => {
                            return (



                                <Card title={item.car_name} style={{ width: '25rem', margin: '0.8em', }}>
                                    <img src={item.Image_URL} alt="alternatetext" width="350" height="300" />
                                    <h5>car location : {item.Location}</h5>
                                    <h5>car model : {item.car_model}</h5>
                                    <h5>car model year : {item.year}</h5>
                                    <h5>car price : {item.car_price}</h5>
                                    <span>
                                        <div className="row">
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4">
                                                <Button label="Buy" icon="pi pi-check" onClick={() => checkout(item)} style={{ marginRight: '.25em' }} />
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>
                                    </span>
                                </Card>


                            )
                        })}



                </div>


            </div>


        </div>
    )
}
export default Shoppingpage;