import React, { useState } from 'react';
import { Link } from "react-router-dom";
import imghome from '../../assests/table.png';
import Settings from './Settings';
import Commit from './Commit';

import './nav.css';


function ResponsiveNavigation({ background, linkColor, navLinks, logo }) {

    
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)

  
    return (
        <div>
            <div>
                <nav
                    className="responsive-toolbar"
                    style={{ background: background }}>
                        
                    <ul
                        style={{ background: background }}
                        className={ navOpen ? 'active' : '' }
                    >
                        <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                            <img src={ logo }  alt="toolbar-logo" />
                        </figure>
                        
                        <div className="nav-Title-1"><img src={ imghome } width="15px" height="auto" />ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</div>
                        { navLinks.map((link, index) => 
                            <li
                                key={ index }
                                onMouseEnter={ () => { setHoverIndex(index) } }
                                onMouseLeave={ () => { setHoverIndex(-1) } }
                        
                            >
                                <Link
                                    onClick={() => setNavOpen(navOpen ? !navOpen : navOpen)}
                                    to={link.path}
                                    style={{ color: linkColor }}
                                >  
                                <img src={ link.icon } width={ link.width } height={ link.height } className="menu-icons"/>
                                { link.text }
                                </Link >
                                
                            </li>
                            
                        )}
                        
                        <li className="one"><Commit/></li>
                        <li className="one"><Settings/></li>
                
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveNavigation;