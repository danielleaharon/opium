import React, {Component, Fragment} from 'react';
import BackMan from '../../Image/Design/men_back.png'
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
import TextToolbar from '../TextToolbar/TextToolbar';
import TextToolbar2 from '../TextToolbar/TextToolbar2';




import './DesignElementText.css';
export default class DesignElementText extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          delete:false,
          exit:false,
          text:this.props.text,
          backgroundColor:'',
          textColor:'black',
          activeFontFamily: "Open Sans",
          drag:false,
          editNow:'',
          dragText:false,
          itemArray:[],
          widthText: this.props.widthText,
          width: this.props.widthText,
          heightText: 80,
          topText: 175,
          leftText: 240,
          rotateAngleText: 0,
          dragText:false,
          bold:'',
          toggelPaint:false,
          Italic:'normal',       
          backgroundRadius:0,  
          borderColor:'',
          zIndex:'1',
      
        }
      

        
        this.handleChangeDragText = this.handleChangeDragText.bind(this);
        this.handleResizeText = this.handleResizeText.bind(this);
        this.handleDragText = this.handleDragText.bind(this);
        this.handleRotateText = this.handleRotateText.bind(this);
        this.click = this.click.bind(this);
        this.handleChangeCompleteColor = this.handleChangeCompleteColor.bind(this);
this.setPaint=this.setPaint.bind(this);
this.bold=this.bold.bind(this);
this.changeFont=this.changeFont.bind(this);
this.delete=this.delete.bind(this);
this.getFont=this.getFont.bind(this);
        this.handelClick=this.handelClick.bind(this);
        this.Italic=this.Italic.bind(this);
        this.setRadios=this.setRadios.bind(this);
        this.setBorderColor=this.setBorderColor.bind(this);
        this.getZIndex=this.getZIndex.bind(this);

this.setBackgroundColor=this.setBackgroundColor.bind(this);
      }
  componentDidMount(){
    this.getZIndex();
  }

   
      handleRotateText(rotateAngleText) {
        this.setState({
          rotateAngleText
        })
      }
    
      handleDragText (deltaX, deltaY)  {
        this.setState({
          leftText: this.state.leftText + deltaX,
          topText: this.state.topText + deltaY
        })
      }
      handleResizeText (style, isShiftKey, type) {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
        let { top, left, width, height } = style
        top = Math.round(top)
        left = Math.round(left)
        width = Math.round(width)
        height = Math.round(height)
        let topText=top
         let leftText=left
         let widthText=width
         let heightText=height
         this.handleChangeText('fff','fff')
        this.setState({
          topText,
          leftText,
          widthText,
          // heightText
        })
        this.handleChangeText()
      }
     
      handleChangeCompleteColor = (color, event) => {
        this.setState({ textColor: color.hex });
      };
      handleChangeDragText= (e)=> {
      
        this.setState({ dragText: !this.state.dragText});


      };
      handelClick(){
        console.log(this.state.toggelPaint)
        this.setState({toggelPaint:!this.state.toggelPaint})
      }
      handleChangeText(event,type) {
        console.log(type)
        console.log(document.getElementById('textcenter').clientWidth)
        this.setState({width:document.getElementById('textcenter').clientWidth+25})

     
  
      }
      setPaint(color){
        this.setState({textColor:color})
      }
      setBackgroundColor(color){
        this.setState({backgroundColor:color})

      }
      bold(){
        if(this.state.bold!='')
        this.setState({bold:''})
        else{
          this.setState({bold:'bold'})

        }
      }
      changeFont(nextFont){
        this.setState({
          activeFontFamily: nextFont.family,
      })
      }
      getFont(){
        return this.state.activeFontFamily;
      }
        Italic(){
          if(this.state.Italic!='normal')
          this.setState({Italic:'normal'})
          else{
            this.setState({Italic:'italic'})
  
          }
        }
        setRadios(e,value){
          this.setState({backgroundRadius:value})
        }
      

      
      
      handleChangeDrag= (e)=> {
        console.log(e.target.className)
        if(e.target.className==='shirt'){
        this.setState({ drag: false});
        this.setState({ dragText: false});
        }
        else
        this.setState({ drag: !this.state.drag});
      };
      click(e){
        this.props.onDrag(this.props.myIndex)
        this.props.getTextToolbar(<TextToolbar2 zIndex={this.getZIndex} setBorderColor={this.setBorderColor} setRadios={this.setRadios} Radios={this.state.backgroundRadius} setPaint={this.setPaint} textColor={this.state.textColor} setBackgroundColor={this.setBackgroundColor} backgroundColor={this.state.backgroundColor} bold={this.bold} Italic={this.Italic} setShowSlider={this.props.setShowSlider} changeFont={this.changeFont}getFont={this.getFont} />)
      }
      delete(e){
        console.log("delete  "+e.charCode)
        console.log("delete  "+e.tabIndex        )
      
        this.props.getTextToolbar('')

        this.setState({text:''});
        this.setState({delete:true})
        
      }
      setBorderColor(color){
        this.setState({borderColor:color})
      }
   
      getZIndex(){
        const z= this.props.zIndex();
        this.setState({zIndex:z});
      }
      render() {
        if(this.state.delete)
        return '';
     
    return (
        
        <div className='Design2' style={{zIndex:this.state.zIndex}}  >
           <p   onClick={this.click} style={{fontSize:this.state.widthText+'%',
          //  width:this.state.widthText,
           left:this.state.leftText+1,
          //  height:this.state.heightText,
          padding:'5px',
           top:this.state.topText+1,
           alignItems:'center',
           position:'absolute',
           webkitTextStroke: '2px'+this.state.borderColor, /* width and color */
           fontStyle:this.state.Italic,
           fontWeight:this.state.bold,
           borderRadius:this.state.backgroundRadius+'px',
          backgroundColor:this.state.backgroundColor,
           transform: `rotate(${this.state.rotateAngleText}deg)`,
            color:this.state.textColor ,fontFamily:this.state.activeFontFamily}} className='textcenter' id='textcenter' onKeyDown={(e)=>{this.handleChangeText(e,false)}} onKeyPress={(e=>this.handleChangeText(e,true))}  contenteditable="true">{this.state.text}</p>
            <div >
          {this.props.drag===this.props.myIndex?(
            <div>
               <button style={{position:'absolute',
            left:this.state.leftText-12,
            zIndex:'10',
            backgroundColor:'transparent',
            border:'none',
            position:'absolute',
            //  height:this.state.widthText/2,
             top:this.state.topText-10,
        }} onClick={this.delete}><i style={{fontSize:'20px'}} class="fa fa-times"></i></button>

             <ResizableRect 
          left={this.state.leftText}
          top={this.state.topText}
          width={this.state.width}
          height={this.state.width/4}
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
         

           </ResizableRect>    </div>):''}
           </div>
           </div>
          
    );
  }
}
