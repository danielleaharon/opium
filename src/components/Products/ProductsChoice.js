import React from 'react';
import { useHistory } from 'react-router-dom'


// import Products from './Products'
import ProductsMobile from './ProductsMobileHooks';
import Products from './ProductsHooks';
import axios from 'axios';
import Config from '../../config/config';

import './Products.css';
export default function ProductsChoice (props) {
  const History= useHistory();

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
  React.useEffect( ()=> {

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
          res.data.productList.forEach((item, index) => {
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
  // console.log(window.location.pathname)
  var windowsPath=window.location.pathname.split('/');
  if(windowsPath.length===4){
      const categoryHerf=window.location.pathname.split('/')[2].toLowerCase();
      const subCategoryHerf=window.location.pathname.split('/')[3].toLowerCase();
 
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
    }
  
  
     const HistoryReplace=(categorySelect,subCategorySelect)=>{
  
      if(categorySelect==='הלבשה'){
        if(subCategorySelect!==null){
         const index= state.listClothing.indexOf(subCategorySelect)
       if(props.Ondesign) History.replace('/Design/shirt/'+index)
       else History.replace('/Products/shirt/'+index)
        }
        else{
          if(props.Ondesign) History.replace('/Design/shirt/all')

         else History.replace('/Products/shirt/all')
  
        }
  
      }
      if(categorySelect==='all'){
        if(props.Ondesign) History.replace('/Design/All/all')

       else History.replace('/Products/All/all')
  
      }  
      if(categorySelect==='גאדגטים ואלקטרוניקה'){
        if(subCategorySelect!==null){
          const index= state.listElectronics.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/electronic/'+index)

        else History.replace('/Products/electronic/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/electronic/all')

         else History.replace('/Products/electronic/all')
   
         }
  
      }
      if(categorySelect==='מתנות בעיצוב'){
        if(subCategorySelect!==null){
          const index= state.listGift.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/gift/'+index)

        else History.replace('/Products/gift/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/gift/all')

         else History.replace('/Products/gift/all')
   
         }
  
      }
      if(categorySelect==='כוסות ספלים ובקבוקים'){
        if(subCategorySelect!==null){
          const index= state.listCup.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/cups/'+index)

        else History.replace('/Products/cups/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/cups/all')

          else History.replace('/Products/cups/all')
   
         }
      }
      if(categorySelect==='כובעים ומוצרי טקסטיל'){
        if(subCategorySelect!==null){
          const index= state.listHat.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/caps/'+index)

        else History.replace('/Products/caps/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/caps/all')
          else History.replace('/Products/caps/all')
   
         }
  
      }
      if(categorySelect==='תיקים ומוצרים למשרד'){
        if(subCategorySelect!==null){
          const index= state.listBags.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/bags/'+index)

        else History.replace('/Products/bags/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/bags/all')

         else History.replace('/Products/bags/all')
   
         }
  
      }
      if(categorySelect==='מוצרי מטבח ואירוח לבית'){
        if(subCategorySelect!==null){
          const index= state.listKitchen.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/kitchen/'+index)

        else History.replace('/Products/kitchen/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/kitchen/all')

         else History.replace('/Products/kitchen/all')
   
         }
  
      }
      if(categorySelect==='הדפסת תמונות מעוצבות'){
        if(subCategorySelect!==null){
          const index= state.listImageProduct.indexOf(subCategorySelect)
          if(props.Ondesign) History.replace('/Design/image/'+index)

        else History.replace('/Products/image/'+index)
         }
         else{
          if(props.Ondesign) History.replace('/Design/image/all')

         else History.replace('/Products/image/all')
   
         }
  
      }
    }

      
        if(props.width>800){
        

        return <Products {...props} HistoryReplace={HistoryReplace} state={state} />
        }
        else{
          // return ''
          return <ProductsMobile {...props} HistoryReplace={HistoryReplace} state={state}  />

        }
   
  
}
