import React, { Component } from 'react';
import axios from 'axios';
import ProductImgItem from './ProductImgItem';
import Config from '../../config/config';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ProductImageSelect from '../Admin/productImageSelect';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import './ProductImgItem.css';
export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      update: false,
      name:this.props.item.name,
      nameE:false,
      price:this.props.item.price,
      priceE:false,
      discription:this.props.item.discription,
      discriptionE:false,
      category:this.props.item.category,
      categoryE:false,
      subcategory:this.props.item.Subcategory,
      subcategoryE:false,
      inStock:this.props.item.InStock,
      inStockE:false,
      imgs:this.props.productImage,
      addImg:false,
      size:this.props.item.size
    }


    this.handelOpen = this.handelOpen.bind(this);
    this.handelDelete = this.handelDelete.bind(this);
    this.handelUpdate = this.handelUpdate.bind(this);
    this.handelNameChange = this.handelNameChange.bind(this);
    this.handelPriceChange = this.handelPriceChange.bind(this);
    this.handelDiscriptionChange = this.handelDiscriptionChange.bind(this);
    this.handelCategoryChange = this.handelCategoryChange.bind(this);
    this.handelUpdateChanges = this.handelUpdateChanges.bind(this);
    this.handelDeleteImg = this.handelDeleteImg.bind(this);
    this.handelAddImg = this.handelAddImg.bind(this);
    this.handelSubcategoryChange = this.handelSubcategoryChange.bind(this);
    
    this.handelStockChange = this.handelStockChange.bind(this);

  }
  handelAddImg(front, back,color){
 
    const postData = {
      front:front,
      back:back,
      color: color
   
  };
    axios.post(Config.getServerPath() + 'product/addimg/' + this.props.item._id,postData)
    .then(res => {
      if (res.data.status === 400) {
        console.log('error')
        return
      }
      this.props.updateProductList(res.data.productList);


    })
    .catch(() => {
      console.log('send')
    });
   
  }
  handelDeleteImg(img){
    const index=this.state.imgs.indexOf(img);
    if(index!==-1){
      this.state.imgs.splice(index, 1);
      // this.setState({imgs:this.state.imgs})
     }
  }
  handelCategoryChange(e){
    e.preventDefault();
    this.setState({ category: e.target.value },()=>{
      if(this.state.category==='')
      this.setState({categoryE:true})
    else{
      this.handelUpdateChanges()
      this.setState({categoryE:false})
  
      }
     
    })
  
  }
  handelSubcategoryChange(e){
    e.preventDefault();
    this.setState({ subcategory: e.target.value },()=>{
      if(this.state.subcategory==='')
      this.setState({subcategoryE:true})
    else{
      this.handelUpdateChanges()
      this.setState({subcategoryE:false})
  
      }
     
    })
  
  }
  handelDiscriptionChange(e){
    e.preventDefault();
    this.setState({ discription: e.target.value },()=>{
      if(this.state.discription==='')
      this.setState({discriptionE:true})
    else{
      this.handelUpdateChanges()
      this.setState({discriptionE:false})
  
      }
     
    })
  
  }
  handelPriceChange(e){
    e.preventDefault();
    this.setState({ price: e.target.value },()=>{
      if(new String(this.state.price).trim()==='')
      this.setState({priceE:true})
    else{
      this.handelUpdateChanges()
      this.setState({priceE:false})
  
      }
     
    })
  
  }

