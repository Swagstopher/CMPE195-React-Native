import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Signin from './signin.js';
import Home from './home.js';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Signin}/>
      <Route exact path='/home' component={Home}/>
    </Switch>
  </main>
)

export default Main;