import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'

import Product from '../Product/Product'
import axios from 'axios';
import Config from '../../config/config';

import 'react-alice-carousel/lib/alice-carousel.css';

import './Products.css';

// function History(herf){
//   const h= useHistory();
//   h.replace('/'+herf)

// }
export default function Products(props) {

    const[state,setState]=React.useState({
      category: '',
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
    })
//  const[categorySelect,setCategorySelect]=React.useState({
//   category: '',
//   subCategory: null,
//  })
    const History= useHistory();
 React.useEffect( ()=> {
  //  async function update(){
  // await  UpdateHerf();

  //  }
  //  update();
// console.log(props.category)
async function data(){
    await  axios.post(Config.getServerPath() + 'product/all')
      .then(async res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        // setState({...state, productList: res.data.productList })
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
            // setState({...state, listClothing: ListClothing })

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
        const state1={ listClothing:ListClothing ,listElectronics: ListElectronics
          ,listCup:ListCup
          ,listHat:ListHat
          , listBags:ListBags
          ,listKitchen:ListKitchen
          , listImageProduct:ListImageProduct
          , listGift:ListGift ,productList: res.data.productList ,
        
        }
        const categorySelect= UpdateHerf(state1);

          setState({...state, listClothing:ListClothing ,listElectronics: ListElectronics
          ,listCup:ListCup
          ,listHat:ListHat
          , listBags:ListBags
          ,listKitchen:ListKitchen
          , listImageProduct:ListImageProduct
          , listGift:ListGift ,productList: res.data.productList ,
          category:(await categorySelect).category,subCategory:(await categorySelect).subCategory
        })
      


  

      })
      .catch((err) => {
        console.log(err)
      });
    }
  data();

  },[])
  React.useEffect(()=>{
    async function update(){
     await UpdateHerf(state);

    }
    update();
  },[window.location.pathname])
  const UpdateHerf= async (state)=>{

    const categoryHerf=window.location.pathname.split('/')[2].toLowerCase();
    const subCategoryHerf=window.location.pathname.split('/')[3].toLowerCase();
    // if(categoryHerf.match('shirt'))
    // {
    //   setState({...state,category:'הלבשה'})
      // if(!subCategoryHerf.match('all'))
      // {

      //   setState({...state,subCategory:state.listClothing.at(subCategoryHerf)})
      // }
      // else{
      //   setState({...state,subCategory:null})

      // }
      
    // }
    if(categoryHerf.match('shirt'))
    {     

      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'הלבשה',subCategory:state.listClothing.at(subCategoryHerf)})
        return({...state,category:'הלבשה',subCategory:state.listClothing.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'הלבשה',subCategory:null})
        return({...state,category:'הלבשה',subCategory:null})

      }
    }
    if(categoryHerf.match('all'))
    {
      setState({...state,category:'all',subCategory:null})
      return {...state,category:'all',subCategory:null}
    }
    if(categoryHerf.match('electronic')){
      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'גאדגטים ואלקטרוניקה',subCategory:state.listElectronics.at(subCategoryHerf)})
        return({...state,category:'גאדגטים ואלקטרוניקה',subCategory:state.listElectronics.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'גאדגטים ואלקטרוניקה',subCategory:null})
        return({...state,category:'גאדגטים ואלקטרוניקה',subCategory:null})

      }
    }
    if(categoryHerf.match('gift')){

      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'מתנות בעיצוב',subCategory:state.listGift.at(subCategoryHerf)})
        return({...state,category:'מתנות בעיצוב',subCategory:state.listGift.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'מתנות בעיצוב',subCategory:null})
        return({...state,category:'מתנות בעיצוב',subCategory:null})

      }
    }
    if(categoryHerf.match('cups')){
      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'כוסות ספלים ובקבוקים',subCategory:state.listCup.at(subCategoryHerf)})
        return({...state,category:'כוסות ספלים ובקבוקים',subCategory:state.listCup.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'כוסות ספלים ובקבוקים',subCategory:null})
        return({...state,category:'כוסות ספלים ובקבוקים',subCategory:null})

      }
    }
    if(categoryHerf.match('caps')){
      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'כובעים ומוצרי טקסטיל',subCategory:state.listHat.at(subCategoryHerf)})
        return({...state,category:'כובעים ומוצרי טקסטיל',subCategory:state.listHat.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'כובעים ומוצרי טקסטיל',subCategory:null})
        return({...state,category:'כובעים ומוצרי טקסטיל',subCategory:null})


      }
    }
    if(categoryHerf.match('bags')){
      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'תיקים ומוצרים למשרד',subCategory:state.listBags.at(subCategoryHerf)})
        return({...state,category:'תיקים ומוצרים למשרד',subCategory:state.listBags.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'תיקים ומוצרים למשרד',subCategory:null})
        return({...state,category:'תיקים ומוצרים למשרד',subCategory:null})

      }
    }
    if(categoryHerf.match('kitchen')){
      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'מוצרי מטבח ואירוח לבית',subCategory:state.listKitchen.at(subCategoryHerf)})
        return({...state,category:'מוצרי מטבח ואירוח לבית',subCategory:state.listKitchen.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'מוצרי מטבח ואירוח לבית',subCategory:null})
        return({...state,category:'מוצרי מטבח ואירוח לבית',subCategory:null})

      }
    }
    if(categoryHerf.match('image')){
      if(!subCategoryHerf.match('all'))
      {

        setState({...state,category:'הדפסת תמונות מעוצבות',subCategory:state.listImageProduct.at(subCategoryHerf)})
        return({...state,category:'הדפסת תמונות מעוצבות',subCategory:state.listImageProduct.at(subCategoryHerf)})

      }
      else{
        setState({...state,category:'הדפסת תמונות מעוצבות',subCategory:null})
        return({...state,category:'הדפסת תמונות מעוצבות',subCategory:null})

      }
    }
  }


   const HistoryReplace=(categorySelect,subCategorySelect)=>{

    if(categorySelect==='הלבשה'){
      if(subCategorySelect!==null){
       const index= state.listClothing.indexOf(subCategorySelect)
      History.replace('/Products/shirt/'+index)
      }
      else{
        History.replace('/Products/shirt/all')

      }

    }
    if(categorySelect==='all'){
      History.replace('/Products/All/all')

    }  
    if(categorySelect==='גאדגטים ואלקטרוניקה'){
      if(subCategorySelect!==null){
        const index= state.listElectronics.indexOf(subCategorySelect)
       History.replace('/Products/electronic/'+index)
       }
       else{
        History.replace('/Products/electronic/all')
 
       }

    }
    if(categorySelect==='מתנות בעיצוב'){
      if(subCategorySelect!==null){
        const index= state.listGift.indexOf(subCategorySelect)
       History.replace('/Products/gift/'+index)
       }
       else{
        History.replace('/Products/gift/all')
 
       }

    }
    if(categorySelect==='כוסות ספלים ובקבוקים'){
      if(subCategorySelect!==null){
        const index= state.listCup.indexOf(subCategorySelect)
       History.replace('/Products/cups/'+index)
       }
       else{
        History.replace('/Products/cups/all')
 
       }
    }
    if(categorySelect==='כובעים ומוצרי טקסטיל'){
      if(subCategorySelect!==null){
        const index= state.listHat.indexOf(subCategorySelect)
       History.replace('/Products/caps/'+index)
       }
       else{
        History.replace('/Products/caps/all')
 
       }

    }
    if(categorySelect==='תיקים ומוצרים למשרד'){
      if(subCategorySelect!==null){
        const index= state.listBags.indexOf(subCategorySelect)
       History.replace('/Products/bags/'+index)
       }
       else{
        History.replace('/Products/bags/all')
 
       }

    }
    if(categorySelect==='מוצרי מטבח ואירוח לבית'){
      if(subCategorySelect!==null){
        const index= state.listKitchen.indexOf(subCategorySelect)
       History.replace('/Products/kitchen/'+index)
       }
       else{
        History.replace('/Products/kitchen/all')
 
       }

    }
    if(categorySelect==='הדפסת תמונות מעוצבות'){
      if(subCategorySelect!==null){
        const index= state.listImageProduct.indexOf(subCategorySelect)
       History.replace('/Products/image/'+index)
       }
       else{
        History.replace('/Products/image/all')
 
       }

    }
  }
  const handleClick=(categorySelect)=> {

    // History('/shirt');
    // setState({...state, category: categorySelect });
    // setState({ ...state,subCategory: null });
    HistoryReplace(categorySelect,null)

  }
  const handleClickSubCategory=(categorySelect,subCategorySelect)=> {
  //   setState({...state, category: categorySelect });
  //  setState({ ...state,subCategory: subCategorySelect });
   HistoryReplace(categorySelect,subCategorySelect)

  }
  


    return (

      <div className='Products'>

        <div className='print-category' >
          <div  className='cubeC' >
          {/* <button className=' cube-caps' onClick={() => this.handleClick('הלבשה')} id={this.state.category === 'הלבשה' ? 'clicked-red' : ''} > */}
            {/* <img src={Shirt3} ></img> */}
            {/* </button> */}

            <div className='row-menu' >
              <span className='text-all border-red' id={state.category === 'הלבשה' ? 'clicked-red' : ''} onClick={() => handleClick('הלבשה')}>הלבשה  <span class="iconify" id='icon-category' data-icon="ion:shirt-sharp"></span> </span>
              <div className='category-dropdown dropdown-red'>
                <div id="mask"></div>
                { state.listClothing.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() =>handleClickSubCategory('הלבשה',item)}>{item}<hr/></button>

                  })}


              </div>
            </div>
       
          </div>
         
          <div className='cubeC'  >
            {/* <img src={Electronics} ></img> */}

            <div className='row-menu' >
              <span onClick={() => handleClick('גאדגטים ואלקטרוניקה')} id={state.category === 'גאדגטים ואלקטרוניקה' ? 'clicked-redpink' : ''} className='text-all border-red-pink'> גאדגטים ואלקטרוניקה <span class="iconify" id='icon-category' data-icon="fa-solid:headphones"></span></span>
              <div className='category-dropdown dropdown-redpink'>
                <div id="mask"></div>

                {
                  state.listElectronics.map((item, index) => {

                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('גאדגטים ואלקטרוניקה', item)}>{item}</button>


                  })}


              </div>

            </div>
          </div>
          <div className='cubeC' >

            <div className='row-menu'>
              <span className='text-all border-pink'  id={state.category === 'מתנות בעיצוב' ? 'clicked-pink' : ''} onClick={() => handleClick('מתנות בעיצוב')}> מתנות בעיצוב <span class="iconify" id='icon-category' data-icon="fa-solid:gift"></span></span>
              <div className='category-dropdown dropdown-pink'>
                <div id="mask"></div>
                {
                  state.listGift.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('מתנות בעיצוב ', item)}>{item}</button>


                  })}



              </div>
            </div>
          </div>


          <div className='cubeC'  >
            {/* <img src={Cup} ></img> */}
{/* {console.log(state.category)} */}
            <div className='row-menu'>
              <span className='text-all border-purple' id={state.category === 'כוסות ספלים ובקבוקים' ? 'clicked-purple' : ''} onClick={() => handleClick('כוסות ספלים ובקבוקים')}>כוסות ספלים ובקבוקים <span class="iconify" id='icon-category' data-icon="teenyicons:cup-solid"></span></span>
              <div className='category-dropdown dropdown-purple'>
                <div id="mask"></div>
                {
                 state.listCup.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('כוסות ספלים ובקבוקים', item)}>{item}</button>


                  })}


              </div>
            </div>
          </div>
          <div className='cubeC'>

            <div className='row-menu'>
              <span id={state.category === 'כובעים ומוצרי טקסטיל' ? 'clicked-bluepurple' : ''}  onClick={() => handleClick('כובעים ומוצרי טקסטיל')}className='text-all border-bluepurple'  >  כובעים ומוצרי טקסטיל <span class="iconify" id='icon-category' data-icon="fa-solid:hat-cowboy"></span></span>
              <div className='category-dropdown dropdown-bluepurple'>
                <div id="mask"></div>
                {
                  state.listHat.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('כובעים ומוצרי טקסטיל', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC'  >
            {/* <img src={Office} ></img> */}

            <div className='row-menu'>
              <span id={state.category === 'תיקים ומוצרים למשרד' ? 'clicked-blue' : ''} className='text-all border-blue' onClick={() => handleClick('תיקים ומוצרים למשרד')}>  תיקים ומוצרים למשרד <span class="iconify" id='icon-category' data-icon="fluent:backpack-24-filled"></span></span>
              <div className='category-dropdown dropdown-blue'>
                <div id="mask"></div>
                {
                  state.listBags.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('תיקים ומוצרים למשרד', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC'  >
            {/* <img src={Kit} ></img> */}

            <div className='row-menu'>
              <span className='text-all border-green' id={state.category === 'מוצרי מטבח ואירוח לבית' ? 'clicked-green' : ''} onClick={() => handleClick('מוצרי מטבח ואירוח לבית')}> מוצרי מטבח ואירוח לבית<span class="iconify" id='icon-category' data-icon="ic:baseline-soup-kitchen"></span></span>
              <div className='category-dropdown dropdown-green'>
                <div id="mask"></div>
                {
                  state.listKitchen.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('מוצרי מטבח ואירוח לבית', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC'  >
            {/* <img src={Key} ></img> */}

            <div className='row-menu'>
              <span className='text-all border-greenorange' id={state.category === 'הדפסת תמונות מעוצבות' ? 'clicked-greenorange' : ''} onClick={() => handleClick('הדפסת תמונות מעוצבות')}>  הדפסת תמונות מעוצבות <span class="iconify" id='icon-category' data-icon="bi:file-earmark-image-fill"></span></span>
              <div className='category-dropdown dropdown-greenorange'>
                <div id="mask"></div>
                {
                 state.listGift.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('הדפסת תמונות מעוצבות', item)}>{item}</button>


                  })}


              </div>
            </div>

          </div>
          <div className='cubeC' onClick={() => handleClick('all')}  >
            {/* <img src={All} ></img> */}

            <div className='row9' >
              <span id={state.category === 'all' ? 'clicked-orange' : ''} className='text-all border-orange'> כל המוצרים</span>
         
            </div>

          </div>

        </div>
        <div className='product-details'>

          {props.Ondesign?
          <Product   productList={state.productList}  width={props.width} Ondesign={props.Ondesign} pickProduct={props.pickProduct}  category={state.category} subCategory={state.subCategory}  addToCart={props.addToCart}
              deleteFromCart={props.deleteFromCart} />:
                 <Product  productList={state.productList} width={props.width} Ondesign={props.Ondesign} category={state.category} subCategory={state.subCategory}  addToCart={props.addToCart}
              deleteFromCart={props.deleteFromCart} />}
        </div>
      </div>

    );
  
}
