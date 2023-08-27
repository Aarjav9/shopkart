import Recat from 'react';
import './index.scss';

const DetailSection = (props) =>{
    const description = props.data && props.data.description ? props.data.description : "";
    const title = props.data && props.data.title ? props.data.title : ""
    const price = props.data && props.data.price ? props.data.price : 0
    return(<div className="detail-section">
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
        <div className='price'>${price}</div>

    </div>)
} 

export default DetailSection;