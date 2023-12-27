import React, { useState } from 'react';
import { PiDownloadSimpleBold } from "react-icons/pi";
import { TbShare3 } from "react-icons/tb";
import { copyText } from '../../utils/utility';

import './Pin.css';

function Pin({image, description}) {
    
    const str = ["Save", "Unsave"]

    const [textShow, setTextShow] = useState(false);
    const [save, setSave] = useState(0);

    const handleCopy = () => {
        copyText(image);
        setTextShow(true);
        let timeout = setTimeout(() => {
            setTextShow(false);
            clearTimeout(timeout);
        }, 1000);
    }

    const handleSavePin = () => {
        if(save === 0){
            //call save pin service
            console.log('saved');
        }
        else {
            //call unsave service
            console.log('unsaved');
        }
        setSave(1 - save);
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
                <div className="saveBtn" onClick={handleSavePin}>
                    {str[save]}
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