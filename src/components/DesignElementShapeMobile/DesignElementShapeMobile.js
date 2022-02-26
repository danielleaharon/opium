import React, { Component } from 'react';

import 'react-dropdown/style.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import ShapeToolbar from '../ShapeToolbar/ShapeToolbar';
import { Rnd } from "react-rnd";
import { Icon } from '@iconify/react';




import './DesignElementShapeMobile.css';

export default class DesignElementShapeMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
      backgroundColor: this.props.colorFill,
      BorderColor: this.props.colorBorder,

      width: this.props.item.getWidth(),
      height: this.props.item.getWidth(),
      top: this.props.item.getTop(),
      left: this.props.item.getLeft(),
      rotateAngle: this.props.item.getRotateAngle(),
      borderRadius: 0,
      color: this.props.color,

    }



    this.handleResize = this.handleResize.bind(this);
    this.handleResizeEnd = this.handleResizeEnd.bind(this);

    this.handleDrag = this.handleDrag.bind(this);
    this.setBorderColor = this.setBorderColor.bind(this);
    this.setRadios = this.setRadios.bind(this);
    this.click = this.click.bind(this);
    this.delete = this.delete.bind(this);
    this.setBackgroundColor = this.setBackgroundColor.bind(this);

  }
  delete(e) {
    this.props.deleteShape(this.props.item.getId())

    this.props.getTextToolbar('')


    this.setState({ delete: true })
  }
  setRadios(e, value) {
    this.setState({ borderRadius: value })
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
    // console.log(style)
    let leftq = this.state.left + y;
      let topq = this.state.top + x;

      console.log(leftq +' , '+topq)
     let top = Math.round(topq)
    let  left = Math.round(leftq)

    console.log(top +' , '+left)


    this.setState({
      // topText,
      // leftText,
      width,
      height,
      // top,
      // left

      // width,
      // heightText
    }, () => {

      // this.props.item.setWidth(this.state.width)
      // this.setState({ width: document.getElementById('textcenter-input' + this.props.item.getId()).clientWidth })
      // this.setState({ height: document.getElementById('textcenter-input' + this.props.item.getId()).clientHeight })
    })

  }
  handleResizeEnd() {
    this.props.item.setWidth(this.state.width)

  }

  click() {
    this.props.onDrag(this.props.item.getId())
    this.props.getTextToolbar(<ShapeToolbar zIndex={this.getZIndex} setBackgroundColor={this.setBackgroundColor} backgroundColor={this.state.backgroundColor} setBorderColor={this.setBorderColor} boderColor={this.state.BorderColor} icon={this.props.shapefill}
      borderIcon={this.props.shapeborder}
    />)
  }
  setBorderColor(color) {

    this.setState({ BorderColor: color })
    this.props.item.setColorBorder(color)
  }
  setBackgroundColor(color) {
    this.setState({ backgroundColor: color })
    this.props.item.setColorFill(color);

  }


  render() {
    if (this.state.delete)
      return '';

    return (

      <div className='Design3' id={this.props.item.getId()} hidden={this.props.item.getHidden()} onClick={this.click} style={{
        zIndex: this.props.item.getZIndex(), position: 'absolute',
        width: this.state.width,
        height: this.state.width,
        left: this.state.left,
        top: this.state.top,
        backgroundColor: '#000000',
        transform: `rotate(${this.state.rotateAngle}deg)`,
      }}  >
        <Icon color={this.state.backgroundColor} width={this.state.width} icon={this.props.shapefill} style={{ position: 'absolute', top: '0' }} />
        <Icon color={this.state.BorderColor} width={this.state.width} icon={this.props.shapeborder} style={{ position: 'absolute', top: '0' }} />


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
              onResize={(e, direction, ref, delta, position) => {
           

                this.handleResize(position, { width: ref.offsetWidth, height: ref.offsetHeight })
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                console.log('onResizeStop')
                this.handleResizeEnd()
              }}
            >


            </Rnd>

          </div>) : ''}
      </div>

    );
  }
}
