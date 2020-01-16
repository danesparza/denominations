import React, { Component } from 'react';

//  Components
import DenomRow from './components/DenomRow';

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

    howMany100s(amount) {
        let result = {};
        result.value = Math.floor(amount / 100);
        result.leftover = amount % 100;

        return result;
    }

    howMany20s(amount) {
        let result = {};
        result.value = Math.floor(amount / 20);
        result.leftover = amount % 20;

        return result;
    }

    howMany5s(amount) {
        let result = {};
        result.value = Math.floor(amount / 5);
        result.leftover = amount % 5;

        return result;
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

                <nav className="panel totals">
                    <div className="panel-heading">
                        Total: $484
                    </div>
                    <div className="panel-block">
                        <section className="hero">
                            <div className="hero-body">
                                <div className="container">
                                    <h2 className="subtitle">
                                        4 $100 <br/> 
                                        2 $20 <br/>
                                        3 $5 <br/>
                                        34 $1 <br/>
                                    </h2>
                                </div>
                            </div>
                        </section>
                    </div>
                </nav>
                
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
