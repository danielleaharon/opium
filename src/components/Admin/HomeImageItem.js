import React, {Component} from 'react';

import axios from 'axios';

import {isAuth} from '../../actions/auth';

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
      const postData = {
       
        token:isAuth(),

     
    };
      axios.post(Config.getServerPath()+'photo/delete/'+this.props.item._id,postData)
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
<img src={this.props.item.src} alt='home' ></img>
<p className='img-position'>{this.props.position}</p>
<button onClick={this.handelDeleteImg} id='home-img-item-delete'><span className="iconify" data-icon="fluent:delete-dismiss-24-filled"></span></button>
</div>
   



     </>
    );
  }
}
