import React, {Component} from 'react';
import Map from '../../Image/map.png'

import 'react-alice-carousel/lib/alice-carousel.css';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Config from '../../config/config';
import FormHelperText from '@material-ui/core/FormHelperText';

import {
  TextField,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Typography,FormLabel
} from "@material-ui/core";
import './Contact.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Contact extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            feedback:null,
            name:'',
            nameE:false,
            phone:'',
            phoneE:false,
            phoneEmsg:'',

            category:'',
            categoryE:false,

            class:'',
            mesaage:'',
            mail:'',
            mailE:false,
            mailEmsg:'',


        }
       
    this.handleChangePhone=this.handleChangePhone.bind(this);
    this.handleChangeName=this.handleChangeName.bind(this);

    this.showInMapClicked=this.showInMapClicked.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChangeCategory=this.handleChangeCategory.bind(this);
    this.sendContextMail=this.sendContextMail.bind(this);
    this.handleChangeMail=this.handleChangeMail.bind(this);


    }
   sendContextMail(){
    const postData = {
      name: this.state.name,
      phonenumber: this.state.phone,
      topic:this.state.category,
      mail:this.state.mail
  };
    axios.post(Config.getServerPath()+'mail/contect',postData)
    .then(res => {
if(res.data.status===400){
  console.log('error')
return
}
this.setState({name:''})
this.setState({mail:''})
this.setState({phone:''})
this.setState({category:''})

this.setState({mesaage:'תודה '+this.state.name +'\nהפרטים נשלחו, ניצור איתך קשר בהקדם'})



    })
    .catch(() => {    console.log('send')
  }   );
   }
    defaultProps = {
      center: {
        lat: 32.16744668349592,
        lng: 34.8471588018455
      },
      zoom: 11
    };
     showInMapClicked = () => {
        window.open("https://maps.google.com?q="+'32.16744668349592, 34.8471588018455' );
      };
    handleChangePhone(event) {
        this.setState({phone: event.target.value})
      }
      handleChangeMail(event) {
        this.setState({mail: event.target.value})
      }
      handleChangeCategory(event) {
        this.setState({category: event.target.value})
      }
      handleChangeName(event) {
        this.setState({name: event.target.value})
      }

      clearValid(){
        this.setState({nameE:false})
        this.setState({phoneE:false})
        this.setState({mailE:false})
        this.setState({categoryE:false})
        this.setState({phoneEmsg:''})
        this.setState({mailEmsg:''})

      }
      cheackValid(){
        this.clearValid();
        var error=false;

        if(this.state.name=='')
        {
          this.setState({nameE:true})
          error=true;
        }
        if(this.state.phone=='')
        {
          this.setState({phoneE:true})
          this.setState({phoneEmsg:'חסר מספר טלפון'})
          error=true;
        }
       else if(this.state.phone.length!=10)
        {
          this.setState({phoneE:true})
          this.setState({phoneEmsg:' מספר טלפון לא תקין'})
          error=true;
        }
        if(this.state.mail=='')
        {
          this.setState({mailE:true})
          this.setState({mailEmsg:' חסר מייל '})

          error=true;
        }
        else if(!this.state.mail.includes('@'))
        {
          this.setState({mailE:true})
          this.setState({mailEmsg:' מייל לא תקין'})

          error=true;
        }
        if(this.state.category=='')
        {
          this.setState({categoryE:true})
          error=true;
        }
        return error;
      }
      handleSubmit(e){
        if(this.cheackValid()) return;
        this.sendContextMail();

      }
 
      render() {
    return (
        
        <div className='Contact'>
<div className='contact-div' >
    	<div className='Contact-d'>

             <TextField
                label="שם פרטי"
                id="name"
                name='name'
                type='name'
                variant="outlined"
                
                
                required
                onChange={this.handleChangeName}
                value={this.state.name}
                error={this.state.nameE}
                InputLabelProps={{ id:'lable' }}
                aria-describedby="helper"
                helperText={this.state.nameE?'חסר שם פרטי':''}
            
            >
                      </TextField>
       
       <TextField
                label="טלפון"
                id="name"
                name='name'
                type='name'
                variant="outlined"
                
                error={this.state.phoneE}

                required
                onChange={this.handleChangePhone}
                value={this.state.phone}
                helperText={this.state.phoneEmsg}

                InputLabelProps={{ id:'lable' }}

            
            />
        
        <TextField
                label="מייל"
                id="name"
                name='name'
                type='name'
                variant="outlined"
                error={this.state.mailE}

                required
                onChange={this.handleChangeMail}
                value={this.state.mail}
                helperText={this.state.mailEmsg}

                InputLabelProps={{ id:'lable' }}

            
            />
                 <TextField
                label="נושא"
                id="name"
                name='name'
                type='name'
                variant="outlined"
                error={this.state.categoryE}
                required
                onChange={this.handleChangeCategory}
                value={this.state.category}
                
                InputLabelProps={{ id:'lable' }}
                helperText={this.state.categoryE?'חסר נושא ':''}

            
            />
              </div>

 <div className='div-submit'>
      <input type="button" value="שלח" className="submit" onClick={this.handleSubmit} />

      <p className='mesaage'>{this.state.mesaage}</p>

    	</div>
      </div>
      
<div  className='map_grid'>
<img   onClick={this.showInMapClicked} className='map'src={Map} ></img>

  <div style={{display:'flow'}}>

<div>
{/* <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCVj4V2gUXgoVEDxpepWR1bFP85HvywOSU' }}
          defaultCenter={this.defaultProps.center}
          defaultZoom={this.defaultProps.zoom}
        >
          <AnyReactComponent
            lat={this.defaultProps.center.lat}
            lng={this.defaultProps.center.lng}
            text="Opium"
          />
        </GoogleMapReact>
      </div> */}
      <h5 className='h5'>       <button className='button-loction'  onClick={this.showInMapClicked}><i class="material-icons" style={{fontSize:'24px'}}>place</i></button> 
בואו לבקר אותנו בסוקולוב 75 הרצליה </h5>
      </div>
      <p>א׳,ג׳,ד׳,ה׳: 09:00-13:00, 16:00-19:00</p>
      <p>ב׳: 09:00-13:00</p>
      <p>ו׳: 09:00-14:00</p>
      </div>
     <br></br>
     </div>
      </div>
    );
  }
}
