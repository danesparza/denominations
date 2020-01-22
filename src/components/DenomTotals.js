//  React
import React, { Component } from 'react';

class DenomTotals extends Component {  

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

    render() {        

        //  Our total displays:
        let totalHundreds = 0;
        let totalTwenties = 0;
        let totalFives = 0;
        let totalOnes = 0;

        //  Loop through each row ...
        for (var row of this.props.rows) {
            
            //  Operation initial number:
            let number = row.value;

            //  Operation output:
            let opValue = {value: 0, leftover: 0};

            //  If this row wants to see hundreds and we have some available:
            if(row.hundreds && number >= 100) {
                opValue = this.howMany100s(number);
                
                //  Add the number of 100s:
                totalHundreds += opValue.value;

                //  Filter down the leftovers
                number = opValue.leftover;
            }

            //  If this row wants to see twenties and we have some available:
            if(row.twenties && number >= 20) {
                opValue = this.howMany20s(number);
                
                //  Add the number of 20s:
                totalTwenties += opValue.value;

                //  Filter down the leftovers
                number = opValue.leftover;
            }

            //  If this row wants to see fives and we have some available:
            if(row.fives && number >= 5) {
                opValue = this.howMany5s(number);
                
                //  Add the number of 5s:
                totalFives += opValue.value;

                //  Filter down the leftovers
                number = opValue.leftover;
            }

            //  Add the remainder to the ones:
            totalOnes += number;

        }
        

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
                                    {totalHundreds} $100 <br/> 
                                    {totalTwenties} $20 <br/>
                                    {totalFives} $5 <br/>
                                    {totalOnes} $1 <br/>
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