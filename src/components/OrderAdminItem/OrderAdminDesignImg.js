import React, {Component, Fragment} from 'react';
import FormControl from '@material-ui/core/FormControl';

import { Redirect } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Logo from '../../Image/opiumLogo3.png';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Icon } from '@iconify/react';
import getFirebase from "../../Firebase";
import {saveAs} from 'file-saver'
import domtoimage from 'dom-to-image';
import './OrderAdminItem.css';
import { Fastfood } from '@material-ui/icons';
export default class OrderAdminDesignImg extends Component {
    constructor(props) {
        super(props);
        this.state={
          openDetails:false,
          download:false,
          downloadSlice:false,
        }
       
   

this.handelOpen=this.handelOpen.bind(this);
this.download=this.download.bind(this);
this.downloadSlice=this.downloadSlice.bind(this);


    }

     download () {
       this.setState({download:true},()=>{
      domtoimage.toBlob(document.getElementById('OrderAdminDesign-img-design'))
      .then((blob) => {

         saveAs(blob, 'opium');
         this.setState({download:false})

      })
    })
    };
    downloadSlice () {
      this.setState({downloadSlice:true},()=>{
     domtoimage.toBlob(document.getElementById('OrderAdminDesign-img-design'))
     .then((blob) => {

        saveAs(blob, 'opium');
        this.setState({downloadSlice:false})

     })
   })
   };
handelOpen(){
  this.setState({openDetails:!this.state.openDetails})
}
      render() {
        
        return (
<div className='OrderAdminDesign'>  

<button className='OrderAdminDesign-btn OrderAdminDesign-shape'  onClick={this.handelOpen}>
<img className={this.props.item.titel +' OrderAdminDesign-view-img'}  src={this.props.item.data} />

         </button>
<div hidden={!this.state.openDetails} className='OrderAdminDesign-details-img'>
  <p>צבע רקע:</p>
  <p className='OrderA-details-p'>{this.props.item.borderColor}
  <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.borderColor }}></span>

  </p>
  <p>צבע מסגרת :</p>
  <p className='OrderA-details-p'>{this.props.item.colorFill} 
  <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.colorFill }}></span>
  </p>

  <button className='OrderAdminDesign-download'  onClick={this.download} > תמונה מקורית <span className="iconify" data-icon="bi:cloud-arrow-down"></span></button>

  <button className='OrderAdminDesign-download'  onClick={this.downloadSlice}  > תמונה חתוכה  <span className="iconify" data-icon="bi:cloud-arrow-down"></span></button>

</div>
<div   id='OrderAdminDesign-img-design'  > 
  <img  hidden={!this.state.downloadSlice} className={this.props.item.titel}src={this.props.item.data} />
  <img  hidden={!this.state.download} src={this.props.item.data} />

  </div>
      </div>  
          );
  }
}
