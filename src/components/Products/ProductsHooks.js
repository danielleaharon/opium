import React from 'react';

import Product from '../Product/Product'


import 'react-alice-carousel/lib/alice-carousel.css';

import './Products.css';


export default function Products(props) {



  const handleClick = (categorySelect) => {

    props.HistoryReplace(categorySelect, null)

  }
  const handleClickSubCategory = (categorySelect, subCategorySelect) => {

    props.HistoryReplace(categorySelect, subCategorySelect)

  }


  return (

    <div className='Products container-fluid '>

      <div className='Products-location '>{props.state.category !== 'all' ? props.state.category + ' ' : 'כל המוצרים'}
        {props.state.subCategory !== null && <span><span className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {props.state.subCategory}</span>}
      </div>
      <div className='print-category col-3' >
        <div className='cubeC' >
          <div className='row-menu' >
            <span className='text-all border-red' id={props.state.category === 'הלבשה' ? 'clicked-red' : ''} onClick={() => handleClick('הלבשה')}>הלבשה  <span className="iconify" id='icon-category' data-icon="ion:shirt-sharp"></span> </span>
            <div className='category-dropdown dropdown-red'>
              <div id="mask"></div>
              {props.state.listClothing.map((item, index) => {
                return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('הלבשה', item)}>{item}<hr /></button>

              })}


            </div>
          </div>

        </div>

        <div className='cubeC'  >

          <div className='row-menu' >
            <span onClick={() => handleClick('גאדגטים ואלקטרוניקה')} id={props.state.category === 'גאדגטים ואלקטרוניקה' ? 'clicked-redpink' : ''} className='text-all border-red-pink'> גאדגטים ואלקטרוניקה <span className="iconify" id='icon-category' data-icon="fa-solid:headphones"></span>
              <div id="mask-border-red-pink"></div>

            </span>
            <div className='category-dropdown dropdown-redpink'>
              <div id="mask"></div>

              {
                props.state.listElectronics.map((item, index) => {

                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('גאדגטים ואלקטרוניקה', item)}>{item}<hr /></button>


                })}


            </div>

          </div>
        </div>
        <div className='cubeC' >

          <div className='row-menu'>
            <span className='text-all border-pink' id={props.state.category === 'מתנות בעיצוב' ? 'clicked-pink' : ''} onClick={() => handleClick('מתנות בעיצוב')}> מתנות בעיצוב <span className="iconify" id='icon-category' data-icon="fa-solid:gift"></span></span>
            <div className='category-dropdown dropdown-pink'>
              <div id="mask"></div>
              {
                props.state.listGift.map((item, index) => {
                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('מתנות בעיצוב', item)}>{item}<hr /></button>
                })}



            </div>
          </div>
        </div>


        <div className='cubeC'  >

          <div className='row-menu'>
            <span className='text-all border-purple' id={props.state.category === 'כוסות ספלים ובקבוקים' ? 'clicked-purple' : ''} onClick={() => handleClick('כוסות ספלים ובקבוקים')}>כוסות ספלים ובקבוקים <span className="iconify" id='icon-category' data-icon="teenyicons:cup-solid"></span></span>
            <div className='category-dropdown dropdown-purple'>
              <div id="mask"></div>
              {
                props.state.listCup.map((item, index) => {
                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('כוסות ספלים ובקבוקים', item)}>{item}<hr /></button>


                })}


            </div>
          </div>
        </div>
        <div className='cubeC'>

          <div className='row-menu'>
            <span id={props.state.category === 'כובעים ומוצרי טקסטיל' ? 'clicked-bluepurple1' : ''} onClick={() => handleClick('כובעים ומוצרי טקסטיל')} className='text-all border-bluepurple'  >  כובעים ומוצרי טקסטיל <span className="iconify" id='icon-category' data-icon="fa-solid:hat-cowboy"></span>
              <div id="mask-border-bluepurple"></div>
            </span>
            <div className='category-dropdown dropdown-bluepurple'>
              <div id="mask"></div>
              {
                props.state.listHat.map((item, index) => {
                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('כובעים ומוצרי טקסטיל', item)}>{item}<hr /></button>


                })}


            </div>
          </div>

        </div>
        <div className='cubeC'  >

          <div className='row-menu'>
            <span id={props.state.category === 'תיקים ומוצרים למשרד' ? 'clicked-blue' : ''} className='text-all border-blue' onClick={() => handleClick('תיקים ומוצרים למשרד')}>  תיקים ומוצרים למשרד <span className="iconify" id='icon-category' data-icon="fluent:backpack-24-filled"></span></span>
            <div className='category-dropdown dropdown-blue'>
              <div id="mask"></div>
              {
                props.state.listBags.map((item, index) => {
                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('תיקים ומוצרים למשרד', item)}>{item}<hr /></button>


                })}


            </div>
          </div>

        </div>
        <div className='cubeC'  >

          <div className='row-menu'>
            <span className='text-all border-green' id={props.state.category === 'מוצרי מטבח ואירוח לבית' ? 'clicked-green' : ''} onClick={() => handleClick('מוצרי מטבח ואירוח לבית')}> מוצרי מטבח ואירוח לבית<span className="iconify" id='icon-category' data-icon="ic:baseline-soup-kitchen"></span></span>
            <div className='category-dropdown dropdown-green'>
              <div id="mask"></div>
              {
                props.state.listKitchen.map((item, index) => {
                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('מוצרי מטבח ואירוח לבית', item)}>{item}<hr /></button>


                })}


            </div>
          </div>

        </div>
        <div className='cubeC'  >
          <div className='row-menu'>
            <span className='text-all border-greenorange' id={props.state.category === 'הדפסת תמונות מעוצבות' ? 'clicked-greenorange' : ''} onClick={() => handleClick('הדפסת תמונות מעוצבות')}>  הדפסת תמונות מעוצבות <span className="iconify" id='icon-category' data-icon="bi:file-earmark-image-fill"></span>
              <div id="mask-border-greenorange"></div>

            </span>
            <div className='category-dropdown dropdown-greenorange'>
              <div id="mask"></div>
              {
                props.state.listImageProduct.map((item, index) => {
                  return <button key={index} className='dropdown-btn' onClick={() => handleClickSubCategory('הדפסת תמונות מעוצבות', item)}>{item}<hr /></button>


                })}


            </div>
          </div>

        </div>
        <div className='cubeC' onClick={() => handleClick('all')}  >
          <div className='row9' >
            <span id={props.state.category === 'all' ? 'clicked-orange' : ''} className='text-all border-orange'> כל המוצרים</span>

          </div>

        </div>

      </div>
      <div className='products-details col-10'>
      {props.Ondesign ?
        <Product productList={props.state.productList} width={props.width} Ondesign={props.Ondesign} pickProduct={props.pickProduct} category={props.state.category} subCategory={props.state.subCategory} addToCart={props.addToCart}
          deleteFromCart={props.deleteFromCart} /> :
        <Product productList={props.state.productList} width={props.width} Ondesign={props.Ondesign} category={props.state.category} subCategory={props.state.subCategory} addToCart={props.addToCart}
          deleteFromCart={props.deleteFromCart} />}
      </div>
    </div>

  );

}
