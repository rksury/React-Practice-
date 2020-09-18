import React from 'react';
export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
        <div>
      <img src={"https://via.placeholder.com/40?text=cat"} alt="img"
          style={{
            position: 'absolute',
            left: mouse.x, top: mouse.y
          }}
         />
        </div>
    );
  }
}
