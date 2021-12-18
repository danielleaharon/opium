import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'

import Product from '../Product/Product'
import axios from 'axios';
import Config from '../../config/config';

import 'react-alice-carousel/lib/alice-carousel.css';

import './Products.css';


export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      subCategory: null,
      productList: [],
      listClothing: [],
      listElectronics: [],
      listGift: [],
      listCup: [],
      listHat: [],
      listBags: [],
      listKitchen: [],
      listImageProduct: [],



    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickSubCategory = this.handleClickSubCategory.bind(this);

  }
  UNSAFE_componentWillReceiveProps(){
    console.log(this.props.category)

  }
  componentDidMount() {

console.log(this.props.category)
    axios.post(Config.getServerPath() + 'product/all')
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        this.setState({ productList: res.data.productList })
        const ListClothing = [];
        const ListElectronics = [];
        const ListGift = [];
        const ListCup = [];
        const ListHat = [];
        const ListBags = [];
        const ListKitchen = [];
        const ListImageProduct = [];
        res.data.productList.map((item, index) => {
          if (item.category === 'הלבשה') {
            if (ListClothing.indexOf(item.Subcategory.name) === -1) {
              ListClothing.push(item.Subcategory.name)
            }

          }
          if (item.category === 'כובעים ומוצרי טקסטיל') {
            if (ListHat.indexOf(item.Subcategory.name) === -1) {
              ListHat.push(item.Subcategory.name)
            }

          }
          if (item.category === 'תיקים ומוצרים למשרד') {
            if (ListBags.indexOf(item.Subcategory.name) === -1) {
              ListBags.push(item.Subcategory.name)
            }

          }
          if (item.category === 'מוצרי מטבח ואירוח לבית') {
            if (ListKitchen.indexOf(item.Subcategory.name) === -1) {
              ListKitchen.push(item.Subcategory.name)
            }

          }
          if (item.category === 'הדפסת תמונות מעוצבות') {
            if (ListImageProduct.indexOf(item.Subcategory.name) === -1) {
              ListImageProduct.push(item.Subcategory.name)
            }

          }
          if (item.category === 'כוסות ספלים ובקבוקים') {
            if (ListCup.indexOf(item.Subcategory.name) === -1) {
              ListCup.push(item.Subcategory.name)
            }

          }
          if (item.category === 'גאדגטים ואלקטרוניקה') {
            if (ListElectronics.indexOf(item.Subcategory.name) === -1) {
              ListElectronics.push(item.Subcategory.name)
            }
          }

          if (item.category === 'מתנות בעיצוב') {
            if (ListGift.indexOf(item.Subcategory.name) === -1) {
              ListGift.push(item.Subcategory.name)
            }

          }

        })

        this.setState({ listClothing: ListClothing })
        this.setState({ listElectronics: ListElectronics })
        this.setState({ listCup: ListCup })
        this.setState({ listHat: ListHat })
        this.setState({ listBags: ListBags })
        this.setState({ listKitchen: ListKitchen })
        this.setState({ listImageProduct: ListImageProduct })
        this.setState({ listGift: ListGift })
        const categoryHerf=window.location.pathname.split('/')[2].toLowerCase();
        console.log(window.location)
        if(categoryHerf.match('shirt'))
        {
          this.setState({category:'הלבשה'},()=>{
            console.log(this.state.category)
          })
        }





      })
      .catch(() => {
        console.log('send')
      });
  }
  handleClick(categorySelect) {

    this.setState({ category: categorySelect });
    this.setState({ subCategory: null });

  }
  handleClickSubCategory(categorySelect,subCategorySelect) {
    this.setState({ category: categorySelect });
    this.setState({ subCategory: subCategorySelect });

  }

  render() {
    return (

      <div className='Products'>

        <div className='print-category' >
          <div  className='cubeC' >
          {/* <button className=' cube-caps' onClick={() => this.handleClick('הלבשה')} id={this.state.category === 'הלבשה' ? 'clicked-red' : ''} > */}
            {/* <img src={Shirt3} ></img> */}
            {/* </button> */}

            <div className='row-menu' >
              <span className='text-all border-red' id={this.state.category === 'הלבשה' ? 'clicked-red' : ''} onClick={() => this.handleClick('הלבשה')}>הלבשה  <span className="iconify" id='icon-category' data-icon="ion:shirt-sharp"></span> </span>
              <div className='category-dropdown dropdown-red'>
                <div id="mask"></div>
                { this.state.listClothing.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('הלבשה',item)}>{item}<hr/></button>

                  })}


              </div>
            </div>
       
          </div>
         
          <div className='cubeC'  >
            {/* <img src={Electronics} ></img> */}

            <div className='row-menu' >
              <span onClick={() => this.handleClick('גאדגטים ואלקטרוניקה')} id={this.state.category === 'גאדגטים ואלקטרוניקה' ? 'clicked-redpink' : ''} className='text-all border-red-pink'> גאדגטים ואלקטרוניקה <span className="iconify" id='icon-category' data-icon="fa-solid:headphones"></span></span>
              <div className='category-dropdown dropdown-redpink'>
                <div id="mask"></div>

                {
                  this.state.listElectronics.map((item, index) => {

                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('גאדגטים ואלקטרוניקה', item)}>{item}</button>


                  })}


              </div>

            </div>
          </div>
          <div className='cubeC' >

            <div className='row-menu'>
              <span className='text-all border-pink'  id={this.state.category === 'מתנות בעיצוב' ? 'clicked-pink' : ''} onClick={() => this.handleClick('מתנות בעיצוב')}> מתנות בעיצוב <span className="iconify" id='icon-category' data-icon="fa-solid:gift"></span></span>
              <div className='category-dropdown dropdown-pink'>
                <div id="mask"></div>
                {
                  this.state.listGift.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('מתנות בעיצוב ', item)}>{item}</button>


                  })}



              </div>
            </div>
          </div>


          <div className='cubeC'  >
            {/* <img src={Cup} ></img> */}

            <div className='row-menu'>
              <span className='text-all border-purple' id={this.state.category === 'כוסות ספלים ובקבוקים' ? 'clicked-purple' : ''} onClick={() => this.handleClick('כוסות ספלים ובקבוקים')}>כוסות ספלים ובקבוקים <span className="iconify" id='icon-category' data-icon="teenyicons:cup-solid"></span></span>
              <div className='category-dropdown dropdown-purple'>
                <div id="mask"></div>
                {
                  this.state.listCup.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('כוסות ספלים ובקבוקים', item)}>{item}</button>


                  })}


              </div>
            </div>
          </div>
          <div className='cubeC'>

            <div className='row-menu'>
              <span id={this.state.category === 'כובעים ומוצרי טקסטיל' ? 'clicked-bluepurple' : ''}  onClick={() => this.handleClick('כובעים ומוצרי טקסטיל')}className='text-all border-bluepurple'  >  כובעים ומוצרי טקסטיל <span className="iconify" id='icon-category' data-icon="fa-solid:hat-cowboy"></span></span>
              <div className='category-dropdown dropdown-bluepurple'>
                <div id="mask"></div>
                {
                  this.state.listHat.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('כובעים ומוצרי טקסטיל', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC'  >
            {/* <img src={Office} ></img> */}

            <div className='row-menu'>
              <span id={this.state.category === 'תיקים ומוצרים למשרד' ? 'clicked-blue' : ''} className='text-all border-blue' onClick={() => this.handleClick('תיקים ומוצרים למשרד')}>  תיקים ומוצרים למשרד <span className="iconify" id='icon-category' data-icon="fluent:backpack-24-filled"></span></span>
              <div className='category-dropdown dropdown-blue'>
                <div id="mask"></div>
                {
                  this.state.listBags.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('תיקים ומוצרים למשרד', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC'  >
            {/* <img src={Kit} ></img> */}

            <div className='row-menu'>
              <span className='text-all border-green' id={this.state.category === 'מוצרי מטבח ואירוח לבית' ? 'clicked-green' : ''} onClick={() => this.handleClick('מוצרי מטבח ואירוח לבית')}> מוצרי מטבח ואירוח לבית<span className="iconify" id='icon-category' data-icon="ic:baseline-soup-kitchen"></span></span>
              <div className='category-dropdown dropdown-green'>
                <div id="mask"></div>
                {
                  this.state.listKitchen.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('מוצרי מטבח ואירוח לבית', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC'  >
            {/* <img src={Key} ></img> */}

            <div className='row-menu'>
              <span className='text-all border-greenorange' id={this.state.category === 'הדפסת תמונות מעוצבות' ? 'clicked-greenorange' : ''} onClick={() => this.handleClick('הדפסת תמונות מעוצבות')}>  הדפסת תמונות מעוצבות <span className="iconify" id='icon-category' data-icon="bi:file-earmark-image-fill"></span></span>
              <div className='category-dropdown dropdown-greenorange'>
                <div id="mask"></div>
                {
                  this.state.listGift.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => this.handleClickSubCategory('הדפסת תמונות מעוצבות', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC' onClick={() => this.handleClick('all')}  >
            {/* <img src={All} ></img> */}

            <div className='row9' >
              <span id={this.state.category === 'all' ? 'clicked-orange' : ''} className='text-all border-orange'> כל המוצרים</span>
         
            </div>

          </div>

        </div>
        <div className='product-details'>
          {this.props.Ondesign?
          <Product productList={this.state.productList}  width={this.props.width} Ondesign={this.props.Ondesign} pickProduct={this.props.pickProduct}  category={this.state.category} subCategory={this.state.subCategory}  addToCart={this.props.addToCart}
              deleteFromCart={this.props.deleteFromCart} />:
                 <Product  productList={this.state.productList}  width={this.props.width} Ondesign={this.props.Ondesign} category={this.state.category} subCategory={this.state.subCategory}  addToCart={this.props.addToCart}
              deleteFromCart={this.props.deleteFromCart} />}
        </div>
      </div>

    );
  }
}
