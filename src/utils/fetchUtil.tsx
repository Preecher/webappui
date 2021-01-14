// import * as React from 'react';
// //import weather from '../types/weather';


// async function http<T>(request: RequestInfo): Promise<T> {
//     const response = await fetch(request)
//     if(!response.ok) {
//       throw new Error(response.statusText)
//     }
//     // may error if there is no body, return empty array
//     return response.json().catch(() => ({}))
//   }
//   // example consuming code
//   type weather = {
//     city: string
//     zipcCde: string
//     temp: string
//     clouds: string
//   }
//   try {
//     const data = await http<weather[]>("http://localhost:7071/api/GetHistory")
//   } catch(error) {
//     console.log("Error", error)
//   }

export {}