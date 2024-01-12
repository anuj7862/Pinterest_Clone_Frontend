import React from 'react';

import './CustomLoader.css';

function CustomLoader({showText}) {
  return (
    <div className='customLoader'>
        <div className="circle-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      { showText &&
        <p> We're adding new ideas to your home feed! </p>
      }
    </div>
  )
}

export default CustomLoader