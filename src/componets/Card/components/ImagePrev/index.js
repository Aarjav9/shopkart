import React from 'react';
import './index.scss'
const ImagePrev = (props) =>{

    return(<div className='img-holder'>
        {/* <img src={props.img} className='img' /> */}
        <div className='img' alt="product" style={{backgroundImage: `url(${props.img})`,backgroundRepeat: "no-repeat"}}></div>
    </div>)

}

export default ImagePrev;