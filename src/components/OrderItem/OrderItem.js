import React, {Component} from 'react';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import './OrderItem.css';
export default class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state={
          // count:this.props.item.count,
          openPreview:false,
        }
       
   
this.openDesignPreview=this.openDesignPreview.bind(this);
this.handleClosePreview=this.handleClosePreview.bind(this);


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
            
             <div className='cart-preview-dailog-context-imgs'>
             <img className='cart-preview-dailog-context-img' src={this.props.item.designItems.url.front} alt='design'/>
             <img className='cart-preview-dailog-context-img' src={this.props.item.designItems.url.back} alt='design'/>
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
        if(this.props.width>800){
        return (
<div className='order-item'>  
{this.openDesignPreview()} 
     <div className='orderItem'>
    <p>{this.props.item.product.name}</p>
    <p> ₪ {this.props.item.ProductQuote!==0? this.props.item.ProductQuote:this.props.item.product.price}</p>
    <p>{this.props.item.size}</p>
    <p>{this.props.item.count}</p>

    {this.props.item.designItems.url.front!==''?  <div className='order-preview-imgs' > <button onClick={()=>this.setState({openPreview:true})} id='order-preview-big'></button>  <img src={this.props.item.designItems.url.front} alt='front'/> <img src={this.props.item.designItems.url.back} alt='back' ></img></div>:      <img className='order-img' src={this.props.item.productColor.front} alt='front' ></img>}
      </div>
      <hr/>
      </div>  
          );
  
}else{
return(
  <div className='cart-item-mobile'>  
  {this.openDesignPreview()} 
  <div className='cartItem-mobile-right'>
  {this.props.item.designItems.url.front!==''?  <div className='cart-preview-imgs' onClick={()=>this.setState({openPreview:true})} >   <img src={this.props.item.designItems.url.front} alt='front'/> <img src={this.props.item.designItems.url.back} alt='back'></img></div>:      <img className='cart-img' src={this.props.item.productColor.front} alt='front'></img>}

  </div>
       <div className='orderItem-mobile'>

      <p>{this.props.item.product.name}</p>
      {/* <p> ₪ {this.props.item.item.price}</p> */}
      <p> מידה:  {this.props.item.size} </p>
      <p> כמות: {this.props.item.count}</p>
      <p hidden={this.props.item.ProductQuote!==0}>מחיר ליח׳:  ₪ {this.props.item.product.price}</p>
      <p hidden={this.props.item.ProductQuote===0} >הצעת מחיר ליח׳: ₪ { this.props.item.ProductQuote}</p>


      </div>



  <p hidden={this.props.item.ProductQuote!==0} className='orderItem-mobile-total'>סהכ: ₪ {this.props.item.product.price*this.props.item.count}</p>
  <p hidden={this.props.item.ProductQuote===0} className='orderItem-mobile-total'>סהכ: ₪ {this.props.item.ProductQuote*this.props.item.count}</p>

        {/* </div> */}
        <hr/>
        </div>  
)
}
      }
}
