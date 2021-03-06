import React, {Component} from 'react';

import OrderAdminItem from '../OrderAdminItem/OrderAdminItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Logo from '../../Image/opiumLogo3.png';
import { TextField } from "@material-ui/core";
import axios from 'axios';
import Config from '../../config/config';
import FormControl from '@material-ui/core/FormControl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './OrderAdminClass.css';
export default class OrderAdminClass extends Component {
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
          statusClass:'',
          openOrder:false,
          statusSelect:''
        }
       
   
        this.sendMailDialog=this.sendMailDialog.bind(this);
        this.handleCloseSend=this.handleCloseSend.bind(this);
        this.changeOrder=this.changeOrder.bind(this);
        this.cheackValid=this.cheackValid.bind(this);
        this.clearValid=this.clearValid.bind(this);
        this.handelChangeStatusSelect=this.handelChangeStatusSelect.bind(this);

    }
    Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    date=new Date(this.props.item.sendAt);
    statusclassName=''
    dateString=this.date.getDate()+'/'+(this.date.getMonth()+1)+'/'+this.date.getFullYear();
    handelChangeStatusSelect(e)
      {

        // this.setState({statusSelect:e.target.value})
        if(e.target.value==='???????? ????????????')
        this.setState({statusClass:'waiting'})
  
        if(e.target.value==='????????')
        this.setState({statusClass:'confirmed'})
        if(e.target.value==='????????')
        this.setState({statusClass:'paid'})
  
        if(e.target.value==='????????')
        this.setState({statusClass:'done'})

        if(e.target.value==='????????')
        this.setState({statusClass:'Canceled'})
        const postData = {
          status: e.target.value,
       
  
        };
    
       

        axios.post(Config.getServerPath() + 'order/updateAdmin/'+this.props.item._id, postData)
        .then( async res => {
          if (res.data.status === 400) {
            console.log('error')
            return
          }
   
          this.setState({statusSelect:e.target.value})
     this.props.setOrderList(res.data.orderList)
  
  
  
        })
        .catch(() => {
          console.log('send')
        });


      }
    
    componentDidMount(){
      this.setState({statusSelect:this.props.item.status})
      if(!this.props.item.phone.includes('+'))
      this.setState({dPhone:'+972'+this.props.item.phone})
      if(this.props.item.status==='???????? ????????????')
      this.setState({statusClass:'waiting'})

      if(this.props.item.status==='????????')
      this.setState({statusClass:'confirmed'})
      if(this.props.item.status==='????????')
      this.setState({statusClass:'paid'})

      if(this.props.item.status==='????????')
      this.setState({statusClass:'done'})
 if(this.props.item.status==='????????')
      this.setState({statusClass:'Canceled'})
    }
    clearValid() {
      this.setState({ dNameE: false })
      this.setState({ dPhoneE: false })
      this.setState({ dMailE: false })
      this.setState({ dPhoneEmsg: '' })
      this.setState({ dMailEmsg: '' })
  
    }
   async changeOrder() {
      // if (this.cheackValid()) return;
      const postData = {
        name: this.state.dName,
        phone: this.state.dPhone,
        mail: this.state.dMail,
  
      };
      axios.post(Config.getServerPath() + 'order/update/'+this.props.item._id, postData)
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
      if(this.props.updateOrder())
      this.handleCloseSend();

          // }
          // // this.setState({exit:true});
          // const cart=[]
          // localStorage.setItem("cart",JSON.stringify(cart))
          // this.props.setCart(cart)
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
            <DialogTitle className="send-dialog-orderAdmin-title" ><p >?????????? ???????? ??{this.props.item.name}</p></DialogTitle>
            <img className='dialog-design-img' src={Logo} alt='logo' />
            <DialogContent id='orderAdmin-send-dailog-context' >
              {/* <DialogContentText id='send-dialog-design-description'>
?????? ???? ???????????? ???????????? ???????? ????????????, ???????? ???? ???????? ?????????? ?????? ??????.
           </DialogContentText> */}
           <div>
             <p>From</p>
              <TextField
                // label="???? ????????"
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
               <p>To</p>

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
  
     </div>
            </DialogContent>
            <DialogActions id='Dialog-buttons-mail'>
              <Button onClick={this.handleCloseSend} id='dialog-btn-design' color="primary">
                ??????????
              </Button>
              <Button onClick={this.changeOrder} id='dialog-btn-design' color="primary">
                ??????
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )
    }
   
      render() {
    return (
      <div className='Ordermy'>
        {this.sendMailDialog()}
        <div className={this.state.openOrder?'ordermy ordermy-select':'ordermy'} onClick={()=>this.setState({openOrder:!this.state.openOrder})}>
          <span className="iconify" id='ordermy-arrow' data-icon="bi:arrow-down-square-fill"></span>
          <p> {this.dateString} </p>
          <p>{this.props.item.name}</p>
          <p>{this.props.item.phone}</p>
          <p>{this.props.item.mail}</p>
          {/* <p className={this.state.statusClass} >{this.props.item.status}</p> */}
          <FormControl  variant="standard"id="orderAdminCalss-select"
 >


<Select
required
labelId="demo-simple-select-placeholder-label-label"
id={this.state.statusClass}
  value={this.state.statusSelect}
  onChange={this.handelChangeStatusSelect}
  displayEmpty
>

<MenuItem id='orderAdmin-MenuItem' value="???????? ????????????">???????? ????????????</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="????????">????????</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="????????">????????</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="????????">????????</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="????????">????????</MenuItem>

</Select>
</FormControl>
</div>
<div className='myorder-titles' hidden={!this.state.openOrder} >
          <p>???? ??????????</p>
          <p>???????? ????????</p>
          <p>????????</p>
          <p>????????</p>
          <p>??????????</p>

        </div>
        <div className='myorder-list' hidden={!this.state.openOrder} >
{this.props.item.products.map((item,index)=>{
  return <OrderAdminItem item={item} key={item._id} setOrderList={this.props.setOrderList}/>

})}
</div>     
{/* <button className='myorder-change-btn'hidden={!this.state.openOrder} onClick={()=>this.setState({openSend:true})} >?????? ????????  */}
 <div  hidden={!this.state.openOrder} className='myorder-send-btns' >
 <a className='myorder-send-btn myorder-mail' hidden={!this.state.openOrder} href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+this.props.item.mail} target="_blank" rel="noopener noreferrer"> <span className="iconify" id='gmail-black' data-icon="simple-icons:gmail"></span> <span className="iconify" id='gmail-color'data-icon="logos:google-gmail"></span> ?????? ????????</a>
 <a className='myorder-send-btn myorder-whatsapp' hidden={!this.state.openOrder} href={"https://api.whatsapp.com/send?phone=' +"+this.state.dPhone} target="_blank" rel="noopener noreferrer"><span className="iconify" data-icon="dashicons:whatsapp"></span> ?????? ????????????</a>
</div>
{/* </button> */}
      </div>
    );
  }
}
