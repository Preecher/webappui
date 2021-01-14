import React, { useState } from 'react';
import Conditions from './Conditions/Conditions';

const Forecast = () => {
    let [zipcode, setZipCode] = useState('');
    let [responseObj, setResponseObj] = useState({});
    let [responseHistObj, setResponseHistObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

   function getForecast(e) {
       e.preventDefault();
       if (zipcode.length !== 5) {
        console.log('not 5 digits')
        return setError(true);
        }
        if (isNaN(zipcode)) {
            console.log('not a number');
            return setError(true);
        }

        setError(false);
        setResponseObj({});
        
        setLoading(true);

        // get data
        fetch(`http://localhost:7071/api/GetZipWeather`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: zipcode
        })
        .then(response => response.json())
        .then(response => {
             setResponseObj(response);
             setLoading(false);
         })
        .then(response => {
            console.log(response);
            getHistory();
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.error(err);
        });
        
   }

   function getHistory()
   {
        // get data
        fetch(`http://localhost:7071/api/GetHistory`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
             setResponseHistObj(response);
             setLoading(false);
         })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.error(err);
        });
   }


   return (

       <div>
           <h2>Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           
           {/* Brian: the responseObj seems to be null when passed in here?!?! */}
           {/* <Conditions
              responseObj={responseObj}
              error={error} 
              loading={loading} 
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

            <h2>Historical Weather Conditions</h2>
            <div>
               {JSON.stringify(responseHistObj)}
           </div>
       </div>

   )
}

export default Forecast;