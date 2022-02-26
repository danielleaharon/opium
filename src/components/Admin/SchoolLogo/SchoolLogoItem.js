import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Logo from '../../../Image/opiumLogo3.png';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SchoolImageSelect from './SchoolImageSelect';
import SchoolColorSelect from './SchoolColorSelect';
import Config from '../../../config/config';
import './SchoolLogo.css';
import {isAuth} from '../../../actions/auth';

export default class SubcategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state={
          update:false,
          newSubcategoryE:false,
          newSubcategory:this.props.item.school,
         
          school:this.props.item.school,
          schoolE:false,
        
          url:this.props.item.url,
          urlE:false,

          city:this.props.item.city,
          cityE:false,

          colors:this.props.item.colors,
          colorsE:false,

          newColor:false,
          newImg:false,

        }
       
     
this.handelDeleteSub=this.handelDeleteSub.bind(this);
this.handelUpdateSub=this.handelUpdateSub.bind(this);

this.updtaeSchoolLogoDialog=this.updtaeSchoolLogoDialog.bind(this);
this.closeSchoolLogoDialog=this.closeSchoolLogoDialog.bind(this);
this.handleAddSchoolLogo=this.handleAddSchoolLogo.bind(this);
this.handelSchoolChange=this.handelSchoolChange.bind(this);
this.handelCityChange=this.handelCityChange.bind(this);
this.addImg=this.addImg.bind(this);
this.addColor=this.addColor.bind(this);
this.deleteColor=this.deleteColor.bind(this);
    }
    Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    addImg(image){

      
      this.setState({ url: image })
      this.setState({newImg:false})
 
    }

    addColor(color){

      var item=this.state.colors;
          item.push(color)
      
          this.setState({ colors: item })
          this.setState({newColor:false})
     
        }
        deleteColor(index){
          const item=this.state.colors;
          item.splice(index,1);
          this.setState({ colors: item })


        }
 

    handelSchoolChange(e){
      this.setState({schoolE:false})
      const school=e.target.value;
      if(this.props.schoolLogoList.some((a)=>a.school===school.trim()&&a.city===this.state.city&&a.school!==this.props.item.school))
      {
        this.setState({schoolE:true})
      }
      this.setState({ school: school })
    }
    handelCityChange(e){
      this.setState({cityE:false})
      const city=e.target.value;
      if(this.props.schoolLogoList.some((a)=>a.city===city.trim()&&a.school===this.state.school&&a.city!==this.props.item.city))
      {
        this.setState({cityE:true})
      }
      this.setState({ city: city })
    }
    handleAddSchoolLogo(){

     
      const postData = {
        school:this.state.school,
        url:this.state.url,
        city:this.state.city,
        colors:this.state.colors  ,
        token:isAuth(),

    };
      axios.post(Config.getServerPath()+'school/update/'+this.props.item._id,postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.props.updateSchoolLogoList(res.data.schoolLogoList)
  this.closeSchoolLogoDialog();

  // this.setState({school:''})  
  // this.setState({url:''})  
  // this.setState({city:''})  
  // this.setState({colors:['black','white']})  


      })
      .catch(() => {    console.log('send')
    }   );
    }
 
  
    handelUpdateSub(){
 this.setState({update:true});
    }
    handelDeleteSub(){
      const postData = {
       
        token:isAuth(),

     
    };
      axios.post(Config.getServerPath()+'school/delete/'+this.props.item._id,postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.props.updateSchoolLogoList(res.data.schoolLogoList)

  
      })
      .catch(() => {    console.log('send')
    }   );
    }

  
