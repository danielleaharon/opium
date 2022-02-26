import React, {Component} from 'react';

import OrderAdminClass from '../OrderAdminClass/OrderAdminClass';
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
import FormControl from '@material-ui/core/FormControl';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './OrderAdmin.css';
export default class OrderAdmin extends Component {
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
          orderList:[],
          dateSelect:'all',
          statusSelect:'all',
          orderListDate:[]
        }
       
   
        this.sendMailDialog=this.sendMailDialog.bind(this);
        this.handleCloseSend=this.handleCloseSend.bind(this);
        this.addOrder=this.addOrder.bind(this);
        this.cheackValid=this.cheackValid.bind(this);
        this.clearValid=this.clearValid.bind(this);
this.orderListFilter=this.orderListFilter.bind(this)
this.setOrderList=this.setOrderList.bind(this);
    }
    Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    componentDidMount(){

      axios.post(Config.getServerPath() + 'order/all', )
        .then(res => {
          if (res.data.status === 400) {
            console.log('error')
            return
          }
         this.setState({orderList:res.data.orderList})
         const OrderListDate=[];
         
         res.data.orderList.forEach((item)=>{
           const date=new Date(item.sendAt);
           const dateString=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
          OrderListDate.push(dateString)
         })
         console.log(OrderListDate)
         const OrderListDateFilter = OrderListDate.filter((elem, pos)=> {

          return OrderListDate.indexOf(elem) === pos;
  })
  console.log('OrderListDate')
  console.log(OrderListDateFilter)

         this.setState({orderListDate:OrderListDateFilter})
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
setOrderList(list){
  this.setState({orderList:list})
  const OrderListDate=[];
         
  list.forEach((item)=>{
    const date=new Date(item.sendAt);
    const dateString=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
   OrderListDate.push(dateString)
  })
  console.log(OrderListDate)
  const OrderListDateFilter = OrderListDate.filter((elem, pos)=> {

   return OrderListDate.indexOf(elem) === pos;
})


  this.setState({orderListDate:OrderListDateFilter})
}
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
    orderListFilter(a){
      if(this.state.dateSelect==='all' && this.state.statusSelect==='all')
      return true;

      
      if( this.state.statusSelect==='all'){

      const date=new Date(a.sendAt)
      const dateString=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()

      return dateString===this.state.dateSelect;
      }
      if( this.state.dateSelect==='all'){

  console.log(a.status)
  console.log(this.state.statusSelect)

        return a.status.trim()===this.state.statusSelect.trim();
        }

        const date=new Date(a.sendAt)
        const dateString=date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()
  
        return dateString===this.state.dateSelect && a.status===this.state.statusSelect;

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
            <img className='dialog-design-img' src={Logo} alt='logo' />
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
        
        <div className='Order'>

          <p className='orderAdmin-title'> ניהול הזמנות מנהל </p>
        <div className='orderAdmin-titles' >
        {/* <p>תאריך הזמנה</p> */}
        <FormControl  variant="standard" id='orderAdmin-select'>


<Select
required
labelId="demo-simple-select-placeholder-label-label"
id="orderAdmin-select"
  value={this.state.dateSelect}
  onChange={(e)=>this.setState({dateSelect:e.target.value})}
  displayEmpty
>

<MenuItem id='orderAdmin-MenuItem' value="all">תאריך הזמנה</MenuItem>
{this.state.orderListDate.map((item,index)=>{
  return <MenuItem id='orderAdmin-MenuItem' value={item}>{item}</MenuItem>

})}

</Select>
</FormControl>
          <p>שם המזמין</p>
          <p>טלפון</p>
          <p>מייל</p>
          <FormControl  variant="standard" id='orderAdmin-select'>


<Select
required
labelId="demo-simple-select-placeholder-label-label"
id="orderAdmin-select"
  value={this.state.statusSelect}
  onChange={(e)=>this.setState({statusSelect:e.target.value})}
  displayEmpty
>

<MenuItem id='orderAdmin-MenuItem' value="all">סטאטוס</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="מחכה לאישור">מחכה לאישור</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="אושר">אושר</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="שולם">שולם</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="בוצע">בוצע</MenuItem>
<MenuItem id='orderAdmin-MenuItem' value="בוטל">בוטל</MenuItem>


{/* if(this.props.item.status==='מחכה לאישור')
      this.setState({statusClass:'waiting'})

      if(this.props.item.status==='אושר')
      this.setState({statusClass:'confirmed'})
      if(this.props.item.status==='שולם')
      this.setState({statusClass:'paid'})

      if(this.props.item.status==='בוצע')
      this.setState({statusClass:'done'}) */}
{/* {this.state.orderListDate.map((item,index)=>{
  return <MenuItem id='orderAdmin-MenuItem' value={item}>{item}</MenuItem>

})} */}

</Select>
</FormControl>

        </div>
     
  {this.state.orderList.filter((a)=>this.orderListFilter(a)).sort((a,b)=>new Date( b.sendAt)-new Date(a.sendAt)).map((item,index)=>{
return <OrderAdminClass  
item={item} updateOrder={this.props.updateOrder} setOrderList={this.setOrderList} key={item._id}   />
 
 })}
      </div>
    );
  }
}
