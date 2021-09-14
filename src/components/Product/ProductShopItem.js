import React, {Component} from 'react';

import BlackCup from '../../Image/blackCup.jpeg'
import axios from 'axios';
import Config from '../../config/config';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Product.css';
export default class ProductShopItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
      
          price:null,
          m:true,
          productList:[],
          imgFront:'',
          item:null,
          itemSide:'front',
          hasBack:true,
        }
   
        this.muse = this.muse.bind(this);
        this.muse2 = this.muse2.bind(this);
        this.handelChangeColor = this.handelChangeColor.bind(this);
        this.changeShirt = this.changeShirt.bind(this);

    }
    componentDidMount(){

 this.setState({item:this.props.item.productImage[0]});
     this.setState({imgFront:this.props.item.productImage[0].front})
     if(this.props.item.productImage[0].back.trim()==='')
     this.setState({hasBack:false})
    }

   
 
  handelChangeColor(item){
    this.setState({item:item});

    this.setState({imgFront:item.front})


  }
  changeShirt(){
    if(this.state.itemSide.trim()==='front')
    this.setState({imgFront:this.state.item.back},()=>{
      if(this.state.item.back.trim()==='')
      this.setState({hasBack:false})
      else this.setState({hasBack:true})

      this.setState({itemSide:'back'})
    })
    else{
      this.setState({imgFront:this.state.item.front},()=>{
        this.setState({itemSide:'front'})
      })
    }

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
    
      <div className='product-details-div' onMouseMove={this.muse} onMouseLeave={this.muse2}>
        <button className='switch-btn' hidden={!this.state.hasBack} onClick={this.changeShirt}><span class="iconify" data-icon="ic:twotone-switch-access-shortcut"></span></button>

<div className='product-img-div' ><img className='product-img' src={this.state.imgFront}></img></div>
                       <div className='procduct-cart'  hidden={this.state.m}>
          <button className='procduct-cart-btn' hidden={this.state.m}><span class="iconify" data-icon="bx:bxs-cart-add"></span></button>
          <div hidden={this.state.m}>
          {this.props.item.productImage.map((item,index)=>{
               return  <span  onClick={()=>this.handelChangeColor(item)} class="dot" style={{ backgroundColor: item.color }}></span>
                
             })}
     
          </div>
          </div>
          <div className='product-details-p' >
          <p className='product-name'>{this.props.item.name}</p>

          <p className='product-price'>{this.props.item.price} ₪</p>
          </div>
          </div>
       
      

       
         

        

    
    
  );
  }
}
