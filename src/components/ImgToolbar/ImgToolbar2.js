import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import './ImgToolbar.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ColorPicker from '../colorPicker/colorPicker';
import cloudIcon from '@iconify/icons-bi/cloud';
import { Icon } from '@iconify/react';
import polygonIcon from '@iconify/icons-uil/polygon';

const useStyles = makeStyles((theme) => ({
  paper: {
    // display: 'flex',
    // // border: `1px solid ${theme.palette.divider}`,
    // backgroundColor:'transparent',
    // flexWrap: 'wrap',
    // marginRight:'9rem',
    zIndex:'50'
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
  colorp: {
    // fill: this.props.paint,
  },
  shapimg: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderStyle: 'none',
    borderBottom: 'none',

  },
  root: {
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
  const [shapes, setShapes] = React.useState([{ titel: 'triangular-border', shapeB: <ChangeHistoryIcon /> },
  { titel: 'square-border', shapeB: <CropSquareIcon /> },
  { titel: 'heart-border', shapeB: <FavoriteBorderIcon /> },
  { titel: 'circle-border', shapeB: <CircleOutlinedIcon /> },
  { titel: 'star-border', shapeB: <StarOutlineOutlinedIcon /> },
  { titel: 'hexagon-border', shapeB: <Icon icon={polygonIcon} width="24" /> },
  { titel: 'cloud-border', shapeB: <Icon icon={cloudIcon} width="24" /> },
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

    <div className='Toolbar' >

      <Paper elevation={0} id='paper' className={classes.paper}>

        <Divider flexItem orientation="vertical" className={classes.divider} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          orientation="horizontal"
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
          <ToggleButton value="color-text" aria-label="color-text" >
            <ColorPicker setPaint={props.setBorderColor} textcolor={'black'} color={props.boderColor} icon={<BorderColorIcon />} />
            <ArrowDropDownIcon />
          </ToggleButton>

          <div  className='shapeImg' onClick={handleOpen}>
            {shape.shapeB}
            <ArrowDropDownIcon />
            {open ? <div className='shape-grid'> {shapes.map((item, index) => {
              return <button className='shape-item' onClick={() => handleChangeShape(item)} > {item.shapeB} </button>

            })} </div>
              : ''}
        
          </div>

        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
