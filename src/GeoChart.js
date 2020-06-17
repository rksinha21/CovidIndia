import React, { Component } from 'react';
import { Chart } from "react-google-charts";

const states=[]
const confirmedcases=[]
const recovered=[]
const death=[]
const geodata=[['States','Confirmed Cases','Recovered','Deaths']]
const initialState={
    chartData:[]
}
class GeoChart extends Component{

    constructor(props){
        super(props);
        this.state={
            initialState
        }
    }

    componentDidMount(){
        fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then((data)=>{
            this.storeData(data)
        })
        .catch(err => {
            console.log(err);
        });
    }

    storeData(data){
        for(let i=1;i<data.statewise.length;i=i+1){
            states.push(data.statewise[i].state)
            confirmedcases.push(parseInt(data.statewise[i].confirmed))
            recovered.push(parseInt(data.statewise[i].recovered))
            death.push(parseInt(data.statewise[i].deaths))
        }
        console.log(states)
        console.log(confirmedcases)

        for(let i = 0;i<states.length;i=i+1){
            geodata.push([states[i],confirmedcases[i],recovered[i],death[i]])
        }

        this.setState({chartData:geodata})
        // console.log(this.state.chartData)
    }

    render(){
        console.log(this.state.chartData)
        return(
            <div className="mb3">
                <Chart
                width={'570px'}
                height={'550px'}
                chartType="BarChart"
                data={this.state.chartData}
                options={{
                    title: 'State Comparison',
                    chartArea: { width: '50%' },
                    isStacked: true,
                    hAxis: {
                    title: 'Data',
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'States',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '3' }}
                />
            </div>
        )
    }
}

export default GeoChart;
