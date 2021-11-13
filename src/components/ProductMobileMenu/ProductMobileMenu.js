import React from 'react';
import './ProductMobileMenu.css';
import generalUtils from "../../common/generalUtils";
import Logo from '../../Image/opiumLogo3.png'

import {Link} from 'react-router-dom';


class ProductMobileMenu extends React.Component {
constructor(props){
    super(props)
    this.state={
        red:false,
        redpink:false,
        pink:false,
        purple:false,
        bluepurple:false,
        blue:false,
        green:false,
        greenorange:false,
        hide:false,

        }
}
    render() {
        return (
            <div id={'menu-wrapper-id'} className={'menu-wrapper ' + this.getClassNameWithSuffix('menu-wrapper')}
                 onClick={(e) => this.onBackGroundClick(e.target.id)}>
                     
                <div className={'menu-white ' + generalUtils.getLangClass(this.getClassNameWithSuffix('menu-white'), 1)}>
                <button className='menu-close' onClick={this.props.onClose}>סגור <span id='x' class="iconify" data-icon="feather:x"></span></button>

                    <div className='print-category' >
                    { this.getMenuItems() }
                    </div>
                </div>
            </div>
        );
    }
   
    onBackGroundClick(targetId) {
        if (targetId == 'menu-wrapper-id') {
            this.props.onClose();
        }
    }

    getClassNameWithSuffix(className) {
        if (this.props.menuStatus == 1) {
            return className + '-opening';
        }
        if (this.props.menuStatus == 3) {
            return className + '-closing';
        }
    }

    getMenuItems() {
        return this.props.options.map(item => this.getMenuItem(item));
    }

    getMenuItem(item) {
       return <div className='cubeC'  >
       {item}
       </div>
    }

    getItemDiv(item) {
        return (
            <div className={'menu-item'} onClick={() => this.onItemClick(item)}>{ item.name }</div>
        );
    }
   

    onItemClick(item) {
        if (item.onClick != null) {
            item.onClick();
        }
       
    }
}

export default ProductMobileMenu;
