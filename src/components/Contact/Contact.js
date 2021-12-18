import React from 'react';
import Map from '../../Image/map.png'

import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import Config from '../../config/config';

import {
  TextField,

} from "@material-ui/core";
import './Contact.css';

export default function Contact(props) {

  const [state, setState] = React.useState({
    name: '',
    phone: '',
    category: '',
    mesaage: '',
    mail: '',



  });
  const [errors, setErrors] = React.useState({
    mailE: false,
    mailEmsg: '',
    categoryE: false,
    phoneE: false,
    phoneEmsg: '',
    nameE: false,

  })
  const sendContextMail = () => {
    const postData = {
      name: state.name,
      phonenumber: state.phone,
      topic: state.category,
      mail: state.mail
    };
    axios.post(Config.getServerPath() + 'mail/contect', postData)
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }

        setState({ mesaage: 'תודה ' + state.name + '\nהפרטים נשלחו, ניצור איתך קשר בהקדם', name: '', mail: '', phone: '', category: '' })



      })
      .catch(() => {
        console.log('send')
      });
  }
  const defaultProps = {
    center: {
      lat: 32.16744668349592,
      lng: 34.8471588018455
    },
    zoom: 11
  };
  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=" + '32.16744668349592, 34.8471588018455');
  };
  const handleChange = (event) => {
    clearValid()
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }


  const clearValid = () => {

    setErrors({ ...errors, mailEmsg: '', phoneEmsg: '', categoryE: false, mailE: false, phoneE: false, nameE: false })

  }
  const cheackValid = () => {
    var error = {};

    if (state.name === '') {
      error["nameE"] = true;
    }
    if (state.phone === '') {
      error["phoneE"] = true;
      error["phoneEmsg"] = "חסר מספר טלפון";

    }
    else if (state.phone.length !== 10) {
      error["phoneEmsg"] = "מספר טלפון לא תקין";
      error["phoneE"] = true;

    }
    if (state.mail === '') {
      error["mailEmsg"] = " חסר מייל ";
      error["mailE"] = true;
    }
    else if (!state.mail.includes('@')) {

      error["mailEmsg"] = " מייל לא תקין ";
      error["mailE"] = true;
    }
    if (state.category === '') {
      error["categoryE"] = true;
    }

    setErrors(error)
    return Object.keys(error).length !== 0 ? true : false;
  }
  const handleSubmit = (e) => {
    if (cheackValid()) return;
    sendContextMail();

  }


  return (

    <div className='Contact'>
      <h3 className='Contact-h3-big' hidden={window.location.pathname === '/Contact'} > צור קשר</h3>
      <h3 className='Contact-h3' hidden={(window.location.pathname === '/Contact' && props.width > 800) || window.location.pathname === '/'} > צור קשר</h3>

      <div className='contact-div' >

        <div className='Contact-d'>

          <TextField
            label="שם פרטי"
            id="name"
            name='name'
            type='name'
            variant="outlined"


            required
            onChange={handleChange}
            value={state.name}
            error={errors.nameE}
            InputLabelProps={{ id: 'lable' }}
            aria-describedby="helper"
            helperText={errors.nameE ? 'חסר שם פרטי' : ''}

          >
          </TextField>

          <TextField
            label="טלפון"
            id="name"
            name='phone'
            type='name'
            variant="outlined"

            error={errors.phoneE}

            required
            onChange={handleChange}
            value={state.phone}
            helperText={errors.phoneEmsg}

            InputLabelProps={{ id: 'lable' }}


          />

          <TextField
            label="מייל"
            id="name"
            name='mail'
            type='name'
            variant="outlined"
            error={errors.mailE}

            required
            onChange={handleChange}
            value={state.mail}
            helperText={errors.mailEmsg}

            InputLabelProps={{ id: 'lable' }}


          />
          <TextField
            label="נושא"
            id="name"
            name='category'
            type='name'
            variant="outlined"
            // inputProps={{style:{outline:'none !important',border:'none !important'}}}
            error={errors.categoryE}
            required
            onChange={handleChange}
            value={state.category}

            InputLabelProps={{ id: 'lable' }}
            helperText={errors.categoryE ? 'חסר נושא ' : ''}


          />
        </div>

        <div className='div-submit'>
          <input type="button" value="שלח" className="submit" onClick={handleSubmit} />

          <p className='mesaage'>{state.mesaage}</p>

        </div>
      </div>

      <div className='map_grid'>
        <img onClick={showInMapClicked} className='map' src={Map} ></img>

        <div style={{ display: 'flow' }}>

          <div>
            {/* <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCVj4V2gUXgoVEDxpepWR1bFP85HvywOSU' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="Opium"
          />
        </GoogleMapReact>
      </div> */}
            <h5 className='h5'>       <button className='button-loction' onClick={showInMapClicked}><i className="material-icons" style={{ fontSize: '24px' }}>place</i></button>
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
