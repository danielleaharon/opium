import React, { Component } from 'react';

import 'react-dropdown/style.css';

import TextToolbar2 from '../TextToolbar/TextToolbar2';
import { TextField } from "@material-ui/core";
import { Rnd } from "react-rnd";
import '../DesignElementTextMobile/DesignElementTextMobile.css';




import './DesignElementText.css';

export default class DesignElementTextMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false,
      exit: false,
      text: this.props.item.getData(),
      backgroundColor: this.props.item.getBackgroundColor(),
      textColor: this.props.item.getTextColor(),
      activeFontFamily: this.props.item.getActiveFontFamily(),
      drag: false,
     
      widthText: this.props.item.getSize(),

      widthText2: this.props.item.getSize(),
      width:this.props.item.getSize()*10,

      heightText:100,
      topText: this.props.item.getTop(),
      leftText: this.props.item.getLeft(),
      rotateAngleText: this.props.item.getRotateAngleText(),
      bold: this.props.item.getBold(),
      toggelPaint: false,
      Italic: this.props.item.getItalic(),
      backgroundRadius: 0,
      borderColor: this.props.item.getBorderColor(),
      underline: this.props.item.getUnderline()

    }



    this.handleResizeText = this.handleResizeText.bind(this);
    this.handleDragText = this.handleDragText.bind(this);
    this.handleRotateText = this.handleRotateText.bind(this);
    this.click = this.click.bind(this);
    // this.handleChangeCompleteColor = this.handleChangeCompleteColor.bind(this);
    this.setTextColor = this.setTextColor.bind(this);
    this.bold = this.bold.bind(this);
    this.changeFont = this.changeFont.bind(this);
    this.delete = this.delete.bind(this);
    this.getFont = this.getFont.bind(this);
    this.handelClick = this.handelClick.bind(this);
    this.Italic = this.Italic.bind(this);
    this.setRadios = this.setRadios.bind(this);
    this.setBorderColor = this.setBorderColor.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
    this.underline = this.underline.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);

    this.setBackgroundColor = this.setBackgroundColor.bind(this);

  }

  handleRotateText(rotateAngleText) {
    this.setState({
      rotateAngleText
    })
  }

  handleDragText(deltaX, deltaY) {
    this.setState({
      leftText:  deltaX,
      topText:  deltaY
    }, () => {
      this.props.item.setTop(this.state.topText)
      this.props.item.setLeft(this.state.leftText)
    })


  }
  handleResizeText(positon, delta) {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { x, y } = positon
    let { width, height } = delta

    let topText =  y
    let leftText =x
    let widthText2 = (width/(this.state.widthText*10))*(this.state.widthText)
    let heightText = width/4
    console.log(width)
    console.log(this.state.widthText)

console.log(widthText2)
    this.setState({
      topText,
      leftText,
      width,
      heightText,
      widthText2
    }, () => {

      this.props.item.setTop(this.state.topText)
      this.props.item.setLeft(this.state.leftText)
      this.props.item.setSize(widthText2)
    })

    // this.handleChangeText()
  }

  // handleChangeCompleteColor = (color, event) => {
  //   this.setState({ textColor: color.hex });
  // };

  handelClick() {
    this.setState({ toggelPaint: !this.state.toggelPaint })
  }
  handleChangeText(e) {
    e.persist()
    this.setState({ text: e.target.value }, () => {
      this.props.item.setData(this.state.text);

    })




  }
  setTextColor(color) {
    this.setState({ textColor: color })
    this.props.item.setTextColor(color)

  }
  setBackgroundColor(color) {
    this.setState({ backgroundColor: color })
    this.props.item.setBackgroundColor(color)


  }
  bold() {
    if (this.state.bold !== '') {
      this.setState({ bold: '' })
      this.props.item.setBold('')

    }
    else {
      this.setState({ bold: 'bold' })
      this.props.item.setBold('bold')

    }
  }
  changeFont(nextFont) {
    this.setState({
      activeFontFamily: nextFont.family,
    }, () => {
      this.props.item.setActiveFontFamily(this.state.activeFontFamily)

    })
  }
  getFont() {
    return this.state.activeFontFamily;
  }
  Italic() {
    if (this.state.Italic !== 'normal') {
      this.setState({ Italic: 'normal' })
      this.props.item.setItalic('normal')

    }
    else {
      this.setState({ Italic: 'italic' })
      this.props.item.setItalic('italic')

    }
  }
  underline() {
    if (this.state.underline !== 'underline') {
      this.setState({ underline: 'underline' })
      this.props.item.setUnderline('underline')

    }
    else {
      this.setState({ underline: 'none' })
      this.props.item.setUnderline('none')


    }
  }
  setRadios(e, value) {
    this.setState({ backgroundRadius: value })
  }



  click(e) {
    this.props.onDrag(this.props.item.getId())
  
    document.getElementById('textcenter-input' + this.props.item.getId()).focus()
    this.props.getTextToolbar(<TextToolbar2 key={this.props.item.getId()} setFormats={this.props.item.setFormats} formats={this.props.item.getFormats()} underline={this.underline} setBorderColor={this.setBorderColor} BorderColor={this.state.borderColor} setRadios={this.setRadios} Radios={this.state.backgroundRadius} setPaint={this.setTextColor} textColor={this.state.textColor} setBackgroundColor={this.setBackgroundColor} backgroundColor={this.state.backgroundColor} bold={this.bold} Italic={this.Italic} setShowSlider={this.props.setShowSlider} changeFont={this.changeFont} getFont={this.getFont} />)
  }

  delete(e) {

    console.log(this.props.getTextToolbar(''));
    this.props.deleteText(this.props.item.id)


    // this.setState({delete:true})


  }
  setBorderColor(color) {
    this.setState({ borderColor: color })
    this.props.item.setBorderColor(color)

  }

  getZIndex() {
    // const z= this.props.zIndex();
    // this.setState({zIndex:z});
  }

  render() {
    if (this.state.delete)
      return '';



    return (

    
            <Rnd
              className='rnd'
              id={this.props.item.getId()}

              hidden={this.props.item.getHidden()}
              resizeHandleClasses={this.props.drag === this.props.item.getId()&&({
                bottom: 'rnd-resize-bottom',
                bottomLeft: "rnd-resize-btn",
                bottomRight: "rnd-resize-btn",
                left: "rnd-resize-left",
                right: "rnd-resize-right",
                top: "rnd-resize-up",
                topLeft: "",
                topRight: "rnd-resize-btn",
              })}
              style={{ zIndex: this.props.item.getZIndex()}}
              size={{ width: this.state.width+'px', height: this.state.heightText+'px' }}
              position={{ x: this.state.leftText, y: this.state.topText }}
              onDragStop={(e, d) => { this.handleDragText(d.x, d.y) }}
              onResizeStop={(e, direction, ref, delta, position) => {

                this.handleResizeText(position, { width: ref.offsetWidth, height: ref.offsetHeight })
              }}>
                {console.log(this.props.item.getSize())}
              <div className='Design3' id={this.props.item.getId()} hidden={this.props.item.getHidden()} style={{
                zIndex: this.props.item.getZIndex(),
                height: '100%' ,
                width:'100%',
                backgroundColor: this.state.backgroundColor,
                fontFamily: this.state.activeFontFamily,
                fontSize:this.state.widthText2+'rem',
                borderRadius: this.state.backgroundRadius + 'px',
        
        
                // width:this.state.width,
                // width:this.state.width,
        
        
              }}  >
                <TextField
        
                  name='name'
                  type='text'
                  autoComplete='off'
                  variant="outlined"
                  required
                  inputProps={{
                    id: 'textcenter-input' + this.props.item.getId(),
                    style: {
                      "--size": this.state.widthText2+'px', "--family": this.state.activeFontFamily,
                      color: this.state.textColor,
                      fontStyle: this.state.Italic,
                      fontWeight: this.state.bold,
                      textDecoration: this.state.underline,
        
                    }
                  }}
                  onClick={this.click}
                  className='textcenter-input' id={'textcenter-input' + this.props.item.getId()}
                  onChange={(event)=>this.handleChangeText(event)}
                    value={this.state.text}
                  style={{
        
                    maxWidth: '100%',
                    width: '100%',
                    textAlign: 'center',
                    WebkitTextStroke: '2px ' + this.state.borderColor,
                    transform: `rotate(${this.state.rotateAngleText}deg)`,
                  }}
        
        
                />
               </div>
                {this.props.drag === this.props.item.getId() && 
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
                      top:'-15px',
                    }} onClick={this.delete} className='txt-element-delete-mobile'><i style={{ fontSize: '20px' }} className="fa fa-times"></i></button></div>}
            </Rnd>
          
      


    );
  }
}
