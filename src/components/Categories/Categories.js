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
        }
       this.handelClick=this.handelClick.bind(this)
    }
    handelClick(category){
      this.props.setCategory(category);
       this.setState({goProducts:true})
    }
 
      render() {
        if(this.state.goProducts)
        return  <Redirect to={'/Products'}/>;
    return (
        
        <div className='Categories'>
       
       <h3>על מה אנחנו מדפיסים?</h3>
       <div className='print-category-home'>
       <button  onClick={()=>  this.handelClick('כוסות ספלים ובקבוקים')} className='cube-orange-category cube-category'>כוסות ספלים ובקבוקים<br/><img src={CupCat}></img></button>
       <button onClick={()=>  this.handelClick('כובעים ומוצרים טקסטיל')} className='cube-red-category cube-category'>כובעים ומוצרים טקסטיל<br/><img src={CapCat}></img></button>
       <button onClick={()=>  this.handelClick('הלבשה')}  className='cube-pink-category cube-category'>הלבשה<br/><img src={ShirtCat}></img></button>
       <button onClick={()=>  this.handelClick('מוצרי מטבח ואירוח לבית')}  className='cube-purple-category cube-category'>מוצרי למטבח ולבית<br/><img src={CakeCat}></img></button>
       <button onClick={()=>  this.handelClick('מתנות בעיצוב')}  className='cube-blue-category cube-category'>מתנות בעיצוב <br/><img src={KeyCat}></img></button>
       <button onClick={()=>  this.handelClick('all')}  className='cube-green-category cube-category'>לכל המוצרים</button>
       {/* <p className='cube-orange-category'>כוסות<br/><img src={CupCat}></img></p>
       <p className='cube-red-category'>כובעים<br/><img src={CapCat}></img></p>
       <p className='cube-pink-category'>חולצות<br/><img src={ShirtCat}></img></p>
       <p className='cube-purple-category'>עוגות<br/><img src={CakeCat}></img></p>
       <p className='cube-blue-category'>מחזיקי מפתחות <br/><img src={KeyCat}></img></p>
       <p className='cube-green-category'>מגוון מוצרים</p> */}
       </div>
      </div>
    );
  }
}
