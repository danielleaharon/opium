import React, { Component, Fragment } from 'react';
import BackMan from '../../Image/Design/men_back.png'
import FrontMan from '../../Image/Design/men_front.png'
import { SketchPicker } from 'react-color';
import FontPicker from "font-picker-react";
import getFirebase from "../../Firebase";
import {TextField} from "@material-ui/core";
import Upload from '../UploadImage/PicUploadNoCrop';
import axios from 'axios';
import Config from '../../config/config';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import BackWomen from '../../Image/Design/women_back.png';
import FrontWomen from '../../Image/Design/women_front.png';
import BackCup from '../../Image/Design/cup_back.png';
import FrontCup from '../../Image/Design/cup_front.png';
import FrontHat from '../../Image/Design/hat_front.png';
import FrontManBlue from '../../Image/Design/men_front_blue.png';
import BackManBlue from '../../Image/Design/men_back_blue.png';
import { Redirect } from 'react-router-dom';
import ElementText from '../DesignElementText/DesignElementText';
import ElementImg from '../DesignElementImg/DesignElementImg';
import ElementShape from '../DesignElementShape/DesignElementShape';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import Logo from '../../Image/opiumLogo3.png';
import Icons from '../Icons/Icons';
import { Icon } from '@iconify/react';



import './Design.css';
export default class Design extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      exit: false,
      text: 'אופיום הלבשה',
      textToggel: false,
      imageToggel: false,

      front: true,
      img: '',
      imgSize: '',

      drag: false,
      editNow: 'text',
      dragText: false,
      itemArray: [],
      ImageArray: [],
      ShapeArray: [],

      editNowText: '',

      dName:'',
      sNameE:false,
      dMail:'',
      dMailE:false,
      dMailEmsg:'',
      dPhone:'',
      dPhoneE:false,
      dPhoneEmsg:'',
      dCount:1,
      dCountE:false,

      selectProderctColor: '',
      // options:['חולצה גברים', 'חולצה נשים','כובע', 'כוס'],
      options: [{ value: this.man, label: 'חולצה גברים' }, { value: this.women, label: 'חולצה נשים' }
        , { value: this.cup, label: 'כוס' }, { value: this.hat, label: 'כובע' }],

      optionsImageBack: [BackMan, BackWomen, 'Women', 'Women'],
      defaultOption: '',
      SelectFront: FrontMan,
      SelectBack: BackMan,
      howDrag: 0,
      textToolbar: '',
      showSlider: false,
      download: false,
      zIndex:'1',
      openExit:false,
      openNext:false,
      url:'',




    }


    this.openEdit = this.openEdit.bind(this);
    this.chengeShirt = this.chengeShirt.bind(this);
    this.onUpload = this.onUpload.bind(this);

    this.handleChangeDrag = this.handleChangeDrag.bind(this);
    this.handleChangeDragText = this.handleChangeDragText.bind(this);

    this.onSelect = this.onSelect.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.addText = this.addText.bind(this);
    this.addImg = this.addImg.bind(this);
    this.addShape = this.addShape.bind(this);

    this.Download = this.Download.bind(this);
    this.Download2 = this.Download2.bind(this);
this.getZIndex=this.getZIndex.bind(this);
    this.datgnow = this.datgnow.bind(this);
    this.getTextToolbar = this.getTextToolbar.bind(this);
    this.setTextToolbar = this.setTextToolbar.bind(this);
this.handleClickOpen=this.handleClickOpen.bind(this);
this.handleClose=this.handleClose.bind(this);
this.handleCloseAndExit=this.handleCloseAndExit.bind(this);
this.sendMailDesignDialog=this.sendMailDesignDialog.bind(this);
this.handleOpenNext=this.handleOpenNext.bind(this);
this.handleCloseNext=this.handleCloseNext.bind(this);

this.ExitDialog=this.ExitDialog.bind(this);
this.sendMailDesign=this.sendMailDesign.bind(this);
this.UploadFirebbase=this.UploadFirebbase.bind(this);

