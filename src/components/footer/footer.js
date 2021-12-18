import React, {Component} from 'react';
import Logo from '../../Image/opiumLogo3.png'


import './footer.css';
export default class footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            feedback:null,
        }
       
    }
 
      render() {
    return (

        <div className='footer' hidden={this.props.hide}>

                        <img src={Logo} alt='logo'/>
      <div className='icon'>
            <a href='https://www.facebook.com/swqwlb.hrzlyh' rel="noreferrer" target='_blank'className='facebook'>   <i className="fa fa-facebook-f" style={{fontSize:'24px' , color:'black'}}></i></a>
            <a href='https://www.instagram.com/opium_print/' rel="noreferrer" target='_blank' className='insta' >   <i className="fa fa-instagram" style={{fontSize:'24px', color:'black'}}></i></a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dda180@gmail.com' rel="noreferrer"target='_blank'className='email'>   <i className="fa fa-envelope"  style={{fontSize:'24px' ,color:'black'}}></i></a>

            </div>
        
      </div>
    );
  }
}
