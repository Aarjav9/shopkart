import React from 'react';
import './index.scss';

const Category = (props) => {
  

    return (<div className='categories'>
        {
            props.categories.map((d, idx) => (<div
                key={`${d}-${idx}`}
                onClick={() => props.setSelectedCategory(d)}
                className={`category ${props.selectedCategory === d ? 'selected' : ''}`}>
                {d}
            </div>)
            )}
    </div>)

}

export default Category;