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
import ShapeToolbar from '../ShapeToolbar/ShapeToolbar';
import { Icon } from '@iconify/react';


import './DesignElementShape.css';
export default class DesignElementText extends Component {
    constructor(props) {
        super(props);
        this.state={
          delete:false,
          backgroundColor:this.props.colorFill,
          BorderColor:this.props.colorBorder,

          width: this.props.item.getWidth(),
          height: this.props.item.getWidth(),
          top: this.props.item.getTop(),
          left: this.props.item.getLeft(),
          rotateAngle: this.props.item.getRotateAngle(),
          borderRadius:0,
          color:this.props.color,
          

        
        }
      

        
        this.handleResize = this.handleResize.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleRotate = this.handleRotate.bind(this);
this.setBorderColor=this.setBorderColor.bind(this);
this.setRadios=this.setRadios.bind(this);
        this.click=this.click.bind(this);
        this.getZIndex=this.getZIndex.bind(this);
        this.delete=this.delete.bind(this);
        this.setBackgroundColor=this.setBackgroundColor.bind(this);


      }
      
         delete(e){
          this.props.deleteShape(this.props.item.getId())

          this.props.getTextToolbar('')
  

        this.setState({delete:true})
      }
      componentDidMount(){
        // this.getZIndex();
      }
      getZIndex(){
        // const z= this.props.zIndex();
        // this.setState({zIndex:z});
      }
      handleRotate(rotateAngle) {
        this.setState({
          rotateAngle
        })
        this.props.item.setRotateAngle(rotateAngle)
      }
    
      handleDrag (deltaX, deltaY)  {
        this.setState({
          left: this.state.left + deltaX,
          top: this.state.top + deltaY
        },()=>{
          this.props.item.setTop(this.state.top)
          this.props.item.setLeft(this.state.left)
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
        },()=>{
          this.props.item.setWidth(this.state.width)
          this.props.item.setTop(this.state.top)
          this.props.item.setLeft(this.state.left)
        })
      }
      setRadios(e,value){
        this.setState({borderRadius:value})
      }
     
      click(){
        this.props.onDrag(this.props.item.getId())
        this.props.getTextToolbar(<ShapeToolbar zIndex={this.getZIndex} setBackgroundColor={this.setBackgroundColor}  backgroundColor={this.state.backgroundColor} setBorderColor={this.setBorderColor} boderColor={this.state.BorderColor} icon={this.props.shapefill} 
       borderIcon={ this.props.shapeborder}  
    />)
      }
      setBorderColor(color){
        
        this.setState({BorderColor:color})
        this.props.item.setColorBorder(color)
      }
      setBackgroundColor(color){
        this.setState({backgroundColor:color})
        this.props.item.setColorFill(color);

      }
      render() {
        if(this.state.delete)
        return '';
     
    return (
        <div className='Design2'  hidden={this.props.item.hidden} style={{zIndex:this.props.item.getZIndex()}}  >
          
          <div  className='ddd'  id={this.props.item.getId()} onClick={this.click} style={
              {
                width:this.state.width,
                height:this.state.width,
                left:this.state.left,
                top:this.state.top,
                // backgroundColor:this.state.backgroundColorHex,

                position:'absolute',


                transform: `rotate(${this.state.rotateAngle}deg)`,
                // overflow:'hidden',
                

                }
              }
              
             >
               <Icon color={this.state.backgroundColor} width={this.state.width} icon={this.props.shapefill}  style={{position:'absolute',top:'0'}} />
               <Icon color={this.state.BorderColor} width={this.state.width}  icon={this.props.shapeborder}  style={{position:'absolute',top:'0'}} />

             

          {/* <div style={
              {
                width:this.state.width-10,
                height:this.state.width-15,
               
             backgroundColor:this.props.boderColorHex,
                position:'absolute',
                // maskBorder:"url('../../Image/heart2.png')",
                // background:'url('+this.props.shape+'?color=%23'+this.state.backgroundColor+') no-repeat center center / contain',
                backgroundSize:'cover',
                backgroundRepeat: 'no-repeat',
zIndex:10,
                left:5,
                top:7.5,
                

                }
              }
              
             >
              

        </div> */}
              

        </div>
        <div>
         {this.props.drag===this.props.item.getId()?( 
            <div>
            <button style={{position:'absolute',
         left:this.state.left-12,
         zIndex:'10',
         backgroundColor:'transparent',
         border:'none',
         position:'absolute',
         //  height:this.state.widthText/2,
          top:this.state.top-10,
     }} onClick={this.delete}><i style={{fontSize:'20px'}} className="fa fa-times"></i></button>
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
