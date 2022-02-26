import React from 'react';

import Button from '@material-ui/core/Button';

import Logo from '../../Image/opiumLogo3.png';
// import Products from '../Products/Products';
import Products from '../Products/ProductsChoice';
import { useHistory } from 'react-router-dom'

import './DesignPopUpProduct.css';

export default function DesignPopUpProduct (props) {
 
  const History= useHistory();

React.useEffect(()=>{
  History.replace('/Design/all/all')
},[History])

    return (
      <div
        id='Dialog-pop-product'
      >
        <div id="popProduct-dialog-design-title" ><p >מוצרים לבחירה</p></div>
        <img className='popProduct-dialog-design-img' src={Logo} alt='logo' />
        <div id='popProduct-dailog-context' >
          <div id='popProduct-dialog-design-description'>
            על מנת לעצב מוצר , עלייך לבחור מוצר
          </div>
          <Products category={'all'}  {...props} />
        </div>
        <div id='Dialog-buttons-popProduct'>
          <Button onClick={props.handleClose} id='dialog-btn-design-popProduct' color="primary">
            ביטול
          </Button>
         
        </div>
      </div>
    
    );
  
}
