import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// import FontPicker from "font-picker";
import './TextToolbar.css';

import FontPicker from "font-picker-react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ColorPicker from '../colorPicker/colorPicker';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
const useStyles = makeStyles((theme) => ({
  paper: {
    // display: 'flex',
    // border: `1px solid ${theme.palette.divider}`,
    // backgroundColor: 'transparent',
    // flexWrap: 'wrap',
    // marginRight: '9rem',
    // overflow:'scroll',
    // height:'auto',
    zIndex: '50',
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
  colorp: {
    // fill: this.props.paint,
  },
}));
// const fontPicker = new FontPicker(
//   'AIzaSyCVj4V2gUXgoVEDxpepWR1bFP85HvywOSU', // Google API key
//    "Open Sans", // Default font
//    { limit: 30 }, // Additional options
//  );


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

export default function CustomizedDividers(props) {

  const [alignment, setAlignment] = React.useState('');
  const [formats, setFormats] = React.useState(props.formats);
  const [activeFontFamily, setActiveFontFamily] = React.useState(props.getFont());

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
    props.setFormats(newFormats)
  };




  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const changeFont = (nextFont) => {
    console.log('changr font')
    setActiveFontFamily(nextFont.family)

    props.changeFont(nextFont)
  }

  const classes = useStyles();





  return (


    <div className='Toolbar' >
      <Paper elevation={0} id='paper1' className={classes.paper}>

        <Divider flexItem orientation="vertical" className={classes.divider} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          orientation="horizontal"
          aria-label="text formatting"
          id='StyledToggleButtonGroup'
        >
          <ToggleButton onClick={props.bold} value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton onClick={props.Italic} value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" onClick={props.underline} aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>


          <ToggleButton  value="color" aria-label="color-text" >
            <ColorPicker setPaint={props.setBackgroundColor} textcolor={'black'} color={props.backgroundColor} icon={<FormatColorFillIcon />} />
            <ArrowDropDownIcon />
          </ToggleButton>

          <ToggleButton value="color-text" aria-label="color-text" >
            <ColorPicker setPaint={props.setPaint} textcolor={'whitesmoke'} color={props.textColor} icon={<FormatColorTextIcon />} />
            <ArrowDropDownIcon />
          </ToggleButton>
          <ToggleButton value="color-text" aria-label="color-text" >
            <ColorPicker setPaint={props.setBorderColor} textcolor={'black'} color={props.BorderColor} icon={<BorderColorIcon />} />
            <ArrowDropDownIcon />
          </ToggleButton>

          <div id="font-picker">

            <FontPicker

              families={['Bona Nova', 'Varela Round', 'Advent Pro', 'Amatic SC', 'Arimo', 'Carter One', 'Cinzel', 'Cutive', 'Emilys Candy', 'Ephesis', 'Heebo', 'Indie Flower', 'Monoton', 'Mukta', 'Oleo Script', 'Oswald', 'Pacifico', 'Quattrocento', 'Sigmar One', 'Suez One']}
              apiKey="AIzaSyCVj4V2gUXgoVEDxpepWR1bFP85HvywOSU"

              activeFontFamily={activeFontFamily}

              onChange={(nextFont) => {
                console.log('changr dont 1');
                changeFont(nextFont)
              }
              }
            />

            <ArrowDropDownIcon />

          </div>

        </StyledToggleButtonGroup>

      </Paper>

    </div>
  );
}
