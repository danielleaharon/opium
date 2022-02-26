import React from 'react';
import Product from '../Product/Product'
import ProductMobileMenu from '../ProductMobileMenu/ProductMobileMenu';
import './ProductsMobile.css';
export default function ProductsMobileHooks(props) {

  const [state, setState] = React.useState({

    menuStatus: 0,
    openMenu: false,
    // selectCategory: null,
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


  const handleClick = (categorySelect) => {


    props.HistoryReplace(categorySelect, null)

  }
  const handleClickSubCategory = (categorySelect, subCategorySelect) => {

    props.HistoryReplace(categorySelect, subCategorySelect)
    setMenuSelect()
  }
  const getMenuOptions = () => {
    return [

      <div className='row1 border-red-mobile' >
        <div className='text-mobile-all  ' id={props.state.category === 'הלבשה' ? 'clicked-red' : ''}>
          <span onClick={() => { handleClick('הלבשה'); setMenuSelect(0) }}>הלבשה  <span className="iconify" id='icon-category' data-icon="ion:shirt-sharp"></span>
          </span>
          {/* <span hidden={!state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span>  הלבשה 
              </span> */}
          {/* <span hidden={!state.hide || state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {state.subCategory} 
              </span> */}

          <button hidden={props.state.listClothing.length === 0} className='open-more-btn' onClick={() => setState({ ...state, red: !state.red })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>
        <div hidden={!state.red} className='category-mobile-dropdown dropdown-red'>
          <div id="mask"></div>
          {props.state.listClothing.map((item, index) => {
            return <button key={index} className='dropdown-btn' onClick={() => { handleClickSubCategory('הלבשה', item, 0); setState({ ...state, red: !state.red }) }}>{item}<hr /></button>

          })}


        </div>
      </div>



      ,

      <div className='row2  border-red-pink-mobile ' id={props.state.category === 'גאדגטים ואלקטרוניקה' ? 'clicked-redpink' : ''}>
        <div id="mask-border-red-pink"></div>

        <div className='text-mobile-all'>
          <span onClick={() => { handleClick('גאדגטים ואלקטרוניקה'); setMenuSelect(1) }} > גאדגטים ואלקטרוניקה <span className="iconify" id='icon-category' data-icon="fa-solid:headphones"></span></span>

          <button hidden={props.state.listElectronics.length === 0} className='open-more-btn' onClick={() => setState({ ...state, redpink: !state.redpink })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>
        <div hidden={!state.redpink} className='category-mobile-dropdown dropdown-redpink'>
          <div id="mask"></div>

          {
            props.state.listElectronics.map((item, index) => {

              return <button key={index} className='dropdown-btn' onClick={() => { handleClickSubCategory('גאדגטים ואלקטרוניקה', item, 1); setState({ ...state, redpink: !state.redpink }) }}>{item}<hr /></button>

            })}


        </div>

      </div>
      ,

      <div className='row3 border-pink-mobile'>
        <div className='text-mobile-all ' id={props.state.category === 'מתנות בעיצוב' ? 'clicked-pink' : ''}>
          <span onClick={() => { handleClick('מתנות בעיצוב'); setMenuSelect(2) }}> מתנות בעיצוב <span className="iconify" id='icon-category' data-icon="fa-solid:gift"></span></span>

          <button hidden={props.state.listGift.length === 0} className='open-more-btn' onClick={() => setState({ ...state, pink: !state.pink })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>
        <div hidden={!state.pink} className='category-mobile-dropdown dropdown-pink'>
          <div id="mask"></div>
          {
            props.state.listGift.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, pink: !state.pink }); handleClickSubCategory('מתנות בעיצוב', item, 2) }}>{item}<hr /></button>


            })}



        </div>
      </div>
      ,




      <div className='row4 border-purple-mobile'>
        <div className='text-mobile-all ' id={props.state.category === 'כוסות ספלים ובקבוקים' ? 'clicked-purple' : ''}>
          <span onClick={() => { handleClick('כוסות ספלים ובקבוקים'); setMenuSelect(3) }}>כוסות ספלים ובקבוקים <span className="iconify" id='icon-category' data-icon="teenyicons:cup-solid"></span></span>

          <button hidden={props.state.listCup.length === 0} className='open-more-btn' onClick={() => setState({ ...state, purple: !state.purple })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>

        </div>
        <div hidden={!state.purple} className='category-mobile-dropdown dropdown-purple'>
          <div id="mask"></div>
          {
            props.state.listCup.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, purple: !state.purple }); handleClickSubCategory('כוסות ספלים ובקבוקים', item, 3) }}>{item}<hr /></button>


            })}


        </div>
      </div>
      ,


      <div className='row5 border-bluepurple-mobile'>
        <div id="mask-border-bluepurple"></div>

        <div id={props.state.category === 'כובעים ומוצרי טקסטיל' ? 'clicked-bluepurple' : ''} className='text-mobile-all '>
          <span onClick={() => { handleClick('כובעים ומוצרי טקסטיל'); setMenuSelect(4) }}  >  כובעים ומוצרי טקסטיל <span className="iconify" id='icon-category' data-icon="fa-solid:hat-cowboy"></span></span>

          <button hidden={props.state.listHat.length === 0} className='open-more-btn' onClick={() => { console.log('clicke'); setState({ ...state, bluepurple: !state.bluepurple }) }} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>

        <div hidden={!state.bluepurple} className='category-mobile-dropdown dropdown-bluepurple'>
          <div id="mask"></div>
          {
            props.state.listHat.map((item, index) => {
              console.log(item)
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, bluepurple: !state.bluepurple }); handleClickSubCategory('כובעים ומוצרי טקסטיל', item, 4) }}>{item}<hr /></button>


            })}


        </div>
      </div>

      ,


      <div className='row6 border-blue-mobile'>
        <div id={props.state.category === 'תיקים ומוצרים למשרד' ? 'clicked-blue' : ''} className='text-mobile-all '>
          <span onClick={() => { handleClick('תיקים ומוצרים למשרד'); setMenuSelect(5) }}>  תיקים ומוצרים למשרד <span className="iconify" id='icon-category' data-icon="fluent:backpack-24-filled"></span></span>

          <button hidden={props.state.listBags.length === 0} className='open-more-btn' onClick={() => setState({ ...state, blue: !state.blue })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>

        </div>
        <div hidden={!state.blue} className='category-mobile-dropdown dropdown-blue'>
          <div id="mask"></div>
          {
            props.state.listBags.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, blue: !state.blue }); handleClickSubCategory('תיקים ומוצרים למשרד', item, 5) }}>{item}<hr /></button>


            })}


        </div>
      </div>

      ,


      <div className='row7 border-green-mobile'>
        <div className='text-mobile-all ' id={props.state.category === 'מוצרי מטבח ואירוח לבית' ? 'clicked-green' : ''}>
          <span onClick={() => { handleClick('מוצרי מטבח ואירוח לבית'); setMenuSelect(6) }}> מוצרי מטבח ואירוח לבית<span className="iconify" id='icon-category' data-icon="ic:baseline-soup-kitchen"></span></span>

          <button hidden={props.state.listKitchen.length === 0} className='open-more-btn' onClick={() => setState({ ...state, green: !state.green })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>

        <div hidden={!state.green} className='category-mobile-dropdown dropdown-green'>
          <div id="mask"></div>
          {
            props.state.listKitchen.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, green: !state.green }); handleClickSubCategory('מוצרי מטבח ואירוח לבית', item, 6) }}>{item}<hr /></button>


            })}


        </div>
      </div>

      ,


      <div className='row8 border-greenorange-mobile'>
        <div id="mask-border-greenorange"></div>

        <div className='text-mobile-all ' id={props.state.category === 'הדפסת תמונות מעוצבות' ? 'clicked-greenorange' : ''}>
          <span onClick={() => { handleClick('הדפסת תמונות מעוצבות'); setMenuSelect(7) }}>  הדפסת תמונות מעוצבות <span className="iconify" id='icon-category' data-icon="bi:file-earmark-image-fill"></span></span>

          <button hidden={props.state.listImageProduct.length === 0} className='open-more-btn' onClick={() => setState({ ...state, greenorange: !state.greenorange })} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
        </div>

        <div hidden={!state.greenorange} className='category-mobile-dropdown dropdown-greenorange'>
          <div id="mask"></div>
          {
            props.state.listImageProduct.map((item, index) => {
              return <button className='dropdown-btn' onClick={() => { setState({ ...state, greenorange: !state.greenorange }); handleClickSubCategory('הדפסת תמונות מעוצבות', item, 7) }}>{item}<hr /></button>


            })}


        </div>
      </div>

      ,


      <div className='row9 border-orange-mobile' onClick={() => { handleClick('all'); setMenuSelect(8) }} >
        <span id={props.state.category === 'all' ? 'clicked-orange' : ''} className='text-mobile-all '> כל המוצרים</span>
        {/* <span className='text-all border-orange' id={state.category === 'all' ? 'clicked-orange' : ''} >
                כל המוצרים
              </span> */}
      </div>






    ];

  }
  const setMenuSelect = (item) => {

    closeMenu()



  }
  const setMenuStatus = (status) => {
    setState({ ...state, menuStatus: status });
  }
  const closeMenu = () => {
    setMenuStatus(3);

    setState({ ...state, openMenu: false })
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
    if (state.menuStatus===0) {
      return null;
    }
    return <ProductMobileMenu handleClick={handleClick} setMenuSelect={setMenuSelect} options={getMenuOptions()} menuStatus={state.menuStatus}
      onClose={closeMenu}
    />
  }


  return (
<>
<h3 className='products-h3' hidden={props.Ondesign}  >מוצרים</h3>

    <div className='Products-mobile container-fluid px-0 mx-0' >

      {getMenu()}
      <div className='print-category2 row  mx-0 w-100'  onClick={openMenu} >
        <div className='mobile-cubeC-print'>
          <span ><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span>
          </span>
          <div className='print-category2-p '>{props.state.category !== 'all' ? props.state.category + ' ' : 'כל המוצרים'}
            {props.state.subCategory !== null && <span><span className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {props.state.subCategory}</span>}
          </div>
          {/* { state.subCategory!==null? state.subCategory:''} */}
        </div>
      </div>
      <div className='products-details col-12 '>
        {props.Ondesign ?
          <Product {...props} productList={props.state.productList} category={props.state.category} subCategory={props.state.subCategory}
          /> :
          <Product {...props} productList={props.state.productList} category={props.state.category} subCategory={props.state.subCategory}
          />}
      </div>
    </div>
</>
  );

}
