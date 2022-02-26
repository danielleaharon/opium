import React, { Component } from 'react';

import 'react-dropdown/style.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Rnd } from "react-rnd";
import ImgToolbar2 from '../ImgToolbar/ImgToolbar2';




import './DesignElementImgMobile.css';

export default class DesignElementImgMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
      BorderColor: 'transparent',
      width: this.props.item.getWidth(),
      height: this.props.item.getHeight(),
      top: this.props.item.getTop(),
      left: this.props.item.getLeft(),
      rotateAngle: this.props.item.getRotateAngle(),
      borderRadius: 0,
      zIndex: '1',
      imgClip: this.props.item.getImgClip()

    }



    this.handleResize = this.handleResize.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleRotate = this.handleRotate.bind(this);
    this.setBorderColor = this.setBorderColor.bind(this);
    this.setRadios = this.setRadios.bind(this);
    this.click = this.click.bind(this);
    this.delete = this.delete.bind(this);
    this.changeImgClip = this.changeImgClip.bind(this);

  }
  changeImgClip(clip) {
    this.setState({ imgClip: clip })
    this.props.item.setImgClip(clip)

  }
  delete(e) {
    this.props.deleteImg(this.props.item.getId())

    this.props.getTextToolbar('')

    this.setState({ delete: true })
  }
  handleDrag(deltaX, deltaY) {
    console.log('tohch')
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    }, () => {
      this.props.item.setTop(this.state.top)
      this.props.item.setLeft(this.state.left)
    })


  }
  handleResize(style, delta, type) {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { x, y } = style
    let { width, height } = delta

 



    this.setState({
      // topText,
      // leftText,
      width,

      // width,
      // heightText
    }, () => {

      this.props.item.setWidth(this.state.width)
      // this.setState({ width: document.getElementById('textcenter-input' + this.props.item.getId()).clientWidth })
      // this.setState({ height: document.getElementById('textcenter-input' + this.props.item.getId()).clientHeight })
    })

  }
  handleRotate(rotateAngle) {
    this.setState({
      rotateAngle
    })
    this.props.item.setRotateAngle(rotateAngle)

  }
  setRadios(e, value) {
    this.setState({ borderRadius: value })
  }

  setBorderColor(color) {
    this.setState({ BorderColor: color })
    this.props.item.setBorderColor(color)
  }
  click() {
    this.props.onDrag(this.props.item.getId())
    // console.log(this.props.item.getImgClip())
    this.props.getTextToolbar(<ImgToolbar2 changeImgClip={this.changeImgClip} imgClip={this.props.item.getImgClip()} setBorderColor={this.setBorderColor} boderColor={this.state.BorderColor} setRadios={this.setRadios} Radios={this.state.borderRadius} setShowSlider={this.props.setShowSlider} />)
  }


  render() {
    if (this.state.delete)
      return '';

    return (

      <div className='Design3' id={this.props.item.getId()} hidden={this.props.item.getHidden()} onClick={this.click}  style={{
        zIndex: this.props.item.getZIndex(), 
        position: 'absolute',
        width: this.state.width,
        height: this.state.width,
        left: this.state.left,
        top: this.state.top,
        // backgroundColor:this.state.backgroundColorHex,
        // backgroundColor: this.state.BorderColor,
        transform: `rotate(${this.state.rotateAngle}deg)`,
      }}  >
        {console.log(this.state.imgClip)}
      <div className={this.state.imgClip.titel} style={{
            position: 'absolute',
            left: 5,
            top: 5,
            border:this.state.BorderColor+' 2px solid',
            backgroundColor: this.state.BorderColor,


      }} >
          <img onClick={this.click} draggable style={{
            // borderRadius: this.state.borderRadius,
            //  border:this.state.BorderColor+' 2px solid',
           
            //  transform: `rotate(${this.state.rotateAngle}deg)`,

            width: this.state.width - 10, height: this.state.width - 10
          }} src={this.props.item.getData()} className={this.state.imgClip.titel} alt='imgClip' ></img>
        </div>

       
        {this.props.drag === this.props.item.getId() ? (
          <div className='div2'>
            <button style={{
              position: 'absolute',
              left: -16,
              // transform: `rotate(${this.state.rotateAngleText}deg)`,


              zIndex: '10',
              backgroundColor: 'transparent',

              textAlign: 'left',
              border: 'none',
              //  height:this.state.widthText/2,
              top: -15,
            }} onClick={this.delete} className='txt-element-delete-mobile'><i style={{ fontSize: '20px' }} className="fa fa-times"></i></button>
            <Rnd
              className='rnd'
              resizeHandleClasses={({
                bottom: 'rnd-resize-bottom',
                bottomLeft: "rnd-resize-btn",
                bottomRight: "rnd-resize-btn",
                left: "rnd-resize-left",
                right: "rnd-resize-right",
                top: "rnd-resize-up",
                topLeft: "",
                topRight: "rnd-resize-btn",
              })}
              size={{ width: '100%', height: '100%' }}
              position={{ x: 0, y: 0 }}
              onDragStop={(e, d) => { this.handleDrag(d.x, d.y) }}
              onResizeStop={(e, direction, ref, delta, position) => {

                this.handleResize(position, { width: ref.offsetWidth, height: ref.offsetHeight })
              }}
            ></Rnd>
          
          </div>) : ''}
      </div>

    );
  }
}
