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

        <div className="field">
            <p className="control has-icons-left">
                <input className="input" type="number" placeholder="Amount" />
                <span className="icon is-small is-left">
                    <i className="fas fa-dollar-sign"></i>
                </span>
            </p>
            
            <p className="control">
                Include  &nbsp;

                <label class="checkbox">
                    <input type="checkbox" checked="true" />
                    100's
                </label>

                <label class="checkbox">
                    <input type="checkbox" checked="true" />
                    20's
                </label>
            </p>
            
        </div>

        <div class="control">
            <button class="button is-primary">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>More</span>
            </button>
        </div>
        
    </div>
  );
}

export default App;
