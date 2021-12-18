import React, { Component } from 'react';

import axios from 'axios';
import Config from '../../config/config';
import 'react-alice-carousel/lib/alice-carousel.css';

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

      price: null,
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
      full: true,
      imgDialog: '',
      sizeSelect: '',
      sizeSelectMsg: false,
      schoolLogo: false,
      schoolLogoList: [],
      CityFilter: [],
      selectCity: null,
      selectSchool: null,
      schoolLogoListFilter: []
    }

    this.muse = this.muse.bind(this);
    this.muse2 = this.muse2.bind(this);
    this.handelChangeColor = this.handelChangeColor.bind(this);
    this.changeShirt = this.changeShirt.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.openViewDialog = this.openViewDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.ViewDialog = this.ViewDialog.bind(this);
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

    if (JSON.parse(localStorage.getItem('cart')).findIndex(x => x._id == this.props.item._id) !== -1)
      this.setState({ inCart: true })
    //  this.setState({item:this.props.item.productImage[0]});
    //      this.setState({imgFront:this.props.item.productImage[0].front})
    if (this.props.item.productImage[0].back.trim() === '')
      this.setState({ hasBack: false })
  }
  handleCloseDialog() {
    if (this.state.sizeSelect != '' && this.props.Ondesign) {
      console.log('pick up')
      // this.props.item,this.state.sizeSelect,this.state.item
      this.props.pickProduct(
      );
    }
    this.setState({ sizeSelect: '' })
    this.setState({ openDialog: false })


  }
  // handelChangeCity(value){
  //   this.setState({selectCity:value});
  //   const arr=this.state.schoolLogoList.filter((a)=>{a.city===value||value.trim()===''});
  //   this.setState({schoolLogoListFilter:arr})
  // }
  openViewDialog() {

    this.setState({ openDialog: true })
  }
  ViewDialog() {
    return <Dialog maxWidth='lg' fullWidth id='product-dialog' open={this.state.openDialog} onClose={this.handleCloseDialog}>
      {/* <DialogTitle>{this.props.item.name}</DialogTitle> */}
      <DialogContent id='product-dialog-DialogContent' >
        <div id='product-dialog-details'>
          <div className='mobile' hidden={this.props.width > 800} >
          <img className='product-dialog-details-img' src={this.state.imgFront} alt='shirt' ></img>

          

            {this.state.schoolLogo && <div className='Autocomplete-mobile'>  <Autocomplete
              options={this.state.CityFilter}
              getOptionLabel={option => option}
              renderOption={option => <>{option} </>}
              renderInput={params => {
                params.id = 'school-label';

                return <TextField
                  // id='prodct-schoollogo-select'
                  className='school-label'
                  label="חפש לפי עיר"
                  InputLabelProps={{id:'school-label'}}
                  name="city"
                  variant="standard"
                  size='small'
                  // fullWidth
                  {...params}

                />
              }
              }
              id='prodct-schoollogo-select'
              value={this.state.selectCity}
              onChange={(event, value) => {
                this.setState({ selectCity: value });
                const arr = this.state.schoolLogoList.filter((a) => a.city === value || value === '' || value === null);
                this.setState({ schoolLogoListFilter: arr })
              }}
            />

              <Autocomplete
                options={this.state.schoolLogoListFilter}
                getOptionLabel={option => option.school + ' | ' + option.city}
                renderOption={option => <>{option.school} | {option.city} </>}
                renderInput={params => {
                  params.id = 'school-label';
                  return <TextField
                    // id='prodct-schoollogo-select'
                    InputLabelProps={{id:'school-label'}}
                    label="בתי ספר"
                    name="school"
                    variant="standard"
                    size='small'
                    // fullWidth
                    {...params}
                  />
                }}
                id='prodct-schoollogo-select'
                value={this.state.selectSchool}
                onChange={(event, value) => {
                  this.setState({ selectSchool: value })
                }}

              />

            </div>}
            <div className='dialog-imgs-select'>
              <img className={this.state.itemSide === 'front' ? 'product-dialog-details-imgs select' : 'product-dialog-details-imgs'} onClick={() => { this.setState({ imgFront: this.state.item.front }); this.setState({ itemSide: 'front' }) }} src={this.state.item.front} ></img>
              <img hidden={!this.state.hasBack} onClick={() => { this.setState({ imgFront: this.state.item.back }); this.setState({ itemSide: 'back' }) }} className={this.state.itemSide === 'back' ? 'product-dialog-details-imgs select' : 'product-dialog-details-imgs'} src={this.state.item.back} ></img>

            </div>
          </div>
          <div className='dialog-imgs-select' hidden={this.props.width <= 800}>
            <img className={this.state.itemSide === 'front' ? 'product-dialog-details-imgs select' : 'product-dialog-details-imgs'} onClick={() => { this.setState({ imgFront: this.state.item.front }); this.setState({ itemSide: 'front' }) }} src={this.state.item.front} ></img>
            <img hidden={!this.state.hasBack} onClick={() => { this.setState({ imgFront: this.state.item.back }); this.setState({ itemSide: 'back' }) }} className={this.state.itemSide === 'back' ? 'product-dialog-details-imgs select' : 'product-dialog-details-imgs'} src={this.state.item.back} ></img>

          </div>
          <img hidden={this.props.width <= 800} className='product-dialog-details-img' src={this.state.imgFront} ></img>
          <div className='product-dialog-details-txt'>
            <p id='product-dialog-details-txt-title'>{this.props.item.name}</p>
            <p className='product-dialog-details-price'> ₪ {this.props.item.price}</p>
            <p className='product-dialog-color'>צבע </p>
            {this.props.item.productImage.map((item, index) => {
              return <span key={index} onClick={() => this.handelChangeColor(item)} className="dot-product-dialog" id={this.state.item.color === item.color ? 'dot-product-select' : ''} style={{ backgroundColor: item.color }}></span>

            })}
            <p className='product-dialog-size-title'>מידה</p>
            <p hidden={!this.state.sizeSelectMsg} className='product-dialog-size-msg'>חסרה מידה</p>
            <div className='product-dialog-size'>
              {this.props.item.size.map((item,index)=>{
                return   <p key={index} className={this.state.sizeSelect === item ? 'sizeSelect' : ''} onClick={() => { this.setState({ sizeSelect: item }); this.setState({ sizeSelectMsg: false }) }} >{item}</p>

              })}
              {/* <p className={this.state.sizeSelect === 'S' ? 'sizeSelect' : ''} onClick={() => { this.setState({ sizeSelect: 'S' }); this.setState({ sizeSelectMsg: false }) }} >S</p>
              <p className={this.state.sizeSelect === 'M' ? 'sizeSelect' : ''} onClick={() => { this.setState({ sizeSelect: 'M' }); this.setState({ sizeSelectMsg: false }) }}>M</p>
              <p className={this.state.sizeSelect === 'L' ? 'sizeSelect' : ''} onClick={() => { this.setState({ sizeSelect: 'L' }); this.setState({ sizeSelectMsg: false }) }}>L</p>
              <p className={this.state.sizeSelect === 'XL' ? 'sizeSelect' : ''} onClick={() => { this.setState({ sizeSelect: 'XL' }); this.setState({ sizeSelectMsg: false }) }}>XL</p> */}



            </div>
            <div hidden={this.props.item.category.trim() !== 'הלבשה'|| this.props.Ondesign} className="product-schoollogo">
              <Checkbox checked={this.state.schoolLogo} onChange={() => { this.setState({ schoolLogo: !this.state.schoolLogo }) }} />

              {/* <input type="checkbox"  name="schoollogo" onChange={(e)=>{this.setState({schoolLogo:!this.state.schoolLogo})}}  value={this.state.schoolLogo}/> */}
              <span className='product-schoollogo-p'> סמל בית ספר </span>
            </div>

            {/* <div> */}
            {this.state.schoolLogo && this.props.width > 800 && <div className='Autocomplete'>  <Autocomplete
              options={this.state.CityFilter}
              getOptionLabel={option => option}
              renderOption={option => <>{option} </>}
              renderInput={params =>
                <TextField
                  // id='prodct-schoollogo-select'
                  className='school-label'
                  label="חפש לפי עיר"
                  // InputLabelProps={{id:'school-label'}}
                  name="city"
                  variant="standard"
                  size='small'
                  // fullWidth
                  {...params}
                />
              }
              id='prodct-schoollogo-select'
              value={this.state.selectCity}
              onChange={(event, value) => {
                this.setState({ selectCity: value });
                const arr = this.state.schoolLogoList.filter((a) => a.city === value || value === '' || value === null);
                this.setState({ schoolLogoListFilter: arr })
              }}
            />

              <Autocomplete
                options={this.state.schoolLogoListFilter}
                getOptionLabel={option => option.school + ' | ' + option.city}
                renderOption={option => <>{option.school} | {option.city} </>}
                renderInput={params => {
                  params.id = 'school-label';
                  return <TextField
                    // id='prodct-schoollogo-select'
                    id='school-label'
                    // InputLabelProps={{id:'school-label'}}
                    label="בתי ספר"
                    name="school"
                    variant="standard"
                    size='small'
                    // fullWidth
                    {...params}
                  />
                }}
                id='prodct-schoollogo-select'
                value={this.state.selectSchool}
                onChange={(event, value) => {
                  console.log(value)
                  this.setState({ selectSchool: value })
                }}

              />

            </div>}
            {this.state.selectSchool !== null && this.state.selectSchool !== undefined  &&this.state.schoolLogo? <img className='school-logo' src={this.state.selectSchool.url} alt='school' /> : <div className='school-logo'></div>}

            {/* <FormControl  variant="standard" id='school-form-select-event'>


<Select
required
labelId="demo-simple-select-placeholder-label-label"
id="orderAdmin-select"
  value={this.state.citySelect}
  onChange={(e)=>this.setState({citySelect:e.target.value})}
  displayEmpty
>

<MenuItem id='orderAdmin-MenuItem' value="all"> עיר</MenuItem>
{this.state.CityFilter.map((item,index)=>{
  return <MenuItem id='orderAdmin-MenuItem' value={item}>{item}</MenuItem>

})}

</Select>
</FormControl> */}


            {/* </div> */}
            {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        /> */}
            <button id='product-dialog-addCart' onClick={this.addToCart}>{this.props.Ondesign ? 'בחר מוצר' : 'הוסף לסל'}</button>

            <DialogActions>
              <button id='product-dialog-cancel' onClick={this.handleCloseDialog}><span className="iconify" data-icon="iconoir:cancel"></span></button>
            </DialogActions>
          </div>
        </div>
      </DialogContent>

    </Dialog>
  }
  updateData() {
    this.setState({ item: this.props.item.productImage[0] });
    this.setState({ imgFront: this.props.item.productImage[0].front })
    if (this.props.item.productImage[0].back.trim() === '')
      this.setState({ hasBack: false })
  }
  handelChangeColor(item) {
    this.setState({ item: item });

    this.setState({ imgFront: item.front })


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
  addToCart() {
    if (this.state.sizeSelect === '') {
      this.setState({ sizeSelectMsg: true })
      return;
    }
    this.setState({ inCart: true })
    this.setState({ addCartmsg: true })
    this.props.addToCart(this.props.item, this.state.sizeSelect, this.state.item, { url: { front: '', back: '' }, arrayDesign: [] })
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
      <div className='product-details-div' onMouseMove={this.muse} onMouseLeave={this.muse2}>
        {this.ViewDialog()}
        {/* <button className='switch-btn' hidden={!this.state.hasBack} onClick={this.changeShirt}><span className="iconify" data-icon="fluent:camera-switch-24-regular"></span></button> */}
        <div className='product-img-div' >
          <img className='product-img' onClick={this.openViewDialog} src={this.state.imgFront} alt='shirt'></img>
          <div className='procduct-cart' hidden={this.state.m}>
            <img className='procduct-cart-imgSmall' src={this.state.item.front} ></img>
            <img className='procduct-cart-imgSmall' src={this.state.item.back} ></img>
            <button className='switch-btn' hidden={!this.state.hasBack} onClick={this.changeShirt}><span className="iconify" data-icon="fluent:camera-switch-24-regular"></span></button>
            <button onClick={this.openViewDialog} className='procduct-cart-btn' hidden={this.state.m}> <span className="iconify" data-icon="fluent:cart-16-regular"></span></button>

          </div>
          {this.Alert()}
          {/* <CustomizedSlider  hidden={!this.state.addCartmsg} variant="outlined"  id='cart-success-alert' onClose={() => {this.setState({addCartmsg:false})}} severity="success"><p>נוסף בהצלחה  <a href='/Cart'> לסל הקניות </a></p></CustomizedSlider> */}
          <div className='product-details-p2' >
            <div className='product-details-txt'>
              <p className='product-name'>{this.props.item.name}</p>

              <p className='product-price'>{this.props.item.price} ₪</p>
            </div>
            <div className='product-colors' >
              {/* <button onClick={this.openViewDialog} className='procduct-cart-btn' hidden={this.state.m}> <span className="iconify" data-icon="fluent:cart-16-regular"></span></button> */}

              {this.props.item.productImage.map((item, index) => {
                return <p key={index} key={index} onClick={() => this.handelChangeColor(item)} className="dot-product" style={{ backgroundColor: item.color }}></p>

              })}
            </div>
          </div>
        </div>
      </div>










    );
  }
}