closeSchoolLogoDialog()
{
  this.setState({update:false})
}
    updtaeSchoolLogoDialog() {


      return (
        <div>
        <Dialog maxWidth='sm' fullWidth  className="school-dialog" open={this.state.update} onClose={this.closeSchoolLogoDialog}>
            <DialogTitle className="school-dialog-title" ><p >עדכון סמל:  {this.props.item.school} | {this.props.item.city}</p></DialogTitle>
            <img className='dialog-design-img' src={Logo} alt='logo' />
            {/* <DialogContent id='send-dailog-context' > */}
             
             <div id='card-gallary-item'>
<div id='form-school-new'>

<FormControl id='school-form-event' >

          <InputLabel id="school-label">שם בית ספר </InputLabel>

          <Input aria-describedby="helper"  error={this.state.schoolE} required type='text' id="school-input" value={this.state.school} onChange={this.handelSchoolChange} />
          {this.state.schoolE?  <FormHelperText  error={this.state.schoolE} >קיים כבר </FormHelperText>:''}

        </FormControl>

        <FormControl id='school-form-event' >

          <InputLabel id="school-label"> עיר </InputLabel>

          <Input aria-describedby="helper"  error={this.state.cityE} required type='text' id="school-input" value={this.state.city} onChange={this.handelCityChange} />
          {this.state.cityE?  <FormHelperText  error={this.state.cityE} >קיים כבר </FormHelperText>:''}

        </FormControl>
        <div className='schoolLogot-color-list'>
          <p> צבעים :</p>
        {this.state.colors.map((item,index)=>{
            console.log(item)
            return <button key={index} onClick={()=>this.deleteColor(index)} id='schoolLogot-color-dit-btn'  style={{backgroundColor:item}} > <span id='schoolLogot-color-dot'  className="iconify" data-icon="feather:x"></span> </button>
          })}
          </div>
          
        {/* <div className='scoolLogo-img'> */}
        
        {this.state.newColor?( <SchoolColorSelect colors={this.state.colors} addColor={this.addColor} onClose={()=>this.setState({newColor:false})} className='new'/>
):(
<button className='school-add-btn' onClick={()=>this.setState({newColor:true})} > הוסף צבע</button>
)}

  {/* </div> */}


{/* <div className='scoolLogo-img' hidden={this.state.url.trim()!==''}> */}
{this.state.url.trim()===''?(
this.state.newImg?( <SchoolImageSelect addImg={this.addImg} className='new' onClose={()=>this.setState({newImg:false})}/>):
(
  <button className='school-add-btn' onClick={()=>this.setState({newImg:true})} > הוסף תמונה</button>
  )
):''}

        {/* </div> */}

        <div className='scoolLogo-img'  hidden={this.state.url.trim()===''}>
        <button onClick={()=>{this.setState({url:''})}} className='school-delete-img' > <span className="iconify" data-icon="feather:x"></span></button>

<img src={this.state.url}   alt='logo'></img>
        </div>
        <button hidden={this.state.city.trim()==='' || this.state.school.trim()==='' ||this.state.schoolE||this.state.cityE} onClick={this.handleAddSchoolLogo} id='product-add-new-btn'> עדכן</button>
</div>
<button onClick={this.closeSchoolLogoDialog} className='scool-close' > <span className="iconify" data-icon="feather:x"></span></button>

</div>

          </Dialog>
        </div>
      )
    }
      render() {
   
//   if (this.state.update)
//    return(    <div className='subcategory-item-update'>

//     <FormControl id="subcategory-item-form">
//     <InputLabel id="subcategory-item-label">עדכון סמל:  {this.props.item.school} | {this.props.item.city} </InputLabel>

// <Input aria-describedby="helper"  error={this.state.newSubcategoryE} required type='text' id="product-input" value={this.state.newSubcategory} onChange={this.handelNameChange} />
// {this.state.newSubcategoryE?  <FormHelperText  error={this.state.newSubcategoryE} >חסר שם</FormHelperText>:''}

// </FormControl>
// <div className='subcategory-item-update-btns'>
// <button onClick={this.handelUpdateX} id='subcategory-item-update-x'><span className="iconify" data-icon="akar-icons:circle-x-fill"></span></button>
// <button hidden={this.state.newSubcategoryE||this.state.newSubcategory.trim()===this.props.item.school.trim()} onClick={this.handelUpdateV} className='update-v'><span className="iconify" id='ok' data-icon="el:ok-sign"></span></button>
// </div>
//   </div>
//   )
//   else 
  return(
    <div className='schoolLogo-item'>
{this.updtaeSchoolLogoDialog()}
<p className='subcategory-item-name'  hidden={this.props.item.url!==''} > {this.props.item.school} | {this.props.item.city}</p>
<img hidden={this.props.item.url===''} className='subcategory-item-name' src={this.props.item.url}  alt='school-logo'></img>
<button hidden={this.state.update} onClick={this.handelUpdateSub} id='subcategory-item-update'>עריכה</button>
<button hidden={this.state.update} onClick={this.handelDeleteSub} id='subcategory-item-delete'><span className="iconify" data-icon="fluent:delete-dismiss-24-filled"></span></button>

</div>
  )
  



   
    
  }
}
