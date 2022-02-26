import React, {Component} from 'react';
import './DesignElementShape.css';
import { Icon } from '@iconify/react';





export default class ElementShape extends Component {
    constructor(props) {
        super(props);
        this.state={
          colorFill:this.props.colorFill,
          colorBorder:this.props.colorBorder
      
        }
       
this.getData=this.getData.bind(this);
this.getZIndex=this.getZIndex.bind(this);
this.getSize=this.getSize.bind(this);
this.getId=this.getId.bind(this);
this.getColorFill=this.getColorFill.bind(this);
this.getColorBorder=this.getColorBorder.bind(this);

this.getView=this.getView.bind(this);
this.setColorFill=this.setColorFill.bind(this);
this.setColorBorder=this.setColorBorder.bind(this);
this.setData=this.setData.bind(this);
this.setZIndex=this.setZIndex.bind(this);
this.setSize=this.setSize.bind(this);
this.getHidden=this.getHidden.bind(this);
this.handelClick=this.handelClick.bind(this);
this.setHidden=this.setHidden.bind(this);

this.setRotateAngle=this.setRotateAngle.bind(this);
this.getRotateAngle=this.getRotateAngle.bind(this);

this.setWidth=this.setWidth.bind(this);
this.getWidth=this.getWidth.bind(this);

this.setTop=this.setTop.bind(this);
this.getTop=this.getTop.bind(this);

this.setLeft=this.setLeft.bind(this);
this.getLeft=this.getLeft.bind(this);

      }
       data=this.props.data
       zIndex=this.props.zIndex
       size=this.props.size
       id=this.props.id
       colorFill=this.props.colorFill
       colorBorder=this.props.colorBorder
       hidden=false
       width= this.props.width
       height= this.props.height
       top= this.props.top
       left= this.props.left
       rotateAngle= this.props.rotateAngle

       setLeft(left){
        this.left=left
      }
      getLeft(){
        return this.left
      }
       setTop(top){
        this.top=top
      }
      getTop(){
        return this.top
      }
       setWidth(width){
        this.width=width
      }
      getWidth(){
        return this.width
      }
       setRotateAngle(rotateAngle){
        this.rotateAngle=rotateAngle
      }
      getRotateAngle(){
        return this.rotateAngle
      }
      getData(){
        return this.data;
      }
      getZIndex(){
        return this.zIndex;
      }
      getSize(){
        return this.size;
      }
      handelClick(){
        window.document.getElementById('shirt').click();
  
       }
      getId(){
        return this.id;
      }
      getColorFill(){
 
        return this.colorFill
      }
      getColorBorder(){
        return this.colorBorder

      }
      getHidden(){
        return this.hidden;
      }
      setHidden(){
        this.hidden=!this.hidden;
        window.document.getElementById('shirt').click();
        
      }
      setData(data){
        this.data=data;

      }
      setColorFill(color){

        this.colorFill=color
        window.document.getElementById(this.id).click();

      }
      setColorBorder(color){
        this.colorBorder=color
        window.document.getElementById(this.id).click();


      }
      setZIndex(zIndex){
        this.zIndex=zIndex;
        window.document.getElementById('shirt').click();

      }
      setSize(size){
        this.size=size;
      }
      getView(){
   
        return <div className='elementshape-view'>
          <span id='elementshape-view-icon' className="iconify" data-icon="bx:bx-shape-square"></span>

        <Icon color={this.getColorFill()} width={28} icon={this.data.fill}  style={{position:'absolute',top:'6px'}} />
               <Icon color={this.getColorBorder()} width={28}  icon={this.data.nofill}  style={{position:'absolute',top:'6px'}} />
               <button onClick={this.setHidden} id={this.hidden?'elementtext-view-eye-true':'elementtext-view-eye-false'}> <span className="iconify" data-icon="ant-design:eye-filled"></span></button>

        </div>
        }
      
 
      render() {
       
    //  {this.getView()}
    return (
        
        <div className='elemet'>
        
       </div>
          
    );
  }
}
