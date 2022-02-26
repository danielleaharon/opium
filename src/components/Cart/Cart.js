import React, {Component} from 'react';

import CartItem from '../CartItem/CartItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Logo from '../../Image/opiumLogo3.png';
import { TextField } from "@material-ui/core";

import axios from 'axios';
import Config from '../../config/config';

import './Cart.css';
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
          openSend:false,
          dName: '',
          sNameE: false,
          dMail: '',
          dMailE: false,
          dMailEmsg: '',
          dPhone: '',
          dPhoneE: false,
          dPhoneEmsg: '',
          dCount: 1,
          dCountE: false,
        }
       
   
        this.sendMailDialog=this.sendMailDialog.bind(this);
        this.handleCloseSend=this.handleCloseSend.bind(this);
        this.addOrder=this.addOrder.bind(this);
        this.cheackValid=this.cheackValid.bind(this);
        this.clearValid=this.clearValid.bind(this);

    }
    Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    clearValid() {
      this.setState({ dNameE: false })
      this.setState({ dPhoneE: false })
      this.setState({ dMailE: false })
      this.setState({ dPhoneEmsg: '' })
      this.setState({ dMailEmsg: '' })
  
    }
    addOrder() {
      // if (this.cheackValid()) return;
      const postData = {
        name: this.state.dName,
        phone: this.state.dPhone,
        products: JSON.parse(localStorage.getItem('cart')),
        mail: this.state.dMail,
  
      };
      axios.post(Config.getServerPath() + 'order/create', postData)
        .then(res => {
          if (res.data.status === 400) {
            console.log('error')
            return
          }
          if(localStorage.getItem('order')!==undefined && localStorage.getItem('order')!==null){
            const orderList=JSON.parse(localStorage.getItem('order'))
            console.log(orderList)

            orderList.push(res.data.order)
            console.log(orderList)

            localStorage.setItem("order",JSON.stringify(orderList))
            this.props.setOrder(orderList)

          }else{
            const orderList2=[];
            console.log('orderList2')

            console.log(orderList2)

            orderList2.push(res.data.order);
            localStorage.setItem("order",JSON.stringify(orderList2));
            this.props.setOrder(orderList2)
          }
          // this.setState({exit:true});
          const cart=[]
          localStorage.setItem("cart",JSON.stringify(cart))
          this.props.setCart(cart)
          this.handleCloseSend();
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
    cheackValid() {
      this.clearValid();
      var error = false;
  
      if (this.state.dName==='') {
        this.setState({ dNameE: true })
        error = true;
      }
      if (this.state.dPhone==='') {
        this.setState({ dPhoneE: true })
        this.setState({ dPhoneEmsg: 'חסר מספר טלפון' })
        error = true;
      }
      else if (this.state.dPhone.length !== 10) {
        this.setState({ dPhoneE: true })
        this.setState({ dPhoneEmsg: ' מספר טלפון לא תקין' })
        error = true;
      }
      if (this.state.dMail==='') {
        this.setState({ dMailE: true })
        this.setState({ dMailEmsg: ' חסר מייל ' })
  
        error = true;
      }
      else if (!this.state.dMail.includes('@')) {
        this.setState({ dMailE: true })
        this.setState({ dMailEmsg: ' מייל לא תקין' })
  
        error = true;
      }
   
      return error;
    }
    handleCloseSend(){

      this.setState({openSend:false})
    }
    sendMailDialog() {


      return (
        <div>
          <Dialog
            id='Dialog-send'
            open={this.state.openSend}
            TransitionComponent={this.Transition}
            keepMounted
            onClose={this.handleCloseSend}
            // aria-labelledby="alert-dialog-design-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="send-dialog-design-title" ><p >שליחה להצעת מחיר</p></DialogTitle>
            <img className='dialog-design-img' src={Logo}  alt='logo' />
            <DialogContent id='send-dailog-context' >
              <DialogContentText id='send-dialog-design-description'>
המוצרים שבחרת יחד עם העיצוב היחודי שלכם מועברים אלינו לקבלת הצעת מחיר בשכלול של העיצוב וכמות הפריטים.<br/> אנחנו ניצור איתכם קשר בהקדם, תודה צוות אופיום.              </DialogContentText>
              <TextField
                label="שם פרטי"
                id="design-dailog-input"
                name='name'
                type='name'
                variant="outlined"
                required
                fullWidth
                onChange={(e) => this.setState({ dName: e.target.value })}
                value={this.state.dName}
                error={this.state.dNameE}
                InputLabelProps={{ id: 'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dNameE ? 'חסר שם פרטי' : ''}
  
              />
  
              <TextField
                label="טלפון"
                id="design-dailog-input"
                name='name'
                type='name'
                variant="outlined"
                required
                onChange={(e) => this.setState({ dPhone: e.target.value })}
                value={this.state.dPhone}
                error={this.state.dPhoneE}
                InputLabelProps={{ id: 'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dPhoneEmsg}
  
              />
              <TextField
                label="מייל"
                id="design-dailog-input"
                name='name'
                type='name'
                variant="outlined"
                required
                onChange={(e) => this.setState({ dMail: e.target.value })}
                value={this.state.dMail}
                error={this.state.dMailE}
                InputLabelProps={{ id: 'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dMailEmsg}
  
              />
  
     
            </DialogContent>
            <DialogActions id='Dialog-buttons-mail'>
              <Button onClick={this.handleCloseSend} id='dialog-btn-design' color="primary">
                ביטול
              </Button>
              <Button onClick={this.addOrder} id='dialog-btn-design' color="primary">
                שלח
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    }
   
      render() {
    return (
        
        <div className='Cart'  >
{this.sendMailDialog()}
<p hidden={this.props.width>800} className='cart-mobile-title'> המוצרים שלי </p>
        <div className='cart-titles' hidden={JSON.parse(localStorage.getItem('cart')).length===0}>
          <p>שם הפריט</p>
          <p>מחיר ליח׳</p>
          <p>מידה</p>
          <p>כמות</p>
          <p>עיצוב</p>
          <p></p>

        </div>
        <div className='cart-empty' hidden={JSON.parse(localStorage.getItem('cart')).length!==0}>
<p className='cart-empty-p'>הסל שלך ריק</p>
<a href='/Products'>למעבר לחנות המוצרים</a>
</div>
  {JSON.parse(localStorage.getItem('cart')).map((item,index)=>{
return <CartItem   width={this.props.width} goToDesign={this.props.goToDesign}
item={item} updateCart={this.props.updateCart} key={item.item._id+item.imgItem.color+item.size+item.design.url.front}  deleteFromCart={this.props.deleteFromCart} />
  })}
      <button hidden={JSON.parse(localStorage.getItem('cart')).length===0} onClick={()=>this.setState({openSend:true})} className='cart-sent-order-btn'>שלח להצעת מחיר</button>
      </div>
    );
  }
}
