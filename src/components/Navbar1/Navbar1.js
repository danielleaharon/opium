import React from 'react';
import './Navbar.css';
import generalUtils from "../../common/generalUtils";
import Logo from '../../Image/opiumLogo3.png'

import {Link} from 'react-router-dom';


class Navbar1 extends React.Component {

    render() {
        return (
            <div id={'menu-wrapper-id'} className={'menu-wrapper ' + this.getClassNameWithSuffix('menu-wrapper')}
                 onClick={(e) => this.onBackGroundClick(e.target.id)}>
                <div className={'menu-white ' + generalUtils.getLangClass(this.getClassNameWithSuffix('menu-white'), 1)}>
                <a href='/' className={'menu-logo'}><img src={Logo} /></a>
                    { this.getMenuItems() }
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
        if (item.link != null) {
            if (item.internal) {
                return (
                   
                     <a href={item.link} key={'menu-item-' + item.name} >
                     { this.getItemDiv(item) }
                 </a>
                );
            } else {
                return (
                    <a href={item.link} key={'menu-item-' + item.name} target={'_blank'}>
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