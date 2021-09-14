import React, {Component, Fragment} from 'react';

import './Icons.css';
export default class Icons extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            feedback:null,
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
      return(<Fragment>
        
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/bi:star-fill.svg','FFD400')}>
<span class="iconify" style={{color:'#FFD400'}} data-icon="bi:star-fill" data-inline="false"></span></button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/bi:star.svg','FFD872')}>
<span class="iconify" style={{color:'#FFD872'}} data-icon="bi:star" data-inline="false"></span></button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fluent:star-emphasis-20-filled.svg','00C6AE')}>
<span class="iconify"  style={{color:'#00C6AE'}}data-icon="fluent:star-emphasis-20-filled" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fa-solid:star-and-crescent.svg','797979')}>
<span class="iconify" style={{color:'#797979'}} data-icon="fa-solid:star-and-crescent" data-inline="false"></span></button>
</Fragment> )
    }
    heart(){
      return(<Fragment>
        
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/bi:suit-heart-fill.svg','E55E71')}>
<span class="iconify" id='icon' style={{color:'#E55E71'}}data-icon="bi:suit-heart-fill" data-inline="false"></span>
</button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/bi:suit-heart.svg','FFB3C9')}>
<span class="iconify" style={{color:'#FFB3C9'}} id='icon'data-icon="bi:suit-heart" data-inline="false"></span>
</button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/mdi:heart-half-full.svg','FFB4EA')}>
<span class="iconify"style={{color:'#FFB4EA'}} data-icon="mdi:heart-half-full" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/emojione-monotone:heavy-heart-exclamation.svg','CFB9F6')}>
  <span class="iconify" style={{color:'#CFB9F6'}} id='icon'data-icon="emojione-monotone:heavy-heart-exclamation" data-inline="false"></span></button>
</Fragment> )

    }
    Shape(){
      return(<Fragment>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/si-glyph:ribbon.svg','FFD300')}>
<span class="iconify" style={{color:'#FFD300'}} data-icon="si-glyph:ribbon" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/emojione-monotone:sun.svg','81B1FA')}>
<span class="iconify"style={{color:'#81B1FA'}} data-icon="emojione-monotone:sun" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fa:sun-o.svg','4DEB79')}>
<span class="iconify" style={{color:'#4DEB79'}}data-icon="fa:sun-o" data-inline="false"></span>
</button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/vs:sun.svg','EB4D6C')}>
<span class="iconify" style={{color:'#EB4D6C'}}data-icon="vs:sun" data-inline="false"></span>
 </button>
</Fragment> )

    }
    Shape2(){
      return(<Fragment>
        
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/ph:circle-wavy-fill.svg','70EB4D')}>
<span class="iconify" style={{color:'#70EB4D'}}data-icon="ph:circle-wavy-fill" data-inline="false"></span></button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/ph:circle-wavy-thin.svg','EB4D6C')}>
<span class="iconify" style={{color:'#EB4D6C'}}data-icon="ph:circle-wavy-thin" data-inline="false"></span>
</button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/uim:polygon.svg','C47A6D')}>
<span class="iconify" style={{color:'#C47A6D'}}data-icon="uim:polygon" data-inline="false"></span></button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/uil:polygon.svg','004373')}>
<span class="iconify" style={{color:'#004373'}}data-icon="uil:polygon" data-inline="false"></span>  </button>
</Fragment> )

    }
    Shape3(){
      return(<Fragment>
        
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/codicon:circle-large-outline.svg','007558')}>
<span class="iconify" style={{color:'#007558'}} data-icon="codicon:circle-large-outline" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/akar-icons:circle-fill.svg','00BCE0')}>
<span class="iconify" style={{color:'#00BCE0'}}data-icon="akar-icons:circle-fill" data-inline="false"></span>
</button>
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fluent:shield-16-filled.svg','30484F')}>
<span class="iconify" style={{color:'#30484F'}}data-icon="fluent:shield-16-filled" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fluent:thinking-24-filled.svg','CFB9F6')}>
<span class="iconify" style={{color:'#CFB9F6'}}data-icon="fluent:thinking-24-filled" data-inline="false"></span>
 </button>
</Fragment> )

    }
    Shape4(){
      return(<Fragment>
        
<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fluent:ticket-horizontal-24-filled.svg','EB4DB6')}>
<span class="iconify" style={{color:'#EB4DB6'}}data-icon="fluent:ticket-horizontal-24-filled" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fluent:triangle-12-filled.svg','272597')}>
<span class="iconify"style={{color:'#272597'}} data-icon="fluent:triangle-12-filled" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/fluent:triangle-12-regular.svg','F2B465')}>
<span class="iconify"style={{color:'#F2B465'}} data-icon="fluent:triangle-12-regular" data-inline="false"></span>
</button>

<button className='icon-btn' onClick={()=>this.handelClick('https://api.iconify.design/bpmn:transaction.svg','B6F265')}>
<span class="iconify" style={{color:'#B6F265'}}data-icon="bpmn:transaction" data-inline="false"></span>
 </button>
</Fragment> )

    }
    handelClick(url,color){
      this.props.addShape(url,color)

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
