import React, {Component} from 'react';
import axios from 'axios';
import HomeImageItem from './HomeImageItem';
import ImageUploading from '../ImageUploading/SingleFileUploadComponent';

import Config from '../../config/config';
import './Category.css';
export default class Category extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          photoList:[],
          newImg:null,
          DragId:null,
          haveChange:false,
         

        }
       
         this.setImage=this.setImage.bind(this);
         this.handleAddImg=this.handleAddImg.bind(this);
         this.handleDrop=this.handleDrop.bind(this);
         this.handleDrag=this.handleDrag.bind(this);
         this.handelImgeOrder=this.handelImgeOrder.bind(this);
         this.updatePhotoList=this.updatePhotoList.bind(this);

    }
    handelImgeOrder(){
      const postData = {
        imglist:this.state.photoList,
     
    };
      axios.post(Config.getServerPath()+'photo/update',postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.setState({photoList:res.data.photoList})
  this.setState({haveChange:false})

  
      })
      .catch(() => {    console.log('send')
    }   );
    }
    handleAddImg(){

      const postData = {
        src:this.state.newImg,
        position:this.state.photoList.length
     
    };
      axios.post(Config.getServerPath()+'photo/create',postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.setState({photoList:res.data.photoList})
  this.setState({newImg:null})
  window.document.getElementById('input-img').value=null;
  

      })
      .catch(() => {    console.log('send')
    }   );
    }
    setImage(url){
      this.setState({newImg:url});
      // this.setState({pImageE:false})
  
    }
    updatePhotoList(PhotoList){
      this.setState({photoList:PhotoList})

    }
    componentDidMount(){

      axios.post(Config.getServerPath()+'photo/all')
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.setState({photoList:res.data.photoList})
  

      })
      .catch(() => {    console.log('send')
    }   );
    }
  
    handleDrag(ev){
      this.setState({DragId:ev.currentTarget.id});

    }
    handleDrop(ev){
      const dragBox = this.state.photoList.find((box) => box._id === this.state.DragId);
      const dropBox = this.state.photoList.find((box) => box._id === ev.currentTarget.id);
  console.log(dragBox)
      const dragBoxOrder = dragBox.position;
      const dropBoxOrder = dropBox.position;
  
      const newBoxState =  this.state.photoList.map((box) => {
        if (box._id === this.state.DragId) {
          box.position = dropBoxOrder;
        }
        if (box._id === ev.currentTarget.id) {
          box.position = dragBoxOrder;
        }
        this.setState({haveChange:true})
        return box;
      });
  this.setState({photoList:newBoxState})
    }
      render() {
    return (
        
<>     


<div id='card-gallary'>
<ImageUploading url={this.state.newImg} setImage={this.setImage} />
<button hidden={this.state.newImg===null} onClick={this.handleAddImg} id='product-add-new-btn'> הוסף</button>

<div id='galley-list'>
  <p id='galley-list-title'>תמונות בגלריה</p>
<div className='home-img-list'>
  {this.state.photoList.sort((a, b) => a.position - b.position)
.map((item,index)=>{
    return <HomeImageItem updatePhotoList={this.updatePhotoList} handleDrop={this.handleDrop} handleDrag={this.handleDrag}item={item} key={item._id} position={index} boxNumber={item._id}/>
  })}
</div>
<button id='product-add-new-btn' hidden={!this.state.haveChange} onClick={this.handelImgeOrder}>שמור שינוים</button>

</div>
</div>



     </>
    );
  }
}
