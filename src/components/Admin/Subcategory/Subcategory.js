import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { isAuth } from '../../../actions/auth';
import axios from 'axios';
import SubcategoryItem from './SubcategoryItem';

import Config from '../../../config/config';
import './Subcategory.css';
export default class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSubcategory: '',
      newSubcategoryE: false,



    }

    this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
    // this.updateSubcategoryList = this.updateSubcategoryList.bind(this);
    this.handelNameChange = this.handelNameChange.bind(this);

  }
  handelNameChange(e) {
    this.setState({ newSubcategoryE: false })
    const name = e.target.value;
    if (this.props.subcategoryList.some((a) => a.name === name.trim())) {
      this.setState({ newSubcategoryE: true })
    }
    this.setState({ newSubcategory: name })
  }
  handleAddSubcategory() {


    const postData = {
      name: this.state.newSubcategory,
      token: isAuth(),

    };
    axios.post(Config.getServerPath() + 'subcategory/create', postData)
      .then(res => {
        if (res.data.status === 400) {
          console.log('error')
          return
        }
        this.props.updateSubcategoryList(res.data.subcategoryList)

        this.setState({ newSubcategory: '' })

      })
      .catch(() => {
        console.log('send')
      });
  }

  // updateSubcategoryList(SubcategorList, flag) {
  //   this.props.updateSubcategoryList(SubcategorList, flag)

  // }



  render() {
    return (

      <>


        <div id='card-gallary'>
          <FormControl id='form-event' >

            <InputLabel id="product-label">תת קטגוריה חדשה </InputLabel>

            <Input aria-describedby="helper" error={this.state.newSubcategoryE} required type='text' id="product-input" value={this.state.newSubcategory} onChange={this.handelNameChange} />
            {this.state.newSubcategoryE ? <FormHelperText error={this.state.newSubcategoryE} >קיים כבר </FormHelperText> : ''}

          </FormControl>
          <button hidden={this.state.newSubcategory.trim() === '' || this.state.newSubcategoryE} onClick={this.handleAddSubcategory} id='product-add-new-btn'> הוסף</button>

          <div id='galley-list'>
            <p id='galley-list-title'>כל תתי הקטגוריות</p>
            <div className='subcategory-list'>
              {console.log(this.state.subcategoryList)}
              {this.props.subcategoryList
                .map((item, index) => {
                  return <SubcategoryItem item={item} key={item._id} updateSubcategoryList={this.props.updateSubcategoryList} />
                })}
            </div>

          </div>
        </div>



      </>
    );
  }
}
