import React, {Component} from 'react';
import CupCat from '../../Image/cupCat.png'
import CapCat from '../../Image/capCat.png'
import ShirtCat from '../../Image/shirtCat.png'
import CakeCat from '../../Image/cakeCat.png'
import KeyCat from '../../Image/keyCat.png'
import { Redirect } from "react-router-dom";

import 'react-alice-carousel/lib/alice-carousel.css';

import './Categories.css';
export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state={
            goProducts:false,
            productsHerf:'',

        }
       this.handelClick=this.handelClick.bind(this)
    }
    handelClick(category){
       this.setState({goProducts:true,productsHerf:'/Products/'+category+'/all'})
    }
 
      render() {
        if(this.state.goProducts)
        return  <Redirect to={this.state.productsHerf}/>;
    return (
        
        <div className='Categories'>
       
       <h3>על מה אנחנו מדפיסים?</h3>
       <div className='print-category-home'>
       <button  onClick={()=>  this.handelClick('cups')} className='cube-orange-category cube-category'>כוסות ספלים ובקבוקים<br/><img src={CupCat} alt='Cup'></img></button>
       <button onClick={()=>  this.handelClick('caps')} className='cube-red-category cube-category'>כובעים ומוצרים טקסטיל<br/><img src={CapCat} alt='cap'></img></button>
       <button onClick={()=>  this.handelClick('shirt')}  className='cube-pink-category cube-category'>הלבשה<br/><img src={ShirtCat} alt='shirt'></img></button>
       <button onClick={()=>  this.handelClick('kitchen')}  className='cube-purple-category cube-category'>מוצרי למטבח ולבית<br/><img src={CakeCat} alt='cake'></img></button>
       <button onClick={()=>  this.handelClick('gift')}  className='cube-blue-category cube-category'>מתנות בעיצוב <br/><img src={KeyCat} alt='key'></img></button>
       <button onClick={()=>  this.handelClick('all')}  className='cube-green-category cube-category'>לכל המוצרים</button>
    
       </div>
      </div>
    );
  }
}
