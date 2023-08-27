import React from 'react';
import { ReactSVG } from 'react-svg';
import ArrowLeft from '../../assest/icons/Arrow-2.svg';
import ArrowRight from '../../assest/icons/Arrow-1.svg';
import './index.scss';

const Pagination = (props) =>{
return(<div className='pagination'>
    <ReactSVG 
    src={ArrowLeft}  
    onClick={() => {
            props.handleHorizantalScroll(props.elementRef.current, 30, 200, -20);
          }} 
          className='paginate-left'/>
    <ReactSVG 
    src={ArrowRight} 
     className='paginate-right'
     onClick={() => {
      props.handleHorizantalScroll(props.elementRef.current, 30, 200, 20);
    }}
    />
</div>)
}

export default Pagination