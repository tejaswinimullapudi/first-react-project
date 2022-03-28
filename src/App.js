import Login from './components/Login';
import React, { useState } from 'react';

import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import {
  Routes, Route
} from 'react-router-dom';

import Shoppingpage from './components/Shoppingpage';
import Sellcar from './components/Sellcar';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
function App() {

  const [user, setuserName] = useState('');
  const [car, setCar] = useState('');

  const onUserData = (loginData) => {
    const data = {
      ...loginData
    }
    console.log("data is " + data.userName);

    setuserName(data.userName)

  }
  const onCarData = (cardata) => {
    const carData = {
      ...cardata
    }
    console.log(" car data is " + carData);
    setCar(carData)

  }
  return (

    <div >
      <Routes>
        <Route path="/login" element={<Login loginDatafromLogin={onUserData} ></Login>} />
        <Route path="/" element={<Shoppingpage userName={user} carinfo={onCarData}></Shoppingpage>} />
        <Route path="/sell" element={<Sellcar userName={user}></Sellcar>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/checkout" element={<Checkout carinformation={car}></Checkout>} />


        {/* <Route path='/login'>
          <Login loginDatafromLogin={onUserData}></Login>
        </Route>
        <Route path='/shoppingPage'>
          <Shoppingpage name={props.userName} ></Shoppingpage>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
