import React, {Component} from 'react';

import {saveAs} from 'file-saver'
import domtoimage from 'dom-to-image';
import { Icon } from '@iconify/react';
import './OrderAdminItem.css';
export default class OrderAdminDesignShape extends Component {
    constructor(props) {
        super(props);
        this.state={
          openDetails:false,
      
        }
       
   

this.handelOpen=this.handelOpen.bind(this);
this.download=this.download.bind(this);

    }

    download () {
      this.setState({download:true},()=>{
     domtoimage.toBlob(document.getElementById('OrderAdminDesign-shape-design'))
     .then((blob) => {

        saveAs(blob, 'opiumShape');
        this.setState({download:false})

     })
   })
   };
handelOpen(){
  this.setState({openDetails:!this.state.openDetails})
}
      render() {
        
        return (
<div className='OrderAdminDesign'>  

<button className='OrderAdminDesign-btn OrderAdminDesign-shape' onClick={this.handelOpen}>

<Icon color={this.props.item.colorFill} width={28} icon={this.props.item.data.fill}  style={{position:'absolute',top:'0px',left:'45%'}} />
               <Icon color={this.props.item.colorBorder} width={28}  icon={this.props.item.data.nofill}  style={{position:'absolute',top:'0px',left:'45%'}} />
               </button>
<div hidden={!this.state.openDetails} className='OrderAdminDesign-details'>
  <p>צבע רקע:</p>
  <p className='OrderA-details-p'>{this.props.item.colorBorder==='TRANSPARENT'?'אין רקע':this.props.item.colorBorder}
  <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.colorBorder }}></span>

  </p>
  <p>צבע מסגרת :</p>
  <p className='OrderA-details-p'>{this.props.item.colorFill} 
  <span  className="dot-OrderAdminDesign" id='dot-OrderAdminDesign' style={{ backgroundColor: this.props.item.colorFill }}></span>
  </p>

  <button className='OrderAdminDesign-download'  onClick={this.download} > צורה <span className="iconify" data-icon="bi:cloud-arrow-down"></span></button>



</div>
<div    hidden={!this.state.download} id='OrderAdminDesign-shape-design'  > 
  <Icon color={this.props.item.colorFill} width={280} icon={this.props.item.data.fill}  style={{position:'absolute',top:'0px',left:'2%'}} />
               <Icon color={this.props.item.colorBorder} width={280}  icon={this.props.item.data.nofill}  style={{position:'absolute',top:'0px',left:'2%'}} />
  </div>
      </div>  
          );
  }
}
