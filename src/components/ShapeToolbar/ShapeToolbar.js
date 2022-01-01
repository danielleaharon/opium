import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import './ShapeToolbar.css';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ColorPicker from '../colorPicker/colorPicker';


const useStyles = makeStyles((theme) => ({
  paper: {
    // display: 'flex',
    // overflowX:'scroll',
    // marginRight:'9rem',
    zIndex: '50',

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
    
    <div className='Toolbar'  >

      <Paper elevation={0} id='paper' className={classes.paper}>
       
        <Divider flexItem orientation="vertical" className={classes.divider} />
          <StyledToggleButtonGroup
          size="small"
          value={formats}
          orientation="horizontal"
          onChange={handleFormat}
          aria-label="text formatting"
        >

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
