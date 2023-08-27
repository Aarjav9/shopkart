import React, { useState, useRef } from 'react';
import Category from '../Category';
import HeadingWithUnderLine from '../HeadingWithUnderLine';
import useFetchCategories from './../../service/hooks/fetchCategories';
import useFetchProducts from '../../service/hooks/fetchProducts'
import ProductList from '../ProductList';
import './index.scss';


const ProductSection = () => {
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);
    const { categories } = useFetchCategories();
    const [selectedCategory, setSelectedCategory] = useState('')
    const { products } = useFetchProducts(selectedCategory)

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {

          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          if (element.scrollLeft === 0) {
            setArrowDisable(true);
          } else {
            setArrowDisable(false);
          }
        }, speed);
      };


    return (<div className='product-wrapper'>
        <div className='header'>
            <HeadingWithUnderLine
                title="New products"
                elementRef={elementRef}
                handleHorizantalScroll={handleHorizantalScroll}
            />
        </div>
        <div className='product-section'>
            <div className='category-section'>
                <Category
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            </div>
            <div className='product-section'>
                <ProductList
                    elementRef={elementRef}
                    products={products}
                />
            </div>

        </div>
    </div>)

}

export default ProductSection
