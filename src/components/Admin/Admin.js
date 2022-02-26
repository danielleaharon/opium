import React, { Component } from 'react';

import axios from 'axios';

import ProductItem from '../ProductImgItem/ProductItem';
import NewProduct from './newProduct';
import HomeImage from './HomeImage';
import Subcategory from './Subcategory/Subcategory';
import SchoolLogo from './SchoolLogo/SchoolLogo';
import { isAuth, signin } from '../../actions/auth';

import Config from '../../config/config';
import './Admin.css';
export default class Admin extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    
      openNewProduct: false,
      productList: [],
      imgs: [],
      newColor: false,
      homeImage: false,
      subcategory: false,
      subcategoryList: [],
      schoolLogoList: [],
      schoolLogo: false,
      password: '',
      passwordErrorMsg: '',
      haveAcsses: false,
      showPassword: { bool: false, type: 'password' }




    }


    this.openNew = this.openNew.bind(this);

    this.updateProductList = this.updateProductList.bind(this);
    this.updateSubcategoryList = this.updateSubcategoryList.bind(this);
    this.updateSchoolLogoList = this.updateSchoolLogoList.bind(this);
    this.sendPassword = this.sendPassword.bind(this);
    this.handelChangePassword = this.handelChangePassword.bind(this);

    this.handelShowPassword = this.handelShowPassword.bind(this);

  }
  componentDidMount() {
    if (isAuth()) this.setState({ haveAcsses: true })
    axios.post(Config.getServerPath() + 'school/all')
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        this.setState({ schoolLogoList: res.data.schoolLogoList })


      })
      .catch(() => {
        console.log('send')
      });

    axios.post(Config.getServerPath() + 'subcategory/all')
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        this.setState({ subcategoryList: res.data.subcategoryList })


      })
      .catch(() => {
        console.log('send')
      });
    axios.post(Config.getServerPath() + 'product/all')
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        this.setState({ productList: res.data.productList })


      })
      .catch(() => {
        console.log('send')
      });
  }

  handelChangePassword(e) {
    this.setState({ password: e.target.value })


  }
  sendPassword() {

    signin(this.state.password, () => this.setState({ haveAcsses: true }), () => this.setState({ passwordErrorMsg: "הסיסמא לא נכונה" }))

  }
  
  updateSubcategoryList(SubcategorList, flag) {
      axios.post(Config.getServerPath() + 'product/all')
        .then(res => {
          if (res.data.status === 400) {
            console.log('error')
            return
          }
          console.log('update sub')
          this.setState({...this.state, subcategoryList: SubcategorList,productList:res.data.productList })


        })
        .catch(() => {
          console.log('send')
        });
    

  }
  updateSchoolLogoList(list) {
    this.setState({ schoolLogoList: list })

  }
  updateProductList(list) {
    this.setState({ productList: list })

  }

  openNew() {

    this.setState({ openNewProduct:true });
  }
  handelShowPassword() {
    if (this.state.showPassword.bool) {
      this.setState({ showPassword: { bool: false, type: 'password' } })
    } else {
      this.setState({ showPassword: { bool: true, type: 'text' } })

    }

  }

  render() {

    if (!this.state.haveAcsses) {
      return <div className='admin-dashborad password-admin-div'>
        <div className='password-admin-input-div'>
          <input placeholder='על מנת להיכנס הכנס סיסמא...' className='password-admin-input' type={this.state.showPassword.type} value={this.state.password} onChange={this.handelChangePassword} ></input>
          {this.state.showPassword.bool && <button onClick={this.handelShowPassword} className='password-admin-eye'><span className="iconify" data-icon="ant-design:eye-filled"></span></button>}
          {!this.state.showPassword.bool && <button onClick={this.handelShowPassword} className='password-admin-eye'><span className="iconify" data-icon="ant-design:eye-invisible-filled"></span></button>}
        </div>
        <p className='password-admin-error'>{this.state.passwordErrorMsg}</p>
        <button className='password-admin-btn' onClick={this.sendPassword} > שלח </button>
      </div>
    }

    return (

      <div className='admin-dashborad'>
        <p>דף ניהול</p>
        <button onClick={() => this.setState({ homeImage: !this.state.homeImage })} id='product-add-new-btn'> תמונות עמוד ראשי</button>
        {this.state.homeImage ? (<HomeImage />) : ''}
        <button onClick={() => this.setState({ schoolLogo: !this.state.schoolLogo })} id='product-add-new-btn'>  סמל בית ספר</button>
        {this.state.schoolLogo ? (<SchoolLogo updateSchoolLogoList={this.updateSchoolLogoList} schoolLogoList={this.state.schoolLogoList} />) : ''}
        <button onClick={() => this.setState({ subcategory: !this.state.subcategory })} id='product-add-new-btn'>  תתי קטגוריות</button>
        {this.state.subcategory ? (<Subcategory updateSubcategoryList={this.updateSubcategoryList} subcategoryList={this.state.subcategoryList} />) : ''}
        <button onClick={this.openNew} id='product-add-new-btn'>מוצר חדש</button>
       <NewProduct updateProductList={this.updateProductList} openNewProduct={this.state.openNewProduct} handleCloseProduct={()=>{this.setState({openNewProduct:false})}} subcategoryList={this.state.subcategoryList} />
        <a href='/OrderAdmin' id='product-add-new-btn'> לדף ניהול הזמנות </a>

        <p id='product-list-title'>רשימת מוצרים</p>
        <div id='list1' >
          {this.state.productList.filter(p => p.category === ('הלבשה')).length !== 0 ? <p className='product-list-category'>הלבשה</p> : ''}
          {this.state.productList.filter(p => p.category === ('הלבשה')).map((item, index) => {
            return (
              <ProductItem item={item} key={item._id} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}
          {this.state.productList.filter(p => p.category === ('גאדגטים ואלקטרוניקה')).length !== 0 ? <p className='product-list-category'>גאדגטים ואלקטרוניקה</p> : ''}

          {this.state.productList.filter(p => p.category === ('גאדגטים ואלקטרוניקה')).map((item, index) => {
            return (
              <ProductItem item={item} key={item._id} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}

          {this.state.productList.filter(p => p.category === ('מתנות בעיצוב')).length !== 0 ? <p className='product-list-category'>מתנות בעיצוב</p> : ''}
          {this.state.productList.filter(p => p.category === ('מתנות בעיצוב')).map((item, index) => {
            return (
              <ProductItem item={item} key={index} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}

          {this.state.productList.filter(p => p.category === ('כוסות ספלים ובקבוקים')).length !== 0 ? <p className='product-list-category'>כוסות ספלים ובקבוקים</p> : ''}
          {this.state.productList.filter(p => p.category === ('כוסות ספלים ובקבוקים')).map((item, index) => {
            return (
              <ProductItem item={item} key={index} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}

          {this.state.productList.filter(p => p.category === ('כובעים ומוצרי טקסטיל')).length !== 0 ? <p className='product-list-category'>כובעים ומוצרי טקסטיל</p> : ''}
          {this.state.productList.filter(p => p.category === ('כובעים ומוצרי טקסטיל')).map((item, index) => {
            return (
              <ProductItem item={item} key={index} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}

          {this.state.productList.filter(p => p.category === ('תיקים ומוצרים למשרד')).length !== 0 ? <p className='product-list-category'>תיקים ומוצרים למשרד</p> : ''}
          {this.state.productList.filter(p => p.category === ('תיקים ומוצרים למשרד')).map((item, index) => {
            return (
              <ProductItem item={item} key={index} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}

          {this.state.productList.filter(p => p.category === ('מוצרי מטבח ואירוח לבית')).length !== 0 ? <p className='product-list-category'>מוצרי מטבח ואירוח לבית</p> : ''}
          {this.state.productList.filter(p => p.category === ('מוצרי מטבח ואירוח לבית')).map((item, index) => {
            return (
              <ProductItem item={item} key={index} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}

          {this.state.productList.filter(p => p.category === ('הדפסת תמונות מעוצבות')).length !== 0 ? <p className='product-list-category'>הדפסת תמונות מעוצבות</p> : ''}
          {this.state.productList.filter(p => p.category === ('הדפסת תמונות מעוצבות')).map((item, index) => {
            return (
              <ProductItem item={item} key={index} updateProductList={this.updateProductList} subcategoryList={this.state.subcategoryList} />
            )
          })}



        </div>

      </div>
    );
  }
}
