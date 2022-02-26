import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import './colorPicker.css';
import { Icon } from '@iconify/react';

class colorPicker extends React.Component {
  constructor(props)
  {
    super(props)
  this.state = {
    displayColorPicker: false,
    color: this.props.color,
    textcolor: this.props.textcolor,
    presetColors:['TRANSPARENT',this.props.color]
  };
  }
  componentDidMount(){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.props.color);
    if(result){
        var r= parseInt(result[1], 16);
        // var g= parseInt(result[2], 16);
        // var b= parseInt(result[3], 16);
        // const rgb= r+","+g+","+b;
        if(255-r<20)
        {
          this.setState({textcolor:'#000000b5'})
        }
        else{
          this.setState({textcolor:'white'})
    
        }
    } 
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    
    if(255-color.rgb.r<color.rgb.r)
    {
      this.setState({textcolor:'#000000b5'})
    }
    else{
      this.setState({textcolor:'white'})

    }
    const arr=this.state.presetColors;
    if(!arr.includes(color.hex )){
    arr.push(color.hex )
    this.setState({presetColors:arr})
    }
    this.setState({ color: color.hex })
    this.props.setPaint(color.hex);
  };

  render() {

    const styles = reactCSS({
      'default': {

        colorIcon:{
          color:this.props.color
        },
        color: {
          // width: '25px',
          // height: '25px',
          borderRadius: '2px',
          padding:'5px',
          // fontSize:'20px',
          // background: 'url(https://api.iconify.design/teenyicons:paintbucket-solid.svg?color='+'red'+') no-repeat center center / contain',
          // marginTop:'5px',
          border:'none',
          color:this.state.textcolor,
          backgroundColor:this.state.color
        //   background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
       
        colorShape: {
          // width: '25px',
          // height: '25px',
          padding:'5px',
          // fontSize:'20px',
          // background: 'url(https://api.iconify.design/teenyicons:paintbucket-solid.svg?color='+'red'+') no-repeat center center / contain',
          // marginTop:'5px',
          border:'none',
          color:this.state.textcolor,
          borderRadius:'4px',

          
          backgroundColor:this.state.textcolor
        //   background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
        //   padding: '5px',
        //   background: '#fff',
          borderRadius: '1px',
          // boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',

        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '7px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div className='paintPiker'>
        <div  style={ styles.swatch } onClick={ this.handleClick }>

          <div style={ this.props.icon!==undefined? styles.color :styles.colorShape} >
            {this.props.icon===undefined?<Icon color={this.state.color}  icon={this.props.iconShape} width='25px' />:this.props.icon}
          {/* <span className="iconify" id='paint-icon' data-icon="fluent:color-background-24-filled"></span> */}
        </div>
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker presetColors={this.state.presetColors} color={ this.state.color } onChangeComplete={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default colorPicker