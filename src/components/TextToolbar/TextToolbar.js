import React, { Component } from 'react';
import FontPicker from "font-picker-react";
import ColorPicker from '../colorPicker/colorPicker';
import 'react-dropdown/style.css';
import { Slider } from '@material-ui/core';
import './TextToolbar.css';

export default class DesignElementText extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

      backgroundColor: '',
      textColor: 'black',
      activeFontFamily: "Open Sans",
      boderColor: '',

      backgroundRadius: 0,
      showSlider: false,
      sliderStyle: {
        // fontSize:'25px',
        display: 'grid',
        width: '50px',
        marginTop: '-6px',
        marginRight: '85px'

      }

    }



    this.TextToolbar = this.TextToolbar.bind(this);
    this.changeFont = this.changeFont.bind(this);
    this.getFont = this.getFont.bind(this);
    this.setShowSlider = this.setShowSlider.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
  }






  changeFont(nextFont) {
    this.setState({
      activeFontFamily: nextFont.family,
    })
    this.props.changeFont(nextFont)
  }
  getFont() {
    return this.state.activeFontFamily;
  }
  getZIndex() {
    this.props.zIndex()
  }
  setShowSlider() {
    if (!this.state.showSlider)
      this.setState({ sliderStyle: { width: '700px', marginTop: '6px', marginRight: '85px' } })
    else {
      this.setState({ sliderStyle: { width: '50px', display: 'grid', marginRight: '85px', marginTop: '-6px' } })

    }
    this.setState({ showSlider: !this.state.showSlider })
  }
  TextToolbar() {
    return (<div className='TextToolbar' style={{ marginRight: '-250px', paddingRight: '30px' }}>
      <span style={{ fontSize: '30px', margin: '5px', marginRight: '10px', marginTop: '5px' }} className="iconify" data-icon="fluent:text-edit-style-24-regular" data-inline="false"></span>
      <ColorPicker setPaint={this.props.setBorderColor} color={this.state.boderColor} />

      <span style={{ fontSize: '30px', margin: '5px', marginRight: '10px', marginTop: '5px' }} className="iconify" data-icon="fluent:text-edit-style-24-filled" data-inline="false"></span>
      <ColorPicker setPaint={this.props.setPaint} color={this.state.textColor} />
      <span style={{ fontSize: '20px', margin: '5px', marginRight: '20px', marginTop: '10px' }} className="iconify" data-icon="fa-solid:fill-drip" data-inline="false"></span>

      <ColorPicker setPaint={this.props.setBackgroundColor} color={this.props.backgroundColor} />
      <div style={{ marginTop: '-2px', display: 'flex', fontSize: '27px' }}>
        <button style={{ border: 'none', backgroundColor: 'transparent', position: 'absolute', marginRight: '6px' }} onClick={() => this.props.bold()}>
          <span className="iconify" data-icon="fluent:text-bold-24-filled" data-inline="false"></span>
        </button>
        <button style={{ border: 'none', backgroundColor: 'transparent', position: 'absolute', marginRight: '45px' }} onClick={() => this.props.Italic()}>
          <span className="iconify" data-icon="bx:bx-italic" data-inline="false"></span>             </button>
      </div>
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

        <FontPicker

          apiKey="AIzaSyCVj4V2gUXgoVEDxpepWR1bFP85HvywOSU"
          activeFontFamily={this.getFont()}
          onChange={(nextFont) =>
            this.changeFont(nextFont)
          }
        />

      </div>

    </div>)
  }




  render() {
    return this.TextToolbar();


  }
}
