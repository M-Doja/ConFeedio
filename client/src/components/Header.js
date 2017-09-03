import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login w/Google</a></li>;
      default:
         return <li><a href="/api/logout">Log Out</a></li>
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Confeedio</a>
            <ul className="right ">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({auth}){
  return { auth };
}

export default connect(mapStateToProps)(Header);