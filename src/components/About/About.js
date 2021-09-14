import React, {Component} from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';

import './About.css';
export default class About extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            feedback:null,
        }
       
    this.handleChange=this.handleChange.bind(this);
    this.showInMapClicked=this.showInMapClicked.bind(this)

    }
     showInMapClicked = () => {
        window.open("https://maps.google.com?q="+'32.16744668349592, 34.8471588018455' );
      };
    handleChange(event) {
        this.setState({feedback: event.target.value})
      }
 
      render() {
    return (
        
        <div className='About'>
       <h3>מי אנחנו?</h3>
       <p className='about'>
       חנות הדפסות על מוצרים שונים הממוקמת בלב העיר של הרצליה אך מגיעה לכל מקום. <br/>
       החנות כבר קיימת 12 שנה בניצוחו של דורון שרק רוצה להדפיס את מבוקשתכם. <br/>
        ניתן להדפיס בחנות כמעט על כל אשר עולה על רוחכם במחירים מצחיקים.
       </p>
      
      </div>
    );
  }
}
