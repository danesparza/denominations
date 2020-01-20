//  React
import React, { Component } from 'react';

class DenomTotals extends Component {  

    render() {

        //  Total all the values:
        var totalValues = this.props.rows.reduce((accum,item) => accum + item.value, 0);

        return (
            <nav className="panel totals">
                <div className="panel-heading">
                    Total: ${totalValues}
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
        );
    }

}

export default DenomTotals;