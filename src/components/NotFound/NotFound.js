import React, {Component} from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';

import './NotFound.css';
export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
       
 

    }
  
 
      render() {
    return (
        
        <div className='NotFound' style={{height:(this.props.height-540)+'px'}}>
       <p className='NotFound-p'>הדף שחיפשת לא נמצא!</p>
      <a className='NotFound-a' href='/'>למעבר לעמוד הראשי</a>
      </div>
    );
  }
}
