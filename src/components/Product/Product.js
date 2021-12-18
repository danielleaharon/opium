import React, { Component } from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';
import ProductShopItem from './ProductShopItem'

import './Product.css';
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div className='Product-t'>


        <div className='Product-p'>

          <div className='row-p'>

            {this.props.productList.filter(x => x.category === this.props.category && (x.Subcategory.name === this.props.subCategory || this.props.subCategory === null) || this.props.category === 'all').filter(x => x.InStock).map((item, index) => {
              if (this.props.Ondesign)
                return <ProductShopItem width={this.props.width} Ondesign={this.props.Ondesign} pickProduct={this.props.pickProduct} item={item} key={item._id} addToCart={this.props.addToCart}
                  deleteFromCart={this.props.deleteFromCart} />
              else return <ProductShopItem width={this.props.width} Ondesign={this.props.Ondesign} item={item} key={item._id} addToCart={this.props.addToCart}
                deleteFromCart={this.props.deleteFromCart} />

            })}


          </div>
        </div>

      </div>








    );
  }
}
