import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import ProductImageSelect from './productImageSelect';
import ProductImgItem from '../ProductImgItem/ProductImgItem';
import { isAuth } from '../../actions/auth';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Config from '../../config/config';
import './Admin.css';
export default function NewProduct(props) {
  const [state, setState] = React.useState({
    pName: '',
    pPrice: '',
    pDiscription: '',
    pSelectCategory: '',
    pSubcategory: '',
    pImage: '',
    size: [],

  });
  const [toggelColor, setToggelColor] = React.useState(false);
  const [imgs, setImgs] = React.useState([]);

  const [errorList, setErrorList] = React.useState([]);




  const ClearError = () => {


    setErrorList([]);



  }
  const addProductValid = () => {
    ClearError();
    var errorTempList = [];

    if (state.pName==='') {
      errorTempList.push('pName')

    }
    if (state.pPrice==='') {
      errorTempList.push('pPrice')

    }
    if (state.pDiscription==='') {
      errorTempList.push('pDiscription')

    }

    if (state.pSelectCategory===null) {
      errorTempList.push('pSelectCategory')

    }

    setErrorList(errorTempList)
  }

  const handleAddProduct = () => {
    addProductValid()
    if (errorList.length !== 0) return;
    var mainImage=0;
    if(imgs.some((x)=>x.color==='nocolor')){
      mainImage=imgs.findIndex(x=>x.color==='nocolor')
    }
    const postData = {
      name: state.pName,
      discription: state.pDiscription,
      category: state.pSelectCategory,
      price: state.pPrice,
      productImage: imgs,
      subcategory: state.pSubcategory,
      size: state.size,
      mainImage:mainImage,
      token: isAuth(),

    };
    axios.post(Config.getServerPath() + 'product/create', postData)
      .then(res => {
        console.log(res)
        if (res.data.status === 400) {
          console.log('error')
          return
        }

        props.updateProductList(res.data.productList)
        handelClose();

      })
      .catch((e) => {
        console.log(e)
      });



  }
  const addImg = (front, back, color) => {

    var item = [...imgs];
    item.push({ front, back, color })

    setImgs(item)
    setToggelColor(false)

  }
  React.useEffect(()=>{
    console.log('imgs')

    console.log(imgs)

  },[imgs])
  const deleteImg = (index) => {

if(imgs.length===1)    setImgs([])
else{
    var item = [...imgs.splice(index, 1)]

    setImgs(item)
}

  }
  const handelChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value })
  }
  const handelClose = () => {
    setState({ pName: '', pPrice: '', pDiscription: '', pSelectCategory: null, pSubcategory: null, pImage: '', size: [] });
    setToggelColor(false)
    setErrorList([])
    setImgs([]);
    props.handleCloseProduct()
  }

  return (

    <>
      <Dialog
        id='DialogNewProduct'
        open={props.openNewProduct}
        keepMounted
        fullWidth
        onClose={handelClose}

      >
        <DialogTitle id="dialog-newProduct-title">הוספת מוצר חדש</DialogTitle>
        <DialogContent >
          <button className='dialog-close-btn' onClick={handelClose}> <span className="iconify" data-icon="bi:x-lg"></span></button>
          <div id='card-product-new'>
            <div id='form-product-new'>
              <FormControl id='form-event' >

                <InputLabel id="product-label">שם המוצר</InputLabel>

                <Input aria-describedby="helper" name='pName' error={errorList.includes('pName')} required type='text' id="product-input" value={state.pName} onChange={handelChange} />
                {errorList.includes('name') ? <FormHelperText error={true} >חסר שם</FormHelperText> : ''}

              </FormControl>
              <FormControl id='form-event' >

                <InputLabel id="product-label" htmlFor="child-name">תיאור </InputLabel>

                <Input aria-describedby="helper" name='pDiscription' error={errorList.includes('pDiscription')} required type='text' id="child-name" value={state.pDiscription} onChange={handelChange} />
                {errorList.includes('pDiscription') ? <FormHelperText error={true} >חסר תיאור</FormHelperText> : ''}

              </FormControl>
              <FormControl id='form-event' >

                <InputLabel id="product-label" htmlFor="child-name">מחיר</InputLabel>

                <Input aria-describedby="helper" name='pPrice' error={errorList.includes('pPrice')} required type='number' id="child-name" value={state.pPrice} onChange={handelChange} />
                {errorList.includes('pPrice') ? <FormHelperText error={true} >חסר תיאור</FormHelperText> : ''}

              </FormControl>


              <FormControl variant="standard" id='select-time-start'>
                <InputLabel id="product-label" name='pSelectCategory' error={errorList.includes('pSelectCategoryE')} shrink >קטגוריה </InputLabel>

                <Select
                  required
                  name='pSelectCategory'
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={state.pSelectCategory}
                  onChange={handelChange}
                >
                  <MenuItem id='val' value=''></MenuItem>

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

              <FormControl variant="standard" id='select-time-start'>
                <InputLabel id="product-label" name='pSubcategory' error={errorList.includes('pSubcategoryE')} shrink > תת קטגוריה </InputLabel>

                <Select
                  required
                  name='pSubcategory'
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={state.pSubcategory}
                  onChange={handelChange}
                >
                  <MenuItem id='val' value=''></MenuItem>

                  {props.subcategoryList.map((item, index) => {
                    return <MenuItem key={index} id='val' value={item}>{item.name}</MenuItem>

                  })}



                </Select>
              </FormControl>
              <FormControl variant="standard" id='select-time-start'>
                <InputLabel id="product-label" shrink >מידות </InputLabel>

                <Select
                  required
                  name='size'
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={state.size}
                  onChange={handelChange}
                  displayEmpty
                  multiple
                >

                  <MenuItem id='val' value="8">8</MenuItem>
                  <MenuItem id='val' value="10">10</MenuItem>
                  <MenuItem id='val' value="12">12</MenuItem>
                  <MenuItem id='val' value="14">14</MenuItem>
                  <MenuItem id='val' value="16">16</MenuItem>
                  <MenuItem id='val' value="18">18</MenuItem>
                  <MenuItem id='val' value="S">S</MenuItem>
                  <MenuItem id='val' value="M">M</MenuItem>
                  <MenuItem id='val' value="L">L</MenuItem>
                  <MenuItem id='val' value="XL">XL</MenuItem>
                  <MenuItem id='val' value="XXL">XXL</MenuItem>
                  <MenuItem id='val' value="ONE SIZE">ONE SIZE</MenuItem>

                </Select>
              </FormControl>
            </div>
            <br />
            {toggelColor ? (<ProductImageSelect addImg={addImg} className='product-add-img' />
            ) : (
              <button className='product-add-img-btn' onClick={() => setToggelColor(!toggelColor)} >הוסף צבע</button>
            )}

            {imgs.map((item, index) => {
              return <ProductImgItem key={index} deleteImg={() => deleteImg(index)} item={item} classId='img-color-product' />
            })}
            <br />
            <button onClick={handleAddProduct} id='product-add-new-btn'>הוספה</button>

          </div>


        </DialogContent>

      </Dialog>

    </>
  );

}
