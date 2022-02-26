import React from 'react';
import Logo from '../../Image/opiumLogo3.png'
import './navbar.css';
import { Squash as Hamburger } from 'hamburger-react'
// import Config from '../../config/config';

import Navbar1 from '../Navbar1/Navbar1';


export default function Navbar(props) {

  const [menuStatus, setMenuStatus] = React.useState(0);
  const [openMenu, setOpenMenu] = React.useState(false)
  // const [imgLogo, setImgLogo] = React.useState("")



  const getMenuOptions = () => {
    return [
      {
        name: 'מוצרים',
        link: '/Products/All/all',
        internal: true

      },
      {
        name: 'קטלוג ',
        link: '/http://www.giftlogo.co.il/',
        internal: false

      },
      {
        name: 'עצב בעצמך',
        link: '/Design/',
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
      props.orderSize !== 0 && {
        name: 'ההזמנות שלי',
        link: '/Order',
        internal: true

      }

    ];

  }


  const closeMenu = () => {
    setMenuStatus(3);
    setOpenMenu(false)

    setTimeout(() => setMenuStatus(0)
      , 200);
  }
  const onOpenMenu = () => {
    if (!openMenu) {
      setMenuStatus(1);
      setTimeout(() => setMenuStatus(2)
        , 200);
    }
    else {
      closeMenu();
    }

    setOpenMenu(!openMenu)


  }

  const getMenu = () => {
    if (menuStatus === 0) {
      return null;
    } else {
      return <Navbar1 options={getMenuOptions()} menuStatus={menuStatus}
        onClose={closeMenu}
      />
    }
  }

  return (
    <div className='menu-root container-fluid' hidden={props.hide}>
      {getMenu()}

      <div className='menu row  align-items-center '>
        <div id='Hamburger-nav' className='col-auto '>
          <Hamburger color='black' rounded direction="left" toggled={openMenu} toggle={onOpenMenu} />
        </div>
        <div className='col-1 pt-3'>
          <a href='/'><img className='img-fluid' src={Logo} alt='logo'></img></a>
        </div>
        <div className='menu-item1 col-8 pr-5  align-self-start '>
          <a href='/Products/All/all' className={window.location.pathname.includes('/Products') ? 'background-anim-dot' : ''}><div   > מוצרים </div></a>
          <a href='http://www.giftlogo.co.il/' target='_blank' rel="noopener noreferrer" ><div > קטלוג </div></a>
          <a href='/Design/' ><div > עצב בעצמך </div></a>
          <a href='/Contact' className={window.location.pathname === '/Contact' ? 'background-anim-dot' : ''} ><div  > צור קשר </div></a>

        </div>
        <div className='icon-nav col-2'>

          <a hidden={props.orderSize === 0} id={window.location.pathname === '/Order' ? 'background-cart' : 'order'} href='/Order'><span className="iconify" id='shopCart-icon' data-icon="icon-park-outline:transaction-order"></span>  <span className="dot-nav dot-order" >{props.orderSize}</span>

            <span className='myCart'>ההזמנות שלי</span>
          </a>
          <a id={window.location.pathname === '/Cart' ? 'background-cart' : 'shoping'} href='/Cart'><span className="iconify" id='shopCart-icon' data-icon="ph:shopping-cart-fill" data-inline="false"></span>      <span className="dot-nav dot-shoping" >{props.cartSize}</span>

            <span className='myCart'>המוצרים שלי</span>
          </a>
          <a href='https://www.facebook.com/swqwlb.hrzlyh' rel="noreferrer" target='_blank' className='facebook-nav'>   <i className="fa fa-facebook-f" style={{ fontSize: '15px' }}></i></a>
          <a href='https://www.instagram.com/opium_print/' rel="noreferrer" target='_blank' className='insta-nav' >   <i className="fa fa-instagram" style={{ fontSize: '15px' }}></i></a>
          <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dda180@gmail.com' rel="noreferrer" target='_blank' className='email-nav'>   <i className="fa fa-envelope" style={{ fontSize: '15px' }}></i></a>
          {/* <l className='search'><span className="iconify" id='search-icon'data-icon="fluent:search-32-filled" data-inline="false"></span><input id='search-input' type='text' placeholder='חיפוש..' ></input></l>  */}

        </div>
      </div>


    </div>
  );

}
