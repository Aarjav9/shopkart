import React from 'react';
import ProductSection from '../../componets/ProductSection';
import './index.scss';


const Home = () =>{
    return(<div className='home-section'>
        <div className='product-banner'>Product Banner</div> 
        <ProductSection />
    </div>)
}

export default Home
