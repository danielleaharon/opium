import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import Logo from '../../Image/opiumLogo3.png';
import Products from '../Products/Products';
import './DesignPopUpProduct.css';

export default class DesignPopUpProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
          open:this.props.open


        }
       
  

this.handleClose=this.handleClose.bind(this)
this.pickProduct=this.pickProduct.bind(this)

    }
    handleClose(){

    }
    pickProduct(){

    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      render() {
    return (
        <div
        id='Dialog-pop-product'
        
        //   open={this.props.open}
        //   TransitionComponent={this.Transition}
        //   keepMounted
        //   onClose={this.handleClose}
        //   fullScreen
        //   // aria-labelledby="alert-dialog-design-title"
        //   aria-describedby="alert-dialog-slide-description"
        >
          <div  id="popProduct-dialog-design-title" ><p >מוצרים לבחירה</p></div>
          <img className='popProduct-dialog-design-img' src={Logo}/>
          <div id='popProduct-dailog-context' >
          <div id='popProduct-dialog-design-description'>
על מנת לעצב מוצר , עלייך לבחור מוצר
          </div>
        <Products category={'all'}  Ondesign={this.props.Ondesign} pickProduct={this.props.pickProduct} deleteFromCart={this.props.deleteFromCart} goToDesign={this.props.goToDesign} addToCart={this.props.addToCart}/>
          </div>
          <div id='Dialog-buttons-popProduct'>
            <Button onClick={this.props.handleClose} id='dialog-btn-design-popProduct' color="primary">
              ביטול
            </Button>
            {/* <Button onClick={this.props.pickProduct}  id='dialog-btn-design'color="primary">
              בחר
            </Button> */}
          </div>
        </div>
//         <Dialog
//         id='Dialog-pop-product'
//           open={this.props.open}
//           TransitionComponent={this.Transition}
//           keepMounted
//           onClose={this.handleClose}
//           fullScreen
//           // aria-labelledby="alert-dialog-design-title"
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <DialogTitle  id="popProduct-dialog-design-title" ><p >מוצרים לבחירה</p></DialogTitle>
//           <img className='popProduct-dialog-design-img' src={Logo}/>
//           <DialogContent id='popProduct-dailog-context' >
//           <DialogContentText id='popProduct-dialog-design-description'>
// על מנת לעצב מוצר , עלייך לבחור מוצר
//           </DialogContentText>
//         <Products   Ondesign={this.props.Ondesign} pickProduct={this.props.pickProduct} deleteFromCart={this.props.deleteFromCart} goToDesign={this.props.goToDesign} addToCart={this.props.addToCart}/>
//           </DialogContent>
//           <DialogActions id='Dialog-buttons-mail'>
//             <Button onClick={this.props.handleClose} id='dialog-btn-design' color="primary">
//               ביטול
//             </Button>
//             {/* <Button onClick={this.props.pickProduct}  id='dialog-btn-design'color="primary">
//               בחר
//             </Button> */}
//           </DialogActions>
//         </Dialog>
        
    );
  }
}
