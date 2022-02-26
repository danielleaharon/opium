import React from 'react';

import ProductShopItem from './ProductShopItem'

import './Product.css';
export default function Product (props){



    return (
      <div className='Product-row row  justify-content-start' >
        {/* <div className='container'> */}

          {/* <div className='row '> */}
            {props.productList.filter(x => (x.category === props.category || props.category === 'all') && (x.Subcategory.name === props.subCategory ||  props.subCategory === null) ).filter(x => x.InStock).map((item, index) => {
              if (props.Ondesign)
                return <div className='col-5 col-xl-2 ml-xl-4 mr-xl-2 mr-4'>
                <ProductShopItem width={ props.width} Ondesign={ props.Ondesign} pickProduct={ props.pickProduct} item={item} key={item._id} addToCart={ props.addToCart}
                  deleteFromCart={ props.deleteFromCart} />
                  </div>
              else return <div className='col-5 col-xl-2 ml-xl-4 mr-xl-2 mr-4' >
               <ProductShopItem width={ props.width} Ondesign={ props.Ondesign} item={item} key={item._id} addToCart={ props.addToCart}
                deleteFromCart={ props.deleteFromCart} />
                </div>

            })}
            


          {/* </div> */}
        {/* </div> */}

      </div>








    );
  
}
