import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/App.css';

function App() {    
  return (
    <div className="container">
        <h1 className="title">Denominations</h1>
        <h2 className="subtitle">
            A simple app designed to give you the right <strong>money denominations</strong> automagically
        </h2>
        
        <div className="field is-horizontal">            
            <div className="field-body">
                <div className="field has-addons">
                    <div className="control is-expanded has-icons-left">
                        <input className="input" type="number" placeholder="Amount" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign"></i>
                        </span>
                    </div>
                    <div className="control">
                        <button className="button is-danger">Remove</button>
                    </div>
                </div>                
            </div>
        </div>

        <div className="field is-horizontal">
            <div className="field-body">
                <div className="field is-expanded">
                    <div className="field">
                        <p className="control">
                        Include: 
                        <label class="checkbox">
                            <input type="checkbox" className="includeOption" checked="true" />
                            100's
                        </label>

                        <label class="checkbox">
                            <input type="checkbox" className="includeOption" checked="true" />
                            20's
                        </label>

                        <label class="checkbox">
                            <input type="checkbox" className="includeOption" checked="true" />
                            10's
                        </label>

                        <label class="checkbox">
                            <input type="checkbox" className="includeOption" checked="true" />
                            5's
                        </label>
                        </p>                        
                    </div>                    
                </div>
            </div>
        </div>

        <div className="control">
            <button className="button is-primary">
                <span className="icon">
                    <i className="fas fa-plus"></i>
                </span>
                <span>More</span>
            </button>
        </div>
        
    </div>
  );
}

export default App;
