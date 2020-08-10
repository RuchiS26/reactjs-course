import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

//Functional component
const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Spinner message="Please accept the location request" />;
    }

    return <div className="border red">{content}</div>
};

//class based component
// class App extends React.Component {
//     state = { lat: null, errorMessage: '' };

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             position => setLat(position.coords.latitude),
//             err => setErrorMessage(err.message)
//         );
//     }

//     renderContent() {
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div>Error: {this.state.errorMessage}</div>;
//         }
//         if (!this.state.errorMessage && this.state.lat){
//             return <SeasonDisplay lat={this.state.lat} />;
//         }
//         return <Spinner message="Please accept the location request" />;
//     }

//     render() {
//         return (
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         );
//     };
// };
       

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);