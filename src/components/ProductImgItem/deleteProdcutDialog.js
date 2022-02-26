import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import './ProductImgItem.css';
export default function DeleteProdcutDialog (props) {

    return (
      <Dialog
      id='Dialog'
      open={props.openDelete}
      keepMounted
      onClose={props.handelClose}
    >
      <DialogContent >

      <DialogContentText id="alert-dialog-slide-description">
              בטוח שאתה רוצה למחוק את {props.item.name} ?
            </DialogContentText>
      </DialogContent>
      <DialogActions>
            <Button onClick={props.handelClose} id='dialog-btn' color="primary">
              לא
            </Button>
            <Button onClick={props.handelDelete} id='dialog-btn' color="primary">
              כן
            </Button>
          </DialogActions>

</Dialog>
    
    );
  
}
