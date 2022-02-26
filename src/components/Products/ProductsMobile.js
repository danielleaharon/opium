import React, { Component } from 'react';

import Product from '../Product/Product'
import axios from 'axios';
import Config from '../../config/config';
import ProductMobileMenu from '../ProductMobileMenu/ProductMobileMenu';

import 'react-alice-carousel/lib/alice-carousel.css';

import './ProductsMobile.css';
export default class ProductsMobile extends Component {
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
      menuStatus: 0,
      openMenu:false,
      selectCategory:null,
      red:false,
      hide:true,


    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickSubCategory = this.handleClickSubCategory.bind(this);
    this.getMenuOptions=this.getMenuOptions.bind(this);
    this.setMenuStatus=this.setMenuStatus.bind(this);
    this.closeMenu=this.closeMenu.bind(this);
    this.openMenu=this.openMenu.bind(this);
    this.getMenu=this.getMenu.bind(this);
    this.setMenuSelect=this.setMenuSelect.bind(this);

  }
  componentDidMount() {
    // this.setState({selectCategory:this.getMenuOptions()[8]})

if (this.props.category === 'הלבשה') {
  this.setState({selectCategory:this.getMenuOptions()[0]})


}
if (this.props.category === 'כובעים ומוצרי טקסטיל') {
  this.setState({selectCategory:this.getMenuOptions()[4]})


}
if (this.props.category === 'תיקים ומוצרים למשרד') {
  this.setState({selectCategory:this.getMenuOptions()[5]})


}
if (this.props.category === 'מוצרי מטבח ואירוח לבית') {
  this.setState({selectCategory:this.getMenuOptions()[7]})


}
if (this.props.category === 'all') {
  this.setState({selectCategory:this.getMenuOptions()[8]})


}
if (this.props.category === 'כוסות ספלים ובקבוקים') {
  this.setState({selectCategory:this.getMenuOptions()[3]})


}


if (this.props.category === 'מתנות בעיצוב') {
  this.setState({selectCategory:this.getMenuOptions()[3]})


}
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



      })
      .catch(() => {
        console.log('send')
      });
  }
  handleClick(categorySelect) {
    this.setState({ category: categorySelect });
    this.setState({ subCategory: null });

  }
  handleClickSubCategory(categorySelect,subCategorySelect,menu) {
    this.setState({ category: categorySelect });
    this.setState({ subCategory: subCategorySelect },()=>{
      this.setMenuSelect(menu)

    });

  }
  getMenuOptions() {
    return [
      
            <div className='row1-mobile' >
              <div className='text-all border-red'  id={this.state.category === 'הלבשה' ? 'clicked-red' : ''}>
              <span hidden={this.state.hide }  onClick={this.state.hide?() => this.handleClick('הלבשה'):() =>{this.handleClick('הלבשה');this.setMenuSelect(0)}}>הלבשה  <span hidden={this.state.hide} className="iconify" id='icon-category' data-icon="ion:shirt-sharp"></span> 
              </span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span>  הלבשה 
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              
              <button hidden={this.state.listClothing.length===0||this.state.hide} className='open-more-btn' onClick={()=>this.setState({red:!this.state.red})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
              </div>
              <div hidden={!this.state.red} className='category-mobile-dropdown dropdown-red'>
                <div id="mask"></div>
                { this.state.listClothing.map((item, index) => {
                    return <button key={index} className='dropdown-btn' onClick={() => {this.handleClickSubCategory('הלבשה',item,0);this.setState({red:!this.state.red})}}>{item}<hr/></button>

                  })}


              </div>
            </div>
       
        ,
         
      

            <div className='row2-mobile' >
              <div id={this.state.category === 'גאדגטים ואלקטרוניקה' ? 'clicked-redpink' : ''} className='text-all border-red-pink'>
              <span hidden={this.state.hide} onClick={this.state.hide?() => this.handleClick('גאדגטים ואלקטרוניקה'):() => {this.handleClick('גאדגטים ואלקטרוניקה');this.setMenuSelect(1)}} > גאדגטים ואלקטרוניקה <span className="iconify" id='icon-category' data-icon="fa-solid:headphones"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> גאדגטים ואלקטרוניקה  
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              
              <button hidden={this.state.listElectronics.length===0} className='open-more-btn' onClick={()=>this.setState({redpink:!this.state.redpink})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
              </div>
              <div  hidden={!this.state.redpink} className='category-mobile-dropdown dropdown-redpink'>
                <div id="mask"></div>

                {
                  this.state.listElectronics.map((item, index) => {

                    return <button className='dropdown-btn' onClick={() => {this.handleClickSubCategory('גאדגטים ואלקטרוניקה', item,1);this.setState({redpink:!this.state.redpink})}}>{item}</button>


                  })}


              </div>

            </div>
         ,

            <div className='row3'>
              <div className='text-all border-pink'  id={this.state.category === 'מתנות בעיצוב' ? 'clicked-pink' : ''}>
              <span hidden={this.state.hide}  onClick={this.state.hide?() => this.handleClick('מתנות בעיצוב'):() => {this.handleClick('מתנות בעיצוב');this.setMenuSelect(2)}}> מתנות בעיצוב <span className="iconify" id='icon-category' data-icon="fa-solid:gift"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> מתנות בעיצוב    
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              <button hidden={this.state.listGift.length===0} className='open-more-btn' onClick={()=>this.setState({pink:!this.state.pink})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
              </div>
              <div hidden={!this.state.pink} className='category-mobile-dropdown dropdown-pink'>
                <div id="mask"></div>
                {
                  this.state.listGift.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => {this.setState({pink:!this.state.pink});this.handleClickSubCategory('מתנות בעיצוב ', item,2)}}>{item}</button>


                  })}



              </div>
            </div>
        ,


       

            <div className='row4'>
              <div className='text-all border-purple' id={this.state.category === 'כוסות ספלים ובקבוקים' ? 'clicked-purple' : ''}>
              <span hidden={this.state.hide}  onClick={this.state.hide?() => this.handleClick('כוסות ספלים ובקבוקים'):() => {this.handleClick('כוסות ספלים ובקבוקים');this.setMenuSelect(3)}}>כוסות ספלים ובקבוקים <span className="iconify" id='icon-category' data-icon="teenyicons:cup-solid"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> כוסות ספלים ובקבוקים    
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              <button hidden={this.state.listCup.length===0} className='open-more-btn' onClick={()=>this.setState({purple:!this.state.purple})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>

              </div>
              <div hidden={!this.state.purple} className='category-dropdown dropdown-purple'>
                <div id="mask"></div>
                {
                  this.state.listCup.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() =>{this.setState({purple:!this.state.purple}); this.handleClickSubCategory('כוסות ספלים ובקבוקים', item,3)}}>{item}</button>


                  })}


              </div>
            </div>
        ,
        

            <div className='row5'>
              <div id={this.state.category === 'כובעים ומוצרי טקסטיל' ? 'clicked-bluepurple' : ''} className='text-all border-bluepurple'>
              <span hidden={this.state.hide} onClick={this.state.hide?() => this.handleClick('כובעים ומוצרי טקסטיל'):() => {this.handleClick('כובעים ומוצרי טקסטיל');this.setMenuSelect(4)}}  >  כובעים ומוצרי טקסטיל <span className="iconify" id='icon-category' data-icon="fa-solid:hat-cowboy"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> כובעים ומוצרי טקסטיל    
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              <button hidden={this.state.listHat.length===0||this.state.hide} className='open-more-btn' onClick={()=>this.setState({bluepurple:!this.state.bluepurple})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
              </div>

              <div hidden={!this.state.bluepurple} className='category-dropdown dropdown-bluepurple'>
                <div id="mask"></div>
                {
                  this.state.listHat.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() =>{this.setState({bluepurple:!this.state.bluepurple}); this.handleClickSubCategory('כובעים ומוצרי טקסטיל', item,4)}}>{item}</button>


                  })}


              </div>
            </div>

    ,
          

            <div className='row6'>
              <div id={this.state.category === 'תיקים ומוצרים למשרד' ? 'clicked-blue' : ''} className='text-all border-blue'>
              <span  hidden={this.state.hide} onClick={this.state.hide?() => this.handleClick('תיקים ומוצרים למשרד'):() => {this.handleClick('תיקים ומוצרים למשרד');this.setMenuSelect(5)}}>  תיקים ומוצרים למשרד <span className="iconify" id='icon-category' data-icon="fluent:backpack-24-filled"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> תיקים ומוצרים למשרד    
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              <button hidden={this.state.listBags.length===0} className='open-more-btn' onClick={()=>this.setState({blue:!this.state.blue})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>

              </div>
              <div hidden={!this.state.blue} className='category-dropdown dropdown-blue'>
                <div id="mask"></div>
                {
                  this.state.listBags.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => {this.setState({blue:!this.state.blue});this.handleClickSubCategory('תיקים ומוצרים למשרד', item,5)}}>{item}</button>


                  })}


              </div>
            </div>

        ,
         

            <div className='row7'>
              <div className='text-all border-green' id={this.state.category === 'מוצרי מטבח ואירוח לבית' ? 'clicked-green' : ''}>
              <span hidden={this.state.hide} onClick={this.state.hide?() => this.handleClick('מוצרי מטבח ואירוח לבית'):() => {this.handleClick('מוצרי מטבח ואירוח לבית');this.setMenuSelect(6)}}> מוצרי מטבח ואירוח לבית<span className="iconify" id='icon-category' data-icon="ic:baseline-soup-kitchen"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> מוצרי מטבח ואירוח לבית   
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              <button hidden={this.state.listKitchen.length===0} className='open-more-btn' onClick={()=>this.setState({green:!this.state.green})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
              </div>

              <div  hidden={!this.state.green} className='category-dropdown dropdown-green'>
                <div id="mask"></div>
                {
                  this.state.listKitchen.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => {this.setState({green:!this.state.green});this.handleClickSubCategory('מוצרי מטבח ואירוח לבית', item,6)}}>{item}</button>


                  })}


              </div>
            </div>

        ,
          

            <div className='row8'>
              <div className='text-all border-greenorange' id={this.state.category === 'הדפסת תמונות מעוצבות' ? 'clicked-greenorange' : ''}>
              <span hidden={this.state.hide}  onClick={this.state.hide?() => this.handleClick('הדפסת תמונות מעוצבות'):() =>{ this.handleClick('הדפסת תמונות מעוצבות');this.setMenuSelect(7)}}>  הדפסת תמונות מעוצבות <span className="iconify" id='icon-category' data-icon="bi:file-earmark-image-fill"></span></span>
              <span hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> הדפסת תמונות מעוצבות   
              </span>
              <span hidden={!this.state.hide || this.state.subCategory===null}> <span  className="iconify" data-icon="bx:bxs-left-arrow-alt"></span> {this.state.subCategory} 
              </span>
              <button hidden={this.state.listImageProduct.length===0} className='open-more-btn' onClick={()=>this.setState({greenorange:!this.state.greenorange})} > <span className="iconify" data-icon="fluent:add-square-multiple-16-filled"></span></button>
              </div>
              
              <div  hidden={!this.state.greenorange} className='category-dropdown dropdown-greenorange'>
                <div id="mask"></div>
                {
                  this.state.listImageProduct.map((item, index) => {
                    return <button className='dropdown-btn' onClick={() => {this.setState({greenorange:!this.state.greenorange});this.handleClickSubCategory('הדפסת תמונות מעוצבות', item,7)}}>{item}</button>


                  })}


              </div>
            </div>

          ,
         

            <div className='row9'onClick={this.state.hide?() => this.handleClick('all'):() => {this.handleClick('all');this.setMenuSelect(8)}} >
              <span hidden={this.state.hide} id={this.state.category === 'all' ? 'clicked-orange' : ''} className='text-all border-orange'> כל המוצרים</span>
              <span className='text-all border-orange' id={this.state.category === 'all' ? 'clicked-orange' : ''} hidden={!this.state.hide}><span className="iconify" id='productsItem-arrow' data-icon="bx:bx-down-arrow"></span> כל המוצרים
              </span>
            </div>

       
  
  
 
      
    ];

}
setMenuSelect(item) {
  // this.setState({selectCategory: this.getMenuOptions()[item]});
  this.setState({hide:true},()=>{
    
    this.setState({selectCategory: this.getMenuOptions()[item]});

    this.closeMenu()
  })


  // this.closeMenu()

  }
