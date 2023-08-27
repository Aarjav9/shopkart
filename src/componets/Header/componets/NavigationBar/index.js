import React from "react";
import './index.scss'
const NavigationBar = () => {
    const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
        ];
    const renderMenu = () =>{
        let list = [];
              navbar.map(d=>{
                let child=[];
                if ( d.child ) {
                        child.push(<ul>
                            {d.child.map(c=> (<li><a href={`#${c.id}`} className={`${c.id} sub-menu-list`} key={c.id} onClick={(e) => e.preventDefault()} >{c.name}</a></li>))}
                        </ul>)
                }
                if(child.length){
                    list.push(<li><a href={`#${d.id}`} className={`${d.id} menu-list`} key={d.id} onClick={(e) => e.preventDefault()} >{d.name}</a>{child}</li>);
                }else{
                    list.push(<li><a href={`#${d.id}`} className={`${d.id} menu-list`} key={d.id} onClick={(e) => e.preventDefault()} >{d.name}</a></li>);

                }

        });
        return list
    }
     

    return (<div className="header-navigation">
        <span className="navigation-wrapper">
            <ul>
                {
                    renderMenu()
                }
            </ul>
        </span>
    </div>)
}
export default NavigationBar;
