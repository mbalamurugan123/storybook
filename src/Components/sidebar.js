import React from 'react';
import './styles/sidebar.css';

import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";

  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";

  }

  sidebtn = () => {
    if (this.x === 0) {
      this.openNav();
      this.x++;
    } else {
      this.closeNav();
      this.x = 0;
    }
  };

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          
          <div className='side-btn'><Link to='/'>About</Link> </div>
          <div className='side-btn'><Link to='/'>Practice</Link></div>
          <div className='side-btn'><Link to='/'>Dashboard</Link></div>
          <div className='side-btn'><Link to='/'>Virtual Classroom</Link></div>
          <div className='side-btn'><Link to='/'>Drives</Link></div>
          
        </div>
        <span className='span' onClick={this.sidebtn}>
          &#9776;
        </span>
      </div>
    );
  }
}

export default Sidenav;
