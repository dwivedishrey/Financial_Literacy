import { Box } from '@mui/material';
import React from 'react'
import Plot from 'react-plotly.js'
import Header from '../components/Header';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        const API_KEY = '84ASAK65JCKGP49G';
        let StockSymbol = 'AMZN';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }

    render() {
        return (
            
            
            <Box m="20px">
            <div>
            <Header title="Stock Market"  />
            <hr />
           
            <Box sx={{marginLeft:"250px",marginTop:"40px"
            }}>
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        },
                        { type: 'bar', x: this.state.stockChartXValues, y: this.state.stockChartYValues },
                    ]}
                    layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
                />
                 </Box>
            </div>
            </Box>
          
           
        )
    }
}

export default Stock;
