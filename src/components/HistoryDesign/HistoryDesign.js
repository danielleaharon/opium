import React, { Component } from 'react';

import './HistoryDesign.css';

export default class HistoryDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDetails: false,
            name:this.props.item.name,
            changeBtn:false


        }


        this.handelDeleteDesign = this.handelDeleteDesign.bind(this)
        this.handelOpenDetails = this.handelOpenDetails.bind(this)
        this.handelLoadDesign = this.handelLoadDesign.bind(this)
        this.handelChangeName = this.handelChangeName.bind(this)
        this.handelChangeNameClick = this.handelChangeNameClick.bind(this)


    }
    handelDeleteDesign() {
        this.props.delete(this.props.index)

    }
    handelLoadDesign() {
        this.props.load(this.props.item)

    }
    handelOpenDetails() {
        this.setState({ openDetails: !this.state.openDetails })

    }
    handelChangeName(e){
        this.setState({name:e.target.value})
        if(e.target.value!==this.props.item.name){
            this.setState({changeBtn:true})
        }
        else{
            this.setState({changeBtn:false})

        }
    }
    handelChangeNameClick(){
        this.props.changeName(this.props.index,this.state.name)
        this.setState({changeBtn:false})

    }
    render() {
        return (
            <div className='historyDesign'>
                <div className='historyDesign-name'>
                <input type='text' value={this.state.name} onChange={this.handelChangeName}  className='historyDesign-name-input'/> 
                <span className='historyDesign-name-toolip'>לחץ על שם העיצוב על מנת לשנות אותו</span>
</div>
                <br />
                <p className='historyDesign-date'> {this.props.item.date} </p>
                <div className='historyDesign-btns'>
                <button onClick={this.handelDeleteDesign} className='historyDesign-btn'><span className="iconify" data-icon="fluent:delete-20-filled"></span>
                <span className='historyDesign-btn-toolip'>מחק</span>
                </button>
                <button onClick={this.handelLoadDesign} className='historyDesign-btn'><span className="iconify" data-icon="fluent:select-object-skew-edit-20-filled"></span>
                <span className='historyDesign-btn-toolip'>טען</span>
</button>

                </div>
                <div className='historyDesign-btns-left' hidden={!this.state.changeBtn}>
               
<button onClick={this.handelChangeNameClick} className='historyDesign-btn '><span className="iconify" data-icon="fluent:save-edit-24-filled"></span>
                <span className='historyDesign-btn-toolip historyDesign-save'>שמור שינוי שם</span>
</button>
                </div>
                {/* {this.state.openDetails ? (
                    <div>
                        {this.props.item.arrays.itemArrayFront.map((item,index)=>{
                            return 
                        })}

                    </div>
                ) : ''} */}
            </div>


        );
    }
}
