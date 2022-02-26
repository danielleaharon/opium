import React, {Component} from 'react';
import Config from '../../config/config';
import axios from 'axios';
import 'react-alice-carousel/lib/alice-carousel.css';
import {isAuth} from '../../actions/auth';

import './ProductImgItem.css';
export default class ProductImgItem extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
       
    
this.handelDeleteImg=this.handelDeleteImg.bind(this);
this.handelUpdateMainImage=this.handelUpdateMainImage.bind(this);
this.handelUpdateMainImageDelete=this.handelUpdateMainImageDelete.bind(this);

    }
 async handelDeleteImg(){
   var updateMainImg=true;
   if(this.props.deleteImg!==undefined){
    this.props.deleteImg();
   }else{
  const postData = {
    token:isAuth()

  };
  if(this.props.mainImage._id===this.props.item._id)
  {
    var itemDelete=this.props.list.indexOf(this.props.item)
    if(itemDelete!==-1  && this.props.list.length>1){
      if(itemDelete===0 ){
        updateMainImg=await this.handelUpdateMainImageDelete(this.props.list.at(itemDelete+1))

      }else{
        updateMainImg=await this.handelUpdateMainImageDelete(this.props.list.at(itemDelete-1))

      }
    }
  }
if(updateMainImg){
  axios.post(Config.getServerPath() + 'product/deleteimg/' + this.props.item._id,postData)
  .then(res => {
    if (res.data.status === 400) {
      console.log('error')
      return
    }
    this.props.updateProductList(res.data.productList);


  })
  .catch(() => {
    console.log('send')
  });
}
 }
}
 async handelUpdateMainImageDelete(item){
  
  const postData = {
 mainImage:item,
    token:isAuth()
 
  };
  try {
     const res = await axios.post(Config.getServerPath() + 'product/mainimg/' + this.props.prodId, postData);
     if (res.data.status === 400) {
       console.log('error');
       return false;
     }
     return true;
   } catch (e) {
     return false;
   }
 
 }
 handelUpdateMainImage(){
  
 const postData = {
mainImage:this.props.item,
   token:isAuth()

 };
 axios.post(Config.getServerPath() + 'product/mainimg/' + this.props.prodId,postData)
 .then(res => {
   if (res.data.status === 400) {
     console.log('error')
     return
   }
   this.props.updateProductList(res.data.productList);


 })
 .catch(() => {
   console.log('send')
 });

}
    
      render() {
    return (
        
      <div className={this.props.mainImage!==undefined&& this.props.mainImage._id===this.props.item._id? 'img-product star':'img-product'} id={this.props.classId}>
        <button onClick={this.handelDeleteImg} id='img-product-item-delete'><span className="iconify" data-icon="fluent:delete-dismiss-24-filled"></span>
        <span  className='bottom-toolip'>מחיקת צבע זה של המוצר
        <i></i>

        </span>

        </button>
       

       { this.props.mainImage!==undefined && this.props.mainImage._id!==this.props.item._id&& <button onClick={this.handelUpdateMainImage} id='img-product-item-main'><span class="iconify" data-icon="akar-icons:star"></span>
        <span  className='bottom-toolip'>בחר כתמונה ראשית
        <i></i>
        </span>
    
        </button>}
        {  this.props.mainImage!==undefined && this.props.mainImage._id===this.props.item._id &&
          <button id='img-product-item-main'><span class="iconify" data-icon="ant-design:star-filled"></span>
          <span  className='bottom-toolip'>תמונה ראשית
          <i></i>
          </span>
          </button>
        
      }
        <p id={this.props.classId+'-dot-color'} style={{backgroundColor:this.props.item.color}}></p>
      <img id='img-product-item' src={this.props.item.front} alt='front' ></img>
      <img id='img-product-item' src={this.props.item.back} alt='back' ></img>
  
    </div>
    );
  }
}
