import React, { useState } from 'react';
import Conditions from './Conditions/Conditions';

const Forecast = () => {
    let [zipcode, setZipCode] = useState('');
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedZipCode = encodeURIComponent(zipcode);
    const formData = new FormData()
    formData.append('zipcode', 98012)

   function getForecast(e) {
       e.preventDefault();
      // weather data fetch function will go here
      fetch(`http://localhost:7071/api/GetZipWeather`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: zipcode
        })
        .then(response => response.json())
        .then(response => {
             setResponseObj(response)
         })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
   }

   return (
       // JSX code will go here
       
       <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           {/* <button onClick={getForecast}>Get Forecast</button> */}
           {/* <Conditions
               responseObj={responseObj}
               /> */}

        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter Zip"
                    maxLength="50"
                    value={zipcode}
                    onChange={(e) => setZipCode(e.target.value)}
                    />
                <button type="submit">Get Forecast</button>
            </form>
       </div>

   )
}

export default Forecast;