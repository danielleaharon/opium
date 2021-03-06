import React, {Component} from 'react';

import OrderMy from '../OrderMy/OrderMy';
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

import './Order.css';
export default class Order extends Component {
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
      if (this.cheackValid()) return;
      const postData = {
        name: this.state.dName,
        phone: this.state.dPhone,
        products: JSON.parse(localStorage.getItem('cart')),
        mail: 'ah.danielle22@gmail.com',
  
      };
      axios.post(Config.getServerPath() + 'order/create', postData)
        .then(res => {
          if (res.data.status === 400) {
            console.log('error')
            return
          }
          if(localStorage.getItem('order')!==undefined && localStorage.getItem('order')!==null){
            const orderList=JSON.parse(localStorage.getItem('order'))
            orderList.push(res.data.order)
            localStorage.setItem("order",JSON.stringify(orderList))

          }else{
            const orderList2=[];
            orderList2.push(res.data.order);
            localStorage.setItem("order",JSON.stringify(orderList2));

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
  
          // this.setState({mesaage:'???????? '+this.state.name +'\n???????????? ??????????, ?????????? ???????? ?????? ??????????'})
  
  
  
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
        this.setState({ dPhoneEmsg: '?????? ???????? ??????????' })
        error = true;
      }
      else if (this.state.dPhone.length !== 10) {
        this.setState({ dPhoneE: true })
        this.setState({ dPhoneEmsg: ' ???????? ?????????? ???? ????????' })
        error = true;
      }
      if (this.state.dMail==='') {
        this.setState({ dMailE: true })
        this.setState({ dMailEmsg: ' ?????? ???????? ' })
  
        error = true;
      }
      else if (!this.state.dMail.includes('@')) {
        this.setState({ dMailE: true })
        this.setState({ dMailEmsg: ' ???????? ???? ????????' })
  
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
            <DialogTitle className="send-dialog-design-title" ><p >?????????? ?????????? ????????</p></DialogTitle>
            <img className='dialog-design-img' src={Logo}  alt='logo'/>
            <DialogContent id='send-dailog-context' >
              <DialogContentText id='send-dialog-design-description'>
?????????????? ?????????? ?????? ???? ???????????? ???????????? ???????? ?????????????? ?????????? ?????????? ???????? ???????? ???????????? ???? ???????????? ?????????? ??????????????.<br/> ?????????? ?????????? ?????????? ?????? ??????????, ???????? ???????? ????????????.              </DialogContentText>
              <TextField
                label="???? ????????"
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
                helperText={this.state.dNameE ? '?????? ???? ????????' : ''}
  
              />
  
              <TextField
                label="??????????"
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
                label="????????"
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
                ??????????
              </Button>
              <Button onClick={this.addOrder} id='dialog-btn-design' color="primary">
                ??????
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    }
   
      render() {
    return (
        
        <div className='Order'>
        <div className='order-titles' >
          <p>???? ????????????</p>
          <p>??????????</p>
          <p>????????</p>
          <p>????????????</p>
          <p></p>

        </div>
     
  {this.props.order.map((item,index)=>{
return <OrderMy  
item={item} width={this.props.width} updateOrder={this.props.updateOrder} key={item._id}   />
 
 })}
      </div>
    );
  }
}
