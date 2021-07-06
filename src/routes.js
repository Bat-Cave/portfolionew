import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Socials from './Components/Socials';

export default (
    <Switch>
        <Route path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/socials' component={Socials}/>
    </Switch>
)