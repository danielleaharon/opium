import React from 'react';
import './Navbar.css';
import generalUtils from "../../common/generalUtils";
import Logo from '../../Image/opiumLogo3.png'

class Navbar1 extends React.Component {

    render() {
        return (
            <div id={'menu-wrapper-nav'} className={'menu-wrapper-nav ' + this.getClassNameWithSuffix('menu-wrapper-nav')}
                 onClick={(e) => this.onBackGroundClick(e.target.id)}>
                <div className={'menu-white-nav ' + generalUtils.getLangClass(this.getClassNameWithSuffix('menu-white-nav'), 1)}>
                <a href='/' className={'menu-logo'}><img src={Logo} alt='logo' /></a>
                    { this.getMenuItems() }
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
        return this.props.options.map((item,key) => this.getMenuItem(item,key));
    }

    getMenuItem(item,key) {
        if (item.link !== null) {
            if (item.internal) {

                return (
                   
                     <a  href={item.link} key={'menu-item-' + item.name} >
                     { this.getItemDiv(item) }
                 </a>
                );
            } else {

                return (
                    <a  href={item.link} key={'menu-item-' + item.name} target={'_blank'} rel="noopener noreferrer">
                        { this.getItemDiv(item) }
                    </a>
                );
            }
        }
        return (
            <div key={'menu-item-' + item.name}>
                { this.getItemDiv(item) }
            </div>
        );
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

export default Navbar1;
