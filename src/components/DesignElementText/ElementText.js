import React, { Component } from 'react';

import 'react-dropdown/style.css';
import './DesignElementText.css';
export default class DesignElementText extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handelClick = this.handelClick.bind(this);

    this.getData = this.getData.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
    this.getSize = this.getSize.bind(this);
    this.getId = this.getId.bind(this);
    this.getView = this.getView.bind(this);
    this.getHidden = this.getHidden.bind(this);
    this.getTop = this.getTop.bind(this);
    this.getLeft = this.getLeft.bind(this);

    this.setHidden = this.setHidden.bind(this);
    this.setTop = this.setTop.bind(this);
    this.setLeft = this.setLeft.bind(this);
    this.setData = this.setData.bind(this);
    this.setZIndex = this.setZIndex.bind(this);
    this.setSize = this.setSize.bind(this);

    this.getBackgroundColor = this.getBackgroundColor.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);

    this.getActiveFontFamily = this.getActiveFontFamily.bind(this);
    this.setActiveFontFamily = this.setActiveFontFamily.bind(this);

    this.getRotateAngleText = this.getRotateAngleText.bind(this);
    this.setRotateAngleText = this.setRotateAngleText.bind(this);

    this.getBold = this.getBold.bind(this);
    this.setBold = this.setBold.bind(this);

    this.getItalic = this.getItalic.bind(this);
    this.setItalic = this.setItalic.bind(this);

    this.getBorderColor = this.getBorderColor.bind(this);
    this.setBorderColor= this.setBorderColor.bind(this);

    this.getUnderline = this.getUnderline.bind(this);
    this.setUnderline= this.setUnderline.bind(this);

    this.getTextColor = this.getTextColor.bind(this);
    this.setTextColor= this.setTextColor.bind(this);

    this.getFormats = this.getFormats.bind(this);
    this.setFormats= this.setFormats.bind(this);
  }
  formats=[];
  data = this.props.data;
  zIndex = this.props.zIndex
  size = this.props.size
  id = this.props.id
  hidden = false
  top = this.props.top
  left = this.props.left
  backgroundColor = this.props.backgroundColor
  activeFontFamily = this.props.activeFontFamily
  height = this.props.size / 4

  rotateAngleText = this.props.rotateAngleText
  bold = this.props.bold
  Italic =this.props.Italic
  borderColor = this.props.borderColor
  underline = this.props.underline
  textColor=this.props.textColor
  getBackgroundColor() {
    return this.backgroundColor;
  }
  getActiveFontFamily() {
    return this.activeFontFamily;
  }
  getRotateAngleText() {
    return this.rotateAngleText;
  }
  getBold() {
    return this.bold;
  }
  getItalic() {
    return this.Italic;
  }
  getBorderColor() {
    return this.borderColor;
  }
  getUnderline() {
    return this.underline;
  }
  getTextColor() {
    return this.textColor;
  }
  getFormats() {
    return this.formats;
  }
  setFormats(Formats){
    this.formats=Formats
  }
  setTextColor(color){
    this.textColor=color
  }
  setUnderline(underline){
    this.underline=underline
  }
  setBorderColor(color){
    this.borderColor=color
  }
  setItalic(Italic){
    this.Italic=Italic
  }
  setBold(bold){
    this.bold=bold
  }
  setRotateAngleText(rotateAngle){
    this.rotateAngleText=rotateAngle
  }
  setActiveFontFamily(font){
    this.activeFontFamily=font
  }
  setBackgroundColor(color){
    this.backgroundColor=color
  }
  getData() {
    return this.data;
  }
  getZIndex() {
    return this.zIndex;
  }
  getSize() {
    return this.size;
  }
  getTop() {
    return this.top;
  }
  getLeft() {
    return this.left;
  }
  getId() {
    return this.id;
  }
  getHidden() {
    return this.hidden;
  }
  setHidden() {
    this.hidden = !this.hidden;
    window.document.getElementById('shirt').click();

  }
  handelClick() {
    window.document.getElementById('textcenter-input' + this.id).click();

  }
  setData(data) {
    this.data = data;
    this.handelClick();


  }
  setZIndex(zIndex) {
    this.zIndex = zIndex;
    window.document.getElementById('shirt').click();

  }
  setSize(size) {
    this.size = size;

  }
  setTop(top) {
    this.top = top;

  }
  setLeft(left) {
    this.left = left;

  }
  getView() {
    return <div className='elementtext-view'>
      <span id='elementtext-view-icon' className="iconify" data-icon="carbon:text-font"></span>
      <p className='elementtext-view-txt' > {this.data}</p>

      {/* <button onClick={this.setHidden} id={this.state.hidden?'elementtext-view-eye-true':'elementtext-view-eye-false'}> <span className="iconify" data-icon="ant-design:eye-filled"></span></button> */}
      <button onClick={this.setHidden} id={this.hidden ? 'elementtext-view-eye-true' : 'elementtext-view-eye-false'}> <span className="iconify" data-icon="ant-design:eye-filled"></span></button>

    </div>
  }

  render() {

    return (
      // this.getView()

      <div className='elementtext-view'>
        <span id='elementtext-view-icon' className="iconify" data-icon="carbon:text-font"></span>
        <p className='elementtext-view-txt' > {this.getData()}</p>
        <p>{this.getId()}</p>
        <button onClick={this.setHidden} id={this.hidden ? 'elementtext-view-eye-true' : 'elementtext-view-eye-false'}> <span className="iconify" data-icon="ant-design:eye-filled"></span></button>

      </div>

    );
  }
}
