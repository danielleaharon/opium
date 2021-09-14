import React, {Component} from 'react';

import BlackCup from '../../Image/blackCup.jpeg'
import axios from 'axios';
import Config from '../../config/config';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductShopItem from './ProductShopItem'

import './Product.css';
export default class Product extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          value: '',
          Amount:null,
          price:null,
          m:true,
          productList:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.muse = this.muse.bind(this);
        this.muse2 = this.muse2.bind(this);

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
  
   muse(e){
     console.log(e)
    this.setState({m:false})
   }
   muse2(e){
    console.log(e)
   this.setState({m:true})
  }
      render() {
    return (
      <div className='Product-t'>

      <h2 className='h2' style={{fontSize:'40px'}}><b>המוצרים שלנו</b></h2>

        <div className='Product-p'>
       
       <div className='row-p'>
         {this.state.productList.map((item,index)=>{
return <ProductShopItem item={item}/>

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
