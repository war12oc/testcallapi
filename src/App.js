import React, { Component } from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { Footer } from './Footer';
import { Body } from './Body';

export default class componentName extends Component {
  
  render() {

   
    return (
      <div>
         <Header/>
        <Menu/>
        <Body/>
      <Footer/>

      </div>
    );
  }
}
