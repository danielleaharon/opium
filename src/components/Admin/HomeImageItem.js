import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import ProductImageSelect from './productImageSelect';
import ProductImgItem from '../ProductImgItem/ProductImgItem';
import ImageUploading from '../ImageUploading/SingleFileUploadComponent';

import Config from '../../config/config';
import './HomeImage.css';
export default class HomeImageItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          DragId:null,
         

        }
       
     
this.handelDeleteImg=this.handelDeleteImg.bind(this);

    }
    handelDeleteImg(){
      axios.delete(Config.getServerPath()+'photo/delete/'+this.props.item._id)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.props.updatePhotoList(res.data.photoList)

  
      })
      .catch(() => {    console.log('send')
    }   );
    }

      render() {
    return (
        
<>     


<div className='home-img-item' id={this.props.boxNumber}
      draggable={true}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={this.props.handleDrag}
      onDrop={this.props.handleDrop}
>
<img src={this.props.item.src} ></img>
<p className='img-position'>{this.props.position}</p>
<button onClick={this.handelDeleteImg} id='home-img-item-delete'><span class="iconify" data-icon="fluent:delete-dismiss-24-filled"></span></button>
</div>
   



     </>
    );
  }
}
