//import { useEffect, useState } from 'react'
import React from 'react';
import './App.css';
// import { Service } from './types/service';
// import { Weather } from './types/weather';
import Forecast from "./components/Forecast/Forecast";
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap'

//const { BASE_URL } = process.env;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Pete
      </footer>
    </div>
  );
 }
 export default App;


// export interface Weathers {
//   results: Weather[];
// }

// const useWeatherService = () => {
//   const [result, setResult] = useState<Service<Weathers>>({
//     status: 'loading'
//   });

//   useEffect(() => {
//     fetch('http://localhost:7071/api/GetHistory')
//       .then(response => response.json())
//       .then(response => setResult({ status: 'loaded', payload: response }))
//       .catch(error => setResult({ status: 'error', error }));
//   }, []);

//   return result;
// };

// export default useWeatherService;
// class WeatherApp extends React.Component {
//   state = {
//     weatherData: [],
//     loading: true,
//     error: false
//   }

// async function http<T>(request: RequestInfo): Promise<T> {
//     const response = await fetch(request)
//     if(!response.ok) {
//       throw new Error(response.statusText)
//     }
//     // may error if there is no body, return empty array
//     return response.json().catch(() => ({}))
//   }

// componentDidMount () {
//   fetch('http://localhost:7071/api/GetHistory')
//     .then(response => response.json())
//     .then(response => this.setState({ 
//       starships: response.results,
//       loading: false
//     }))
//     ;
// }


// render () {
//   const { weatherData, loading, error } = this.state;
//   return (
//     <div>
//       {loading && <div>Loading...</div>}
//       {!loading && !error && 
//         weatherData.map(weatherData => (
//           <div key={weatherData.city}>
//             {weatherData.city}
//           </div>
//         ))
//       }
//       {error && <div>Error message</div>}
//     </div>
//   );
// }
// };
  // public render() {
  //   return (
  //     <div className="App">
  //       <div className="container">
  //         <span className="display-4">Pete's crazy weather machine</span>
  //         <div className="py-3">&nbsp;</div>
  //           <Form className="form-inline mx-auto">
  //             <Form.Group controlId="zipForm">
  //               <Form.Control type="text" placeholder="Enter Zip" size="lg" className="form-control mb-2 mr-sm-2"/>
  //             </Form.Group>
  //             <Button className="btn btn-primary mb-2" type="submit">Search</Button>
  //           </Form>
  //       </div>
  //       <div className="py-3">&nbsp;</div>
  //       <div className="container">
  //         <div className="row">
  //           <div className="col"><p><u>Current Result</u></p></div>
  //           <div className="col"><p><u>Previous 5 Results</u></p></div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
//}

//export default WeatherApp;
