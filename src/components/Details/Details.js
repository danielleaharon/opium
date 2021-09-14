import React, {Component} from 'react';

import 'react-alice-carousel/lib/alice-carousel.css';

import './Details.css';
export default class Details extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            feedback:null,
            recma:false,
        }
       
    this.handleChange=this.handleChange.bind(this);
    this.showInMapClicked=this.showInMapClicked.bind(this)
    this.onClick=this.onClick.bind(this)

    }
     showInMapClicked = () => {
        window.open("https://maps.google.com?q="+'32.16744668349592, 34.8471588018455' );
      };
    handleChange(event) {
        this.setState({feedback: event.target.value})
      }
      onClick(){
        this.setState({recma:true})

      }
 
      render() {
    return (
        
        <div className='Details'>
       <h3>סוגי הדפסות</h3>
       <div className='print'>
       <p className='cube-orange'>ישיר</p>
       <p className='cube-red'>סובלימציה</p>
       <p className='cube-pink'>משי</p>
       <p className='cube-purple'>פלקס</p>
       <p className='cube-blue' onClick={this.onClick}>רקמה ממוחשבת</p>
    
       <p className='cube-green'>משי</p>

       </div>
       {this.state.recma?(<p className='cube-blue_d'><span  className='span_red_title'>רקמה ממוחשבת<br/></span>יש לנו מכונת רקמה עם 16 ראשים שיכולה לבצע מספר רב של רקמות במגוון רחב מאוד של צבעים וחוטים לשירותכם.
כאשר אתם רוצים לרקום לוגו או סלוגן אנחנו צריכים לקבל מכם את הקובץ ולבצע תכנות שהוא למעשה הליך של המרת הקובץ הגרפי לקובץ שבו אנחנו מתרגמים את הגרפיקה לקובץ של רקמת חוטים ואז מכונת הרקמה יודעת לבצע את הרקמה של הלוגו שלכם על המוצר שבחרתם.
אנחנו יכולים לבצע רקמה על מבחר רחב מאוד של מוצרים כגון כובעים, חולצות, תיקי גב שונים, מוצרי טקסטיל, מגבות ועוד מגוון של ישומים.
אנו עומדים לשירותכם ומתחייבים לעמידה בזמנים והמוטו שלנו הוא:"האומנות שבאיכות".<br/><br/>
<span className='span_red'>לסרטון בנושא <span class="iconify" data-icon="dashicons:video-alt3" data-inline="false"></span></span>
</p>):''}
      </div>
    );
  }
}
