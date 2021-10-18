import React, {Component} from 'react';

import BlackCup from '../../Image/blackCup.jpeg'
import axios from 'axios';
import Config from '../../config/config';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductShopItem from './ProductShopItem'

import './Product.css';
export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
      
          productList:[]
        }
   

    }
    componentDidMount(){

 
      axios.post(Config.getServerPath()+'product/all')
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.setState({productList:res.data.productList})
  

      })
      .catch(() => {    console.log('send')
    }   );
    }
 
      render() {
    return (
      <div className='Product-t'>


        <div className='Product-p'>
       
       <div className='row-p'>
         {console.log(this.props.category)}
         {this.state.productList.filter(x=>x.category===this.props.category&&(x.Subcategory.name===this.props.subCategory||this.props.subCategory===null)||this.props.category==='all').map((item,index)=>{
           if(this.props.Ondesign)
return <ProductShopItem Ondesign={this.props.Ondesign} pickProduct={this.props.pickProduct} item={item} key={item._id}   addToCart={this.props.addToCart}
deleteFromCart={this.props.deleteFromCart}/>
else return <ProductShopItem Ondesign={this.props.Ondesign}  item={item} key={item._id}   addToCart={this.props.addToCart}
deleteFromCart={this.props.deleteFromCart}/>

         })}
           {/* <div className='product-details-div' onMouseMove={this.muse} onMouseLeave={this.muse2}>
          <img src={BlackCup}></img>
          <div className='procduct-cart'  hidden={this.state.m}>
          <button className='procduct-cart-btn' hidden={this.state.m}><span class="iconify" data-icon="bx:bxs-cart-add"></span></button>
          <div hidden={this.state.m}>
          <span  class="dot" style={{ backgroundColor: '#84AFE3' }}></span>
                    <span class="dot" style={{ backgroundColor: 'white' }} ></span>
                    <span class="dot" style={{ backgroundColor: 'black' }} ></span>
                    <span  class="dot" style={{ backgroundColor: 'red' }} ></span>
          </div>
          </div>
          <div className='product-details-p' >
          <p className='product-name'>כובע 1</p>

          <p className='product-price'>45 ₪</p>
          </div>
          </div> */}

          </div>
           </div>

           </div>

       
         

        

    
    
  );
  }
}
