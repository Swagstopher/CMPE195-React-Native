import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import '../App.css';
import '../stylesheets/signin.css';

class Signin extends Component {
  render() {
    return (
      <div className="signin">
      		<div class="">
  <header>
      <t class="choice"><t class="signin">SIGN <t id="inout">iN</t></t><t class="up" id="text" onclick="change()">  / up</t></t>
        <form id="sign-in">
          <div class="form">
    <p>Username</p>
    <input type="email"id="user"/>
                    <div class="underline"></div>
    <p>Password</p>
        <input type="password"/>
          <div class="underline"></div>
          </div>
      <div class="a-right">
         <p class="enterbutton" onclick="press()"><strong id="button"><Link to='/home'>Sign In</Link></strong></p>
      </div>
    </form>
  </header>
  
  <footer>
    <h1>StrangerThings</h1>
    </footer>
  
</div>
      </div>
    );
  }
}

export default Signin;