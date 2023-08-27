import React from 'react';
import DetailSection from './components/DetailSection';
import ImagePrev from './components/ImagePrev';
import './index.scss';

const Card = (props) => {

    return (<div className='card-holder'>
        <ImagePrev img={props.data.image} />
        <DetailSection  data={props.data}/>

    </div>)
} 

export default Card;