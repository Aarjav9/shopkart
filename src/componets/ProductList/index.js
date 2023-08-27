import React from 'react';
import Card from '../Card';

import './index.scss';


const ProductList = (props) => {
    return (
    <div className='product-list'>
        <div className='product'ref={props.elementRef}>  
        {props.products.map((d,idx) => (<Card key={idx} data={d}/>))}
        </div>
    </div>) 

}

export default ProductList
