import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import './ImgToolbar.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ColorPicker from '../colorPicker/colorPicker';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import cloudIcon from '@iconify/icons-bi/cloud';
import { Icon } from '@iconify/react';
import polygonIcon from '@iconify/icons-uil/polygon';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    // border: `1px solid ${theme.palette.divider}`,
    backgroundColor:'transparent',
    flexWrap: 'wrap',
    marginRight:'9rem',
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
  colorp: {
    // fill: this.props.paint,
  },
  shapimg:{
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderStyle: 'none',
    borderBottom: 'none',
  
  },
  root:{
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderStyle: 'none',
    borderBottom: 'none',
  }
}));



const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: 'none',
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

export default function ImgToolbar(props) {
  const [shape, setShape] = React.useState(props.imgClip);
  const [shapes, setShapes] = React.useState([ {titel:'triangular-border',shapeB:<ChangeHistoryIcon/>},
  {titel:'square-border',shapeB:<CropSquareIcon/>},
  {titel:'heart-border',shapeB:<FavoriteBorderIcon/>},
  {titel:'circle-border',shapeB:<CircleOutlinedIcon/>},
  {titel:'star-border',shapeB:<StarOutlineOutlinedIcon/>},
  {titel:'hexagon-border',shapeB:<Icon icon={polygonIcon} width="24" />},
    {titel:'cloud-border',shapeB:<Icon icon={cloudIcon} width="24" />  },
]);

  const [alignment, setAlignment] = React.useState('');
  const [formats, setFormats] = React.useState(() => []);
  const [open, setOpen] = React.useState(false);
   
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeShape = (item) => {
    setShape(item);
    props.changeImgClip(item)
      
    
    
    setOpen(false);

  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

 
 

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
  const classes = useStyles();
 

 return (
    
    <div className='TextToolbar2' >

      <Paper elevation={0} className={classes.paper}>
       
        <Divider flexItem orientation="vertical" className={classes.divider} />
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          // onChange={handleFormat}
          aria-label="text formatting"
        >
{/*   
          <ToggleButton  value="color" aria-label="color" >
          <ColorPicker setPaint={props.setBackgroundColor} textcolor={'black'} color={props.backgroundColor} icon={<FormatColorFillIcon/>}/>
            <ArrowDropDownIcon />
          </ToggleButton>
        
          <ToggleButton  value="color-text" aria-label="color-text" >
          <ColorPicker setPaint={props.setPaint} textcolor={'whitesmoke'} color={props.textColor} icon={<FormatColorTextIcon/>}/>
            <ArrowDropDownIcon />
          </ToggleButton> */}
          <ToggleButton  value="color-text" aria-label="color-text" >
          <ColorPicker setPaint={props.setBorderColor} textcolor={'black'} color={props.boderColor} icon={<BorderColorIcon/>}/>
            <ArrowDropDownIcon />
          </ToggleButton>
        
          <ToggleButton value="shapeImg" className='shapeImg'  onClick={handleOpen}
 aria-label="shape">
   {shape.shapeB}
          <ArrowDropDownIcon />
{ open?  <div className='shape-grid'> {shapes.map((item,index)=>{
  return <button className='shape-item' onClick={()=>handleChangeShape(item)} > {item.shapeB} </button>

}) } </div>
:''}
          {/* <ArrowDropDownIcon /> */}
          {/* <FormControl  className={'shap-img'} sx={{ m: 0, minWidth: 0 }}> */}

        {/* <Select
        variant='standard'
          labelId="demo-controlled-open-select-label"
          id="demo-simple-select-standard"
          className='shap-img shape-grid'
                              open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={shape}
          onChange={handleChangeShape}
        > */}
          {/* {{titel:'triangular-border',shapeB:<ChangeHistoryIcon/>}}
          {{titel:'square',shapeB:<CropSquareIcon/>}}
          {{titel:'heart-border',shapeB:<FavoriteBorderIcon/>}}
          {{titel:'circle-border',shapeB:<CircleOutlinedIcon/>}}
          {{titel:'star-border',shapeB:<StarOutlineOutlinedIcon/>}}
          {{titel:'hexagon-border',shapeB:<Icon icon={polygonIcon} width="24" />}} */}
          {/* <MenuItem className='shape-item' value={{titel:'triangular-border',shapeB:<ChangeHistoryIcon/>}}><ChangeHistoryIcon className='shh'/></MenuItem>
          <MenuItem value={{titel:'square',shapeB:<CropSquareIcon/>}}> <CropSquareIcon/></MenuItem>
          <MenuItem value={{titel:'heart-border',shapeB:<FavoriteBorderIcon/>}}> <FavoriteBorderIcon/></MenuItem>
          <MenuItem value={{titel:'circle-border',shapeB:<CircleOutlinedIcon/>}}> <CircleOutlinedIcon/></MenuItem>
          <MenuItem value={{titel:'star-border',shapeB:<StarOutlineOutlinedIcon/>}}> <StarOutlineOutlinedIcon/></MenuItem>
          <MenuItem value={{titel:'hexagon-border',shapeB:<Icon icon={polygonIcon} width="24" />}}> <Icon icon={polygonIcon} width="24" /></MenuItem> */}
          {/* <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}

        {/* </Select> */}

      {/* </FormControl> */}
          </ToggleButton>
        
          </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
