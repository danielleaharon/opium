import React, { Component } from 'react';

import Product from '../Product/Product'
import axios from 'axios';
import Config from '../../config/config';
import ProductMobileMenu from '../ProductMobileMenu/ProductMobileMenu';

import 'react-alice-carousel/lib/alice-carousel.css';
import { useHistory } from 'react-router-dom'

import './ProductsMobile.css';
export default function ProductsMobileHooks(props) {

  const [state, setState] = React.useState({
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
    menuStatus: 0,
    openMenu: false,
    selectCategory: null,
    red: false,
    hide: true,
    redpink: false,
    pink: false,
    purple: false,
    bluepurple: false,
    blue: false,
    green: false,
    greenorange: false,


  })
  const [category, setCategory] = React.useState('')
  const [subCategory, setSubCategory] = React.useState(null)



  const History = useHistory();
  React.useEffect(() => {
    //  async function update(){
    // await  UpdateHerf();

    //  }
    //  update();
    // console.log(props.category)
    async function data() {
      await axios.post(Config.getServerPath() + 'product/all')
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
          const state1 = {
            listClothing: ListClothing, listElectronics: ListElectronics
            , listCup: ListCup
            , listHat: ListHat
            , listBags: ListBags
            , listKitchen: ListKitchen
            , listImageProduct: ListImageProduct
            , listGift: ListGift, productList: res.data.productList,

          }
          UpdateHerf();

          setState({
            ...state, listClothing: ListClothing, listElectronics: ListElectronics
            , listCup: ListCup
            , listHat: ListHat
            , listBags: ListBags
            , listKitchen: ListKitchen
            , listImageProduct: ListImageProduct
            , listGift: ListGift, productList: res.data.productList,

          })
          //  setCategory(await categorySelect.category)




        })
        .catch((err) => {
          console.log(err)
        });
    }
    data();

  }, [])
  React.useEffect(() => {
    async function update() {
      await UpdateHerf();

    }
    update();
    closeMenu()

  }, [window.location.pathname])
  const UpdateHerf = async () => {

    const categoryHerf = window.location.pathname.split('/')[2].toLowerCase();
    const subCategoryHerf = window.location.pathname.split('/')[3].toLowerCase();
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
    if (categoryHerf.match('shirt')) {

      if (!subCategoryHerf.match('all')) {

        setCategory('הלבשה')
        setSubCategory(state.listClothing.at(subCategoryHerf))

      }
      else {
        setCategory('הלבשה')
        setSubCategory(null)
     

      }
    }
    if (categoryHerf.match('all')) {
      setCategory('all')
      setSubCategory(null)

    }
    if (categoryHerf.match('electronic')) {
      if (!subCategoryHerf.match('all')) {
        setCategory('גאדגטים ואלקטרוניקה')
        setSubCategory(state.listElectronics.at(subCategoryHerf))
    
      }
      else {
        setCategory('גאדגטים ואלקטרוניקה')
        setSubCategory(null)
    

      }
    }
    if (categoryHerf.match('gift')) {

      if (!subCategoryHerf.match('all')) {
        setCategory('מתנות בעיצוב')
        setSubCategory(state.listGift.at(subCategoryHerf))
      
      }
      else {
        setCategory('מתנות בעיצוב')
        setSubCategory(null)
             }
    }
    if (categoryHerf.match('cups')) {
      if (!subCategoryHerf.match('all')) {
        setCategory('כוסות ספלים ובקבוקים')
        setSubCategory(state.listCup.at(subCategoryHerf))
      
      }
      else {
        setCategory('כוסות ספלים ובקבוקים')
        setSubCategory(null)
       
      }
    }
    if (categoryHerf.match('caps')) {
      if (!subCategoryHerf.match('all')) {
        setCategory('כובעים ומוצרי טקסטיל')
        setSubCategory(state.listHat.at(subCategoryHerf))
       
      }
      else {
        setCategory('כובעים ומוצרי טקסטיל')
        setSubCategory(null)
       
      }
    }
    if (categoryHerf.match('bags')) {
      if (!subCategoryHerf.match('all')) {
        setCategory('תיקים ומוצרים למשרד')
        setSubCategory(state.listBags.at(subCategoryHerf))
             }
      else {
        setCategory('תיקים ומוצרים למשרד')
        setSubCategory(null)
      
      }
    }
    if (categoryHerf.match('kitchen')) {
      if (!subCategoryHerf.match('all')) {
        setCategory('מוצרי מטבח ואירוח לבית')
        setSubCategory(state.listKitchen.at(subCategoryHerf))
       
      }
      else {
        setCategory('מוצרי מטבח ואירוח לבית')
        setSubCategory(null)
       
      }
    }
    if (categoryHerf.match('image')) {
      if (!subCategoryHerf.match('all')) {
        setCategory('הדפסת תמונות מעוצבות')
        setSubCategory(state.listImageProduct.at(subCategoryHerf))
       
      }
      else {
        setCategory('הדפסת תמונות מעוצבות')
        setSubCategory(null)
       
      }
    }
  }


  const HistoryReplace = (categorySelect, subCategorySelect) => {

    if (categorySelect === 'הלבשה') {
      if (subCategorySelect !== null) {
        const index = state.listClothing.indexOf(subCategorySelect)
        History.replace('/Products/shirt/' + index)
      }
      else {
        History.replace('/Products/shirt/all')

      }

    }
    if (categorySelect === 'all') {
      History.replace('/Products/All/all')

    }
    if (categorySelect === 'גאדגטים ואלקטרוניקה') {
      if (subCategorySelect !== null) {
        const index = state.listElectronics.indexOf(subCategorySelect)
        History.replace('/Products/electronic/' + index)
      }
      else {
        History.replace('/Products/electronic/all')

      }

    }
    if (categorySelect === 'מתנות בעיצוב') {
      if (subCategorySelect !== null) {
        const index = state.listGift.indexOf(subCategorySelect)
        History.replace('/Products/gift/' + index)
      }
      else {
        History.replace('/Products/gift/all')

      }

    }
    if (categorySelect === 'כוסות ספלים ובקבוקים') {
      if (subCategorySelect !== null) {
        const index = state.listCup.indexOf(subCategorySelect)
        History.replace('/Products/cups/' + index)
      }
      else {
        History.replace('/Products/cups/all')

      }
    }
    if (categorySelect === 'כובעים ומוצרי טקסטיל') {
      if (subCategorySelect !== null) {
        const index = state.listHat.indexOf(subCategorySelect)
        History.replace('/Products/caps/' + index)
      }
      else {
        History.replace('/Products/caps/all')

      }

    }
    if (categorySelect === 'תיקים ומוצרים למשרד') {
      if (subCategorySelect !== null) {
        const index = state.listBags.indexOf(subCategorySelect)
        History.replace('/Products/bags/' + index)
      }
      else {
        History.replace('/Products/bags/all')

      }

    }
    if (categorySelect === 'מוצרי מטבח ואירוח לבית') {
      if (subCategorySelect !== null) {
        const index = state.listKitchen.indexOf(subCategorySelect)
        History.replace('/Products/kitchen/' + index)
      }
      else {
        History.replace('/Products/kitchen/all')

      }

    }
    if (categorySelect === 'הדפסת תמונות מעוצבות') {
      if (subCategorySelect !== null) {
        const index = state.listImageProduct.indexOf(subCategorySelect)
        History.replace('/Products/image/' + index)
      }
      else {
        History.replace('/Products/image/all')

      }

    }
  }
  const handleClick = (categorySelect) => {

    // History('/shirt');
    // setState({...state, category: categorySelect });
    // setState({ ...state,subCategory: null });
    HistoryReplace(categorySelect, null)

  }
  const handleClickSubCategory = (categorySelect, subCategorySelect) => {
    //   setState({...state, category: categorySelect });
    //  setState({ ...state,subCategory: subCategorySelect });
    HistoryReplace(categorySelect, subCategorySelect)

  }
  const getMenuOptions = () => {
    return [

      <div className='row1' >
        <div className='text-mobile-all border-red' id={state.category === 'הלבשה' ? 'clicked-red' : ''}>
          <span onClick={() => { handleClick('הלבשה'); setMenuSelect(0) }}>הלבשה  <span class="iconify" id='icon-category' data-icon="ion:shirt-sharp"></span>
          </span>
          {/* <span hidden={!state.hide}><span class="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span>  הלבשה 
              </span> */}
          {/* <span hidden={!state.hide || state.subCategory===null}> <span  class="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {state.subCategory} 
              </span> */}

          <button hidden={state.listClothing.length === 0} className='open-more-btn' onClick={() => setState({ ...state, red: !state.red })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>
        <div hidden={!state.red} className='category-mobile-dropdown dropdown-red'>
          <div id="mask"></div>
          {state.listClothing.map((item, index) => {
            return <button key={index} className='dropdown-btn' onClick={() => { handleClickSubCategory('הלבשה', item, 0); setState({ ...state, red: !state.red }) }}>{item}<hr /></button>

          })}


        </div>
      </div>



      ,

      <div className='row2' >
        <div id={state.category === 'גאדגטים ואלקטרוניקה' ? 'clicked-redpink' : ''} className='text-mobile-all border-red-pink'>
          <span onClick={() => { handleClick('גאדגטים ואלקטרוניקה'); setMenuSelect(1) }} > גאדגטים ואלקטרוניקה <span class="iconify" id='icon-category' data-icon="fa-solid:headphones"></span></span>

          <button hidden={state.listElectronics.length === 0} className='open-more-btn' onClick={() => setState({ ...state, redpink: !state.redpink })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>
        <div hidden={!state.redpink} className='category-mobile-dropdown dropdown-redpink'>
          <div id="mask"></div>

          {
            state.listElectronics.map((item, index) => {

              return <button key={index} className='dropdown-btn' onClick={() => { handleClickSubCategory('גאדגטים ואלקטרוניקה', item, 1); setState({ ...state, redpink: !state.redpink }) }}>{item}</button>

            })}


        </div>

      </div>
      ,

      <div className='row3'>
        <div className='text-mobile-all border-pink' id={state.category === 'מתנות בעיצוב' ? 'clicked-pink' : ''}>
          <span onClick={() => { handleClick('מתנות בעיצוב'); setMenuSelect(2) }}> מתנות בעיצוב <span class="iconify" id='icon-category' data-icon="fa-solid:gift"></span></span>

          <button hidden={state.listGift.length === 0} className='open-more-btn' onClick={() => setState({ ...state, pink: !state.pink })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>
        <div hidden={!state.pink} className='category-mobile-dropdown dropdown-pink'>
          <div id="mask"></div>
          {
            state.listGift.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, pink: !state.pink }); handleClickSubCategory('מתנות בעיצוב ', item, 2) }}>{item}</button>


            })}



        </div>
      </div>
      ,




      <div className='row4'>
        <div className='text-mobile-all border-purple' id={state.category === 'כוסות ספלים ובקבוקים' ? 'clicked-purple' : ''}>
          <span onClick={() => { handleClick('כוסות ספלים ובקבוקים'); setMenuSelect(3) }}>כוסות ספלים ובקבוקים <span class="iconify" id='icon-category' data-icon="teenyicons:cup-solid"></span></span>

          <button hidden={state.listCup.length === 0} className='open-more-btn' onClick={() => setState({ ...state, purple: !state.purple })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>

        </div>
        <div hidden={!state.purple} className='category-mobile-dropdown dropdown-purple'>
          <div id="mask"></div>
          {
            state.listCup.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, purple: !state.purple }); handleClickSubCategory('כוסות ספלים ובקבוקים', item, 3) }}>{item}</button>


            })}


        </div>
      </div>
      ,


      <div className='row5'>
        <div id={state.category === 'כובעים ומוצרי טקסטיל' ? 'clicked-bluepurple' : ''} className='text-mobile-all border-bluepurple'>
          <span onClick={() => { handleClick('כובעים ומוצרי טקסטיל'); setMenuSelect(4) }}  >  כובעים ומוצרי טקסטיל <span class="iconify" id='icon-category' data-icon="fa-solid:hat-cowboy"></span></span>

          <button hidden={state.listHat.length === 0} className='open-more-btn' onClick={() =>{ console.log('clicke'); setState({ ...state, bluepurple: !state.bluepurple })}} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>

        <div hidden={!state.bluepurple} className='category-mobile-dropdown dropdown-bluepurple'>
          <div id="mask"></div>
          {
            state.listHat.map((item, index) => {
              console.log(item)
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, bluepurple: !state.bluepurple }); handleClickSubCategory('כובעים ומוצרי טקסטיל', item, 4) }}>{item}</button>


            })}


        </div>
      </div>

      ,


      <div className='row6'>
        <div id={state.category === 'תיקים ומוצרים למשרד' ? 'clicked-blue' : ''} className='text-mobile-all border-blue'>
          <span onClick={() => { handleClick('תיקים ומוצרים למשרד'); setMenuSelect(5) }}>  תיקים ומוצרים למשרד <span class="iconify" id='icon-category' data-icon="fluent:backpack-24-filled"></span></span>

          <button hidden={state.listBags.length === 0} className='open-more-btn' onClick={() => setState({ ...state, blue: !state.blue })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>

        </div>
        <div hidden={!state.blue} className='category-mobile-dropdown dropdown-blue'>
          <div id="mask"></div>
          {
            state.listBags.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, blue: !state.blue }); handleClickSubCategory('תיקים ומוצרים למשרד', item, 5) }}>{item}</button>


            })}


        </div>
      </div>

      ,


      <div className='row7'>
        <div className='text-mobile-all border-green' id={state.category === 'מוצרי מטבח ואירוח לבית' ? 'clicked-green' : ''}>
          <span onClick={() => { handleClick('מוצרי מטבח ואירוח לבית'); setMenuSelect(6) }}> מוצרי מטבח ואירוח לבית<span class="iconify" id='icon-category' data-icon="ic:baseline-soup-kitchen"></span></span>

          <button hidden={state.listKitchen.length === 0} className='open-more-btn' onClick={() => setState({ ...state, green: !state.green })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>

        <div hidden={!state.green} className='category-mobile-dropdown dropdown-green'>
          <div id="mask"></div>
          {
            state.listKitchen.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, green: !state.green }); handleClickSubCategory('מוצרי מטבח ואירוח לבית', item, 6) }}>{item}</button>


            })}


        </div>
      </div>

      ,


      <div className='row8'>
        <div className='text-mobile-all border-greenorange' id={state.category === 'הדפסת תמונות מעוצבות' ? 'clicked-greenorange' : ''}>
          <span onClick={() => { handleClick('הדפסת תמונות מעוצבות'); setMenuSelect(7) }}>  הדפסת תמונות מעוצבות <span class="iconify" id='icon-category' data-icon="bi:file-earmark-image-fill"></span></span>

          <button hidden={state.listImageProduct.length === 0} className='open-more-btn' onClick={() => setState({ ...state, greenorange: !state.greenorange })} > <span class="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>

        <div hidden={!state.greenorange} className='category-mobile-dropdown dropdown-greenorange'>
          <div id="mask"></div>
          {
            state.listImageProduct.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, greenorange: !state.greenorange }); handleClickSubCategory('הדפסת תמונות מעוצבות', item, 7) }}>{item}</button>


            })}


        </div>
      </div>

      ,


      <div className='row9' onClick={() => { handleClick('all'); setMenuSelect(8) }} >
        <span id={state.category === 'all' ? 'clicked-orange' : ''} className='text-mobile-all border-orange'> כל המוצרים</span>
        {/* <span className='text-all border-orange' id={state.category === 'all' ? 'clicked-orange' : ''} >
                כל המוצרים
              </span> */}
      </div>






    ];

  }
  const setMenuSelect = (item) => {
    // setState({selectCategory: getMenuOptions()[item]});
    // setState({hide:true},()=>{

    //   setState({selectCategory: getMenuOptions()[item]});

    //   closeMenu()
    // })
    closeMenu()


    // closeMenu()

  }
  const setMenuStatus = (status) => {
    setState({ ...state, menuStatus: status });
  }
  const closeMenu = () => {
    setMenuStatus(3);

    setState({ ...state, openMenu: false })
    // setState({hide:true})
    setTimeout(() => setMenuStatus(0), 200);
  }
  const openMenu = () => {
    if (!state.openMenu) {
      setState({ ...state, hide: false, openMenu: !state.openMenu })
      setMenuStatus(1);
      setTimeout(() => setMenuStatus(2), 200);
    }
    else {
      setState({ ...state, hide: true, openMenu: !state.openMenu })
      closeMenu();


    }

  }

  const getMenu = () => {
    if (state.menuStatus == 0) {
      return null;
    }
    return <ProductMobileMenu handleClick={handleClick} setMenuSelect={setMenuSelect} options={getMenuOptions()} menuStatus={state.menuStatus}
      onClose={closeMenu}
    />
  }


  return (

    <div className='Products-mobile' style={{ width: window.innerWidth + 'px' }}>
      {getMenu()}
      <div className='print-category2' style={{ width: window.innerWidth + 'px' }} onClick={openMenu} >
        <div className='mobile-cubeC'>
          <span ><span class="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span>
          </span>
          {category}
          {/* { state.subCategory!==null? state.subCategory:''} */}
        </div>
      </div>
      <div className='product-details'>
        {props.Ondesign ?
          <Product {...props} productList={state.productList} category={category} subCategory={subCategory}
          /> :
          <Product {...props} productList={state.productList} category={category} subCategory={subCategory}
          />}
      </div>
    </div>

  );

}
