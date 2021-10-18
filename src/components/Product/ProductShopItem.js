import React, {Component} from 'react';

import BlackCup from '../../Image/blackCup.jpeg'
import axios from 'axios';
import Config from '../../config/config';
import 'react-alice-carousel/lib/alice-carousel.css';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';import './Product.css';
export default class ProductShopItem extends Component {
    constructor(props) {
        super(props);
        this.state={
      
          price:null,
          m:true,
          productList:[],
          imgFront:this.props.item.productImage[0].front,
          item:this.props.item.productImage[0],
          itemSide:'front',
          hasBack:true,
          inCart:false,
          addCartmsg:false,
          deleteCartmsg:false,
          openDialog:false,
          full:true,
          imgDialog:'',
          sizeSelect:'',
          sizeSelectMsg:false
        }
   
        this.muse = this.muse.bind(this);
        this.muse2 = this.muse2.bind(this);
        this.handelChangeColor = this.handelChangeColor.bind(this);
        this.changeShirt = this.changeShirt.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.openViewDialog = this.openViewDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.ViewDialog = this.ViewDialog.bind(this);

    }
    componentDidMount(){
   if(   JSON.parse(localStorage.getItem('cart')).findIndex(x=>x._id==this.props.item._id)!==-1)
this.setState({inCart:true})
//  this.setState({item:this.props.item.productImage[0]});
//      this.setState({imgFront:this.props.item.productImage[0].front})
     if(this.props.item.productImage[0].back.trim()==='')
     this.setState({hasBack:false})
    }
    handleCloseDialog(){
      if(this.state.sizeSelect!=''&&this.props.Ondesign){
        console.log('pick up')
        // this.props.item,this.state.sizeSelect,this.state.item
        this.props.pickProduct( 
          );
       }
      this.setState({sizeSelect:''})
      this.setState({openDialog:false})
     

    }
    openViewDialog(){

      this.setState({openDialog:true})
    }
    ViewDialog(){
     return <Dialog maxWidth='lg' fullWidth  id='product-dialog' open={this.state.openDialog} onClose={this.handleCloseDialog}>
      {/* <DialogTitle>{this.props.item.name}</DialogTitle> */}
      <DialogContent id='product-dialog-DialogContent' >
        <div id='product-dialog-details'>
          <div className='dialog-imgs-select'>
          <img className={this.state.itemSide==='front'?'product-dialog-details-imgs select':'product-dialog-details-imgs'} onClick={()=> {this.setState({imgFront:this.state.item.front}); this.setState({itemSide:'front'})}}  src={this.state.item.front} ></img>
          <img hidden={!this.state.hasBack} onClick={()=> {this.setState({imgFront:this.state.item.back}); this.setState({itemSide:'back'})}} className={this.state.itemSide==='back'?'product-dialog-details-imgs select':'product-dialog-details-imgs'} src={this.state.item.back} ></img>

          </div>
        <img className='product-dialog-details-img' src={this.state.imgFront} ></img>
        <div className='product-dialog-details-txt'>
          <p id='product-dialog-details-txt-title'>{this.props.item.name}</p>
          <p className='product-dialog-details-price'> ₪ {this.props.item.price}</p>
          <p className='product-dialog-color'>צבע </p>
          {this.props.item.productImage.map((item,index)=>{
               return  <span key={index} onClick={()=>this.handelChangeColor(item)} class="dot-product-dialog" id={this.state.item.color===item.color?'dot-product-select':''} style={{ backgroundColor: item.color }}></span>
                
             })}
             <p className='product-dialog-size-title'>מידה</p>
             <p hidden={!this.state.sizeSelectMsg} className='product-dialog-size-msg'>חסרה מידה</p>
             <div className='product-dialog-size'>
               <p className={this.state.sizeSelect==='S'?'sizeSelect':''} onClick={()=>{this.setState({sizeSelect:'S'});this.setState({sizeSelectMsg:false})}} >S</p>
               <p className={this.state.sizeSelect==='M'?'sizeSelect':''} onClick={()=>{this.setState({sizeSelect:'M'});this.setState({sizeSelectMsg:false})}}>M</p>
               <p className={this.state.sizeSelect==='L'?'sizeSelect':''} onClick={()=>{this.setState({sizeSelect:'L'});this.setState({sizeSelectMsg:false})}}>L</p>
               <p className={this.state.sizeSelect==='XL'?'sizeSelect':''} onClick={()=>{this.setState({sizeSelect:'XL'});this.setState({sizeSelectMsg:false})}}>XL</p>



             </div>
     
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        /> */}
                <button id='product-dialog-addCart' onClick={this.addToCart}>{this.props.Ondesign? 'בחר מוצר':'הוסף לסל'}</button>

      <DialogActions>
        <button id='product-dialog-cancel' onClick={this.handleCloseDialog}><span class="iconify" data-icon="iconoir:cancel"></span></button>
      </DialogActions>
      </div>
        </div>
        </DialogContent>

    </Dialog>
   }
 updateData(){
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
  deleteFromCart(){
    this.setState({inCart:false})
    this.props.deleteFromCart(this.props.item)

  }
  addToCart(){
    if(this.state.sizeSelect==='')
    {
      this.setState({sizeSelectMsg:true})
      return;
    }
    this.setState({inCart:true})
this.setState({addCartmsg:true})
    this.props.addToCart(this.props.item,this.state.sizeSelect,this.state.item,{url:{front:'',back:''},arrayDesign:[]})
    this.handleCloseDialog();

  }

   muse(e){
    this.setState({m:false})
   }
   muse2(e){
   this.setState({m:true})
  }
      render() {
    return (
      <div className='product-details-div' onMouseMove={this.muse} onMouseLeave={this.muse2}>
{this.ViewDialog()}
        <button className='switch-btn' hidden={!this.state.hasBack} onClick={this.changeShirt}><span class="iconify" data-icon="ic:twotone-switch-access-shortcut"></span></button>

<div className='product-img-div' ><img className='product-img' onClick={this.openViewDialog} src={this.state.imgFront}></img></div>
                       <div className='procduct-cart'  hidden={this.state.m}>
         <button onClick={this.openViewDialog} className='procduct-cart-btn' hidden={this.state.m}> <span class="iconify" data-icon="fluent:cart-16-regular"></span></button>
         {/* <button onClick={this.deleteFromCart} className='procduct-cart-btn' hidden={this.state.m||!this.state.inCart}><span class="iconify" data-icon="fluent:cart-16-filled"></span></button> */}

          <div hidden={this.state.m}>
          {this.props.item.productImage.map((item,index)=>{
               return  <span key={index}  onClick={()=>this.handelChangeColor(item)} class="dot-product" style={{ backgroundColor: item.color }}></span>
                
             })}
     
          </div>
          </div>
    
    {/* <Alert hidden={!this.state.addCartmsg} variant="outlined" id='cart-success-alert' onClose={() => {this.setState({addCartmsg:false})}} severity="success"><p>נוסף בהצלחה  <a href='/Cart'> לסל הקניות </a></p></Alert> */}

          <div className='product-details-p2' >
       <div className='product-details-txt'>
          <p className='product-name'>{this.props.item.name}</p>

          <p className='product-price'>{this.props.item.price} ₪</p>
          </div>
          <div className='product-colors' >
          {this.props.item.productImage.map((item,index)=>{
               return  <p key={index}  onClick={()=>this.handelChangeColor(item)} class="dot-product" style={{ backgroundColor: item.color }}></p>
                
             })}
     </div>
          </div>
          </div>
       
      

       
         

        

    
    
  );
  }
}
