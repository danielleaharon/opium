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
import NewProduct from './newProduct';
import HomeImage from './HomeImage';

import Config from '../../config/config';
import './Admin.css';
export default class Admin extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            pName:'',
            pNameE:false,
            pPrice:'',
            pPriceE:false,
            pDiscription:'',
            pDiscriptionE:false,
            pSelectCategory:10,
            pImage:'',
            pImageE:false,
            add:false,
            productList:[],
            imgs:[],
            newColor:false,
            homeImage:false

        }
       
        this.ClearError=this.ClearError.bind(this);
     
        this.openNew=this.openNew.bind(this);
     
        this.updateProductList=this.updateProductList.bind(this);


    }
    componentDidMount(){

      // var item=[];
      // var front='https://firebasestorage.googleapis.com/v0/b/opium-37022.appspot.com/o/product%2Fmen_front_blue.png?alt=media&token=dac788b2-ac5d-4b51-b615-b7530bbeebeb';
      // var back='https://firebasestorage.googleapis.com/v0/b/opium-37022.appspot.com/o/product%2Fmen_back_blue.png?alt=media&token=a29bb95a-8e90-4ccc-8fd6-32cc74ece5ab';
      // var color='blue'
      // item.push({front,back,color});
      // var front='https://firebasestorage.googleapis.com/v0/b/opium-37022.appspot.com/o/product%2Fmen_front.png?alt=media&token=4586cb18-0c02-4cf9-b15c-76fcdbaacb15';
      // var back='https://firebasestorage.googleapis.com/v0/b/opium-37022.appspot.com/o/product%2Fmen_back.png?alt=media&token=81224806-4e13-48b2-964e-5a73593a1660';
      // var color='white'
      // item.push({front,back,color});
      // this.setState({imgs:item});
      axios.post(Config.getServerPath()+'product/all')
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.setState({productList:res.data.productList})
  

      })
      .catch(() => {    console.log('send')
    }   );
    }
    ClearError(){

      this.setState({pNameE:false})
      this.setState({pPriceE:false})
      this.setState({pDiscriptionE:false})
      this.setState({pSelectCategoryE:false})
      this.setState({pImageE:false})

  
  
    }
   
    updateProductList(list){
      this.setState({productList:list})

    }
  
    openNew(){

      this.setState({add:!this.state.add});
    }
 
      render() {
    return (
        
        <div className='admin-dashborad'>
       <p>דף ניהול</p>
 <button onClick={()=>this.setState({homeImage:!this.state.homeImage})} id='product-add-new-btn'> תמונות עמוד ראשי</button>
 {this.state.homeImage?(<HomeImage/>):''}
<button onClick={this.openNew} id='product-add-new-btn'>מוצר חדש</button>
{this.state.add?(<NewProduct updateProductList={this.updateProductList}/>):''}


<p id='product-list-title'>רשימת מוצרים</p>
      <div id='list1' >  
      {this.state.productList.filter(p=>p.category==('חולצות')).length!==0?<p className='product-list-category'>חולצות</p>:''}
{this.state.productList.filter(p=>p.category==('חולצות')).map((item,index)=>{
  return(
    <ProductItem item={item} key={index} updateProductList={this.updateProductList}/>
  )
})}
      {this.state.productList.filter(p=>p.category==('כובעים')).length!==0?<p className='product-list-category'>כובעים</p>:''}

{this.state.productList.filter(p=>p.category==('כובעים')).map((item,index)=>{
  return(
    <ProductItem item={item} key={index} updateProductList={this.updateProductList}/>
  )
})}

      </div>

      </div>
    );
  }
}
