import React, {Component} from 'react';
import LogoPic from '../../Image/logoPic.png'
import LogoPicWithe from '../../Image/logowhite.png'
import Contact from '../Contact/Contact';
import Details from '../Details/Details';
import Categories from '../Categories/Categories';
import About from '../About/About';
import axios from 'axios';
import Config from '../../config/config';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './home.css';
export default class Home extends Component {
    constructor(props) {
        super(props);
       this.state={
        currentIndex:1,
        photoList:[],
        galleryItems:[],
       }
        this.Carousel=this.Carousel.bind(this)
    

    }
    galleryItems=[];

    componentDidMount(){

      axios.post(Config.getServerPath()+'photo/all')
      .then(res => {
  if(res.data.status===400){
    console.log('error')
  return
  }
  this.setState({photoList:res.data.photoList},()=>{
    // console.log(this.state.photoList)
    this.state.photoList.sort((a,b)=>a.positon-b.position).forEach((item,index)=>{
      console.log(item.url)

      this.galleryItems.push( 
     <a className='gallery-image' href={item.url}><img className='gallery-image' src={item.src} alt='gallery'></img></a> 
      )
      this.setState({galleryItems:this.state.galleryItems})
      // console.log(this.state.galleryItems)
    })
  }
  )
  

      })
      .catch(() => {    console.log('send')
    }   );
    }
    
  
      responsive = {
        0: { items: 1 },
        1024: { items: 2 },
      }



 renderSlideInfo = ({ item, itemsCount }) => {
    return <div className='number-slide'>{item}\{itemsCount}</div>;
};

 renderDotsItem = ({ isActive }) => {
 return isActive ? <img className='logoSlider' src={LogoPic} alt='LogoPic'></img> : <img className='logoSlider' src={LogoPicWithe} alt='LogoPic'></img>;
};

 renderPrevButton = ({ isDisabled }) => {
    return <span style={{fontSize:'20px', opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
};

 renderNextButton = ({ isDisabled }) => {
    return <span style={{ fontSize:'20px',opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
};
 renderPlayPauseButton = ({ isPlaying }) => {
    return <div className='play-slider'>{isPlaying ? 'עצור' : 'המשך'}</div>;
};

 Carousel = () => (

    <AliceCarousel
        mouseTracking
        items={this.galleryItems}
        autoPlayControls
        autoPlay
        disableSlideInfo={false}
        autoPlayDirection="ltr"
        infinite
        renderSlideInfo={this.renderSlideInfo}
        renderDotsItem={this.renderDotsItem}
        
        renderPrevButton={this.renderPrevButton}
        renderNextButton={this.renderNextButton}
        renderPlayPauseButton={this.renderPlayPauseButton}

        autoPlayInterval={1300}

    />
);
      render() {
    return (
        <div>
        <div className='gallery'>
          {console.log(this.galleryItems)}
      {this.galleryItems.length!==0? this.Carousel():''}
      </div>
      <hr className='hr'></hr>
      <About/>
      <hr className='hr'></hr>
      <Details/>
      <hr className='hr'></hr>
      <Categories setCategory={this.props.setCategory}/>
      <hr className='hr'></hr>


        <Contact/>
        </div>

    );
  }
}
