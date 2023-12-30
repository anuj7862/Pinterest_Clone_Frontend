import React from 'react';

import './CustomLoader.css';

function CustomLoader() {
  return (
    <div className='customLoader'>
        <div class="circle-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <p> We're adding new ideas to your home feed! </p>
    </div>
  )
}

export default CustomLoader