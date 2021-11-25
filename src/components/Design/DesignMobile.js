import React, { Component, Fragment } from 'react';
import BackMan from '../../Image/Design/men_back.png'
import FrontMan from '../../Image/Design/men_front.png'
import getFirebase from "../../Firebase";
import { TextField } from "@material-ui/core";
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
import LogoPic from '../../Image/logoPic.png';
import BackManBlue from '../../Image/Design/men_back_blue.png';
import { Redirect } from 'react-router-dom';
import ElementText from '../DesignElementText/DesignElementText';
import ElementTextItem from '../DesignElementText/ElementText';

import HistoryDesign from '../HistoryDesign/HistoryDesign';

import ElementImg from '../DesignElementImg/DesignElementImg';
import ElementImgItem from '../DesignElementImg/ElementImg';

import ElementShape from '../DesignElementShape/DesignElementShape';
import ElementShapeItem from '../DesignElementShape/ElementShape';

import DesignPopUpProduct from '../DesignPopUpProduct/DesignPopUpProduct';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import html2canvas from 'html2canvas'

import Logo from '../../Image/opiumLogo3.png';
import Icons from '../Icons/Icons';
import { Icon } from '@iconify/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import './DesignMobile.css';

import './Design.css';
export default class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exit: false,
      popUpProduct: false,
      // text: 'אופיום הלבשה',
      // textToggel: false,
      // imageToggel: false,

      front: true,
      // img: '',
      // imgSize: '',

      // drag: false,
      editNow: 'text',
      // dragText: false,
      itemArrayFront: [],
      ImageArrayFront: [],
      ShapeArrayFront: [],
      itemArrayBack: [],
      ImageArrayBack: [],
      ShapeArrayBack: [],
      editNowText: '',
      dName: '',
      sNameE: false,
      dMail: '',
      dMailE: false,
      dMailEmsg: '',
      dPhone: '',
      dPhoneE: false,
      dPhoneEmsg: '',
      dCount: 1,
      dCountE: false,
      previewBack:'',

      previewFront:'',
      loading:false,
      // selectProderctColor: '',
      // // options:['חולצה גברים', 'חולצה נשים','כובע', 'כוס'],
      // options: [{ value: this.man, label: 'חולצה גברים' }, { value: this.women, label: 'חולצה נשים' }
      //   , { value: this.cup, label: 'כוס' }, { value: this.hat, label: 'כובע' }],

      // optionsImageBack: [BackMan, BackWomen, 'Women', 'Women'],
      // defaultOption: '',
      // SelectFront: FrontMan,
      // SelectBack: BackMan,
      howDrag: 0,
      textToolbar: '',
      // showSlider: false,
      download: false,
      downloadDesign:false,
      zIndex: 0,
      openExit: false,
      openNext: false,
      url: '',
      AllItemsArrayFront: [],
      AllItemsArrayBack: [],
      ShirtItem: '',
      HistoryDesignList: [],




    }


    this.openEdit = this.openEdit.bind(this);
    this.chengeShirt = this.chengeShirt.bind(this);
    this.onUpload = this.onUpload.bind(this);

    // this.handleChangeDrag = this.handleChangeDrag.bind(this);
    // this.handleChangeDragText = this.handleChangeDragText.bind(this);

    this.onSelect = this.onSelect.bind(this);
    // this.selectColor = this.selectColor.bind(this);
    this.addText = this.addText.bind(this);
    this.addImg = this.addImg.bind(this);
    this.deleteImg = this.deleteImg.bind(this);
    this.deleteText = this.deleteText.bind(this);
    this.deleteShape = this.deleteShape.bind(this);

    this.addShape = this.addShape.bind(this);

    this.Download = this.Download.bind(this);
    this.Download2 = this.Download2.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
    this.datgnow = this.datgnow.bind(this);
    this.getTextToolbar = this.getTextToolbar.bind(this);
    this.setTextToolbar = this.setTextToolbar.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseAndExit = this.handleCloseAndExit.bind(this);
    this.sendMailDesignDialog = this.sendMailDesignDialog.bind(this);
    this.nextDesignDialog = this.nextDesignDialog.bind(this);

    this.handleOpenNext = this.handleOpenNext.bind(this);
    this.handleCloseNext = this.handleCloseNext.bind(this);

    this.ExitDialog = this.ExitDialog.bind(this);
    this.sendMailDesign = this.sendMailDesign.bind(this);
    this.UploadFirebbase = this.UploadFirebbase.bind(this);

    this.clearValid = this.clearValid.bind(this);
    this.cheackValid = this.cheackValid.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    this.handelChangeColorShirt = this.handelChangeColorShirt.bind(this);

    this.pickProduct = this.pickProduct.bind(this);
    this.saveDesignToHistory = this.saveDesignToHistory.bind(this);
    this.saveDesignToHistory = this.saveDesignToHistory.bind(this);
    this.deleteDesignToHistory = this.deleteDesignToHistory.bind(this);
    this.loadDesignHistory = this.loadDesignHistory.bind(this);
    this.updateDesignToHistory = this.updateDesignToHistory.bind(this);
    
    this.DownloadForFireBase = this.DownloadForFireBase.bind(this);
    this.addCartDesign = this.addCartDesign.bind(this);
    this.Loading = this.Loading.bind(this);

  }
  exit = false
  firebase = getFirebase();

  // componentWillUpdate(){
  //   if(this.props.productDesign!==undefined&&this.props.productDesign!==null){
  //     this.setState({ShirtItem:this.props.productDesign.imgItem})

  //   }else{
  //     this.setState({exit:true})

  //     return
  //   }
  //   this.props.setOnDesign(true)
  // }
  componentDidMount() {
    console.log(localStorage.getItem("HistoryDesign"))
    if (localStorage.getItem("HistoryDesign") === undefined || localStorage.getItem("HistoryDesign") === null)
      localStorage.setItem("HistoryDesign", JSON.stringify(this.state.HistoryDesignList));
    this.setState({ HistoryDesignList: JSON.parse(localStorage.getItem("HistoryDesign")) });

  }
  componentWillMount() {
    this.props.setOnDesign(true)

    if (this.props.productDesign !== undefined && this.props.productDesign !== null) {
      this.setState({ ShirtItem: this.props.productDesign.imgItem })
      if(this.props.productDesign.design.url.front!==''){
        this.loadDesignHistory(this.props.productDesign.design.arrayDesign)
       
     

      }

    } else {
      this.setState({ popUpProduct: true })

    }
  }
  loadDesignHistory(design) {
    const arrTextF=[];
    const arrShapeF=[];
    const arrImgF=[];

    const arrTextB=[];
    const arrShapeB=[];
    const arrImgB=[];

    const arrAllF=[];
    const arrAllB=[];

    var zIndex=1;
    design.arrays.ImageArrayFront.map((item,index)=>{

      const itemImg = new ElementImgItem(item);
if(item.zIndex>zIndex)
zIndex=item.zIndex
       arrImgF.push(itemImg)
       arrAllF.push(itemImg)
    
    })
    design.arrays.ImageArrayBack.map((item,index)=>{
      if(item.zIndex>zIndex)
      zIndex=item.zIndex
      const itemImg = new ElementImgItem(item);

       arrImgB.push(itemImg)
       arrAllB.push(itemImg)
    
    })
    this.setState({ ImageArrayBack: arrImgB })
    this.setState({ ImageArrayFront: arrImgF })

    design.arrays.ShapeArrayFront.map((item,index)=>{

      const itemShape = new ElementShapeItem(item);
      if(item.zIndex>zIndex)
zIndex=item.zIndex
       arrShapeF.push(itemShape)
       arrAllF.push(itemShape)
    
    })
    design.arrays.ShapeArrayBack.map((item,index)=>{

      const itemShape = new ElementShapeItem(item);
      if(item.zIndex>zIndex)
zIndex=item.zIndex
      arrShapeB.push(itemShape)
       arrAllB.push(itemShape)
    
    })
    this.setState({ ShapeArrayBack: arrShapeB })
    this.setState({ ShapeArrayFront: arrShapeF })

design.arrays.itemArrayFront.map((item,index)=>{

  const itemText = new ElementTextItem(item);
  if(item.zIndex>zIndex)
zIndex=item.zIndex
   arrTextF.push(itemText)
   arrAllF.push(itemText)

})
design.arrays.itemArrayBack.map((item,index)=>{

  const itemText = new ElementTextItem(item);
  if(item.zIndex>zIndex)
zIndex=item.zIndex
   arrTextB.push(itemText)
   arrAllB.push(itemText)

})
this.setState({zIndex:zIndex})
    this.setState({ itemArrayFront: arrTextF })
    this.setState({ itemArrayBack: arrTextB })

    this.setState({ AllItemsArrayBack: arrAllB })
    this.setState({ AllItemsArrayFront: arrAllF })
  }
  deleteDesignToHistory(index) {
    const historyArr = this.state.HistoryDesignList
    historyArr.splice(index, 1);
    this.setState({ HistoryDesign: historyArr })
    localStorage.setItem("HistoryDesign", JSON.stringify(historyArr));

  }
  updateDesignToHistory(index,name){
    const historyArr = this.state.HistoryDesignList
    historyArr[index].name=name;
    this.setState({HistoryDesignList:historyArr})
    localStorage.setItem("HistoryDesign", JSON.stringify(historyArr));

  }
  async saveDesignToHistory() {
    const historyArr = this.state.HistoryDesignList

    const name = ' עיצוב' + (historyArr.length + 1)
    // const id= historyArr.length+1

    const dateTemp = new Date()
    const date = dateTemp.getDate() + '/' + (dateTemp.getMonth() + 1) + '/' + dateTemp.getFullYear()
    const arrays = {
      itemArrayFront: this.state.itemArrayFront, itemArrayBack: this.state.itemArrayBack, ShapeArrayBack: this.state.ShapeArrayBack, ShapeArrayFront: this.state.ShapeArrayFront,
      ImageArrayBack: this.state.ImageArrayBack, ImageArrayFront: this.state.ImageArrayFront, AllItemsArrayBack: this.state.AllItemsArrayBack, AllItemsArrayFront: this.state.AllItemsArrayFront
    }
    historyArr.push({ name, date, arrays })
    localStorage.setItem("HistoryDesign", JSON.stringify(historyArr));
    return await this.setState({ HistoryDesignList: historyArr },()=>{
      return  true;
    })

  }

  // componentDidMount() {
  //   if(this.props.productDesign!==undefined&&this.props.productDesign!==null){
  //     this.setState({ShirtItem:this.props.productDesign.imgItem})

  //   }else{
  //     this.setState({exit:true})
  //     this.exit=true

  //     return
  //   }
  //   this.props.setOnDesign(true)




  // }

  handelChangeColorShirt(item) {
    this.props.productDesign.imgItem = item
    console.log(this.props.productDesign)
    this.setState({ ShirtItem: this.props.productDesign })
    this.props.goToDesign(this.props.productDesign)

    // this.setState({imgFront:item.front})


  }
  handleOnDragEnd(result) {
    if (this.state.front) {
      const items = this.state.AllItemsArrayFront;
      const zIndexTemp = items[result.source.index].getZIndex();
      items[result.source.index].setZIndex(items[result.destination.index].getZIndex());
      items[result.destination.index].setZIndex(zIndexTemp)
      // this.setState({itemArray:items})
    } else {
      const items = this.state.AllItemsArrayBack;
      const zIndexTemp = items[result.source.index].getZIndex();
      items[result.source.index].setZIndex(items[result.destination.index].getZIndex());
      items[result.destination.index].setZIndex(zIndexTemp)
    }

  }
  async UploadFirebbase(blob) {
    const ImgName = await Math.random().toString(36).substr(2, 10);

    const storage = this.firebase.storage();
    const storageRef = storage.ref("design");
    console.log(blob)
    var metadata = {
      contentType: blob.type,
    };
    try {
      const r = await storageRef.child(ImgName).put(blob, metadata);

      console.log(r.ref)
    return await  r.ref.getDownloadURL().then((url) => {
        this.setState({ url: url })
        return url

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
  // man = [FrontMan, BackMan];
  // women = [FrontWomen, BackWomen];
  // cup = [FrontCup, BackCup];
  // hat = [FrontHat, ''];
  // How = 0;
  // text = 'daniele';
  // characters = this.text.split('');
  // degree = 100 / this.characters.length;
  // Download1 = false
  handleClickOpen() {
    this.setState({ openExit: true });
  };
  handleOpenNext() {
    this.Download(false);
    this.setState({ openNext: true });
  };
  handleClose() {
    console.log('handleClose')
    this.setState({ openExit: false });
  };
  handleCloseNext() {
    console.log('handleClose')
    this.setState({ openNext: false });
  };
  handleCloseAndExit() {
    console.log('handleClose')
    this.setState({ openExit: false });
    this.setState({ exit: true });

  };
  ExitDialog() {
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
            <Button onClick={this.handleCloseAndExit} id='dialog-btn' color="primary">
              כן
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  Download(isDownload) {
    this.setState({ download: true });
    this.datgnow(0);
    // document.releaseEvents();
    // let img = <img id='back-front' src={Logo}></img>;
    // this.render(img, document.getElementById('Design-cube2'));
    if (isDownload)
      this.Download2()
    else this.Download3()



  }
  async DownloadForFireBase(){

    const imgs=  await domtoimage.toBlob(document.getElementById('Design-cube2'))
      .then(async (blob) => {

        var img1 = new File([blob], 'opium.png', {
          type: "image/png",
          lastModified: Date.now()
        })
        this.setState({downloadDesign:true})

        var allFront= await domtoimage.toBlob(document.getElementById('Design-cube2'))
        .then( async (blob) => {
  
          var img3 = new File([blob], 'opium3.png', {
            type: "image/png",
            lastModified: Date.now()
          })
        
          this.setState({downloadDesign:false})

          return  this.UploadFirebbase(img3);
  
         })
        var back=''
        var allBack=''
     if(this.props.productDesign.imgItem.back !== ''){
          this.setState({front:!this.state.front})
     
           back= await domtoimage.toBlob(document.getElementById('Design-cube2'))
         .then( async (blob) => {
   
           var img = new File([blob], 'opium2.png', {
             type: "image/png",
             lastModified: Date.now()
           })
         
           this.setState({downloadDesign:true})
           allBack= await domtoimage.toBlob(document.getElementById('Design-cube2'))
          .then( async (blob) => {
    
            var img4 = new File([blob], 'opium4.png', {
              type: "image/png",
              lastModified: Date.now()
            })
            this.setState({downloadDesign:false})
 
         
            return  this.UploadFirebbase(img4);
    
           })
           return  this.UploadFirebbase(img);
   
          })
    
        }
        
       
         console.log(back)
         const front= await  this.UploadFirebbase(img1);

        
         return {front:front,back:back,allFront:allFront,allBack:allBack};

      })
      return imgs;

  }
  Download3() {
    // event.preventDefault();

    // domtoimage.toBlob(document.getElementById('Design-cube2'))
    //   .then((blob) => {

    //     var img = new File([blob], 'opium.png', {
    //       type: "image/png",
    //       lastModified: Date.now()
    //     })

     
    //        this.UploadFirebbase(img);



    //   })
      domtoimage.toPng(document.getElementById('Design-cube2'))
      .then((png) => {

    
        this.setState({previewFront:png})
        if(this.props.productDesign.imgItem.back !== ''){

        this.setState({front:!this.state.front},()=>{
          domtoimage.toPng(document.getElementById('Design-cube2'))
          .then((png) => {
    
        
            this.setState({previewBack:png})
            this.setState({front:!this.state.front})
    
    
          })
        })
      }

      })
    
      

  }
  Download2() {

    // this.setState({downloadDesign:true},()=>{
      domtoimage.toBlob(document.getElementById('Design-cube2'))
      .then((blob) => {

         saveAs(blob, 'opium.png');
         this.setState({download:false})
        //  this.setState({downloadDesign:false})



      })
    // })
  

  }

  datgnow(howDrag) {
    if (howDrag === 0) this.setState({ textToolbar: '' })
    this.setState({ howDrag })
  }

  addText(Size) {
    if (this.state.front) {
      const itemArr = this.state.itemArrayFront;
      const items = this.state.AllItemsArrayFront;

      const size = Size;
      const data = 'אופיום הלבשה';
      const zIndex = this.getZIndex();
      const id = zIndex + '';
      const bold = ''
      const Italic = 'normal'
      const borderColor = ''
      const underline = 'none'
      const textColor='black'
      const top=50
      const left= 50
      const rotateAngle= 0;
      const backgroundColor = ''
      const activeFontFamily = "Bona Nova"
      const item = new ElementTextItem({ data, size,left,rotateAngle,backgroundColor,activeFontFamily, zIndex, id ,bold,Italic,borderColor,underline,textColor,top});
      itemArr.push(item)
      items.push(item)
      this.setState({ AllItemsArrayFront: items })
    } else {
      const itemArr = this.state.itemArrayBack;
      const items = this.state.AllItemsArrayBack;

      const size = Size;
      const data = 'אופיום הלבשה';
      const zIndex = this.getZIndex();
      const id = zIndex + '';
      const bold = ''
      const Italic = 'normal'
      const borderColor = ''
      const underline = 'none'
      const textColor='black'
      const top=115
      const left= 170
      const rotateAngle= 0;
      const backgroundColor = ''
      const activeFontFamily = "Bona Nova"
      const item = new ElementTextItem({ data, size,left,rotateAngle,backgroundColor,activeFontFamily, zIndex, id ,bold,Italic,borderColor,underline,textColor,top});
      itemArr.push(item)
      items.push(item)
      this.setState({ AllItemsArrayBack: items })
    }

  }
  addImg(data) {
    if (this.state.front) {

      const itemArr = this.state.ImageArrayFront;
      const items = this.state.AllItemsArrayFront;

      const zIndex = this.getZIndex();
      const id = zIndex + '';
      const titel='square-border'
      const width= 300
      const height= 80
      const top=175
      const left= 240
      const rotateAngle= 0;
      const  borderColor='transparent'
      const item = new ElementImgItem({ data, zIndex, id,titel,width,height, top,left,rotateAngle,borderColor});
      itemArr.push(item)
      items.push(item)
      this.setState({ AllItemsArrayFront: items })
    } else {

      const itemArr = this.state.ImageArrayBack;
      const items = this.state.AllItemsArrayBack;

      const zIndex = this.getZIndex();
      const id = zIndex + '';
      const titel='square-border'
      const width= 300
      const height= 80
      const top=175
      const left= 240
      const rotateAngle= 0;
      const  borderColor='transparent'

      const item = new ElementImgItem({ data, zIndex, id,titel,width,height, top,left,rotateAngle,borderColor});
      itemArr.push(item)
      items.push(item)
      this.setState({ AllItemsArrayBack: items })
    }
  }
  deleteImg(id) {
    if (this.state.front) {

      var itemArr = this.state.ImageArrayFront;
      const items = this.state.AllItemsArrayFront;

      var index = itemArr.findIndex((a) => a.id == id)
      var indexT = items.findIndex((a) => a.id == id)

      itemArr.splice(index, 1);
      items.splice(indexT, 1);
      this.setState({ ImageArrayFront: itemArr })
      this.setState({ AllItemsArrayFront: items })
      if (items.length === 0) {
        this.setState({ editNow: 'text' })
      }
    } else {
      var itemArr = this.state.ImageArrayBack;
      const items = this.state.AllItemsArrayBack;

      var index = itemArr.findIndex((a) => a.id == id)
      var indexT = items.findIndex((a) => a.id == id)

      itemArr.splice(index, 1);
      items.splice(indexT, 1);
      this.setState({ ImageArrayBack: itemArr })
      this.setState({ AllItemsArrayBack: items })
      if (items.length === 0) {
        this.setState({ editNow: 'text' })
      }
    }
  }
  deleteText(id) {
    if (this.state.front) {

      const itemArr = this.state.itemArrayFront;
      const items = this.state.AllItemsArrayFront;

      const index = itemArr.findIndex((a) => a.getId() === id)
      const indexT = items.findIndex((a) => a.getId() === id)


      if (index !== -1)
        itemArr.splice(index, 1);
      if (indexT !== -1)
        items.splice(indexT, 1);
      this.setState({ itemArrayFront: itemArr })
      this.setState({ AllItemsArrayFront: items })


      if (items.length === 0) {
        this.setState({ editNow: 'text' })
      }
    } else {

      const itemArr = this.state.itemArrayBack;
      const items = this.state.AllItemsArrayBack;

      const index = itemArr.findIndex((a) => a.getId() === id)
      const indexT = items.findIndex((a) => a.getId() === id)


      if (index !== -1)
        itemArr.splice(index, 1);
      if (indexT !== -1)
        items.splice(indexT, 1);
      this.setState({ itemArrayBack: itemArr })
      this.setState({ AllItemsArrayBack: items })


      if (items.length === 0) {
        this.setState({ editNow: 'text' })
      }
    }
  }
  async deleteShape(id) {

    if (this.state.front) {
      var itemArr = this.state.ShapeArrayFront;
      const items = this.state.AllItemsArrayFront;

      var index = itemArr.findIndex((a) => a.id == id)
      var indexT = items.findIndex((a) => a.id == id)

      itemArr.splice(index, 1);
      items.splice(indexT, 1);

      this.setState({ ShapeArrayFront: itemArr })
      this.setState({ AllItemsArrayFront: items })
      if (items.length === 0) {
        this.setState({ editNow: 'text' })
      }
    } else {
      var itemArr = this.state.ShapeArrayBack;
      const items = this.state.AllItemsArrayBack;

      var index = itemArr.findIndex((a) => a.id == id)
      var indexT = items.findIndex((a) => a.id == id)

      itemArr.splice(index, 1);
      items.splice(indexT, 1);

      this.setState({ ShapeArrayBack: itemArr })
      this.setState({ AllItemsArrayBack: items })
      if (items.length === 0) {
        this.setState({ editNow: 'text' })
      }
    }
  }
  addShape(fill, nofill, colorFill, colorBorder) {
    if (this.state.front) {

      const itemArr = this.state.ShapeArrayFront;
      const items = this.state.AllItemsArrayFront;
      const zIndex = this.getZIndex();
      const id = zIndex + '';
      const data={fill:fill, nofill:nofill}
      const width= 100
      const height= 100
      const top=175
      const left= 240
      const rotateAngle= 0;
      const item = new ElementShapeItem({ data, colorFill, colorBorder, zIndex, id ,width,height, top,left,rotateAngle});

      itemArr.push(item)
      items.push(item)
      this.setState({ ShapeArrayFront: itemArr })
      this.setState({ AllItemsArrayFront: items })

    } else {

      const itemArr = this.state.ShapeArrayBack;
      const items = this.state.AllItemsArrayBack;
      const zIndex = this.getZIndex();
      const id = zIndex + '';
      const data={fill:fill, nofill:nofill}
      const width= 100
      const height= 100
      const top=175
      const left= 240
      const rotateAngle= 0;
      const item = new ElementShapeItem({ data, colorFill, colorBorder, zIndex, id ,width,height, top,left,rotateAngle});

      itemArr.push(item)
      items.push(item)
      this.setState({ ShapeArrayBack: itemArr })
      this.setState({ AllItemsArrayBack: items })
    }
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
 
  onUpload(file) {
    this.setState({ img: file })
    this.addImg(file);
    // this.setState({imgSize:file.size})

  }
   async addCartDesign(){
     this.setState({loading:true})
    await this.saveDesignToHistory();
    const url= await this.DownloadForFireBase()
    // console.log(url)
    this.props.updateCartDesign(this.props.productDesign,{url:url, arrayDesign:this.state.HistoryDesignList[this.state.HistoryDesignList.length-1]})
    this.setState({loading:false})

    this.handleCloseNext();
    this.handleCloseAndExit()

  }
  sendMailDesign() {
    // if (this.cheackValid()) return;
    while (this.state.url == '');
    const postData = {
      name: this.state.dName,
      phonenumber: this.state.dPhone,
      design: this.state.url,
      mail: 'ah.danielle22@gmail.com',
      count: this.state.dCount

    };
    axios.post(Config.getServerPath() + 'mail/design', postData)
      .then(res => {
        if (res.data.status === 400) {
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
      .catch(() => {
        console.log('send')
      });
  }

  clearValid() {
    this.setState({ dNameE: false })
    this.setState({ dPhoneE: false })
    this.setState({ dMailE: false })
    this.setState({ dCountE: false })
    this.setState({ dPhoneEmsg: '' })
    this.setState({ dMailEmsg: '' })

  }
  cheackValid() {
    this.clearValid();
    var error = false;

    if (this.state.dName == '') {
      this.setState({ dNameE: true })
      error = true;
    }
    if (this.state.dPhone == '') {
      this.setState({ dPhoneE: true })
      this.setState({ dPhoneEmsg: 'חסר מספר טלפון' })
      error = true;
    }
    else if (this.state.dPhone.length != 10) {
      this.setState({ dPhoneE: true })
      this.setState({ dPhoneEmsg: ' מספר טלפון לא תקין' })
      error = true;
    }
    if (this.state.dMail == '') {
      this.setState({ dMailE: true })
      this.setState({ dMailEmsg: ' חסר מייל ' })

      error = true;
    }
    else if (!this.state.dMail.includes('@')) {
      this.setState({ dMailE: true })
      this.setState({ dMailEmsg: ' מייל לא תקין' })

      error = true;
    }
    if (this.state.dCount == '') {
      this.setState({ dCountE: true })
      error = true;
    }
    return error;
  }
  sendMailDesignDialog() {


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
          <img className='dialog-design-img' src={Logo} />
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
              onChange={(e) => this.setState({ dName: e.target.value })}
              value={this.state.dName}
              error={this.state.dNameE}
              InputLabelProps={{ id: 'design-dailog-lable' }}
              aria-describedby="helper"
              helperText={this.state.dNameE ? 'חסר שם פרטי' : ''}

            />

            <TextField
              label="טלפון"
              id="design-dailog-input"
              name='name'
              type='name'
              variant="outlined"
              required
              onChange={(e) => this.setState({ dPhone: e.target.value })}
              value={this.state.dPhone}
              error={this.state.dPhoneE}
              InputLabelProps={{ id: 'design-dailog-lable' }}
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
              onChange={(e) => this.setState({ dMail: e.target.value })}
              value={this.state.dMail}
              error={this.state.dMailE}
              InputLabelProps={{ id: 'design-dailog-lable' }}
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
              onChange={(e) => this.setState({ dCount: e.target.value })}
              value={this.state.dCount}
              error={this.state.dCountE}
              InputLabelProps={{ id: 'design-dailog-lable' }}
              aria-describedby="helper"
              helperText={this.state.dCountE ? 'כמות?' : ''}

            />
          </DialogContent>
          <DialogActions id='Dialog-buttons-mail'>
            <Button onClick={this.handleCloseNext} id='dialog-btn-design' color="primary">
              ביטול
            </Button>
            <Button onClick={this.sendMailDesign} id='dialog-btn-design' color="primary">
              שלח
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
  nextDesignDialog() {


    return (
      <div>
          {/* {console.log(this.firebase)} */}

        <Dialog
          id='Dialog-send'
          open={this.state.openNext}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={this.handleCloseNext}
          // aria-labelledby="alert-dialog-design-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className="send-dialog-design-title" ><p > סיום עיצוב מוצר</p></DialogTitle>
          <img className='dialog-design-img' src={Logo} />
          <DialogContent id='preview-dailog-context' >
            <DialogContentText id='send-dialog-design-description'>
העיצוב יתווסף למוצר בסל הקניות, שם ניתן לשלוח לקבלת הצעת מחיר
            </DialogContentText>
           <div className='preview-dailog-context-div'>
             <p><b>מוצר: </b> {this.props.productDesign.item.name}</p>
             <p><b>מידה: </b>{this.props.productDesign.size}</p>
             <p><b>תצוגה מקדימה: </b></p>
             <div className='preview-dailog-context-imgs'>
             <img className='preview-dailog-context-img' src={this.state.previewFront} alt='design'/>
             <img className='preview-dailog-context-img' hidden={this.props.productDesign.imgItem.back === ''} src={this.state.previewBack} alt='design'/>
</div>
             <p>*העיצוב נשמר ב״עיצובים שלי״ כך שתוכל להשתמש בו שם בפעם הבאה</p>
             {this.Loading()}

           </div>
          </DialogContent>
          <DialogActions id='Dialog-buttons-mail'>
            <Button onClick={this.handleCloseNext} id='dialog-btn-design' color="primary">
              ביטול
            </Button>
            <Button onClick={ this.addCartDesign} id='dialog-btn-design' color="primary">
              בסדר
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
  getTextToolbar() {
    return this.state.textToolbar;
    // return  this.textToolbar
  }
  setTextToolbar(textToolbar) {
    return this.setState({ textToolbar: textToolbar }, () => {
      return true;
    })
  }
  // showSlider() {
  //   this.setState({ showSlider: !this.state.showSlider })

  // }
  //item,size,imgItem
  pickProduct() {
    // this.setState({ShirtItem:{item,size,imgItem}})
    this.setState({ popUpProduct: false })
  }
  getZIndex() {

    const z = this.state.zIndex + 1;
    this.setState({ zIndex: z })
    return z;

  }
  Loading(){
    return(
      // <div className="loader loading-design">Loading...</div>
      <div className='loading-design'hidden={!this.state.loading} >
        <p  className='loading-design-p'>מעדכן.. </p>
        <img  hidden={!this.state.loading} className='loading-design-img' src={LogoPic}></img>

      </div>
    )

  }
  render() {

    //   if (this.props.productDesign===undefined||this.props.productDesign===null) {
    //     let nav = window.document.getElementsByClassName('menu')[0];
    //  console.log(nav)
    //     // nav.style.display = 'grid'
    //     return <Redirect to={'/Cart'}></Redirect>
    //   }

    if (this.state.popUpProduct) {
      return <DesignPopUpProduct Ondesign={this.props.Ondesign} deleteFromCart={this.props.deleteFromCart} addToCart={this.props.addToCart} pickProduct={this.pickProduct} open={this.state.popUpProduct} handleClose={() => { if (this.props.productDesign === null) this.setState({ exit: true }); this.setState({ popUpProduct: false }) }} />
    }
    if (this.state.exit) {
      this.props.setOnDesign(false)
      return <Redirect to={'/'}></Redirect>
    }
    return (

      <div className='Design-mobile' draggable={false} style={{maxWidth:this.props.width ,minHeight:this.props.height}}>
        {/* {this.ExitDialog()}
        {this.nextDesignDialog()} */}
        {/* {this.Loading()} */}

        <div id='menu-design-mobile'>
          <div className='menur'>

            <i onClick={this.Download.bind(true)} class="fa fa-cloud-download" id='back-button'></i>
            <i onClick={this.handleClickOpen} id='back-button' class="fa fa-times"></i>


          </div>
          <div className='menuc'>
            <p className='shirt-design-ditails'>  {this.props.productDesign.size}  {this.props.productDesign.item.name}  </p>
          </div>
          <div className='menul'>
            <button onClick={this.handleOpenNext} className='continued' ><i class="fa fa-arrow-circle-left"></i>   המשך </button>
          </div>
        </div>
        {/* <h3><b>עצב בעצמך</b></h3> */}
        <div className='Design-cube-mobile' >



          <div className='Design-cube1-mobile' >
            <div className='buttons'>


              <button className={this.state.editNow === 'text' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'text' })}> <i style={{ fontSize: '27px' }} class="fa fa-font"></i> <br /> הוסף טקסט  </button><br />
              <button className={this.state.editNow === 'img' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'img' })}> <i style={{ fontSize: '27px' }} class="fa fa-cloud-upload"></i> <br />הוסף תמונה</button><br />
              <button className={this.state.editNow === 'shape' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'shape' })}><span style={{ fontSize: '27px', marginBottom: '5px' }} class="iconify" data-icon="fa-solid:shapes" data-inline="false"></span> <br />הוסף צורה</button><br />
              <button className={this.state.editNow === 'product' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'product' })}> <i style={{ fontSize: '27px' }} class="fa fa-barcode"></i> <br />בחר מוצר</button><br />
              {(this.state.front ? this.state.AllItemsArrayFront.length !== 0 : this.state.AllItemsArrayBack.length !== 0) ? <button className={this.state.editNow === 'zIndex' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'zIndex' })}> <span style={{ fontSize: '27px' }} class="iconify" data-icon="entypo:layers"></span> <br />שכבות עיצוב</button> : ''}
              <button className={this.state.editNow === 'history' ? ('buttonEditPick') : 'buttonEdit'} onClick={() => this.setState({ editNow: 'history' })}> <span style={{ fontSize: '27px' }} class="iconify" data-icon="fluent:history-16-filled"></span> <br />העיצובים שלי</button><br />



            </div>
            <div>
              {this.state.editNow === 'text' ? (
                <div className='edits-mobile' id='editsText'>
                  <div className='div-info'>
                    <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button>
                    <p className='info'>בחר כותרת, לכל טקסט יפתח לך סרגל כלים שתוכל בעזרתו לשנות את הצבע, הגופן, גודל ומלל</p>
                  </div>
                  <p className='titleEdit'>לחץ כדי להוסיף טקסט</p>
                  <h1 className='titleEdit' id='h1-title' onClick={() => this.addText(300)}>הוסף כותרת</h1>
                  <h3 className='titleEdit' onClick={() => this.addText(180)}>הוסף טקסט בינוני</h3>
                  <p className='titleEdit' onClick={() => this.addText(100)}>הוסף טקסט קטן</p>


                </div>

              ) : this.state.editNow === 'img' ? (<div className='edits-mobile'>
                <div className='div-info'>
                  <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button>
                  <p className='info'>העלאה את התמונה הרצויה או ע״י גרירה או לחיצה ובחירה מהמכשיר, בעזרת סרגל הכלים ניתן לחתוך את התמונה, להקטין ולהגדיל</p>
                </div>

                <Upload onUpload={this.onUpload} />
                <div className='img-item-toolbar-grid'>
                  {(this.state.front ? this.state.ImageArrayFront : this.state.ImageArrayBack).map((item, index) => {
                    return <ElementImgItem key={index} img={item.getData()} deleteImg={this.deleteImg} index={index} />


                  })}
                </div>
              </div>) : this.state.editNow === 'product' ? (
                <div className='edits-mobile'>
                  {/* <Dropdown options={this.state.options} onChange={this.onSelect} value={this.state.defaultOption} placeholder="Select an option" /> */}
                  <p style={{ marginTop: '10px' }}>המוצר קיים בצבעים הבאים: (לחץ כדי להחליף צבע)</p>
                  {this.props.productDesign.item.productImage.map((item, index) => {
                    return <span key={index} onClick={() => this.handelChangeColorShirt(item)} class="dot-product-dialog" id={this.state.ShirtItem.color === item.color ? 'dot-product-select' : ''} style={{ backgroundColor: item.color }}></span>

                  })}
                  <br />
                  <button className='product-chang-btn' onClick={() => this.setState({ popUpProduct: true })}>החלפה מוצר</button>






                </div>
              ) : this.state.editNow === 'shape' ? (
                <div className='edits-mobile'>
                  <div className='div-info'>
                    <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button>
                    <p className='info'>בחר צורה, ניתן בעזרת סרגל הכלים לשנות את הצבע, להגדיל להקטין ולסבוב.</p>
                  </div>
                  {/* <div className='shape'> */}
                  <Icons addShape={this.addShape} />


                  {/* </div> */}

                </div>
              ) : this.state.editNow === 'zIndex' ? (
                <div className='edits' id='editsText'>
                  <div className='div-info'>
                    <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button>
                    <p className='info'>שכבות העיצוב שבחרת למוצר, ניתן לשחק בין השכבות ועלות שכבה אחת על האחרת</p>
                  </div>
                  <p className='titleEdit'>גרור על מנת לשנות את סדר השכבות</p>
                  {/* {(this.state.front? this.state.AllItemsArrayFront.length!==0:this.state.AllItemsArrayBack.length!==0)?'': */}
                  <DragDropContext onDragEnd={this.handleOnDragEnd}>
                    <Droppable droppableId="layers">
                      {(provided) => (
                        <ul className="layers" {...provided.droppableProps} ref={provided.innerRef}>
                          {(this.state.front ? this.state.AllItemsArrayFront : this.state.AllItemsArrayBack).sort((a, b) => b.getZIndex() - a.getZIndex()).map((item, index) => {

                            return (
                              <Draggable key={item.getId()} draggableId={item.getId()} index={index}>
                                {(provided) => (
                                  <div className='layers-item' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                    {item.getView()}




                                  </div>
                                )}
                              </Draggable>
                            );
                          })}
                        </ul>
                      )}
                    </Droppable>
                  </DragDropContext>


                </div>) : this.state.editNow === 'history' ? (
                  <div className='edits-mobile'>
                    <div className='div-info'>
                      <button id='info'><span class="iconify" data-icon="clarity:info-solid" data-inline="false"></span></button>
                      <p className='info'>היסטורית העיצובים שלך, ניתן לטעון מחדש עיצובים ישנים, להעתיק ולערוך</p>
                    </div>
                    {this.state.HistoryDesignList.map((item, index) => {
                      return <HistoryDesign key={index} index={index} item={item} changeName={this.updateDesignToHistory} load={this.loadDesignHistory} delete={this.deleteDesignToHistory} />
                    })}

                    <button className='design-adddesign-btn' onClick={this.saveDesignToHistory} >שמור את העיצוב  </button>

                  </div>) : ''}
              <br />
            </div>
          </div>
          <div className='Design-cube2-mobile' draggable={false} id='Design-cube2' style={{maxWidth:this.props.width,  backgroundColor:this.state.downloadDesign?'transparent':'white'}} >
            <img hidden={this.state.downloadDesign} id='logo-down' src={Logo} alt='logo' />



            {/* fontSize:this.state.fontSize+'px' */}
            {/* <button className='buttonEdit' id='back-front'onClick={this.chengeShirt}>{this.state.front?('אחורה'):('קדימה')}</button> */}
            {this.props.productDesign.imgItem.back !== '' && !this.state.download ? (<button className='buttonEdit' id='back-front' onClick={this.chengeShirt}>{this.state.front ? ('אחורה') : ('קדימה')}</button>) : ''}

            {/* {this.state.textToolbar} */}
            
            <img hidden={this.state.downloadDesign} draggable={false} onClick={() => { this.datgnow(0) }} className='shirt-mobile' id='shirt' src={this.state.front ? (this.props.productDesign.imgItem.front) : (this.props.productDesign.imgItem.back)}></img>
            {/* <img draggable={false} onClick={() => { this.datgnow(0) }} className='shirt' id='shirt' src={this.state.d}></img> */}



            {/* <div id='all'> */}
              <p></p>
            {(this.state.front ? this.state.itemArrayFront : this.state.itemArrayBack).map((item, index) => {
              // return <ElementText key={index} zIndex={item.zIndex}  showSlider={this.state.showSlider} setShowSlider={this.showSlider} getTextToolbar={this.setTextToolbar} onDrag={this.datgnow} fontFamily={this.state.activeFontFamily} widthText={item.size} text={this.state.text} drag={this.state.howDrag} myIndex={index + 1} />
              return <ElementText key={item.getId()} item={item} getTextToolbar={this.setTextToolbar} onDrag={this.datgnow} deleteText={this.deleteText} fontFamily={this.state.activeFontFamily} text={this.state.text} drag={this.state.howDrag} myIndex={index + 1} />

              // <div className="box1"  key={index}>
              // <ElementText key={index} zIndex={this.getZIndex}  showSlider={this.state.showSlider} setShowSlider={this.showSlider} getTextToolbar={this.setTextToolbar} onDrag={this.datgnow} fontFamily={this.state.activeFontFamily} widthText={item.size} text={this.state.text} drag={this.state.howDrag} myIndex={index + 1} />
              // </div>

            })}
            {(this.state.front ? this.state.ImageArrayFront : this.state.ImageArrayBack).map((item, index) => {
              return <ElementImg key={item.getId()} item={item} onDrag={this.datgnow} getTextToolbar={this.setTextToolbar} drag={this.state.howDrag} myIndex={(index + 1) * 5} deleteImg={this.deleteImg} index={index} />


            })}
            {(this.state.front ? this.state.ShapeArrayFront : this.state.ShapeArrayBack).map((item, index) => {
              console.log(item.fill)
              return <ElementShape key={item.getId()} item={item} colorFill={item.getColorFill()} colorBorder={item.getColorBorder()} shapefill={item.getData().fill} shapeborder={item.getData().nofill} deleteShape={this.deleteShape} onDrag={this.datgnow} getTextToolbar={this.setTextToolbar} drag={this.state.howDrag} myIndex={(index + 1) * 10} />

            })}
            </div>

          {/* </div> */}
        </div>
      </div>
    );
  }
}