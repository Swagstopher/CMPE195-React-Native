import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../stylesheets/home.css';

class Listing extends Component {
  render(){
    return(
          <div class=''>
            <img class="img-back" src={this.props.image} />
          </div>
      );
  }
}

class Listingg extends Component {
  render(){
    return(
        <article>
        <div class="head">
        @lebronjames
        </div>
        <img class="img-back" src={this.props.image} />
        </article>

      );
  }
}

class NavIcon extends Component {
  render(){
    return(
          <div class=''>
            <img class="nav-icon" src={this.props.image} />
          </div>
      );
  }
}

class Home extends Component {
  render() {
    return (
      <div class="content">
  <header>
        <input placeholder="Search: basketball, concert, lunch, etc."/>
    <nav>
   <div class="grid">
     <div class="grid-1">
       <t class="nt">Most Recent</t>
     </div>
          <div class="grid-1">
            <t class="nt">Males</t>
     </div>
          <div class="grid-1">
           <t class="nt">Females</t>
     </div>
          <div class="grid-1">
            <t class="nt">Location</t>
     </div>
      </div>
    </nav>
    </header>
  <main>
    <content>
    <div>
    <Listing image='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-318820.jpg'/>
    <Listing image='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-536616.jpg'/>
    </div>
    </content>
  </main>
  <footer>
  <div class="grid r">
  <div class="grid-1"><NavIcon image='http://www.iconhot.com/icon/png/devine/256/home-13.png' /></div>
  <div class="grid-1"><NavIcon image='http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Chat-2-icon.png' /></div>
  <div class="grid-1"><NavIcon image='https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg' /></div>
  <div class="grid-1"><NavIcon image='https://cdn4.iconfinder.com/data/icons/eldorado-user/40/friends-64.png' /></div>
  <div class="grid-1"><NavIcon image='https://cdn2.iconfinder.com/data/icons/badge-set-2/100/Notification-64.png' /></div>
  </div>
  </footer>
</div>
    );
  }
}

export default Home;