import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {ReactDOM} from 'react-dom'
import { NavMenu } from './NavMenu';

let lastScrollY = 0;
let ticking = false;
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        {<NavMenu />}
          {this.props.children}
      </div>
    );    
  } 
}