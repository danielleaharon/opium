import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ImageUploading from '../ImageUploading/SingleFileUploadComponent';
import axios from 'axios';
import Config from '../../config/config';
import './Admin.css';
export default class productImageSelect extends Component {
    constructor(props) {
        super(props);
        this.state={
       
            pSelectColor:'red',
            pSelectColorOther:'',
            pImageFront:'',
            pImageBack:'',
            pImageE:false,
            pSelectColorE:false,
      

        }
       
        this.ClearError=this.ClearError.bind(this);
        this.addProductValid=this.addProductValid.bind(this);
        this.addImg=this.addImg.bind(this);
        this.openNew=this.openNew.bind(this);
        this.setImageFront=this.setImageFront.bind(this);
        this.setImageBack=this.setImageBack.bind(this);
        this.handelChangeOtherColor=this.handelChangeOtherColor.bind(this);


    }
    componentDidMount(){
 
    }
    ClearError(){

 
      this.setState({pSelectColorE:false})
      this.setState({pImageE:false})

  
  
    }
    addProductValid() {
      this.ClearError();
      let error=false;
  
      // if(this.state.pImage==''){
      //   this.setState({pImageE:true})
      //   error=true
      // }
      if(this.state.pSelectColor.match('other')&&this.state.pSelectColorOther==''){
        this.setState({pSelectColorE:true})
        error=true
      }
  
     return error
    
      
  
    
  
  
    }
    handelChangeOtherColor(e){
      this.setState({ pSelectColorOther: e.target.value })
   
    }
 
    openNew(){

      this.setState({add:!this.state.add});
    }
    setImageFront(url){
      this.setState({pImageFront:url});
      this.setState({pImageE:false})
  
    }
    addImg(){

      // if(this.addProductValid) return;
      if(this.state.pSelectColor.match('other')){
        if(this.state.pSelectColorOther!=''){
          console.log(this.state.pSelectColorOther.charAt(0))
        if(this.state.pSelectColorOther.charAt(0)!='#') 
      this.props.addImg(this.state.pImageFront,this.state.pImageBack,'#'+this.state.pSelectColorOther)
      else       this.props.addImg(this.state.pImageFront,this.state.pImageBack,this.state.pSelectColorOther)

        }
      }
      else   this.props.addImg(this.state.pImageFront,this.state.pImageBack,this.state.pSelectColor)

      this.setState({pImageFront:''})
      this.setState({pImageBack:''})
      this.setState({pSelectColor:'red'})
      this.setState({pSelectColorOther:''})

    }
    setImageBack(url){
      this.setState({pImageBack:url});
      this.setState({pImageE:false})
  
    }
    
      render() {

    return (
        
    
      <div className='product-add-img' >
      {this.state.pSelectColorE?<p >חסרה תמונה</p>:''}
      <FormControl  variant="standard" id='select-time-start'>
        <InputLabel id="product-label" error={this.state.pSelectColorE} shrink >צבע </InputLabel>

        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.pSelectColor}
          onChange={(e)=>this.setState({pSelectColor:e.target.value})}
          displayEmpty
          contentEditable
        >
<MenuItem id='val' value='red'>אדום</MenuItem>
<MenuItem id='val' value='blue'>כחול</MenuItem>
<MenuItem id='val' value='green'>ירוק</MenuItem>
<MenuItem id='val' value='other'>אחר</MenuItem>

         
        </Select>
      </FormControl>
{this.state.pSelectColor.match('other')?    <FormControl id='form-event' >

<InputLabel id={"product-label-"+this.props.class}>קוד מספר</InputLabel>

<Input aria-describedby="helper"  error={this.state.pSelectColorE} required type='text' id="product-input" value={this.state.pSelectColorOther} onChange={this.handelChangeOtherColor} />
<p className={"product-color-helper-"+this.props.class} hidden={this.state.pSelectColorOther===''} style={{backgroundColor:this.state.pSelectColorOther.at(0)=='#'?this.state.pSelectColorOther:'#'+this.state.pSelectColorOther}}></p>

{this.state.pSelectColorE?  <FormHelperText  error={this.state.pSelectColorE} id="helper">חסר צבע</FormHelperText>:''}

</FormControl>:''}
      <div className='product-add-img-input'>
    <p>קדימה</p>  
    <ImageUploading url={this.state.pImageFront} setImage={this.setImageFront} />
      </div>
      <div className='product-add-img-input'>
    <p>אחורה</p>  
      <ImageUploading url={this.state.pImageBack} setImage={this.setImageBack} />
      </div>
      <button className='product-add-img-btn' onClick={this.addImg} >הוסף את הצבע</button>
      </div>      

    
      

    );
  }
}
