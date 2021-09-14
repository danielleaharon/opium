import React, {Component, Fragment} from 'react';
import Cover from '../../Image/heartcover.png'
import FrontMan from '../../Image/Design/men_front.png'
import { SketchPicker } from 'react-color';
import FontPicker from "font-picker-react";
import Draggable from 'react-draggable';
import ColorPicker from '../colorPicker/colorPicker';
import ResizableRect from 'react-resizable-rotatable-draggable'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Slider } from '@material-ui/core';
import ImgToolbar from '../ImgToolbar/ImgToolbar';


import './DesignElementImg.css';
export default class DesignElementText extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          delete:false,
          BorderColor:'transparent',
          width: 100,
          height: 80,
          top: 175,
          left: 240,
          rotateAngle: 0,
          borderRadius:0,
          zIndex:'1',

        }
      

        
        this.handleResize = this.handleResize.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleRotate = this.handleRotate.bind(this);
this.setBorderColor=this.setBorderColor.bind(this);
this.setRadios=this.setRadios.bind(this);
        this.click=this.click.bind(this);
        this.getZIndex=this.getZIndex.bind(this);
        this.delete=this.delete.bind(this);


      }
      delete(e){
        console.log("delete  "+e.charCode)
        console.log("delete  "+e.tabIndex        )
        this.props.getTextToolbar('')

        this.setState({text:''});
        this.setState({delete:true})
      }
      componentDidMount(){
        this.getZIndex();
      }
      getZIndex(){
        const z= this.props.zIndex();
        this.setState({zIndex:z});
      }
      handleRotate(rotateAngle) {
        this.setState({
          rotateAngle
        })
      }
    
      handleDrag (deltaX, deltaY)  {
        this.setState({
          left: this.state.left + deltaX,
          top: this.state.top + deltaY
        })
      }
      handleResize (style, isShiftKey, type) {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
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
        })
      }
      setRadios(e,value){
        this.setState({borderRadius:value})
      }
     
      click(){
        this.props.onDrag(this.props.myIndex)
        this.props.getTextToolbar(<ImgToolbar zIndex={this.getZIndex} setBorderColor={this.setBorderColor} boderColor={this.state.BorderColor}setRadios={this.setRadios} Radios={this.state.borderRadius}  setShowSlider={this.props.setShowSlider}/>)
      }
      setBorderColor(color){
        this.setState({BorderColor:color})
      }
      render() {
        if(this.state.delete)
        return '';
     
    return (
        
      <div className='Design2' style={{zIndex:this.state.zIndex}}  >
          
          <div  onClick={this.click} style={
              {
                width:this.state.width,
                height:this.state.height,
                left:this.state.left+1,
                top:this.state.top+1,
             
                border:this.state.BorderColor+' 2px solid',
                position:'absolute',
                borderRadius:this.state.borderRadius,
                backgroundSize:'cover',
                backgroundRepeat: 'no-repeat',

                transform: `rotate(${this.state.rotateAngle}deg)`,
                overflow:'hidden',
                

                }
              }
              
             >

          <img   src={this.props.img}></img>

               {/* <div className='heart-shape'></div> */}
        </div>
        <div>
         {this.props.drag===this.props.myIndex?( 
            <div>
            <button style={{position:'absolute',
         left:this.state.left-12,
         zIndex:'10',
         backgroundColor:'transparent',
         border:'none',
         position:'absolute',
         //  height:this.state.widthText/2,
          top:this.state.top-10,
     }} onClick={this.delete}><i style={{fontSize:'20px'}} class="fa fa-times"></i></button>
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
        
           </ResizableRect></div>):''}
           </div>
           </div>
          
    );
  }
}
