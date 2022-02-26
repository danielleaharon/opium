import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';

import { Redirect } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import Slide from '@material-ui/core/Slide';
import './CartItem.css';
export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state={
          count:this.props.item.count,
          goDesign:false,
          openPreview:false,
        }
       
   
this.changeCount=this.changeCount.bind(this);
this.addDesign=this.addDesign.bind(this);
this.openDesignPreview=this.openDesignPreview.bind(this);
this.handleClosePreview=this.handleClosePreview.bind(this);


    }
    Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    addDesign(){
      this.props.goToDesign(this.props.item)

this.setState({goDesign:true})
    }
   changeCount(e){
     this.props.updateCart(this.props.item,e.target.value)
    this.setState({count:e.target.value})
   }
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
            
             <div className='cart-preview-dailog-context-imgs'>
             <img className='cart-preview-dailog-context-img' src={this.props.item.design.url.front} alt='design'/>
             <img className='cart-preview-dailog-context-img' src={this.props.item.design.url.back} alt='design'/>
</div>
           

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
      render() {
        if(this.state.goDesign)
        return <Redirect to={'/Design/'}/>;
        if(this.props.width>800){
        return (
<div className='cart-item'>  
{this.openDesignPreview()} 
     <div className='cartItem'>
    <p>{this.props.item.item.name}</p>
    <p> ₪ {this.props.item.item.price}</p>
    <p>{this.props.item.size}</p>
    <FormControl  variant="standard" id='cartItem-count'>


        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="cartItem-count"
          value={this.state.count}
          onChange={this.changeCount}
          displayEmpty
        >
          {Array(100).fill(1).map((item,index)=>{
           return <MenuItem id='val' value={index+1}>{index+1}</MenuItem>

          })}


          
        </Select>
      </FormControl>
      <button  className='cart-addDesign' onClick={this.addDesign} > {this.props.item.design.url.front!==''?'ערוך עיצוב':'הוסף עיצוב'}</button>  

      {/* <img src={this.props.item.imgItem.front}></img>

    <img src={this.props.item.design.url}></img> */}
    {this.props.item.design.url.front!==''?  <div className='cart-preview-imgs' > <button onClick={()=>this.setState({openPreview:true})} id='cart-preview-big'></button>  <img src={this.props.item.design.url.front} alt='front'/> <img src={this.props.item.design.url.back} alt='back'></img></div>:      <img className='cart-img' src={this.props.item.imgItem.front} alt='front'></img>}
<button onClick={()=>this.props.deleteFromCart(this.props.item)} className='cartItem-delete'><span className="iconify" data-icon="fluent:delete-48-filled"></span></button>
      </div>
      <hr/>
      </div>  
          );
  }
  else{
    return (
      <div className='cart-item-mobile'>  
      {this.openDesignPreview()} 
      <div className='cartItem-mobile-right'>
      {this.props.item.design.url.front!==''?  <div className='cart-preview-imgs' onClick={()=>this.setState({openPreview:true})} >   <img src={this.props.item.design.url.front} alt='front'/> <img src={this.props.item.design.url.back} alt='back'></img></div>:      <img className='cart-img' src={this.props.item.imgItem.front} alt='front'></img>}
      <p> ₪ {this.props.item.item.price}</p>

      </div>
           <div className='cartItem-mobile'>

          <p>{this.props.item.item.name}</p>
          {/* <p> ₪ {this.props.item.item.price}</p> */}
          <p> מידה:  {this.props.item.size} </p>
          </div>

          <FormControl  variant="standard" id='cartItem-count-form'>
      
      
              <Select
              required
              labelId="demo-simple-select-placeholder-label-label"
              id="cartItem-count"
                value={this.state.count}
                onChange={this.changeCount}
                displayEmpty
              >
                {Array(100).fill(1).map((item,index)=>{
                 return <MenuItem id='val' value={index+1}>{index+1}</MenuItem>
      
                })}
      
      
                
              </Select>
            </FormControl>
      
            {/* <img src={this.props.item.imgItem.front}></img>
      
          <img src={this.props.item.design.url}></img> */}
          {/* {this.props.item.design.url.front!==''?  <div className='cart-preview-imgs' > <button onClick={()=>this.setState({openPreview:true})} id='cart-preview-big'></button>  <img src={this.props.item.design.url.front}/> <img src={this.props.item.design.url.back}></img></div>:      <img className='cart-img' src={this.props.item.imgItem.front}></img>} */}
    <div className='cartItem-mobile-btns'>
      <button onClick={()=>this.props.deleteFromCart(this.props.item)} className='cartItem-delete-mobile'><span className="iconify" data-icon="fluent:delete-48-filled"></span></button>
      <button  className='cart-addDesign' onClick={this.addDesign} > <span className="iconify" id='cartItem-brush' data-icon="fluent:paint-brush-16-filled"></span> <br/> {this.props.item.design.url.front!==''?'ערוך עיצוב':'הוסף עיצוב'}</button>  
{/* <p className='cartItem-mobile-total'>סהכ: ₪ {this.props.item.item.price*this.state.count}</p> */}
      </div>
      <p className='cartItem-mobile-total'>סהכ: ₪ {this.props.item.item.price*this.state.count}</p>

            {/* </div> */}
            <hr/>
            </div>  
                );
  }

  }
}
