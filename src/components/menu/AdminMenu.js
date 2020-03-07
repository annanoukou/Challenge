import React from "react";
import ResponsiveNavigation from './ResponsiveNavigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import TopBar from './TopBar';
import Info from '../../pages/Info';
import logo from '../../assests/logo.png';
import img1 from '../../assests/house.png';
import img2 from '../../assests/Group17.png';
import img3 from '../../assests/Group18.png';
import img4 from '../../assests/Group15.png';
import img5 from '../../assests/Group16.png';


import './nav.css';


const AdminMenu = () => {

    const navLinks = [
		{
			text: 'Κεντρική σελίδα',
			path: '/admin/info',
            icon: img1,
            width: '20px',
            height: 'auto'
		},
		{
			text: 'Αποθήκη 1',
			path: '/admin/about',
			icon: img2,
            width: '20px',
            height: 'auto'
		},
		{
			text: 'Αποθήκη 2',
			path: '/info',
			icon: img3,
            width: '20px',
            height: 'auto'
		},
		{
			text: 'Αποθήκη 3',
			path: '/about',
			icon: img4,
            width: '20px',
            height: 'auto'
		},
		{
			text: 'Αποθήκη 4',
			path: '/about',
			icon: img5,
            width: '20px',
            height: 'auto'
		}
	]

    return (
        <div className="AdminMenu">
            <div className="row">
        
                <Router>
                    <div className="col-lg-2 first-half">
        
                        <div><ResponsiveNavigation navLinks={ navLinks } logo={ logo } background="#fff" linkColor="#828282" /></div>
                   
                    </div>
        
                    <div className="col-lg-10 second-half">

                        <TopBar />
        
                        <Switch>
                            <Route path="/admin/info">
                                <Info/>
                            </Route>
                                <Route path="/admin/about"> 
                            </Route>
                        </Switch>

                    </div>
                </Router>
        
            </div>
        </div> 
    )
}


export default AdminMenu;