setMenuStatus(status) {
this.setState({menuStatus: status});
}
closeMenu() {
this.setMenuStatus(3);
this.setState({openMenu:false})
this.setState({hide:true})
setTimeout(() => this.setMenuStatus(0), 200);
}
openMenu() {
if(!this.state.openMenu)   {
  this.setState({hide:false})
  this.setMenuStatus(1);
  setTimeout(() => this.setMenuStatus(2), 200);
}
else{
  this.setState({hide:true},()=>{
    this.closeMenu();

  })
}


this.setState({openMenu:!this.state.openMenu})


}

getMenu() {
if (this.state.menuStatus===0) {
    return null;
}
return <ProductMobileMenu handleClick={this.handleClick} setMenuSelect={this.setMenuSelect} options={this.getMenuOptions()}  menuStatus={this.state.menuStatus}
onClose={this.closeMenu}
/>
}

  render() {
    return (

      <div className='Products-mobile' style={{width:window.innerWidth+'px'}}>
 {this.getMenu()}
        <div className='print-category2' style={{width:window.innerWidth+'px'}} onClick={this.openMenu} >
        <div className='cubeC'>
       {this.state.selectCategory}
                {/* { this.state.subCategory!==null? this.state.subCategory:''} */}
       </div>
        </div>
        <div className='product-details'>
          {this.props.Ondesign?
          <Product productList={this.state.productList} width={this.props.width} Ondesign={this.props.Ondesign} pickProduct={this.props.pickProduct}  category={this.state.category} subCategory={this.state.subCategory}  addToCart={this.props.addToCart}
              deleteFromCart={this.props.deleteFromCart} />:
                 <Product  productList={this.state.productList} width={this.props.width} Ondesign={this.props.Ondesign} category={this.state.category} subCategory={this.state.subCategory}  addToCart={this.props.addToCart}
              deleteFromCart={this.props.deleteFromCart} />}
        </div>
      </div>

    );
  }
}
