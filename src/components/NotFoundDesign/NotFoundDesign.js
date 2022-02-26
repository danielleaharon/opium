import React from 'react';


import './NotFoundDesign.css';
export default function NotFoundDesign(props) {

    return (
        
        <div className='NotFound' style={{ height: (window.innerHeight*0.5) + 'px' }}>
       <p className='NotFound-p-design'>מצטערים, העמוד כרגע לא נתמך בטלפון</p>
       <p className='NotFound-mobile-design'>*מומלץ לפתוח במחשב</p>

      <a className='NotFound-a-design' href='/'>למעבר לעמוד הראשי</a>
      </div>
    );
  }

