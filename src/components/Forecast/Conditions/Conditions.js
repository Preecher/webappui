import React from 'react';
const conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.zipCode}</strong></p>
                   
               </div>
           : null
           }
       </div>
   )
}
export default conditions;