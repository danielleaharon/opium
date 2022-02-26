import React, {Component} from 'react';
import {saveAs} from 'file-saver'
import domtoimage from 'dom-to-image';
import './OrderAdminItem.css';
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
<img className={this.props.item.titel +' OrderAdminDesign-view-img'}  src={this.props.item.data} alt='front' />

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
  <img  hidden={!this.state.downloadSlice} className={this.props.item.titel}src={this.props.item.data} alt='front' />
  <img  hidden={!this.state.download} src={this.props.item.data} alt='front' />

  </div>
      </div>  
          );
  }
}
