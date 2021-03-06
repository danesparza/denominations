//  React
import React, { Component } from 'react';
import NumberActions from '../actions/NumberActions';

class DenomRow extends Component {  

    render() {

        return (
            <React.Fragment>
                
                <div className="field is-horizontal">            
                    <div className="field-body">
                        <div className="field has-addons">
                            <div className="control is-expanded has-icons-left">
                                <input className="input" type="number" placeholder="Amount" onChange={this.OnValueChange} value={this.props.value} onFocus={this.handleFocus} autoFocus />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                            <div className="control">
                                <button className="button is-danger" onClick={this.RemoveRow}>Remove</button>
                            </div>
                        </div>                
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field is-expanded">
                            <div className="field">
                                <p className="control has-text-grey-light">
                                Include: 
                                <label className="checkbox">
                                    <input type="checkbox" className="includeOption" onChange={this.On100sChange} checked={this.props.hundreds} />
                                    100's
                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" className="includeOption" onChange={this.On20sChange} checked={this.props.twenties} />
                                    20's
                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" className="includeOption" onChange={this.On5sChange} checked={this.props.fives} />
                                    5's
                                </label>
                                </p>                        
                            </div>                    
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    OnValueChange = (e) => {
        //  Don't update local state -- use the action to update the store (and propagate new value through props)
        NumberActions.updateNumberRow(this.props.id, this.props.hundreds, this.props.twenties, this.props.fives, parseFloat(e.target.value));
    }

    On100sChange = (e) => {
        //  Don't update local state -- use the action to update the store (and propagate new value through props)
        NumberActions.updateNumberRow(this.props.id, e.target.checked, this.props.twenties, this.props.fives, this.props.value);
    }

    On20sChange = (e) => {
        //  Don't update local state -- use the action to update the store (and propagate new value through props)
        NumberActions.updateNumberRow(this.props.id, this.props.hundreds, e.target.checked, this.props.fives, this.props.value);
    }

    On5sChange = (e) => {
        //  Don't update local state -- use the action to update the store (and propagate new value through props)
        NumberActions.updateNumberRow(this.props.id, this.props.hundreds, this.props.twenties, e.target.checked, this.props.value);
    }

    RemoveRow = (e) => {
        NumberActions.removeNumberRow(this.props.id);        
    }

    //  When focus is switched to this control, select all text (make it easier to edit text)
    handleFocus = (e) => e.target.select();

}

export default DenomRow;