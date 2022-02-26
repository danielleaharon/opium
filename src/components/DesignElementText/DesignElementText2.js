import React, { Component } from 'react';

import ResizableRect from 'react-resizable-rotatable-draggable-touch-v2'
import 'react-dropdown/style.css';
import TextToolbar2 from '../TextToolbar/TextToolbar2';





import './DesignElementText.css';
export default class DesignElementText extends Component {
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
      dragText: false,
      widthText: this.props.item.getSize(),
      width: this.props.item.getSize(),
      heightText: this.props.item.getSize() / 4,
      topText: this.props.item.getTop(),
      leftText: this.props.item.getLeft(),
      rotateAngleText: this.props.item.getRotateAngleText(),
      dragText: false,
      bold: this.props.item.getBold(),
      toggelPaint: false,
      Italic: this.props.item.getItalic(),
      backgroundRadius: 0,
      borderColor: this.props.item.getBorderColor(),
      underline: this.props.item.getUnderline()

    }



    this.handleChangeDragText = this.handleChangeDragText.bind(this);
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

    this.setBackgroundColor = this.setBackgroundColor.bind(this);
  }
  componentDidMount() {

  }



  handleRotateText(rotateAngleText) {
    this.setState({
      rotateAngleText
    })
  }

  handleDragText(delta) {
    const {deltaX, deltaY}=delta;
    console.log(deltaY)
    this.setState({
      leftText: this.state.leftText + deltaX,
      topText: this.state.topText + deltaY
    }, () => {
      this.props.item.setTop(this.state.topText)
      this.props.item.setLeft(this.state.leftText)
    })


  }
  handleResizeText(data) {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    const {style, isShiftKey, type}=data;
    console.log(style)
    let { top, left, width, height } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    let topText = top
    let leftText = left
    let widthText = width
    let heightText = height


    //  this.handleChangeText('fff','fff')
    this.setState({
      topText,
      leftText,
      widthText,

      // heightText
    }, () => {
      this.props.item.setTop(this.state.topText)
      this.props.item.setLeft(this.state.leftText)
      this.props.item.setSize(this.state.widthText)
      this.setState({ width: document.getElementById('textcenter-input' + this.props.item.getId()).clientWidth })
      this.setState({ heightText: document.getElementById('textcenter-input' + this.props.item.getId()).clientHeight })
    })

    // this.handleChangeText()
  }

  // handleChangeCompleteColor = (color, event) => {
  //   this.setState({ textColor: color.hex });
  // };
  handleChangeDragText = (e) => {

    this.setState({ dragText: !this.state.dragText });


  };
  handelClick() {
    console.log(this.state.toggelPaint)
    this.setState({ toggelPaint: !this.state.toggelPaint })
  }
  handleChangeText(e) {
    this.setState({ text: e.target.value }, () => {
      this.setState({ width: document.getElementById('textcenter-input' + this.props.item.getId()).clientWidth })
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
    if (this.state.bold != '') {
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
    if (this.state.Italic != 'normal') {
      this.setState({ Italic: 'normal' })
      this.props.item.setItalic('normal')

    }
    else {
      this.setState({ Italic: 'italic' })
      this.props.item.setItalic('italic')

    }
  }
  underline() {
    if (this.state.underline != 'underline') {
      this.setState({ underline: 'underline' })
      this.props.item.setUnderline('underline')

    }
    else {
      this.setState({ Italic: 'none' })
      this.props.item.setUnderline('none')


    }
  }
  setRadios(e, value) {
    this.setState({ backgroundRadius: value })
  }




  handleChangeDrag = (e) => {
    console.log(e.target.className)
    if (e.target.className === 'shirt') {
      this.setState({ drag: false });
      this.setState({ dragText: false });
    }
    else
      this.setState({ drag: !this.state.drag });
  };
  click(e) {
    this.props.onDrag(this.props.item.getId())
    this.props.getTextToolbar(<TextToolbar2 key={this.props.item.getId()} setFormats={this.props.item.setFormats} formats={this.props.item.getFormats()} zIndex={this.getZIndex} underline={this.underline} setBorderColor={this.setBorderColor} BorderColor={this.state.borderColor} setRadios={this.setRadios} Radios={this.state.backgroundRadius} setPaint={this.setTextColor} textColor={this.state.textColor} setBackgroundColor={this.setBackgroundColor} backgroundColor={this.state.backgroundColor} bold={this.bold} Italic={this.Italic} setShowSlider={this.props.setShowSlider} changeFont={this.changeFont} getFont={this.getFont} />)
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

      <div className='Design3' id={this.props.item.getId()} hidden={this.props.item.getHidden()} style={{
        zIndex: this.props.item.getZIndex(), position: 'absolute',
        left: this.state.leftText,
        width: this.state.text.length + 'ch',

        top: this.state.topText,
      }}  >
        <input type='text' style={{
          fontSize: this.state.widthText + '%',
          //  width:this.state.widthText,
          //  height:this.state.heightText,
          // padding:'5px',
          width: this.state.text.length + 'ch',
          alignItems: 'center',
          textAlign: 'center',
          position: 'absolute',
          left: this.state.leftText,
          top: this.state.topText,
          webkitTextStroke: '2px' + this.state.borderColor, /* width and color */
          fontStyle: this.state.Italic,
          fontWeight: this.state.bold,
          textDecoration: this.state.underline,
          borderRadius: this.state.backgroundRadius + 'px',
          backgroundColor: this.state.backgroundColor,
          transform: `rotate(${this.state.rotateAngleText}deg)`,
          color: this.state.textColor, fontFamily: this.state.activeFontFamily
        }} onClick={this.click} className='textcenter-input' id={'textcenter-input' + this.props.item.getId()} onChange={this.handleChangeText} value={this.state.text}></input>
        {this.props.drag === this.props.item.getId() ? (
          <div className='div2'>
            <button style={{
              position: 'absolute',
              left: this.state.leftText - 12,
              // transform: `rotate(${this.state.rotateAngleText}deg)`,


              zIndex: '10',
              backgroundColor: 'transparent',

              textAlign: 'left',
              border: 'none',
              //  height:this.state.widthText/2,
              top: this.state.topText - 10,
            }} onClick={this.delete} className='txt-element-delete'><i style={{ fontSize: '20px' }} className="fa fa-times"></i></button>
            <ResizableRect
              left={this.state.leftText}
              className={this.props.item.getId()}
              top={this.state.topText}
              width={this.state.width}
              height={this.state.heightText}
              rotateAngle={this.state.rotateAngleText}
              // aspectRatio={false}
              // minWidth={10}
              // minHeight={10}
              zoomable='n, w, s, e, nw, ne, se, sw'
              // rotatable={true}
              // onRotateStart={this.handleRotateStart}
              onRotate={this.handleRotateText}
              // onRotateEnd={this.handleRotateEnd}
              // onResizeStart={this.handleResizeStart}
              onResize={this.handleResizeText}
              // onResizeEnd={this.handleUp}
              // onDragStart={this.handleDragStart}
              onDrag={this.handleDragText}
            //  onDragEnd={this.handleChangeDrag}
            >


            </ResizableRect>    </div>) : ''}
      </div>

    );
  }
}
