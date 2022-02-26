import React, { Component } from 'react';


import CropSquareIcon from '@mui/icons-material/CropSquare';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import cloudIcon from '@iconify/icons-bi/cloud';
import { Icon } from '@iconify/react';
import polygonIcon from '@iconify/icons-uil/polygon';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './DesignElementImg.css';
export default class DesignElementImg extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }




    this.delete = this.delete.bind(this);
    this.getData = this.getData.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
    this.getId = this.getId.bind(this);
    this.getView = this.getView.bind(this);

    this.setData = this.setData.bind(this);
    this.setZIndex = this.setZIndex.bind(this);
    this.getHidden = this.getHidden.bind(this);

    this.setHidden = this.setHidden.bind(this);

    this.setRotateAngle = this.setRotateAngle.bind(this);
    this.getRotateAngle = this.getRotateAngle.bind(this);

    this.setWidth = this.setWidth.bind(this);
    this.getWidth = this.getWidth.bind(this);

    this.setHeight = this.setHeight.bind(this);
    this.getHeight = this.getHeight.bind(this);

    this.setTop = this.setTop.bind(this);
    this.getTop = this.getTop.bind(this);

    this.setLeft = this.setLeft.bind(this);
    this.getLeft = this.getLeft.bind(this);

    this.getImgClip = this.getImgClip.bind(this);
    this.setImgClip = this.setImgClip.bind(this);

    this.getBorderColor = this.getBorderColor.bind(this);
    this.setBorderColor = this.setBorderColor.bind(this);

    this.getShape = this.getShape.bind(this);

  }
  data = this.props.data;
  zIndex = this.props.zIndex
  id = this.props.id
  hidden = false
  borderColor = this.props.borderColor;
  width = this.props.width
  height = this.props.height
  top = this.props.top
  left = this.props.left
  rotateAngle = this.props.rotateAngle;
  titel = this.props.titel;
  // shapeB=<CropSquareIcon/>;

  getImgClip() {
    return { titel: this.titel, shapeB: this.getShape(this.titel) };
  }
  setImgClip(imgclip) {
    this.titel = imgclip.titel;
    // this.shapeB=imgclip.shapeB;
  }
  getShape(title) {
    if (title === 'square-border')
      return <CropSquareIcon />

    if (title === 'triangular-border')
      return <ChangeHistoryIcon />

    if (title === 'cloud-border')
      return <Icon icon={cloudIcon} width="24" />

    if (title === 'heart-border')
      return <FavoriteBorderIcon />

    if (title === 'circle-border')
      return <CircleOutlinedIcon />

    if (title === 'star-border')
      return <StarOutlineOutlinedIcon />

    if (title === 'hexagon-border')
      return <Icon icon={polygonIcon} width="24" />
  }
  getBorderColor() {
    return this.borderColor;
  }
  setBorderColor(color) {
    this.borderColor = color
  }
  setLeft(left) {
    this.left = left
  }
  getLeft() {
    return this.left
  }
  setTop(top) {
    this.top = top
  }
  getTop() {
    return this.top
  }
  setHeight(height) {
    this.height = height
  }
  getHeight() {
    return this.height
  }
  setWidth(width) {
    this.width = width
  }
  getWidth() {
    return this.width
  }
  setRotateAngle(rotateAngle) {
    this.rotateAngle = rotateAngle
  }
  getRotateAngle() {
    return this.rotateAngle
  }
  handelClick() {
    window.document.getElementById('shirt').click();

  }
  getData() {
    return this.data;
  }
  getZIndex() {
    return this.zIndex;
  }

  getId() {
    return this.id;
  }
  getHidden() {
    return this.hidden;
  }
  setHidden() {
    this.hidden = !this.hidden;
    this.handelClick();

  }
  setData(data) {
    this.data = data;

  }
  setZIndex(zIndex) {
    this.zIndex = zIndex;
    this.handelClick();

  }

  delete() {
    this.props.deleteImg(this.props.index)
    // this.setState({delete:true})
  }
  getView() {

    return <div className='elementimg-view'   >
      <span id='elementimg-view-icon' className="iconify" data-icon="bx:bx-image-alt"></span>
      <img className='elementimg-view-img' src={this.data} alt='view' />
      <button onClick={this.setHidden} id={this.hidden ? 'elementtext-view-eye-true' : 'elementtext-view-eye-false'}> <span className="iconify" data-icon="ant-design:eye-filled"></span></button>

      {/* <button className='delete-img-item-toolbar'
                
              onClick={this.delete}><i style={{fontSize:'20px'}} className="fa fa-times"></i></button> */}
    </div>
  }

  render() {


    return (

      <div className='elementImg'   >
        <img src={this.props.img} alt='elementImg' />
        <button className='delete-img-item-toolbar'

          onClick={this.delete}><i style={{ fontSize: '20px' }} className="fa fa-times"></i></button>
      </div>

    );
  }
}
