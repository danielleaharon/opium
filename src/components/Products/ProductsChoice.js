import React, {Component} from 'react';

import { Redirect } from "react-router-dom";
// import Products from './Products'
import ProductsMobile from './ProductsMobileHooks';
import Products from './ProductsHooks';


import './Products.css';
export default class ProductsChoice extends Component {
    constructor(props) {
      super(props);
  

}



   
      render() {
        if(this.props.width>800)
        return <Products {...this.props}  />
        else{
          // return ''
          return <ProductsMobile {...this.props}  />

        }
   
  }
}
