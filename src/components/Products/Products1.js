import React, {Component} from 'react';
import CupCat from '../../Image/cupCat.png'
import CapCat from '../../Image/capCat.png'
import ShirtCat from '../../Image/shirtCat.png'
import CakeCat from '../../Image/cakeCat.png'
import KeyCat from '../../Image/keyCat.png'
import BlackCup from '../../Image/blackCup.jpeg'
import Shot from '../../Image/shot.jpeg'

import 'react-alice-carousel/lib/alice-carousel.css';

import './Products.css';
export default class Products extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          value: '',
          Amount:null,
          price:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});

    }
  
    handleSubmit(event) {
      this.setState({price:10*this.state.Amount})
      event.preventDefault();
    }
    handleChangeAmount(event) {
      
      this.setState({Amount: event.target.value});

    }
  
   
      render() {
    return (
        
        <div className='Products'>
       
   
     <div className='Categories'>
       
       <h4><b>קטגוריות פפולריות</b></h4>
       <div className='print-category'>
       <a   className='cube-orange-category' href='http://www.giftlogo.co.il/140/' target='_blank'> כוסות ספלים ובקבוקים<br/><img src={CupCat}></img></a>
       <a className='cube-red-category' href='http://www.giftlogo.co.il/198/' target='_blank'> כובעים ומוצרי טקסטיל<br/><img src={CapCat}></img></a>
       <a  className='cube-pink-category' href='http://www.giftlogo.co.il/102/'>תיקים ומוצרים למשרד<br/><img src={ShirtCat}></img></a>
       <a className='cube-purple-category'href='http://www.giftlogo.co.il/10/' target='_blank'>מוצרי מטבח ואירוח לבית<br/><img src={CakeCat}></img></a>
       <a className='cube-blue-category' href='http://www.giftlogo.co.il/170/' target='_blank'>מחזיקי מפתחות מעוצבים <br/><img src={KeyCat}></img></a>
       <a style={{paddingTop:'80px', paddingBottom:'80px'}} className='cube-green-category' href='http://www.giftlogo.co.il/' target='_blank'>לכל המוצרים</a>
       </div>
       <div className='Categories'>
       
       <h4><b>חולצות</b></h4>
       <div className='print-category'>
       <a className='cube-orange-category' href='http://www.giftlogo.co.il/140/' target='_blank'> דרייפיט<br/><img src={CupCat}></img></a>
       <a className='cube-red-category' href='http://www.giftlogo.co.il/198/' target='_blank'>חולצות גברים<br/><img src={CapCat}></img></a>
       <a  className='cube-pink-category' href='http://www.giftlogo.co.il/102/'>חולצות נשים<br/><img src={ShirtCat}></img></a>
       <a className='cube-purple-category'href='http://www.giftlogo.co.il/10/' target='_blank'>חולצות ילדים<br/><img src={CakeCat}></img></a>
       <a className='cube-blue-category' href='http://www.giftlogo.co.il/170/' target='_blank'>חולצות בייבי <br/><img src={KeyCat}></img></a>
       <a className='cube-green-category' href='http://www.giftlogo.co.il/' target='_blank'>לכל המוצרים</a>
       </div>
       <br></br>
       <br/>
       <hr/>
       <br/>
       <h3><b>  לקבלת הצעת מחיר</b></h3>
       <p style={{fontSize:'12px'}}>לאחר בחירת קטגוריה, יפתח בעמוד חדש הקטלוג עם קוד פרטים</p>
    <div className='price-form'>
        <form  onSubmit={this.handleSubmit}>
         כמות :
          <input className='textarea2' placeholder='1' type="number" value={this.state.Amount} onChange={this.handleChangeAmount} />
         <br/>
         קוד הפריט:
          <input             
       className='textarea2'
 type="text"placeholder='KR0000' value={this.state.value} onChange={this.handleChange} />
 <br/>
        <input className='button' type="submit" value="קבל מחיר" />
      </form>
      </div>
    {this.state.price!==null?(
    <div  className='price'> 
    <p style={{fontSize:'22px'}}> המחיר ל {this.state.Amount}  פרטים הוא:{this.state.price}</p>
    <p> *המחיר הינו ראשוני, לקבלת הצעת מחיר אטרקטיבי לכמויות גדולות יותר ניתן ליצור קשר עם החנות</p>

    </div>):''}
    </div>
    </div>
       </div>
          /* <div className='cube' id='pink'>
          <img src={BlackCup}></img>
          <div className='product-details' id='pink-details'>
          <h4>כובע 1</h4>

          <p>45 ₪</p>
          </div>
          </div>

          <div className='cube' id='red'>
          <img src={BlackCup}></img>
          <div className='product-details' id='red-details'>
          <h4>כובע 1</h4>

          <p>45 ₪</p>
          </div>
          </div> */

          
          /* <div className='cube' id='orange'>
          <img src={BlackCup}></img>
          <div className='product-details' id='orange-details'>
          <h4>כובע 1</h4>

          <p>45 ₪</p>
          </div>
          </div>
          </div>
          <div className="" id='products-class'>


          <div className='cube' id='green'>
          <img src={BlackCup}></img>
          <div className='product-details' id='green-details'>
          <h4>כובע 1</h4>

          <p>45 ₪</p>
          </div>
          </div> */

          /* <div className='cube' id='blue'>
          <img src={BlackCup}></img>
          <div className='product-details' id='blue-details'>
          <h4>כובע 1</h4>

          <p>45 ₪</p>
          </div>
          </div>
          <div className='cube' id='purple'>
          <img src={Shot}></img>
          <div className='product-details' id='purple-details'>
          <h4>כובע 1</h4>

          <p>45 ₪</p>
          </div>
          </div> */

      //      </div>

    
    
      // </div>
    );
  }
}
