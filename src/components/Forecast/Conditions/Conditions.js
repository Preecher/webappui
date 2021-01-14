import React from 'react';

const conditions = (props) => {
   return (
       <div> props: {props.responseObj.length}
           {props.responseObj.cod === 200 ?
               <div> 
                   <p><strong>{props.responseObj.zipWeather.city}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.zipWeather.temp)} degrees out with {props.responseObj.zipWeather.weatherDescription}.</p>
               </div>
           : null
           }
       </div>
   )
}

export default conditions;