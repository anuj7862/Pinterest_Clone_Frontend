import React, { useState } from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { TbShare3 } from "react-icons/tb";

import './Pin.css';

function Pin({image, description}) {
    
    const [textShow, setTextShow] = useState(false);

    const handleCopy = () => {
        try {
            // Create a temporary textarea element
            const textarea = document.createElement('textarea');
            // Set its value to the image URL
            textarea.value = image;
            // Append it to the document
            document.body.appendChild(textarea);
            // Select and copy the text
            textarea.select();
            document.execCommand('copy');
            // Remove the temporary textarea
            document.body.removeChild(textarea);
            setTextShow(true);

            let timeout = setTimeout(() => {
                setTextShow(false);
                clearTimeout(timeout);
            }, 1000);
          } 
          catch (error) {
            console.error('Error copying image link:', error);
            alert('Error copying image link. Please try again.');
          }
    }
  
    return (
        <div className='pin'>
            <img
                srcSet={`${image} 3x`}
                src={`${image}`}
                alt={description}
                loading="auto"
                className="pinImg"
                width='100%'
            />
            <div className='cover'>
                <div className="saveBtn">
                    Save
                </div>
                <a href={image} target='_blank' ><PiDownloadSimpleBold size={'2rem'} className="downloadIcon"/></a>
                <TbShare3 size={'2rem'} className="shareIcon" onClick={handleCopy}/>
                {textShow && 
                    <div className="copyText">
                        Link Copied!
                    </div>
                }
            </div>
        </div>
    )
}

export default Pin