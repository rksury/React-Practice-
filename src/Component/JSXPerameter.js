import React from 'react';
import '../CssFile/Jsx.css'

const JSXPerameter = () => {
    return React.createElement(
        'div', {
            id: 'props_element', className: 'jsx-item'
        },
        React.createElement(
            'p',null, 'Jsx parameter is working'
        )
    )
}
export default JSXPerameter
