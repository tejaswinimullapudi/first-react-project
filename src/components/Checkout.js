import './Checkout.css'
import pic from '../resources/unnamed.png'
import { Button } from 'primereact/button';
function Checkout(props) {
    const proceed = () => {

    }
    return (
        <div className="background">
            <div className="row ">
                <div className="col-md-6">

                    <div className="card2">
                        <div >
                            <div className="row">

                                <div className="col-md-4 padding1">
                                    <img src={props.carinformation.car_image} alt="car" width="580" height="400" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card2">
                        <div >
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <h1><img src={pic} alt="spinny logo" width="50" height="50"></img>
                                        Spinny</h1>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>

                        <div className="spacer"></div>

                        <form onSubmit={proceed}>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Car Name:</h5>
                                </div>
                                <div className="col-md-6">
                                    {props.carinformation.car_name}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Car Model:</h5>
                                </div>
                                <div className="col-md-6">
                                    {props.carinformation.car_model}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Car Location:</h5>
                                </div>
                                <div className="col-md-6">
                                    {props.carinformation.car_location}



                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Year of manufacture:</h5>
                                </div>
                                <div className="col-md-6">
                                    {props.carinformation.car_model_year}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 className="name">Price:</h5>
                                </div>
                                <div className="col-md-6">
                                    {props.carinformation.car_price}
                                </div>
                            </div>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">

                                    <Button type='submit' label="Proceed to payment" />



                                </div>
                                <div className="col-md-4"></div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;