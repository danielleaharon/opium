import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';


import Config from '../../../config/config';
import './Subcategory.css';
export default class SubcategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state={
          update:false,
          newSubcategoryE:false,
          newSubcategory:this.props.item.name,
         

        }
       
     
this.handelDeleteSub=this.handelDeleteSub.bind(this);
this.handelUpdateSub=this.handelUpdateSub.bind(this);
this.handelNameChange=this.handelNameChange.bind(this);
this.handelUpdateX=this.handelUpdateX.bind(this);
this.handelUpdateV=this.handelUpdateV.bind(this);

    }
    handelNameChange(e){
      const name=e.target.value;
      this.setState({newSubcategoryE:false})

      if(name===''){
        this.setState({newSubcategoryE:true})
      }
      this.setState({newSubcategory:e.target.value})

    }
    handelUpdateSub(){
 this.setState({update:true});
    }
    handelDeleteSub(){
      axios.delete(Config.getServerPath()+'subcategory/delete/'+this.props.item._id)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.props.updateSubcategoryList(res.data.subcategoryList)

  
      })
      .catch(() => {    console.log('send')
    }   );
    }
    handelUpdateX(){
      
      this.setState({update:false});
      this.setState({newSubcategory:this.props.item.name})

    }
    handelUpdateV(){
      const postData = {
        name:this.state.newSubcategory,     
    };
      axios.post(Config.getServerPath()+'subcategory/update/'+this.props.item._id,postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.props.updateSubcategoryList(res.data.subcategoryList,true)
  this.setState({update:false});


  
      })
      .catch(() => {    console.log('send')
    }   );
    }
      render() {
   
  if (this.state.update)
   return(    <div className='subcategory-item-update'>

    <FormControl id="subcategory-item-form">
    <InputLabel id="subcategory-item-label">עדכון תת קטגוריה </InputLabel>

<Input aria-describedby="helper"  error={this.state.newSubcategoryE} required type='text' id="product-input" value={this.state.newSubcategory} onChange={this.handelNameChange} />
{this.state.newSubcategoryE?  <FormHelperText  error={this.state.newSubcategoryE} >חסר שם</FormHelperText>:''}

</FormControl>
<div className='subcategory-item-update-btns'>
<button onClick={this.handelUpdateX} id='subcategory-item-update-x'><span class="iconify" data-icon="akar-icons:circle-x-fill"></span></button>
<button hidden={this.state.newSubcategoryE||this.state.newSubcategory.trim()===this.props.item.name.trim()} onClick={this.handelUpdateV} className='update-v'><span class="iconify" id='ok' data-icon="el:ok-sign"></span></button>
</div>
  </div>
  )
  else return(
    <div className='subcategory-item'>

  
<p className='subcategory-item-name'>{this.props.item.name}</p>
<button hidden={this.state.update} onClick={this.handelUpdateSub} id='subcategory-item-update'>עריכה</button>
<button hidden={this.state.update} onClick={this.handelDeleteSub} id='subcategory-item-delete'><span class="iconify" data-icon="fluent:delete-dismiss-24-filled"></span></button>

</div>
  )
  



   
    
  }
}