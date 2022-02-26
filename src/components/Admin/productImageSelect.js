import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ImageUploading from '../ImageUploading/SingleFileUploadComponent';

import './Admin.css';
export default function ProductImageSelect (props) {
   const[ state,setState] = React.useState( {

      pSelectColor: 'red',
      pSelectColorOther: '#32a852',
      pImageFront: '',
      pImageBack: '',
      pSelectColorE: false,
   });


 
  const handelChangeOtherColor=(e)=> {
    setState({ ...state, pSelectColorOther: e.target.value })

  }
 
  
  const setImageFront=(url)=> {
   setState({...state, pImageFront: url });

  }
  const addImg=()=> {

    if (state.pSelectColor.match('other')) {
      if (state.pSelectColorOther !== '') {
   
         props.addImg(state.pImageFront, state.pImageBack, state.pSelectColorOther)

      }
    }
    else props.addImg(state.pImageFront, state.pImageBack, state.pSelectColor)

    setState({ pImageFront: '',pImageBack:'',pSelectColor:'',pSelectColorOther:'' })

  }
  const setImageBack=(url)=> {
    setState({...state, pImageBack: url });

  }


    return (


      <div className={props.className} >
        {state.pSelectColorE ? <p >חסרה תמונה</p> : ''}
        <FormControl variant="standard" id='select-time-start'>
          <InputLabel id="product-label" error={state.pSelectColorE} shrink >צבע </InputLabel>

          <Select
            required
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={state.pSelectColor}
            onChange={(e) => setState({ ...state, pSelectColor: e.target.value })}
            displayEmpty
          >
            <MenuItem id='val' value='red'>אדום</MenuItem>
            <MenuItem id='val' value='blue'>כחול</MenuItem>
            <MenuItem id='val' value='green'>ירוק</MenuItem>
            <MenuItem id='val' value='nocolor'>ללא צבע</MenuItem>
            <MenuItem id='val' value='other'>אחר</MenuItem>
          </Select>
        </FormControl>
        {state.pSelectColor.match('other') && <FormControl id='form-event' >


          <Input aria-describedby="helper"  required type='color' id="product-input-color" value={state.pSelectColorOther} onChange={handelChangeOtherColor} />


        </FormControl> }    
         
        <div className={props.className+'-input'}>
          <p className='img-title'>קדימה</p>
          <ImageUploading category='product' url={state.pImageFront} setImage={setImageFront} />
        </div>
        <div className={props.className+'-input'}>
          <p className='img-title'>אחורה</p>
          <ImageUploading category='product' url={state.pImageBack} setImage={setImageBack} />
        </div>
        <button className={props.className+'-btn'} onClick={addImg} >הוסף את הצבע</button>
      </div>




    );
  
}
