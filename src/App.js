import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";

import RegisterForm from './components/login/RegisterForm';
import AdminMenu from './components/menu/AdminMenu';
import Settings from './components/menu/Settings';
import Commit from './components/menu/Commit';
import Info from './pages/Info';



const App = () =>(

  <Router>
      <Route path="/" exact component={RegisterForm}/>
      <Route path="/admin" exact component={AdminMenu}/>
      <Route path="/admin/info" exact component={Info}/>
      <Route path="/admin/settings" exact component={Settings}/>
      <Route path="/admin/commit" exact component={Commit}/>
  </Router>

);



export default App;