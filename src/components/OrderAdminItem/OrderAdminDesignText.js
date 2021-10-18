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
import Slide from '@material-ui/core/Slide';
import './OrderAdminItem.css';
export default class OrderAdminDesignText extends Component {
    constructor(props) {
        super(props);
        this.state={
          openDetails:false,
      
        }
       
   

this.handelOpen=this.handelOpen.bind(this);

    }
handelOpen(){
  this.setState({openDetails:!this.state.openDetails})
}
      render() {
        
        return (
<div className='OrderAdminDesign'>  

<button className='OrderAdminDesign-btn' onClick={this.handelOpen}>{this.props.item.data}</button>
<div hidden={!this.state.openDetails} className='OrderAdminDesign-details'>
  <p>צבע טקסט:</p>
  <p className='OrderA-details-p'>{this.props.item.textColor}
  <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.textColor }}></span>

  </p>
  <p>צבע מסגרת טקסט:</p>
  <p className='OrderA-details-p'>{this.props.item.borderColor} 
  <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.borderColor }}></span>
  </p>
  <p >צבע רקע:</p>
  <p className='OrderA-details-p'>{this.props.item.backgroundColor} <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.backgroundColor }}></span> 
</p>
  <p>פונט :</p>
  <p>{this.props.item.activeFontFamily}</p>
  <p>עיצוב טקסט:</p>

  {this.props.item.formats.map((item,index)=>{
    return <p key={index} >{item}</p>
  })}


</div>
      </div>  
          );
  }
}