handelNameChange(e){
  e.preventDefault();
  this.setState({ name: e.target.value },()=>{
    if(this.state.name==='')
    this.setState({nameE:true})
  else{
    this.handelUpdateChanges()
    this.setState({nameE:false})

    }
   
  })

}
handelStockChange(e){
  e.preventDefault();
  this.setState({ inStock: e.target.value },()=>{

    this.handelUpdateChanges()

    
   
  })

}
  handelOpen() {
    this.setState({ open: !this.state.open })
  }
  handelUpdateChanges() {
    this.setState({ update: false})

    if(this.state.name.trim()!== this.props.item.name.trim()){
      this.setState({ update: true})
    } 
    if(new String(this.state.price).trim()!==new String(this.props.item.price).trim()){
      this.setState({ update: true})
    } 
    // if(this.state.discription.trim()!==this.props.item.discription.trim()){
    //   this.setState({ update: true})
    // } 
    if(this.state.category.trim()!==this.props.item.category.trim()){
      this.setState({ update: true})
    } 
    console.log(this.state.subcategory.name)
    if(this.state.subcategory.name.trim()!==this.props.item.Subcategory.name.trim()){
      this.setState({ update: true})
    } 
    if(new String(this.state.inStock).trim()!==new String(this.props.item.InStock).trim()){
      this.setState({ update: true})
    } 
  }
  handelUpdate(){
    const postData = {
      name:this.state.name,
      discription:this.state.discription,
      category: this.state.category,
      price:this.state.price,
      productImage:this.state.imgs,
      subcategory:this.state.subcategory,
      size:this.state.size,
      InStock:this.state.inStock

  };
    axios.post(Config.getServerPath() + 'product/update/' + this.props.item._id,postData)
    .then(res => {
      if (res.data.status === 400) {
        console.log('error')
        return
      }
      this.props.updateProductList(res.data.productList);
      this.setState({update:false})


    })
    .catch(() => {
      console.log('send')
    });
  }
  handelDelete() {

    axios.delete(Config.getServerPath() + 'product/delete/' + this.props.item._id)
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        this.props.updateProductList(res.data.productList);


      })
      .catch(() => {
        console.log('send')
      });
  }
  render() {
    return (
      <>
        <div className='product-btns'>
          <button className='product-open' style={this.state.open ? { borderRadius: '5px' } : {}} onClick={this.handelOpen}>{this.props.item.name}</button>
          <button className='product-delete' onClick={this.handelDelete}><span class="iconify" data-icon="fluent:delete-dismiss-28-filled"></span></button>
          <button className='product-update' hidden={!this.state.update} onClick={this.handelUpdate}><span class="iconify" data-icon="akar-icons:edit"></span></button>

        </div>
        <div hidden={this.state.open}>
          <div id='item-product'>

            <div id='item-product-input'>
              <FormControl className='form'>
                <InputLabel id="product-lable" htmlFor="product">שם פריט</InputLabel>
                <Input aria-describedby="helper" error={this.state.nameE} required type='text' id="product" value={this.state.name} onChange={this.handelNameChange} />
                {this.state.nameE ? <FormHelperText error={this.state.nameE} id="helper">חסר שם פריט</FormHelperText> : ''}
              </FormControl>     
              <FormControl className='form'>
                <InputLabel id="product-lable" htmlFor="product">מחיר</InputLabel>
                <Input aria-describedby="helper" error={this.state.priceE} required type='number' id="product" value={this.state.price} onChange={this.handelPriceChange} />
                {this.state.priceE ? <FormHelperText error={this.state.priceE} id="helper">חסר מחיר </FormHelperText> : ''}
              </FormControl>     
              <FormControl className='form'>
                <InputLabel id="product-lable" htmlFor="product">תיאור</InputLabel>
                <Input aria-describedby="helper" error={this.state.discriptionE} required type='text' id="product" value={this.state.discription} onChange={this.handelDiscriptionChange} />
                {this.state.discriptionE ? <FormHelperText error={this.state.discriptionE} id="helper">חסר תיאור </FormHelperText> : ''}
              </FormControl>    
              <FormControl  variant="standard" id='select-time-start'>
        <InputLabel id="product-label" error={this.state.categoryE} shrink >קטגוריה </InputLabel>

        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.state.category}
          onChange={this.handelCategoryChange}
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
        <InputLabel id="product-label" error={this.state.subcategoryE} shrink >תת קטגוריה </InputLabel>

        <Select
        required
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
          value={this.props.item.Subcategory}
          onChange={this.handelSubcategoryChange}
          displayEmpty
        >
          <MenuItem id='val' value={this.props.item.Subcategory}>{this.props.item.Subcategory.name}</MenuItem>
  {this.props.subcategoryList.map((item,index)=>{
    if(this.props.item.Subcategory.name.trim()!==item.name.trim())
            return <MenuItem id='val' value={item}>{item.name}</MenuItem>

          })}

         

          
        </Select>
      </FormControl>
      <FormControl
 >
  <RadioGroup
    aria-label="stock"
    defaultValue={this.state.inStock}
    name="radio-buttons-group"
    onChange={this.handelStockChange}
    itemProp={{id:'stock-form-input'}}
    className='stock-form-input'
  >
    <div  className='stock-form'
>
    <FormControlLabel className='stock-form-input' value={true} control={<Radio />} label="במלאי" />
    <FormControlLabel id='stock-form-input' itemProp={{id:'stock-form-input'}} value={false} control={<Radio />} label="לא במלאי" />
    </div>
  </RadioGroup>
</FormControl>
              {/* <div className='div-item-img'> */}
            </div>
            {this.props.item.productImage.map((item, index) => {
              return (<ProductImgItem item={item} updateProductList={this.props.updateProductList} key={index} classId='img-color-All-product' />)
            })}
            {/* </div> */}

            <button onClick={()=>{this.setState({addImg:!this.state.addImg})}} id='add-img-btn'> <span class="iconify"  id='iconify-add-img'data-icon="entypo:add-to-list"></span></button>
        {this.state.addImg?( <ProductImageSelect addImg={this.handelAddImg} class='old'/>):''} 
          </div>
        </div>
    
      </>
    );
  }
}
