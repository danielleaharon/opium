import React from 'react';
import './ProductMobileMenu.css';
import generalUtils from "../../common/generalUtils";

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
            <div id={'menu-wrapper-id'} className={'menu-wrapper ' + this.getClassNameWithSuffix('menu-wrapper')}style={{ height: window.innerHeight + 'px' ,zIndex:'40' }}
                 onClick={(e) => this.onBackGroundClick(e.target.id)}>
                     
                <div className={'menu-white ' + generalUtils.getLangClass(this.getClassNameWithSuffix('menu-white'), 1)} style={{ height: window.innerHeight + 'px' }} >
                <button className='menu-close' onClick={this.props.onClose}>סגור <span id='x' className="iconify" data-icon="feather:x"></span></button>

                    <div className='print-mobile-category' >
                    { this.getMenuItems() }
                    </div>
                </div>
            </div>
        );
    }
   
    onBackGroundClick(targetId) {
        if (targetId==='menu-wrapper-id') {
            this.props.onClose();
        }
    }

    getClassNameWithSuffix(className) {
        if (this.props.menuStatus===1) {
            return className + '-opening';
        }
        if (this.props.menuStatus===3) {
            return className + '-closing';
        }
    }

    getMenuItems() {
        return this.props.options.map((item,index) => this.getMenuItem(item,index));
    }

    getMenuItem(item,index) {

       return <div key={index} className='mobile-cubeC'  >
       {item}
       </div>
    }

 
   

    onItemClick(item) {
        if (item.onClick != null) {
            item.onClick();
        }
       
    }
}

export default ProductMobileMenu;
