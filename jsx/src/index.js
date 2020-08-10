// Import the react and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            <label class="label" for ="name">Enter name: </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'green', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    );
};

// Take the React componenet and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// const buttonText = {text : 'Click Me'}; we cant show it this way we need to 
// write it in the display button section as {buttonText.text}
// then this displays the button
// we can also write the style section as 
// const App = () => {
//    const buttonText = 'Click Me!';
//    const style = {backgroundColor: 'green', color: 'white'}
// and in the return section we can write it as <button style = {style}> and {buttonText.text}
// it prints the same