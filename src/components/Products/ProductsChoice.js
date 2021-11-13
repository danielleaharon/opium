import React, {Component} from 'react';

import { Redirect } from "react-router-dom";
import Products from './Products'
import ProductsMobile from './ProductsMobile'


import './Products.css';
export default class ProductsChoice extends Component {
    constructor(props) {
      super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

   
      render() {
        if(this.state.width>800)
        return <Products {...this.props} width={this.state.width} />
        else{
          return <ProductsMobile {...this.props} width={this.state.width} />

        }
   
  }
}
