import React, {Component} from 'react';
import CupCat from '../../Image/cupCat.png'
import CapCat from '../../Image/capCat.png'
import ShirtCat from '../../Image/shirtCat.png'
import CakeCat from '../../Image/cakeCat.png'
import KeyCat from '../../Image/keyCat.png'

import 'react-alice-carousel/lib/alice-carousel.css';

import './Categories.css';
export default class Categories extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            feedback:null,
        }
       
    }
 
      render() {
    return (
        
        <div className='Categories'>
       
       <h3>על מה אנחנו מדפיסים?</h3>
       <div className='print-category'>
       <p className='cube-orange-category'>כוסות<br/><img src={CupCat}></img></p>
       <p className='cube-red-category'>כובעים<br/><img src={CapCat}></img></p>
       <p className='cube-pink-category'>חולצות<br/><img src={ShirtCat}></img></p>
       <p className='cube-purple-category'>עוגות<br/><img src={CakeCat}></img></p>
       <p className='cube-blue-category'>מחזיקי מפתחות <br/><img src={KeyCat}></img></p>
       <p className='cube-green-category'>מגוון מוצרים</p>
       </div>
      </div>
    );
  }
}