this.clearValid=this.clearValid.bind(this);
this.cheackValid=this.cheackValid.bind(this);




  }
  firebase = getFirebase();

  async UploadFirebbase(blob){
  const ImgName=  await Math.random().toString(36).substr(2, 10);

  const storage = this.firebase.storage();
        const storageRef = storage.ref("design");
    console.log(storage)
    var metadata = {
        contentType: blob.type,
      };
        try {
          const r= await storageRef.child(ImgName).put(blob,metadata);

          console.log(r.ref)
          r.ref.getDownloadURL().then((url)=>{
            this.setState({url:url})

         });

        //   alert("Successfully uploaded picture!");
        } catch (error) {
          console.log("error", error);
        }
        console.log(this.state.file)
    
}
  componentDidCatch() {
    this.setState({ download: false })
  }
 Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  man = [FrontMan, BackMan];
  women = [FrontWomen, BackWomen];
  cup = [FrontCup, BackCup];
  hat = [FrontHat, ''];
  How = 0;
  text = 'daniele';
  characters = this.text.split('');
  degree = 100 / this.characters.length;
  Download1 = false
   handleClickOpen(){
    this.setState({openExit:true});
  };
  handleOpenNext(){
    this.Download(false);
    this.setState({openNext:true});
  };
   handleClose  ()  {
     console.log('handleClose')
    this.setState({openExit:false});
  };
  handleCloseNext ()  {
    console.log('handleClose')
   this.setState({openNext:false});
 };
  handleCloseAndExit  ()  {
    console.log('handleClose')
   this.setState({openExit:false});
   this.setState({exit:true});

 };
  ExitDialog(){
    return (
      <div>
        <Dialog
        id='Dialog'
          open={this.state.openExit}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContent >
            <DialogContentText id="alert-dialog-slide-description">
              העיצוב שלך לא יישמר, בטוח שאתה רוצה לצאת?
            </DialogContentText>
          </DialogContent>
          <DialogActions id='Dialog-buttons'>
            <Button onClick={this.handleClose} id='dialog-btn' color="primary">
              לא
            </Button>
            <Button onClick={this.handleCloseAndExit}  id='dialog-btn'color="primary">
              כן
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  Download(isDownload) {
    this.setState({ download: true });
    document.releaseEvents();
    let img = <img id='back-front' src={Logo}></img>;
    this.render(img, document.getElementById('Design-cube2'));
if(isDownload)
    this.Download2()
    else     this.Download3()



  }
  Download3() {
    // event.preventDefault();

    domtoimage.toBlob(document.getElementById('Design-cube2'))
      .then( (blob)=> {
      
var img=new File([blob],'opium.png',{
  type: "image/png",
  lastModified: Date.now()
})


        this.UploadFirebbase(img);



      })

  }
  Download2() {
    // event.preventDefault();

    domtoimage.toBlob(document.getElementById('Design-cube2'))
      .then( (blob)=> {
      
        saveAs(blob, 'opium.png');


      })

  }

  datgnow(howDrag) {
    if (howDrag === 0) this.setState({ textToolbar: '' })
    this.setState({ howDrag })
  }

  addText(Size) {
    const item = this.state.itemArray;
    const size = Size;
    const text = 'sss';
    item.push({ size, text })
    this.setState({ itemArray: item })
  }
  addImg(url) {
    const item = this.state.ImageArray;
    item.push({ url })
    this.setState({ ImageArray: item })
  }
  addShape(url,color) {
    const item = this.state.ShapeArray;
    item.push({ url,color })
    this.setState({ ShapeArray: item })
  }

  componentDidMount() {
    this.setState({ defaultOption: this.state.options[0] })
    let nav = window.document.getElementsByClassName('menu')[0];
    let footer = window.document.getElementsByClassName('footer')[0];
    footer.style.display = 'none'

    nav.style.display = 'none'
  }

  onSelect(e) {
    this.setState({ SelectFront: e.value[0] })
    this.setState({ SelectBack: e.value[1] })
    this.setState({ front: true })

  }


  openEdit(type) {

    this.setState({ editNow: type })


  }

  chengeShirt() {

    this.setState({ front: !this.state.front })

  }
  handleChangeCompleteColor = (color, event) => {
    this.setState({ textColor: color.hex });
  };
  handleChangeDrag = (e) => {
    console.log(e.target.className)
    if (e.target.className === 'shirt') {
      this.setState({ drag: false });
      this.setState({ dragText: false });
    }
    else
      this.setState({ drag: !this.state.drag });
  };
  handleChangeDragText = (e) => {

    this.setState({ dragText: !this.state.dragText });



    //  this.setState({heightText: e.pageY})


  };
  selectColor(colorFront, colorBack) {
    let type = [colorFront, colorBack];

    this.setState({ SelectFront: type[0] })
    this.setState({ SelectBack: type[1] })

  }
  onUpload(file) {
    console.log(this.state.screenWidth)
    this.setState({ img: URL.createObjectURL(file) })
    this.addImg(URL.createObjectURL(file));
    // this.setState({imgSize:file.size})

  }
  sendMailDesign(){
    if(this.cheackValid())return;
    while(this.state.url=='');
    const postData = {
      name: this.state.dName,
      phonenumber: this.state.dPhone,
      design:this.state.url,
      mail:this.state.dMail,
      count:this.state.dCount

  };
    axios.post(Config.getServerPath()+'mail/design',postData)
    .then(res => {
if(res.data.status===400){
  console.log('error')
return
}
// this.setState({exit:true});
this.handleCloseNext();
// this.setState({name:''})
// this.setState({mail:''})
// this.setState({phone:''})
// this.setState({category:''})

// this.setState({mesaage:'תודה '+this.state.name +'\nהפרטים נשלחו, ניצור איתך קשר בהקדם'})



    })
    .catch(() => {    console.log('send')
  }   );
  }
  
  clearValid(){
    this.setState({dNameE:false})
    this.setState({dPhoneE:false})
    this.setState({dMailE:false})
    this.setState({dCountE:false})
    this.setState({dPhoneEmsg:''})
    this.setState({dMailEmsg:''})

  }
  cheackValid(){
    this.clearValid();
    var error=false;

    if(this.state.dName=='')
    {
      this.setState({dNameE:true})
      error=true;
    }
    if(this.state.dPhone=='')
    {
      this.setState({dPhoneE:true})
      this.setState({dPhoneEmsg:'חסר מספר טלפון'})
      error=true;
    }
   else if(this.state.dPhone.length!=10)
    {
      this.setState({dPhoneE:true})
      this.setState({dPhoneEmsg:' מספר טלפון לא תקין'})
      error=true;
    }
    if(this.state.dMail=='')
    {
      this.setState({dMailE:true})
      this.setState({dMailEmsg:' חסר מייל '})

      error=true;
    }
    else if(!this.state.dMail.includes('@'))
    {
      this.setState({dMailE:true})
      this.setState({dMailEmsg:' מייל לא תקין'})

      error=true;
    }
    if(this.state.dCount=='')
    {
      this.setState({dCountE:true})
      error=true;
    }
    return error;
  }
  sendMailDesignDialog(){
   
 
    return (
      <div>
        <Dialog
        id='Dialog-send'
          open={this.state.openNext}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={this.handleCloseNext}
          // aria-labelledby="alert-dialog-design-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className="send-dialog-design-title" ><p >שליחה להצעת מחיר</p></DialogTitle>
          <img className='dialog-design-img' src={Logo}/>
          <DialogContent id='send-dailog-context' >
          <DialogContentText id='send-dialog-design-description'>
            מוזמנים לשלוח לנו את העיצוב שלכם, אנחנו ניצור אייתכם קשר לגבי הצעת מחיר. תודה צוות אופיום.
          </DialogContentText>
          <TextField
                label="שם פרטי"
                id="design-dailog-input"
                name='name'
                type='name'
                variant="outlined"
                required
                fullWidth
                onChange={(e)=>this.setState({dName:e.target.value})}
                value={this.state.dName}
                error={this.state.dNameE}
                InputLabelProps={{ id:'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dNameE?'חסר שם פרטי':''}
            
           />

             <TextField
                label="טלפון"
                id="design-dailog-input"
                name='name'
                type='name'
                variant="outlined"
                required
                onChange={(e)=>this.setState({dPhone:e.target.value})}
                value={this.state.dPhone}
                error={this.state.dPhoneE}
                InputLabelProps={{ id:'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dPhoneEmsg}
            
           />
             <TextField
                label="מייל"
                id="design-dailog-input"
                name='name'
                type='name'
                variant="outlined"
                required
                onChange={(e)=>this.setState({dMail:e.target.value})}
                value={this.state.dMail}
                error={this.state.dMailE}
                InputLabelProps={{ id:'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dMailEmsg}
            
           />
           
                <TextField
                label="כמות"
                id="design-dailog-input"
                name='name'
                type='number'
                variant="outlined"
                required
                onChange={(e)=>this.setState({dCount:e.target.value})}
                value={this.state.dCount}
                error={this.state.dCountE}
                InputLabelProps={{ id:'design-dailog-lable' }}
                aria-describedby="helper"
                helperText={this.state.dCountE?'כמות?':''}
            
           />
          </DialogContent>
          <DialogActions id='Dialog-buttons-mail'>
            <Button onClick={this.handleCloseNext} id='dialog-btn-design' color="primary">
              ביטול
            </Button>
            <Button onClick={this.sendMailDesign}  id='dialog-btn-design'color="primary">
              שלח
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
  getTextToolbar() {
    console.log(this.state.textToolbar)
    return this.state.textToolbar;
  }
  setTextToolbar(textToolbar) {
    this.setState({ textToolbar: textToolbar });
    this.setState({ showSlider: false });
  }
  showSlider() {
    this.setState({ showSlider: !this.state.showSlider })
    console.log("slider:" + this.state.showSlider)

  }
  getZIndex(){

    const z= this.state.zIndex+1;
    this.setState({zIndex:z});
    return z;
  }
  render() {

    if (this.state.exit) {
      let nav = window.document.getElementsByClassName('menu')[0];
      nav.style.display = 'grid'
      return <Redirect to={'/'}></Redirect>
    }
    return (

      <div className='Design'>
        {this.ExitDialog()}
        {this.sendMailDesignDialog()}
        <div id='menu-design'>
          <div className='menur'>
            <i onClick={this.Download.bind(true)} class="fa fa-cloud-download" id='back-button'></i>
            <i onClick={this.handleClickOpen} id='back-button' class="fa fa-times"></i>

          </div>
          <div className='menul'>
            <button onClick={this.handleOpenNext} className='continued' ><i class="fa fa-arrow-circle-left"></i>   המשך </button>
          </div>
        </div>
        {/* <h3><b>עצב בעצמך</b></h3> */}
        <div className='Design-cube'>



          <div className='Design-cube1'>
            <div className='buttons'>


              <button className={this.state.editNow === 'text' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'text' })}> <i style={{ fontSize: '27px' }} class="fa fa-font"></i> <br /> הוסף טקסט  </button><br />
              <button className={this.state.editNow === 'img' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'img' })}> <i style={{ fontSize: '27px' }} class="fa fa-cloud-upload"></i> <br />הוסף תמונה</button><br />
              <button className={this.state.editNow === 'shape' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'shape' })}><span style={{ fontSize: '27px', marginBottom: '5px' }} class="iconify" data-icon="fa-solid:shapes" data-inline="false"></span> <br />הוסף צורה</button><br />
              <button className={this.state.editNow === 'product' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'product' })}> <i style={{ fontSize: '27px' }} class="fa fa-barcode"></i> <br />בחר מוצר</button><br />



            </div>
            <div>
              {this.state.editNow === 'text' ? (
                <div className='edits' id='editsText'>
                  <div className='div-info'>
                 <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button> 
                 <p className='info'>בחר כותרת, לכל טקסט יפתח לך סרגל כלים שתוכל בעזרתו לשנות את הצבע, הגופן, גודל ומלל</p>
                 </div>
                 <p className='titleEdit'>לחץ כדי להוסיף טקסט</p>
                  <h1 className='titleEdit' id='h1-title'onClick={() => this.addText(300)}>הוסף כותרת</h1>
                  <h3 className='titleEdit' onClick={() => this.addText(180)}>הוסף טקסט בינוני</h3>
                  <p className='titleEdit' onClick={() => this.addText(100)}>הוסף טקסט קטן</p>


                </div>

              ) : this.state.editNow === 'img' ? (<div className='edits'>
  <div className='div-info'>
                 <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button> 
                 <p className='info'>העלאה את התמונה הרצויה או ע״י גרירה או לחיצה ובחירה מהמכשיר, בעזרת סרגל הכלים ניתן לחתוך את התמונה, להקטין ולהגדיל</p>
                 </div>
                <Upload onUpload={this.onUpload}
                /></div>) : this.state.editNow === 'product' ? (
                  <div className='edits'>
                    <Dropdown options={this.state.options} onChange={this.onSelect} value={this.state.defaultOption} placeholder="Select an option" />
                    <p style={{ marginTop: '10px' }}>שנה צבע :</p>
                    <span onClick={() => this.selectColor(FrontManBlue, BackManBlue)} class="dot" style={{ backgroundColor: '#84AFE3' }}></span>
                    <span onClick={() => this.selectColor(FrontMan, BackMan)} class="dot" style={{ backgroundColor: 'white' }} ></span>
                    <span onClick={() => this.selectColor(FrontManBlue, BackManBlue)} class="dot" style={{ backgroundColor: 'black' }} ></span>
                    <span onClick={() => this.selectColor(FrontManBlue, BackManBlue)} class="dot" style={{ backgroundColor: 'red' }} ></span>





                  </div>
                ) : this.state.editNow === 'shape' ? (
                  <div className='edits'>
 <div className='div-info'>
                 <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button> 
                 <p className='info'>בחר צורה, ניתן בעזרת סרגל הכלים לשנות את הצבע, להגדיל להקטין ולסבוב.</p>
                 </div>
                    <div className='shape'>
                      <Icons  addShape={this.addShape} />
                  

                    </div>

                  </div>
                ) : ''}
              <br />
            </div>
          </div>
          <div className='Design-cube2' id='Design-cube2'>
            <img id='logo-down' src={Logo} alt='logo'/>



            {/* fontSize:this.state.fontSize+'px' */}
            {/* <button className='buttonEdit' id='back-front'onClick={this.chengeShirt}>{this.state.front?('אחורה'):('קדימה')}</button> */}
            {this.state.SelectBack !== '' && !this.state.download ? (<button className='buttonEdit' id='back-front' onClick={this.chengeShirt}>{this.state.front ? ('אחורה') : ('קדימה')}</button>) : ''}

            {this.getTextToolbar()}
            <img value={true} onClick={() => { this.datgnow(0) }} className='shirt' src={this.state.front ? (this.state.SelectFront) : (this.state.SelectBack)}></img>
            


            <div className='pText'>
              {this.state.itemArray.map((item, index) => {
                return (
                  <div className="box1"  key={index}>
                    <div  >
                      <ElementText zIndex={this.getZIndex}  showSlider={this.state.showSlider} setShowSlider={this.showSlider} getTextToolbar={this.setTextToolbar} onDrag={this.datgnow} fontFamily={this.state.activeFontFamily} widthText={item.size} text={this.state.text} drag={this.state.howDrag} myIndex={index + 1} />
                    </div>
                  </div>
                )
              })}
              {this.state.ImageArray.map((item, index) => {
                return (
                  <div className="box" key={index}>
                    <div >
                      {console.log(item.url)}
                      <ElementImg  zIndex={this.getZIndex}img={item.url} showSlider={this.state.showSlider} setShowSlider={this.showSlider} onDrag={this.datgnow} getTextToolbar={this.setTextToolbar} drag={this.state.howDrag} myIndex={(index + 1) * 5} />
                    </div>
                  </div>
                )
              })}
                  {this.state.ShapeArray.map((item, index) => {
                return (
                  <div className="box" key={index}>
                    <div>
                      <ElementShape zIndex={this.getZIndex} shape={item.url} color={item.color} showSlider={this.state.showSlider} setShowSlider={this.showSlider} onDrag={this.datgnow} getTextToolbar={this.setTextToolbar} drag={this.state.howDrag} myIndex={(index + 1) * 10} />
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
