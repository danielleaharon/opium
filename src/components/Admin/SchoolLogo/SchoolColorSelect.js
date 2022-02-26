import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import '../Admin.css';
export default class SchoolImageSelect extends Component {
    constructor(props) {
        super(props);
        this.state={
       
            pSelectColor:'red',
            pSelectColorOther:'',
            pSelectColorE:false,
            pSelectColorEmsg:'',

          
      

        }
       
        this.ClearError=this.ClearError.bind(this);
        this.addProductValid=this.addProductValid.bind(this);
        this.addColor=this.addColor.bind(this);
   
        this.handelChangeOtherColor=this.handelChangeOtherColor.bind(this);


    }
    componentDidMount(){
 
    }
    ClearError(){

 
      this.setState({pSelectColorE:false})

  
  
    }
    addProductValid() {
      this.ClearError();
      var error=false;
  
      // if(this.state.pImage==''){
      //   this.setState({pImageE:true})
      //   error=true
      // }
      if(this.state.pSelectColor.match('other')){
        if(this.state.pSelectColorOther.trim()===''){
        this.setState({pSelectColorE:true})
          console.log(this.state.pSelectColorE)
          this.setState({pSelectColorEmsg:'חסר צבע'})
          error=true
        }
        if(this.props.colors.some((a)=>a===this.state.pSelectColorOther)){
        this.setState({pSelectColorE:true})
        this.setState({pSelectColorEmsg:' הצבע קיים'})
        error=true;
        }


        
      }

        return error

      
  
    
  
    }
    handelChangeOtherColor(e){
      this.ClearError();
      if(this.props.colors.some((a)=>a===e.target.value)){
      this.setState({pSelectColorE:true})
      this.setState({pSelectColorEmsg:' הצבע קיים'}) }
       this.setState({ pSelectColorOther: e.target.value })
   
    }
 
   
   
    addColor(){

      console.log('addColor')
      if(this.addProductValid()) return;

      if(this.state.pSelectColor.match('other')){
        if(this.state.pSelectColorOther.trim()!==''){
        if(this.state.pSelectColorOther.charAt(0)!=='#') 
      this.props.addColor('#'+this.state.pSelectColorOther)
      else       this.props.addColor(this.state.pSelectColorOther)

        }
      }
      else   this.props.addColor(this.state.pSelectColor)

      this.setState({pSelectColor:'red'})
      this.setState({pSelectColorOther:''})

    }
   
    
    
      render() {

    return (
        
    
      <div className='product-add-img school-add-img' >
                <p className='school-add-img-title' >  הוסף צבע של הסמל <span className='school-add-img-title-span'> *חובה </span></p>
      <button onClick={this.props.onClose} className='scool-close' > <span className="iconify" data-icon="feather:x"></span></button>

      <FormControl  variant="standard" id='school-select-color'>
        {/* <InputLabel id="product-label" error={this.state.pSelectColorE} shrink >צבע </InputLabel> */}

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
{this.state.pSelectColor.match('other')?    <FormControl id='school-select-color' >

<InputLabel id={"school-label-"+this.props.class}>קוד מספר</InputLabel>

<Input aria-describedby="helper"  error={this.state.pSelectColorE} required type='text' id="product-input" value={this.state.pSelectColorOther} onChange={this.handelChangeOtherColor} />
<p className={"product-color-helper-"+this.props.class +' school-color-helper'} hidden={this.state.pSelectColorOther===''} style={{backgroundColor:this.state.pSelectColorOther.at(0)=== '#'?this.state.pSelectColorOther:'#'+this.state.pSelectColorOther}}></p>

  <FormHelperText hidden={!this.state.pSelectColorE} error={this.state.pSelectColorE} id="helper">{this.state.pSelectColorEmsg}</FormHelperText>

</FormControl>:''}
 
  
      <button  className='product-add-img-btn school-add-img-btn' onClick={this.addColor} >הוסף את הצבע</button>
      </div>      

    
      

    );
  }
}
