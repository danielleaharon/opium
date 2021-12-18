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
import ProductItem from '../ProductImgItem/ProductItem';
import {isAuth} from '../../actions/auth';

import Config from '../../config/config';
import './Admin.css';
export default class newProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            pName:'',
            pNameE:false,
            pPrice:'',
            pPriceE:false,
            pDiscription:'',
            pDiscriptionE:false,
            pSelectCategory:10,
            pSubcategory:10,
            pSubcategoryE:false,
            pImage:'',
            pImageE:false,
            add:false,
            productList:[],
            imgs:[],
            newColor:false,
            subcategoryList:[]

        }
       
        this.ClearError=this.ClearError.bind(this);
        this.addProductValid=this.addProductValid.bind(this);
        this.handleAddProduct=this.handleAddProduct.bind(this);
        // this.setImage=this.setImage.bind(this);
        this.addImg=this.addImg.bind(this);
        this.updateProductList=this.updateProductList.bind(this);


    }
    componentDidMount(){

    
    }
    ClearError(){

      this.setState({pNameE:false})
      this.setState({pPriceE:false})
      this.setState({pDiscriptionE:false})
      this.setState({pSelectCategoryE:false})
      this.setState({pImageE:false})

  
  
    }
    addProductValid() {
      this.ClearError();
      let error=false;
  
      if(this.state.pName==''){
        this.setState({pNameE:true})
        error=true
        
      }
      if(this.state.pPrice==''){
        this.setState({pPriceE:true})
        error=true
      }
      if(this.state.pDiscription==''){
        this.setState({pDiscriptionE:true})
        error=true
      }
     
      if(this.state.pSelectCategory==null){
        this.setState({pSelectCategoryE:true})
        error=true
      }
  
     return error
    
      
  
    
  
  
    }
    updateProductList(list){
      this.setState({productList:list})

    }
    handleAddProduct(){
      if(this.addProductValid()) return;
      const postData = {
        name:this.state.pName,
        discription:this.state.pDiscription,
        category: this.state.pSelectCategory,
        price:this.state.pPrice,
        productImage:this.state.imgs,
        subcategory:this.state.pSubcategory,
        token:isAuth(),

    };
      axios.post(Config.getServerPath()+'product/create',postData)
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }

  this.setState({pName:''});
  this.setState({pPrice:''});
  this.setState({pDiscription:''});
  this.setState({pSelectCategory:10});
  this.setState({pImage:''});
  this.props.updateProductList(res.data.productList)



  
      })
      .catch(() => {    console.log('send')
    }   );
  
  
  
    }
    addImg(front,back,color){

  var item=this.state.imgs;
      item.push({ front, back,color})
  
      this.setState({ imgs: item })
      this.setState({newColor:false})
 
    }
   
    // setImage(url){
    //   this.setState({pImage:url});
    //   this.setState({pImageE:false})
  
    // }
      render() {
    return (
        
<>     


<div id='card-product-new'>
<div id='form-product-new'>
        <FormControl id='form-event' >

          <InputLabel id="product-label">שם המוצר</InputLabel>

          <Input aria-describedby="helper"  error={this.state.pNameE} required type='text' id="product-input" value={this.state.pName} onChange={(e) => this.setState({ pName: e.target.value })} />
          {this.state.pNameE?  <FormHelperText  error={this.state.pNameE} >חסר שם</FormHelperText>:''}

        </FormControl>
        <FormControl id='form-event' >

<InputLabel id="product-label" htmlFor="child-name">תיאור </InputLabel>

<Input aria-describedby="helper"  error={this.state.pDiscriptionE} required type='text' id="child-name" value={this.state.pDiscription} onChange={(e) => this.setState({ pDiscription: e.target.value })} />
{this.state.pDiscriptionE?  <FormHelperText  error={this.state.pDiscriptionE} >חסר תיאור</FormHelperText>:''}

</FormControl>
        <FormControl id='form-event' >

<InputLabel id="product-label" htmlFor="child-name">מחיר</InputLabel>

<Input aria-describedby="helper" error={this.state.pPriceE} required type='number' id="child-name" value={this.state.pPrice} onChange={(e) => this.setState({ pPrice: e.target.value })} />
{this.state.pPriceE?  <FormHelperText  error={this.state.pPriceE} >חסר תיאור</FormHelperText>:''}

</FormControl>

       
        <FormControl  variant="standard" id='select-time-start'>
        <InputLabel id="product-label" error={this.state.pSelectCategoryE} shrink >קטגוריה </InputLabel>

        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.pSelectCategory}
          onChange={(e)=>this.setState({pSelectCategory:e.target.value})}
          displayEmpty
        >
<MenuItem id='val' value="הלבשה">הלבשה</MenuItem>
<MenuItem id='val' value='גאדגטים ואלקטרוניקה'>גאדגטים ואלקטרוניקה</MenuItem>
<MenuItem id='val' value="מתנות בעיצוב">מתנות בעיצוב</MenuItem>
<MenuItem id='val' value="כוסות ספלים ובקבוקים">כוסות ספלים ובקבוקים</MenuItem>
<MenuItem id='val' value="כובעים ומוצרי טקסטיל">כובעים ומוצרי טקסטיל</MenuItem>
<MenuItem id='val' value="תיקים ומוצרים למשרד">תיקים ומוצרים למשרד</MenuItem>
<MenuItem id='val' value="מוצרי מטבח ואירוח לבית">מוצרי מטבח ואירוח לבית</MenuItem>
<MenuItem id='val' value="הדפסת תמונות מעוצבות">הדפסת תמונות מעוצבות</MenuItem>


         

          
        </Select>
      </FormControl>

      <FormControl  variant="standard" id='select-time-start'>
        <InputLabel id="product-label" error={this.state.pSubcategoryE} shrink > תת קטגוריה </InputLabel>

        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.pSubcategory}
          onChange={(e)=>this.setState({pSubcategory:e.target.value})}
          displayEmpty
        >
          {this.props.subcategoryList.map((item,index)=>{
            return <MenuItem id='val' value={item}>{item.name}</MenuItem>

          })}
{/* <MenuItem id='val' value="חולצות">חולצות</MenuItem>
<MenuItem id='val' value='כובעים'>כובעים</MenuItem>
<MenuItem id='val' value="כוסות">כוסות</MenuItem> */}

         

          
        </Select>
      </FormControl>
         </div>
         <br/>
        {this.state.newColor?( <ProductImageSelect addImg={this.addImg} class='new'/>
):(
<button className='product-add-img-btn' onClick={()=>this.setState({newColor:true})} >הוסף צבע</button>
)}

{this.state.imgs.map((item,index)=>{
  return <ProductImgItem key={index} item={item}classId='img-color-product' />
})}
      <br/>
      <button onClick={this.handleAddProduct} id='product-add-new-btn'>הוספה</button>
      
      </div>
   



     </>
    );
  }
}
