import React, {Component} from 'react';
import { Icon } from '@iconify/react';
//star icons
import starFill from '@iconify/icons-bi/star-fill';
import starIcon from '@iconify/icons-bi/star';
import starburstIcon from '@iconify/icons-typcn/starburst';
import starburstOutline from '@iconify/icons-typcn/starburst-outline';
import moonStars from '@iconify/icons-bi/moon-stars';
import moonStarsFill from '@iconify/icons-bi/moon-stars-fill';
import buttonStarburst from '@iconify/icons-si-glyph/button-starburst';
// heart icons
import suitHeartFill from '@iconify/icons-bi/suit-heart-fill';
import suitHeart from '@iconify/icons-bi/suit-heart';
import bxHomeHeart from '@iconify/icons-bx/bx-home-heart';
import heartCircle from '@iconify/icons-ion/heart-circle';
import heartCircleOutline from '@iconify/icons-ion/heart-circle-outline';
import heavyHeartExclamation from '@iconify/icons-emojione-monotone/heavy-heart-exclamation';
//other
import squreShape from '@iconify/icons-uim/squre-shape';
import squareShape from '@iconify/icons-uil/square-shape';
import circleFill from '@iconify/icons-bi/circle-fill';
import circleIcon from '@iconify/icons-bi/circle';
import emojiSmileFill from '@iconify/icons-bi/emoji-smile-fill';
import emojiSmile from '@iconify/icons-bi/emoji-smile';
import cameraFilled from '@iconify/icons-ant-design/camera-filled';
import cameraOutlined from '@iconify/icons-ant-design/camera-outlined';
import bxsPolygon from '@iconify/icons-bx/bxs-polygon';
import bxPolygon from '@iconify/icons-bx/bx-polygon';
import sunIcon from '@iconify/icons-fontisto/sun';
import sunIcon2 from '@iconify/icons-fa-solid/sun';
import pictureframeIcon from '@iconify/icons-whh/pictureframe';
import animalDog24Regular from '@iconify/icons-fluent/animal-dog-24-regular';
import animalDog24Filled from '@iconify/icons-fluent/animal-dog-24-filled';
import dogFill from '@iconify/icons-ph/dog-fill';
import catIcon from '@iconify/icons-fa-solid/cat';
import catFootprint from '@iconify/icons-icons8/cat-footprint';
import baselinePets from '@iconify/icons-ic/baseline-pets';
import musicNote216Filled from '@iconify/icons-fluent/music-note-2-16-filled';
import musicNote216Regular from '@iconify/icons-fluent/music-note-2-16-regular';
import bxsCrown from '@iconify/icons-bx/bxs-crown';
import crownSolid from '@iconify/icons-clarity/crown-solid';
import crownLine from '@iconify/icons-clarity/crown-line';


import './Icons.css';
export default class Icons extends Component {
    constructor(props) {
        super(props);
        this.state={
          
        }
       
  this.star=this.star.bind(this);
  this.heart=this.heart.bind(this);
  this.Shape=this.Shape.bind(this);
  this.Shape2=this.Shape2.bind(this);
  this.Shape3=this.Shape3.bind(this);
  this.Shape4=this.Shape4.bind(this);

  this.handelClick=this.handelClick.bind(this);


    }
    star(){
      
      return  <div className='icons-col'>
        
<button className='icon-btn' onClick={()=>this.handelClick(starFill,starIcon,'#FFD400','#fce679')}>
<Icon color='#FFD400' icon={starFill} className='icon-toolbar' /><Icon color='#fce679' icon={starIcon}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(starburstIcon,starburstOutline,'#99ff99','#339966')}>
<Icon color='#99ff99'  icon={starburstIcon} className='icon-toolbar' /><Icon color='#339966' icon={starburstOutline}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(moonStarsFill,moonStars,'#00C6AE','#009987')}>
<Icon color='#00C6AE'  icon={moonStarsFill} className='icon-toolbar' /><Icon color='#009987' icon={moonStars}  className='icon-toolbar'/></button>


<button className='icon-btn' onClick={()=>this.handelClick(buttonStarburst,buttonStarburst,'#6666ff','#00C6AE')}>
<Icon color='#6666ff'  icon={buttonStarburst} className='icon-toolbar' /></button>

</div> 
    }
    heart(){
      return(<div className='icons-col'>
        <button className='icon-btn' onClick={()=>this.handelClick(suitHeartFill,suitHeart,'#E55E71','#9a192a')}>
<Icon color='#E55E71'  icon={suitHeartFill} className='icon-toolbar' /><Icon color='#9a192a' icon={suitHeart}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(bxHomeHeart,bxHomeHeart,'#FFB3C9','#E55E71')}>
<Icon color='#FFB3C9'  icon={bxHomeHeart} className='icon-toolbar' /></button>

<button className='icon-btn' onClick={()=>this.handelClick(heartCircle,heartCircleOutline,'#FFB4EA','TRANSPARENT')}>
<Icon color='#FFB4EA'  icon={heartCircle} className='icon-toolbar' /><Icon color='TRANSPARENT' icon={heartCircleOutline}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(heavyHeartExclamation,heavyHeartExclamation,'#CFB9F6','#E55E71')}>
<Icon color='#CFB9F6'  icon={heavyHeartExclamation} className='icon-toolbar' /></button>


