import React, { Component } from 'react';

import axios from 'axios';
import Config from '../../config/config';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductDialog from './ProductDialog';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@material-ui/lab/Autocomplete';


export default class ProductShopItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

      m: true,
      productList: [],
      imgFront: this.props.item.productImage[0].front,
      item: this.props.item.productImage[0],
      itemSide: 'front',
      hasBack: true,
      inCart: false,
      addCartmsg: false,
      deleteCartmsg: false,
      openDialog: false,
      schoolLogoList: [],
      CityFilter: [],

    }

    this.muse = this.muse.bind(this);
    this.muse2 = this.muse2.bind(this);
    this.changeShirt = this.changeShirt.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.openViewDialog = this.openViewDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.Alert = this.Alert.bind(this);


  }
  Alert() {
    return (
      <div hidden={!this.state.addCartmsg} id='cart-success-alert'>
        <span id='cart-success-alert-icon' className="iconify" data-icon="icon-park-outline:success"></span>

        <p>
          {/* <span id='cart-success-alert-icon' className="iconify" data-icon="icon-park-outline:success"></span> */}
          נוסף בהצלחה  <a href='/Cart'> לסל הקניות </a></p>
        <button className='cart-success-alert-close' onClick={() => { this.setState({ addCartmsg: false }) }} > <span className="iconify" data-icon="feather:x"></span></button>

      </div>
    )

  }

  componentDidMount() {
    if (this.props.item.category.trim() === 'הלבשה') {
      axios.post(Config.getServerPath() + 'school/all')
        .then(res => {
          if (res.data.status === 400) {
            console.log('error')
            return
          }
          this.setState({ schoolLogoList: res.data.schoolLogoList })
          const schoolLogoListCity = [];

          res.data.schoolLogoList.forEach((item) => {

            schoolLogoListCity.push(item.city)
          })
          const CityFilter = schoolLogoListCity.filter((elem, pos) => {

            return schoolLogoListCity.indexOf(elem) === pos;
          })

          this.setState({ CityFilter: CityFilter })
          this.setState({ schoolLogoListFilter: res.data.schoolLogoList })


        })
        .catch(() => {
          console.log('send')
        });

    }

    if (JSON.parse(localStorage.getItem('cart')).findIndex(x => x._id === this.props.item._id) !== -1)
      this.setState({ inCart: true })
    //  this.setState({item:this.props.item.productImage[0]});
    //      this.setState({imgFront:this.props.item.productImage[0].front})
    if (this.props.item.productImage[0].back.trim() === '')
      this.setState({ hasBack: false })
  }
  handleCloseDialog() {

    this.setState({ sizeSelect: '' })
    this.setState({ openDialog: false })


  }

  openViewDialog() {

    this.setState({ openDialog: true })
  }

  updateData() {
    this.setState({ item: this.props.item.productImage[0] });
    this.setState({ imgFront: this.props.item.productImage[0].front })
    if (this.props.item.productImage[0].back.trim() === '')
      this.setState({ hasBack: false })
  }

  changeShirt() {
    if (this.state.itemSide.trim() === 'front')
      this.setState({ imgFront: this.state.item.back }, () => {
        if (this.state.item.back.trim() === '')
          this.setState({ hasBack: false })
        else this.setState({ hasBack: true })

        this.setState({ itemSide: 'back' })
      })
    else {
      this.setState({ imgFront: this.state.item.front }, () => {
        this.setState({ itemSide: 'front' })
      })
    }

  }
  deleteFromCart() {
    this.setState({ inCart: false })
    this.props.deleteFromCart(this.props.item)

  }
  addToCart(sizeSelect, imgItem) {

    this.setState({ inCart: true, addCartmsg: true })
    this.props.addToCart(this.props.item, sizeSelect, imgItem, { url: { front: '', back: '' }, arrayDesign: [] })
    if (this.props.Ondesign)
      this.props.pickProduct();

    this.handleCloseDialog();

  }

  muse(e) {
    this.setState({ m: false })
  }
  muse2(e) {
    this.setState({ m: true })
  }
  render() {
    return (
      <>
        {this.state.openDialog && <ProductDialog handleCloseDialog={this.handleCloseDialog} sendToCart={this.addToCart} setState={this.setState} state={this.state} {...this.props} />}
        <div className='product-details-div  row h-100 mt-3' onMouseMove={this.muse} onMouseLeave={this.muse2}>
          <div className='col-12 '>
            <div>
              <img className='product-img img-fluid' onClick={this.openViewDialog} src={this.state.imgFront} alt='shirt'></img>
            </div>
            <div className='procduct-cart' hidden={this.state.m}>
              <img className='procduct-cart-imgSmall img-fluid' src={this.state.item.front} alt='front' ></img>
              {this.state.hasBack && <img className='procduct-cart-imgSmall img-fluid' src={this.state.item.back} alt='back'></img>}
              <button className='switch-btn' hidden={!this.state.hasBack} onClick={this.changeShirt}><span className="iconify" data-icon="fluent:camera-switch-24-regular"></span></button>
              <button onClick={this.openViewDialog} className='procduct-cart-btn' hidden={this.state.m}> <span className="iconify" data-icon="fluent:cart-16-regular"></span></button>

            </div>
          </div>
          {this.Alert()}
          <div className='product-details w-100 col-12  d-flex  justify-content-center  justify-content-xl-between px-0 mx-0 py-0' >
            <div className='row mx-100 w-100  text-center justify-content-around justify-content-xl-between '>
              <div className='col-6 col-xl-7 align-self-center'>
              <span className='product-name '>{this.props.item.name}</span>
              </div>
              <div className=' col-6 col-xl-5 mx-100 align-items-end d-flex flex-column justify-content-center'>
                <span className='product-price'>{this.props.item.price} ₪</span>
                <div className='d-flex' >
                  {this.props.item.productImage.map((item, index) => {
                    return <p key={index} onClick={() => this.handelChangeColor(item)} className="dot-product" style={{ backgroundColor: item.color }}></p>

                  })}
                </div>
              </div>

            </div>
          </div>
        </div>


      </>







    );
  }
}
