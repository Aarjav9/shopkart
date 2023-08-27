import React from 'react';
import { ReactSVG } from 'react-svg';
import Star2 from '../../assest/icons/Star-2.svg'
import Pagination from '../Pagination';
import './index.scss';


const HeadingWithUnderLine = (props) => {
    return (<div className='heading-section'>
        <div className='left-section'>
            <div className='heading'>{props.title}</div>
            <div className='underline-section'>
                <ReactSVG src={Star2} className="star-2" />
                <span className='underline'></span>
            </div>
        </div>
        <div className='right-section'>
            <Pagination 
            elementRef={props.elementRef}
            handleHorizantalScroll={props.handleHorizantalScroll}/>
        </div>
    </div>)

}

export default HeadingWithUnderLine
