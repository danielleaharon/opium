import React, {Component} from 'react';
import Logo from '../../Image/opiumLogo3.png'
import CapCat from '../../Image/capCat.png'
import ShirtCat from '../../Image/shirtCat.png'
import CakeCat from '../../Image/cakeCat.png'
import KeyCat from '../../Image/keyCat.png'
import BlackCup from '../../Image/blackCup.jpeg'
import Shot from '../../Image/shot.jpeg'

import 'react-alice-carousel/lib/alice-carousel.css';

import './Error.css';
export default class Error extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          value: '',
          Amount:null,
          price:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});

    }
  
    handleSubmit(event) {
      this.setState({price:10*this.state.Amount})
      event.preventDefault();
    }
    handleChangeAmount(event) {
      
      this.setState({Amount: event.target.value});

    }
  
   
      render() {
    return (
        
        <div className='Error'>
       {/* <img  className='logo-error'src={Logo}></img> */}
       <h3 className='title'>הדף שחיפשת לא נמצא!</h3>
       <a href='/' className='error-a'><p>לחזרה לדף הראשי</p></a>

     
       </div>
      
    );
  }
}
