import React from 'react';
const ThirdApp = props => {
    console.log(props)
    return React.createElement(
       'div', {
           id:'third', className:'third'
        },
        <h1> Hello {props.a} {props.b}</h1>,
        <p> You have Created Third App Component</p>

    )

}

export default ThirdApp;
