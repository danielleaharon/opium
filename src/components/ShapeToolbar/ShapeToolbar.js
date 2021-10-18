import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import './ShapeToolbar.css';
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

export default function ShapeToolbar(props) {


  const [formats, setFormats] = React.useState(() => []);
   
 
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
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
          {props.borderIcon!==props.icon?
          <ToggleButton  value="color-shape-border" aria-label="color-text" >
          <ColorPicker setPaint={props.setBorderColor} textcolor={'black'} color={props.boderColor} iconShape={props.borderIcon}/>
            <ArrowDropDownIcon />
          </ToggleButton>:''}
          <ToggleButton  value="color-shape-fill" aria-label="color-text" >
          <ColorPicker setPaint={props.setBackgroundColor} textcolor={'black'} color={props.backgroundColor} iconShape={props.icon}/>
            <ArrowDropDownIcon />
          </ToggleButton>
      
        
          </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
