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
                                <input className="input" type="number" placeholder="Amount" onChange={this.OnValueChange} value={this.props.value} />
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
                                    <input type="checkbox" className="includeOption" defaultChecked={true} />
                                    100's
                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" className="includeOption" defaultChecked={true} />
                                    20's
                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" className="includeOption" defaultChecked={true} />
                                    10's
                                </label>

                                <label className="checkbox">
                                    <input type="checkbox" className="includeOption" defaultChecked={true} />
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
        NumberActions.updateNumberRow(this.props.id, false, false, true, parseFloat(e.target.value));
    }

    RemoveRow = (e) => {
        NumberActions.removeNumberRow(this.props.id);        
    }

}

export default DenomRow;