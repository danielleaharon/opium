import React, { Component } from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';

import './NotFound.css';
export default function NotFound(props) {

  return (

    <div className='NotFound'  style={{ height: (window.innerHeight*0.5) + 'px' }}>
      <p className='NotFound-p'>הדף שחיפשת לא נמצא!</p>
      <a className='NotFound-a' href='/'>למעבר לעמוד הראשי</a>
    </div>
 

  );

}
