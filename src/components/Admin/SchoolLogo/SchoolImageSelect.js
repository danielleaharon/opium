import React, {Component} from 'react';
import ImageUploading from '../../ImageUploading/SingleFileUploadComponent';
import '../Admin.css';
export default class SchoolImageSelect extends Component {
    constructor(props) {
        super(props);
        this.state={
       
           
            pImage:'',
            pImageE:false,
      

        }
       
        this.ClearError=this.ClearError.bind(this);
        this.addImgeValid=this.addImgeValid.bind(this);
        this.addImg=this.addImg.bind(this);
        this.setImage=this.setImage.bind(this);


    }
    componentDidMount(){
 
    }
    ClearError(){

       this.setState({pImageE:false})
  
    }
    addImgeValid() {
      this.ClearError();
      let error=false;
  
      if(this.state.pImage===''){
        this.setState({pImageE:true})
        error=true
      }
     
  
     return error
    
      
  
    
  
  
    }
  
 
   
    setImage(url){
      this.setState({pImage:url});
      this.setState({pImageE:false})
  
    }
    addImg(){
if(!this.addImgeValid())
this.props.addImg(this.state.pImage)

      this.setState({pImage:''})


    }
   
    
      render() {

    return (
        
    
      <div className='product-add-img school-add-img' >
        <p className='school-add-img-title' >  הוסף תמונה של הסמל <span className='school-add-img-title-span'> *לא חובה </span></p>
      {this.state.pImage?<p >חסרה תמונה</p>:''}
<button onClick={this.props.onClose} className='scool-close' > <span className="iconify" data-icon="feather:x"></span></button>
      {/* <div className='school-add-img-input'> */}
    <ImageUploading category='schoollogo' url={this.state.pImage} setImage={this.setImage} />
      {/* </div> */}
  
      <button className='product-add-img-btn school-add-img-btn' onClick={this.addImg} >הוסף תמונה</button>
      </div>      

    
      

    );
  }
}
