import React, { Component } from 'react';
import Logo from '../../Image/opiumLogo3.png'
import './navbar.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';
// import { Divide as Hamburger } from 'hamburger-react'
import { Squash as Hamburger } from 'hamburger-react'

import Navbar1 from '../Navbar1/Navbar1';

export default class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      menuStatus: 0,
      openMenu:false,
     

      }
      this.getMenuOptions=this.getMenuOptions.bind(this);
this.setMenuStatus=this.setMenuStatus.bind(this);
this.closeMenu=this.closeMenu.bind(this);
this.openMenu=this.openMenu.bind(this);
this.getMenu=this.getMenu.bind(this);
  }

 
    getMenuOptions() {
      return [
        {
          name: 'מוצרים',
          link: '/Products',
          internal: true
  
      },
      {
        name: 'קטלוג ',
        link: '/http://www.giftlogo.co.il/',
        internal: false

    },
          {
            name: 'עצב בעצמך',
            link: '/Design',
            internal: true

        },
          {
              name: 'צור קשר',
              link: '/Contact',
              internal: true

          },
          {
            name: 'סל קניות',
            link: '/Cart',
            internal: true

        },
        this.props.orderSize===0?'': {
          name: 'ההזמנות שלי',
          link: '/Order',
          internal: true

      },
        
       

     
     
    
   
        
      ];
  
}

setMenuStatus(status) {
  this.setState({menuStatus: status});
}
closeMenu() {
  this.setMenuStatus(3);
  this.setState({openMenu:false})

  setTimeout(() => this.setMenuStatus(0), 200);
}
openMenu() {
  if(!this.state.openMenu)   {
    this.setMenuStatus(1);
    setTimeout(() => this.setMenuStatus(2), 200);
  }
  else{
    this.closeMenu();
  }


  this.setState({openMenu:!this.state.openMenu})


}

getMenu() {
  if (this.state.menuStatus == 0) {
      return null;
  }
  return <Navbar1  options={this.getMenuOptions()}  menuStatus={this.state.menuStatus}
  onClose={this.closeMenu}
/>
}
render() {

    return (
      <div className='menu-root' hidden={this.props.hide}>
 {this.getMenu()}

        <div className='menu'>
      <div id='Hamburger'>
      <Hamburger  color='black' rounded direction="left" toggled={this.state.openMenu} toggle={this.openMenu} />
      </div>
    <a href='/'><img className='logo' src={Logo}></img></a>
   
    {/* <span className='background-anim-dot'></span> */}
    <div className='menu-item1'>
    <a href='/Products' className={window.location.pathname==='/Products'?'background-anim-dot':''}><div   > מוצרים </div></a>
    <a href='http://www.giftlogo.co.il/' target='_blank' ><div > קטלוג </div></a>
    <a href='/Design' ><div > עצב בעצמך </div></a>
    <a href='/Contact'className={window.location.pathname==='/Contact'?'background-anim-dot':''} ><div  > צור קשר </div></a>
  
    </div>
    <div className='icon-nav'>
    {/* <span  class="dot-nav" >{this.props.cartSize}</span> */}

    <a hidden={this.props.orderSize===0} id={window.location.pathname==='/Order'?'background-cart':'order'} href='/Order'><span class="iconify"  id='shopCart-icon' data-icon="icon-park-outline:transaction-order"></span>  <span  class="dot-nav dot-order" >{this.props.orderSize}</span>
  
  <span className='myCart'>ההזמנות שלי</span>
  </a>
    <a  id={window.location.pathname==='/Cart'?'background-cart':'shoping'} href='/Cart'><span class="iconify" id='shopCart-icon'data-icon="ph:shopping-cart-fill" data-inline="false"></span>      <span  class="dot-nav dot-shoping" >{this.props.cartSize}</span>
  
  <span className='myCart'>המוצרים שלי</span>
  </a>
            <a href='https://www.facebook.com/swqwlb.hrzlyh'rel="noreferrer"  target='_blank'className='facebook-nav'>   <i class="fa fa-facebook-f" style={{fontSize:'15px' , color:'black'}}></i></a>
            <a href='https://www.instagram.com/opium_print/'rel="noreferrer"  target='_blank' className='insta-nav' >   <i class="fa fa-instagram" style={{fontSize:'15px', color:'black'}}></i></a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dda180@gmail.com' rel="noreferrer" target='_blank'className='email-nav'>   <i class="fa fa-envelope"  style={{fontSize:'15px' ,color:'black'}}></i></a>
           {/* <l className='search'><span class="iconify" id='search-icon'data-icon="fluent:search-32-filled" data-inline="false"></span><input id='search-input' type='text' placeholder='חיפוש..' ></input></l>  */}

            </div>
    </div>


    </div>
    );
}
  }
