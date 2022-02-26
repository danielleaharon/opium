import React, { Component } from 'react';

import ColorPicker from '../colorPicker/colorPicker';

import 'react-dropdown/style.css';
import { Slider } from '@material-ui/core';




import './ImgToolbar.css';
export default class DesignElementText extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {


      boderColor: '',

      backgroundRadius: 0,
      showSlider: false,
      sliderStyle: {
        display: 'grid',
        width: '50px',
        marginTop: '-7px',
        marginRight: '15px'

      }

    }



    this.ImgToolbar = this.ImgToolbar.bind(this);
    this.getZIndex = this.getZIndex.bind(this);

    this.setShowSlider = this.setShowSlider.bind(this);

  }





  getZIndex() {
    this.props.zIndex()
  }


  setShowSlider() {
    if (!this.state.showSlider)
      this.setState({ sliderStyle: { width: '400px', marginTop: '6px', marginRight: '15px' } })
    else {
      this.setState({ sliderStyle: { width: '50px', display: 'grid', marginRight: '15px', marginTop: '-7px' } })

    }
    this.setState({ showSlider: !this.state.showSlider })
  }
  ImgToolbar() {
    return (<div className='TextToolbar' style={{ marginRight: '-250px', width: '60%', paddingRight: '20px' }} >
      <span style={{ fontSize: '25px', margin: '5px', marginRight: '10px', marginTop: '5px' }} className="iconify" data-icon="ic:baseline-border-color" data-inline="false"></span>
      <ColorPicker setPaint={this.props.setBorderColor} color={this.props.boderColor} />

      <div style={this.state.sliderStyle}>
        <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={() => this.setShowSlider()} > <span style={{ fontSize: '23px' }} className="iconify" data-icon="mdi:vector-radius" data-inline="false"></span></button>


        {this.state.showSlider ? (<Slider
          style={{ color: 'black' }}
          onClick={console.log('slider in')}
          defaultValue={this.props.Radios}
          aria-labelledby="discrete-slider-custom"
          step={5}
          onChange={(e, value) => this.props.setRadios(e, value)}
          valueLabelDisplay="auto"
        />) : ''}
      </div>

      <div className='font-piker'>
        <button onClick={this.getZIndex} style={{ border: 'none', backgroundColor: 'transparent', fontSize: '27px', marginLeft: '20px' }}><span className="iconify" data-icon="bx:bxs-layer-plus" data-inline="false"></span></button>
      </div>
    </div>)
  }




  render() {
    return this.ImgToolbar();


  }
}
