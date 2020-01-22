import React, { Component } from 'react';

//  Components
import DenomRow from './components/DenomRow';
import DenomTotals from './components/DenomTotals';

//  Actions
import NumberActions from './actions/NumberActions';

//  Stores
import NumberStore from './stores/NumberStore';

//  Styles / Font awesome
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/App.css';

class App extends Component {    

    constructor(props) {
        super(props);
        this.state = {
            rows: NumberStore.getRows(),
        };
    }

    componentDidMount(){    
        //  Add store listeners ... and notify ME of changes
        this.numberDataListener = NumberStore.addListener(this._onChange);
    }
  
    componentWillUnmount() {
        //  Remove store listeners
        this.numberDataListener.remove();
    }    

    render() 
    {

        return(
            <React.Fragment>

                <div className="container">
                    <h1 className="title">Denominations</h1>
                    <h2 className="subtitle">
                        A simple app designed to give you the right <strong>money denominations</strong> automagically
                    </h2>

                    {this.state.rows.map(function(dataItem, index) {
                        return <DenomRow key={index} id={dataItem.id} hundreds={dataItem.hundreds} twenties={dataItem.twenties} fives={dataItem.fives} value={dataItem.value} />;
                    })}
                    
                    <div className="control">
                        <button className="button is-primary" onClick={this.addRow}>
                            <span className="icon">
                                <i className="fas fa-plus"></i>
                            </span>
                            <span>More</span>
                        </button>
                    </div>                        
                </div>

                <DenomTotals rows={this.state.rows} />
                
            </React.Fragment>
        );
    }

    addRow = (e) => {
        NumberActions.addNumberRow();
    }

    _onChange = (e) => {
        this.setState({rows: NumberStore.getRows()});
    }
}

export default App;
