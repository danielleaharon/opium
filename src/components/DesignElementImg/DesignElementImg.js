import React, { Component } from 'react';

import ResizableRect from 'react-resizable-rotatable-draggable'
import 'react-dropdown/style.css';
import ImgToolbar2 from '../ImgToolbar/ImgToolbar2';


import './DesignElementImg.css';
export default class DesignElementImg extends Component {
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
    this.getZIndex = this.getZIndex.bind(this);
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
  componentDidMount() {
    // this.getZIndex();
  }
  getZIndex() {
    // const z= this.props.zIndex();
    // this.setState({zIndex:z});
  }
  handleRotate(rotateAngle) {
    this.setState({
      rotateAngle
    })
    this.props.item.setRotateAngle(rotateAngle)

  }

  handleDrag(deltaX, deltaY) {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    }, () => {
      this.props.item.setTop(this.state.top)
      this.props.item.setLeft(this.state.left)
    })
  }
  handleResize(style, isShiftKey, type) {
   
    let { top, left, width, height } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    this.setState({
      top,
      left,
      width,
      height
    }, () => {
      this.props.item.setWidth(this.state.width)
      this.props.item.setHeight(this.state.height)

      this.props.item.setTop(this.state.top)
      this.props.item.setLeft(this.state.left)
    })
  }
  setRadios(e, value) {
    this.setState({ borderRadius: value })
  }

  click() {
    this.props.onDrag(this.props.item.getId())
    console.log(this.props.item.getImgClip())
    this.props.getTextToolbar(<ImgToolbar2 changeImgClip={this.changeImgClip} imgClip={this.props.item.getImgClip()} setBorderColor={this.setBorderColor} boderColor={this.state.BorderColor} setRadios={this.setRadios} Radios={this.state.borderRadius} setShowSlider={this.props.setShowSlider} />)
  }
  setBorderColor(color) {
    this.setState({ BorderColor: color })
    this.props.item.setBorderColor(color)
  }
  render() {
    if (this.state.delete)
      return '';

    return (

      <div className='Design2' hidden={this.props.item.hidden} style={{ zIndex: this.props.item.getZIndex() }}  >

 
        <div className={this.state.imgClip.titel} style={{
          width: this.state.width, height: this.state.width,
          position: 'absolute',
          left: this.state.left,
          top: this.state.top,
          transform: `rotate(${this.state.rotateAngle}deg)`,


          backgroundColor: this.state.BorderColor,
        }}>
          <img onClick={this.click} style={{
            position: 'absolute',
            borderRadius: this.state.borderRadius,
            //  border:this.state.BorderColor+' 2px solid',
            left: 5,
            top: 5,
            //  transform: `rotate(${this.state.rotateAngle}deg)`,

            width: this.state.width - 10, height: this.state.width - 10
          }} src={this.props.item.getData()} className={this.state.imgClip.titel}  alt='imgClip'></img>
        </div>
        <div>
          {this.props.drag === this.props.item.getId() ? (
            <div>
              <button style={{
                position: 'absolute',
                left: this.state.left - 12,
                zIndex: '10',
                backgroundColor: 'transparent',
                border: 'none',
                //  height:this.state.widthText/2,
                top: this.state.top - 10,
              }} onClick={this.delete}><i style={{ fontSize: '20px' }} className="fa fa-times"></i></button>
              <ResizableRect
                left={this.state.left}
                top={this.state.top}
                width={this.state.width}
                height={this.state.width}
                rotateAngle={this.state.rotateAngle}
                // aspectRatio={false}
                // minWidth={10}
                // minHeight={10}
                zoomable='n, w, s, e, nw, ne, se, sw'
                // rotatable={true}
                // onRotateStart={this.handleRotateStart}
                onRotate={this.handleRotate}
                // onRotateEnd={this.handleRotateEnd}
                // onResizeStart={this.handleResizeStart}
                onResize={this.handleResize}
                // onResizeEnd={this.handleUp}
                // onDragStart={this.handleDragStart}
                onDrag={this.handleDrag}

              //  onDragEnd={this.handleChangeDrag}
              >

              </ResizableRect></div>) : ''}
        </div>
      </div>

    );
  }
}