</div> )

    }
    Shape(){
      return  <div className='icons-col'>
         <button className='icon-btn' onClick={()=>this.handelClick(squreShape,squareShape,'#009999','#003333')}>
<Icon color='#009999'  icon={squreShape} className='icon-toolbar' /><Icon color='#003333' icon={squareShape}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(circleFill,circleIcon,'#ff3300','#ffc2b3')}>
<Icon color='#ff3300'  icon={circleFill} className='icon-toolbar' /><Icon color='#ffc2b3' icon={circleIcon}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(emojiSmileFill,emojiSmile,'#cc6699','TRANSPARENT')}>
<Icon color='#cc6699'  icon={emojiSmileFill} className='icon-toolbar' /><Icon color='TRANSPARENT' icon={emojiSmile}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(cameraFilled,cameraOutlined,'#a6a6a6','TRANSPARENT')}>
<Icon color='#a6a6a6'  icon={cameraFilled} className='icon-toolbar' /><Icon color='TRANSPARENT' icon={cameraOutlined}  className='icon-toolbar'/></button>




</div> 

    }
    Shape2(){
      return<div className='icons-col'>
        <button className='icon-btn' onClick={()=>this.handelClick(bxsPolygon,bxPolygon,'#ff9900','TRANSPARENT')}>
<Icon color='#ff9900'  icon={bxsPolygon} className='icon-toolbar' /><Icon color='TRANSPARENT' icon={bxPolygon}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(sunIcon,sunIcon,'#ff9900','TRANSPARENT')}>
<Icon color='#ff9900'  icon={sunIcon} className='icon-toolbar' /></button>


<button className='icon-btn' onClick={()=>this.handelClick(sunIcon2,sunIcon2,'#0099ff','TRANSPARENT')}>
<Icon color='#0099ff'  icon={sunIcon2} className='icon-toolbar' /></button>

<button className='icon-btn' onClick={()=>this.handelClick(pictureframeIcon,pictureframeIcon,'#993366','TRANSPARENT')}>
<Icon color='#993366'  icon={pictureframeIcon} className='icon-toolbar' /></button>


</div> 

    }
    Shape3(){
      return<div className='icons-col'>
      <button className='icon-btn' onClick={()=>this.handelClick(animalDog24Filled,animalDog24Regular,'TRANSPARENT','#996633')}>
<Icon color='TRANSPARENT'  icon={animalDog24Filled} className='icon-toolbar' /><Icon color='#996633' icon={animalDog24Regular}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(dogFill,dogFill,'#cc6600','TRANSPARENT')}>
<Icon color='#cc6600'  icon={dogFill} className='icon-toolbar' /></button>


<button className='icon-btn' onClick={()=>this.handelClick(catIcon,catIcon,'#669900','TRANSPARENT')}>
<Icon color='#669900'  icon={catIcon} className='icon-toolbar' /></button>

<button className='icon-btn' onClick={()=>this.handelClick(catFootprint,catFootprint,'#009900','TRANSPARENT')}>
<Icon color='#009900'  icon={catFootprint} className='icon-toolbar' /></button>


</div> 

    }
    Shape4(){
      return<div className='icons-col'>
      <button className='icon-btn' onClick={()=>this.handelClick(musicNote216Filled,musicNote216Regular,'#1a1a1a','#1a1a1a')}>
<Icon color='#1a1a1a'  icon={musicNote216Filled} className='icon-toolbar' /><Icon color='#1a1a1a' icon={musicNote216Regular}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(bxsCrown,bxsCrown,'#ffd480','TRANSPARENT')}>
<Icon color='#ffd480'  icon={bxsCrown} className='icon-toolbar' /></button>


<button className='icon-btn' onClick={()=>this.handelClick(crownSolid,crownLine,'#9999ff','#3399ff')}>
<Icon color='#9999ff'  icon={crownSolid} className='icon-toolbar' /><Icon color='#3399ff' icon={crownLine}  className='icon-toolbar'/></button>

<button className='icon-btn' onClick={()=>this.handelClick(baselinePets,baselinePets,'#9999ff','TRANSPARENT')}>
<Icon color='#9999ff'  icon={baselinePets} className='icon-toolbar' /></button>


</div> 

    }
    handelClick(fill,border,colorFill,colorBorder){
      this.props.addShape(fill,border,colorFill,colorBorder)

    }
 
      render() {
    return (
        
        <div className='Icons'>
          {this.star()}
          {this.heart()}
          {this.Shape()}
          {this.Shape2()}
          {this.Shape3()}
          {this.Shape4()}




      </div>
    );
  }
}
