import React, {Component} from 'react';
import Config from '../../config/config';
import axios from 'axios';
import 'react-alice-carousel/lib/alice-carousel.css';

import './ProductImgItem.css';
export default class ProductImgItem extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
       
    
this.handelDeleteImg=this.handelDeleteImg.bind(this);
    }
 handelDeleteImg(){
  axios.delete(Config.getServerPath() + 'product/deleteimg/' + this.props.item._id)
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
        
      <div className='img-product' id={this.props.classId}>
        <button onClick={this.handelDeleteImg} id='img-product-item-delete'><span class="iconify" data-icon="fluent:delete-dismiss-24-filled"></span></button>
        <p id={this.props.classId+'-dot-color'} style={{backgroundColor:this.props.item.color}}></p>
      <img id='img-product-item' src={this.props.item.front} ></img>
      <img id='img-product-item' src={this.props.item.back} ></img>
  
    </div>
    );
  }
}
