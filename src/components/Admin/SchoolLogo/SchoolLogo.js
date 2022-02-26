import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import SchoolLogoItem from './SchoolLogoItem';
import SchoolImageSelect from './SchoolImageSelect';
import SchoolColorSelect from './SchoolColorSelect';
import {isAuth} from '../../../actions/auth';

import Config from '../../../config/config';
import './SchoolLogo.css';
export default class SchoolLogo extends Component {
    constructor(props) {
        super(props);
        this.state={
          school:'',
          schoolE:false,
        
          url:'',
          urlE:false,

          city:'',
          cityE:false,

          colors:['black','white'],
          colorsE:false,

          newColor:false,
          newImg:false,
          CityFilter:[],
          citySelect:'all',
         

        }
  
         this.handleAddSchoolLogo=this.handleAddSchoolLogo.bind(this);
         this.updateSubcategoryList=this.updateSubcategoryList.bind(this);
         this.handelSchoolChange=this.handelSchoolChange.bind(this);
         this.handelCityChange=this.handelCityChange.bind(this);
         this.addImg=this.addImg.bind(this);
         this.addColor=this.addColor.bind(this);
         this.deleteColor=this.deleteColor.bind(this);


    }
    componentDidMount(){
      const schoolLogoListCity=[];
         
      this.props.schoolLogoList.forEach((item)=>{

        schoolLogoListCity.push(item.city)
      })
      const schoolLogoListCityFilter = schoolLogoListCity.filter((elem, pos)=> {

       return schoolLogoListCity.indexOf(elem) === pos;
})

      this.setState({CityFilter:schoolLogoListCityFilter})
    }
   
    handelSchoolChange(e){
      this.setState({schoolE:false})
      const school=e.target.value;
      if(this.props.schoolLogoList.some((a)=>a.school===school.trim()&&a.city===this.state.city))
      {
        this.setState({schoolE:true})
      }
      this.setState({ school: school })
    }
    handelCityChange(e){
      this.setState({cityE:false})
      const city=e.target.value;
      if(this.props.schoolLogoList.some((a)=>a.city===city.trim()&&a.school===this.state.school))
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
        colors:this.state.colors ,
        token:isAuth(),
 
    };
      axios.post(Config.getServerPath()+'school/create',postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.props.updateSchoolLogoList(res.data.schoolLogoList)

  this.setState({school:''})  
  this.setState({url:''})  
  this.setState({city:''})  
  this.setState({colors:['black','white']})  


      })
      .catch(() => {    console.log('send')
    }   );
    }
 
    updateSubcategoryList(SubcategorList,flag){
      this.props.updateSubcategoryList(SubcategorList,flag)

    }
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
      render() {
    return (
        
<>     


<div id='card-gallary'>
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

<img src={this.state.url} alt='scholl'></img>
        </div>
        <button hidden={this.state.city.trim()==='' || this.state.school.trim()==='' ||this.state.schoolE||this.state.cityE} onClick={this.handleAddSchoolLogo} id='product-add-new-btn'> הוסף</button>
</div>
<div  id='galley-list'>
  <p  id='galley-list-title'>כל סמלי בית ספר</p>
  <FormControl  variant="standard" id='school-form-select-event'>


<Select
required
labelId="demo-simple-select-placeholder-label-label"
id="orderAdmin-select"
  value={this.state.citySelect}
  onChange={(e)=>this.setState({citySelect:e.target.value})}
  displayEmpty
>

<MenuItem id='orderAdmin-MenuItem' value="all"> עיר</MenuItem>
{this.state.CityFilter.map((item,index)=>{
  return <MenuItem id='orderAdmin-MenuItem' value={item}>{item}</MenuItem>

})}

</Select>
</FormControl>
<div className='schoolLogo-list'>

  {this.props.schoolLogoList.filter((a)=>a.city===this.state.citySelect||this.state.citySelect==='all')
.map((item,index)=>{
    return <SchoolLogoItem {...this.props} item={item} key={item._id} updateSubcategoryList={this.props.updateSchoolLogoList} />
  })}
</div>

</div>
</div>



     </>
    );
  }
}
