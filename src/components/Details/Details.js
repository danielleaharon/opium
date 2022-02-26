import React from 'react';

import './Details.css';
export default function Details(props) {
  const [details, setDetails] = React.useState(0)

  return (

    <div className='Details row justify-content-center'>
      <h3>סוגי הדפסות</h3>
      <div className='col-8 row'>
        <button  id={details === 1?'shadow-cube':''} className='col-2 cube-orange cube-colors' onClick={() => setDetails(1)}>ישיר</button>
        <button id={details === 2?'shadow-cube':''} className='col-2 cube-red cube-colors' onClick={() => setDetails(2)}>סובלימציה</button>
        <button id={details === 3?'shadow-cube':''} className='col-2 cube-pink cube-colors' onClick={() => setDetails(3)}>משי</button>
        <button id={details === 4?'shadow-cube':''} className='col-2 cube-purple cube-colors' onClick={() => setDetails(4)}>פלקס</button>
        <button id={details === 5?'shadow-cube':''} className='col-2 cube-blue cube-colors' onClick={() => setDetails(5)}>רקמה ממוחשבת</button>
        <button id={details === 6?'shadow-cube':''} className='col-2 cube-green cube-colors'>משי</button>

      </div>
<div className='col-9 mt-3'>
      <p hidden={details !== 1} className='cube-orange_d'><span className='span_orange_title'>ישיר<br /></span>
        המושג הדפסה ישירה מתאר את העובדה שקיים קשר ישיר בין המשטח המדפיס למשטח המודפס, כלומר ההדפסה נעשית ישירות על גבי החומר. את ההדפסה הישירה ניתן לבצע על מגוון רחב של חומרים כגון עץ, נייר, אבן, טקסטיל, ועוד.
        זאת להבדיל מהדפסה עקיפה, שבה אין מגע ישיר בין המשטח המדפיס למשטח המודפס.
        הדפסה ישירה משמשת בעיקר בתחום האמנות.דוגמאות לשיטת הדפסה ישירה – חותמת גומי, הדפסת בלט, תחריט, הדפס משי, דפוס צילינדר, הדפס אבן, ועוד.<br /><br />
        <button onClick={() => setDetails(0)} className='close-details-btn'><span className="iconify" data-icon="feather:x"></span></button>
      </p>

      <p hidden={details !== 2} className='cube-red_d'><span className='span_red_title'>סובלימציה<br /></span>
        שיטת הדפסה חדשה, המבוססת על הדפסה דיגיטלית (ממדפסת) והעברה בחום אל הבגד. התהליך אינו כולל הכנת גלופות, אלא, הדפסה בדיו מיוחד על גבי נייר ואז הדיו מועבר בחום אל הבגד. היתרון הגדול של השיטה הזו הוא בכך שניתן לייצר הדפסים צבעוניים בעלות נמוכה יחסית לדפוס המשי, במיוחד בכמויות קטנות ובינוניות.
        <br /><br />
        <a className='span_red' href='https://www.youtube.com/watch?v=d4A4xkFfNsE' target='_blank' rel="noopener noreferrer">לסרטון בנושא <span className="iconify" data-icon="dashicons:video-alt3" data-inline="false"></span></a>
        <button onClick={() => setDetails(0)} className='close-details-btn'><span className="iconify" data-icon="feather:x"></span></button>
      </p>

      <p hidden={details !== 3} className='cube-pink_d'><span className='span_pink_title'>משי<br /></span>
        שיטת הדפסת החולצות העתיק והוותיקה מכולן. בשיטה זו יוצרים שבלונה על גבי רשת פוליאסטר צפופה (גלופה), ודרך שבלונה זו מעבירים דיו אל הבגד.
        היתרונות של הדפסה זו הם בעיקר בעלויות הנמוכות בהדפסת כמות גדולה של חולצות. לעומת זאת כאשר הכמויות נמוכות הדבר מייקר את ההדפסה משום שעלות הכנת הגלופה היא יקרה ומתחלקת על כמות נמוכה יותר של הדפסות.
        <br /><br />
        <a className='span_pink' href='https://www.youtube.com/watch?v=RSpsWewtxXw' target='_blank' rel="noopener noreferrer">לסרטון בנושא <span className="iconify" data-icon="dashicons:video-alt3" data-inline="false"></span></a>
        <button onClick={() => setDetails(0)} className='close-details-btn'><span className="iconify" data-icon="feather:x"></span></button>
      </p><p hidden={details !== 4} className='cube-purple_d'><span className='span_purple_title'>פלקס<br /></span>בסוג הדפסה זה אנו חותכים אפליקציה מיוחדת בצורה של הגרפיקה ואותה אנחנו מטביעים בחום על גבי החולצה. היתרונות הגודלים של צורת הדפסה זו הם האיכות של ההדפסה והעמידות של ההדפס. הפלקס מייצר מראה איכותי ויפה שלא נהרס עם הזמן והכביסות ושומר על הצבע והמראה שלו לאורך זמן רב. לעומת זאת התהליך הוא ברובו ידני, ההדפסים הם בצבע אחד (או שילוב של מספר פלקסים בצבעים שונים) ולא כל גרפיקה יכולה להיות מודפסת- גרפיקה עדינה בעלת פרטים רבים תהיה קשה ליישום, והתהליך מתאים בעיקר לעבודות קטנות שנדרשת בהן רמת איכות גבוהה.<br /><br />
        <a className='span_purple' href='https://www.youtube.com/watch?v=lUEBtKSGVI4' target='_blank' rel="noopener noreferrer">לסרטון בנושא <span className="iconify" data-icon="dashicons:video-alt3" data-inline="false"></span></a>
        <button onClick={() => setDetails(0)} className='close-details-btn'><span className="iconify" data-icon="feather:x"></span></button>
      </p><p hidden={details !== 5} className='cube-blue_d'><span className='span_blue_title'>רקמה ממוחשבת<br /></span>יש לנו מכונת רקמה עם 16 ראשים שיכולה לבצע מספר רב של רקמות במגוון רחב מאוד של צבעים וחוטים לשירותכם.
        כאשר אתם רוצים לרקום לוגו או סלוגן אנחנו צריכים לקבל מכם את הקובץ ולבצע תכנות שהוא למעשה הליך של המרת הקובץ הגרפי לקובץ שבו אנחנו מתרגמים את הגרפיקה לקובץ של רקמת חוטים ואז מכונת הרקמה יודעת לבצע את הרקמה של הלוגו שלכם על המוצר שבחרתם.
        אנחנו יכולים לבצע רקמה על מבחר רחב מאוד של מוצרים כגון כובעים, חולצות, תיקי גב שונים, מוצרי טקסטיל, מגבות ועוד מגוון של ישומים.
        אנו עומדים לשירותכם ומתחייבים לעמידה בזמנים והמוטו שלנו הוא:"האומנות שבאיכות".<br /><br />
        <a className='span_blue' href='https://www.youtube.com/watch?v=-wzg5eXeawk' target='_blank' rel="noopener noreferrer">לסרטון בנושא <span className="iconify" data-icon="dashicons:video-alt3" data-inline="false"></span></a>
        <button onClick={() => setDetails(0)} className='close-details-btn'><span className="iconify" data-icon="feather:x"></span></button>
      </p>
      </div>

    </div>
  );

}
