import React, {Component} from 'react';
import axios from 'axios';
import Config from '../../config/config';
import { TextField } from "@material-ui/core";

import OrderAdminDesignText from './OrderAdminDesignText';
import OrderAdminDesignShape from './OrderAdminDesignShape';
import OrderAdminDesignImg from './OrderAdminDesignImg';
import {saveAs} from 'file-saver'
import domtoimage from 'dom-to-image';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Slide from '@material-ui/core/Slide';
import './OrderAdminItem.css';
export default class OrderAdminItem extends Component {
    constructor(props) {
        super(props);
        this.state={
          // count:this.props.item.count,
          openPreview:false,
          imgFront:this.props.item.designItems.url.front,
          item:this.props.item.designItems.url,
          itemSide:'front',
          hasBack:true,
          downloadFront:false,
          downloadBack:false,
          price:'',
          priceE:false,
          addPrice:false

        }
       
   
this.openDesignPreview=this.openDesignPreview.bind(this);
this.handleClosePreview=this.handleClosePreview.bind(this);
this.ViewDialog=this.ViewDialog.bind(this);
this.downloadFront=this.downloadFront.bind(this);
this.downloadBack=this.downloadBack.bind(this);

this.changePrice=this.changePrice.bind(this);

    }
    downloadFront () {
      this.setState({downloadFront:true},()=>{
     domtoimage.toBlob(document.getElementById('OrderAdmin-img-design'))
     .then((blob) => {

        saveAs(blob, 'opiumFront');
        this.setState({downloadFront:false})

     })
   })
   };
   downloadBack () {
    this.setState({downloadBack:true},()=>{
   domtoimage.toBlob(document.getElementById('OrderAdmin-img-design'))
   .then((blob) => {

      saveAs(blob, 'opiumBack');
      this.setState({downloadBack:false})

   })
 })
 };
    componentDidMount(){
      if(this.props.item.designItems.url.back.trim()==='')
      this.setState({hasBack:false})
    }
    Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
  
  
   handleClosePreview(){
this.setState({openPreview:false})
   }
   openDesignPreview(){

    return (
      <div>
          {/* {console.log(this.firebase)} */}

        <Dialog
          id='Dialog-send'
          open={this.state.openPreview}
          TransitionComponent={this.Transition}
          keepMounted
          maxWidth='lg' fullWidth
          onClose={this.handleClosePreview}
          // aria-labelledby="alert-dialog-design-title"
          aria-describedby="alert-dialog-slide-description"
        >
          {/* <DialogTitle className="send-dialog-design-title" ><p > סיום עיצוב מוצר</p></DialogTitle> */}
          {/* <img className='dialog-design-img' src={Logo} /> */}
          <DialogContent id='cart-preview-dailog-context' >
            {/* <DialogContentText id='send-dialog-design-description'>
העיצוב יתווסף למוצר בסל הקניות, שם ניתן לשלוח לקבלת הצעת מחיר
            </DialogContentText> */}
           {/* <div className='preview-dailog-context-div'> */}
            
             {/* <div className='cart-preview-dailog-context-imgs'> */}
             <img className='cart-preview-dailog-context-img' src={this.props.item.designItems.url.front} alt='design'/>
             <img className='cart-preview-dailog-context-img' src={this.props.item.designItems.url.back} alt='design'/>
{/* </div> */}
           

           {/* </div> */}
          </DialogContent>
          <DialogActions id='Dialog-buttons-mail'>
            <Button onClick={this.handleClosePreview} id='cart-preview-dailog-btn' color="primary">
            <span className="iconify" data-icon="bx:bx-x"></span>
            </Button>
         
          </DialogActions>
        </Dialog>
      </div>
    )
   }
   ViewDialog(){
    return <Dialog maxWidth='lg' fullWidth  id='product-dialog' open={this.state.openPreview} onClose={this.handleClosePreview}>
     {/* <DialogTitle>{this.props.item.name}</DialogTitle> */}
     <div   id='OrderAdmin-img-design'  > 
  <img hidden={!this.state.downloadFront} src={this.state.item.allFront}  alt='front'/>
  <img hidden={!this.state.downloadBack} src={this.state.item.allBack} alt='back' />

  </div>
     <DialogContent id='product-dialog-DialogContent' >
       <div id='product-dialog-details'>
         <div className='dialog-imgs-select'>
         <img className={this.state.itemSide==='front'?'product-dialog-details-imgs select':'product-dialog-details-imgs'} onClick={()=> {this.setState({imgFront:this.state.item.front}); this.setState({itemSide:'front'})}}  src={this.state.item.front}alt='front' ></img>
         <img hidden={!this.state.hasBack} onClick={()=> {this.setState({imgFront:this.state.item.back}); this.setState({itemSide:'back'})}} className={this.state.itemSide==='back'?'product-dialog-details-imgs select':'product-dialog-details-imgs'} src={this.state.item.back}  alt='back'></img>
         <button className='OrderAdminDesign-download'   onClick={this.downloadFront}  > הורד עיצוב קדימה  <span className="iconify" data-icon="bi:cloud-arrow-down"></span></button>
<button className='OrderAdminDesign-download'   onClick={this.downloadBack}  > הורד עיצוב אחורה  <span className="iconify" data-icon="bi:cloud-arrow-down"></span></button>

         </div>
       <img className='product-dialog-details-img' src={this.state.imgFront} alt='front' ></img>
       <div className='orderItem-dialog-details-txt'>
         <p id='orderItem-dialog-details-txt-title'> נתוני עיצוב מוצר</p>
       {this.state.itemSide==='front'?<div>

<p hidden={this.props.item.designItems.arrayDesign.arrays.itemArrayFront.length===0} className=' orderItem-text'>טקסט</p>
       {this.props.item.designItems.arrayDesign.arrays.itemArrayFront.map((item,index)=>{
         return <OrderAdminDesignText item={item}/>
       })}

<p hidden={this.props.item.designItems.arrayDesign.arrays.ShapeArrayFront.length===0} className='orderItem-text'>צורות</p>
       {this.props.item.designItems.arrayDesign.arrays.ShapeArrayFront.map((item,index)=>{
         return <OrderAdminDesignShape item={item}/>
       })}

<p hidden={this.props.item.designItems.arrayDesign.arrays.ImageArrayFront.length===0} className='orderItem-text'>תמונות</p>
       {this.props.item.designItems.arrayDesign.arrays.ImageArrayFront.map((item,index)=>{
         return <OrderAdminDesignImg item={item}/>
       })}



       </div>:<div>

<p hidden={this.props.item.designItems.arrayDesign.arrays.itemArrayBack.length===0} className=' orderItem-text'>טקסט</p>
       {this.props.item.designItems.arrayDesign.arrays.itemArrayBack.map((item,index)=>{
         return <OrderAdminDesignText item={item}/>
       })}

<p hidden={this.props.item.designItems.arrayDesign.arrays.ShapeArrayBack.length===0} className='orderItem-text'>צורות</p>
       {this.props.item.designItems.arrayDesign.arrays.ShapeArrayBack.map((item,index)=>{
         return <OrderAdminDesignShape item={item}/>
       })}

<p hidden={this.props.item.designItems.arrayDesign.arrays.ImageArrayBack.length===0} className='orderItem-text'>תמונות</p>
       {this.props.item.designItems.arrayDesign.arrays.ImageArrayBack.map((item,index)=>{
         return <OrderAdminDesignImg item={item}/>
       })}



       </div>}

     
         {/* <p className='product-dialog-color'>צבע </p>
           <span  className="dot-product-dialog" id='dot-product-select' style={{ backgroundColor: this.state.item.color }}></span> */}

       
    
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

     <DialogActions>
       <button id='product-dialog-cancel' onClick={this.handleClosePreview}><span className="iconify" data-icon="iconoir:cancel"></span></button>
     </DialogActions>
     </div>
  
     </div>

       </DialogContent>

   </Dialog>
  }
  async changePrice() {
    // if (this.cheackValid()) return;
    const postData = {
      ProductQuote: this.state.price,
  

    };
    axios.post(Config.getServerPath() + 'order/OrderProductQuote/'+this.props.item._id, postData)
      .then( async res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        // if(localStorage.getItem('order')!==undefined && localStorage.getItem('order')!==null){
        //   const orderList=JSON.parse(localStorage.getItem('order'))
        //   orderList.push(res.data.order)
        //   localStorage.setItem("order",JSON.stringify(orderList))

        // }else{
        //   const orderList2=[];
        //   orderList2.push(res.data.order);
          // localStorage.setItem("order",JSON.stringify(orderList2));
 this.props.setOrderList(res.data.orderList)
    this.setState({price:''})
    this.setState({addPrice:false})

        // }
        // // this.setState({exit:true});
        // const cart=[]
        // localStorage.setItem("cart",JSON.stringify(cart))
        // this.props.setCart(cart)
        // this.setState({name:''})
        // this.setState({mail:''})
        // this.setState({phone:''})
        // this.setState({category:''})

        // this.setState({mesaage:'תודה '+this.state.name +'\nהפרטים נשלחו, ניצור איתך קשר בהקדם'})



      })
      .catch(() => {
        console.log('send')
      });
  }
      render() {
        
        return (
<div className='order-item'>  
{this.ViewDialog()} 
     <div className='orderAdminItem'>
    <p>{this.props.item.product.name}</p>
    <p> ₪ {this.props.item.ProductQuote!==0? this.props.item.ProductQuote:this.props.item.product.price}</p>
    <p>{this.props.item.size}</p>
    <p>{this.props.item.count}</p>

    {this.props.item.designItems.url.front!==''?  <div className='order-preview-imgs' > <button onClick={()=>this.setState({openPreview:true})} id='order-preview-big'></button>  <img src={this.props.item.designItems.url.front} alt='front'/> <img src={this.props.item.designItems.url.back} alt='back'></img></div>:      <img className='order-img' src={this.props.item.productColor.front} alt='front'></img>}
     <div className='orderAdmin-addprice'>
     <button  onClick={()=>{this.setState({addPrice:!this.state.addPrice})}} className='orderAdmin-addprice-btn'>הוסף הצעת מחיר</button>
     <div className='orderAdmin-addprice-div' hidden={!this.state.addPrice}>
     <TextField
                label="מחיר"
                id="orderAdmin-addprice-input"
                name='name'
                type='number'
                variant="standard"
                required
                onChange={(e) => this.setState({ price: e.target.value })}
                value={this.state.price}
                error={this.state.priceE}
                InputLabelProps={{ id: 'orderAdmin-addprice-label' }}
                aria-describedby="helper"
                // helperText={this.state.dMailEmsg}
  
              />
              <button onClick={this.changePrice} hidden={this.state.price===''} className='orderAdmin-addprice-send'><span className="iconify" data-icon="fluent:send-28-filled"></span></button>
     </div>
     </div>
      </div>
      <hr/>
      </div>  
          );
  }
}
