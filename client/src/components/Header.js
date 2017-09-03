import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login w/Google</a></li>;
      default:
         return [
           <li><Payments /></li>,
           <li><a href="/api/logout">Log Out</a></li>
         ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="">
        <nav>
          <div className="nav-wrapper">
            <Link
            to={this.props.auth ? '/surveys':'/'}
            className="left brand-logo">
              Confeedio
            </Link>
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
