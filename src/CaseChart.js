import React, { Component } from 'react';
import { Chart } from "react-google-charts";

const dates=[]
const cases=[]
const deaths=[]
// const chart = [[{type:'number',label:'Cases'},{type:'string',label: 'Date'}]]
const columns = [
    {type:'string',label:'Date'},
    {type:'number',label: 'Cases'},
    {type:'number',label:'Deaths'}
  ]
const rows=[];
const initialState={
    chartData:[]
}
class CaseChart extends Component{

    constructor(props){
        super(props);
        this.state= initialState
    }

    componentDidMount(){
        fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then((data)=>{
            this.getData(data)
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    getData(data){

            for(let i=0;i<data.cases_time_series.length;i=i+1){
            dates.push(data.cases_time_series[i].date)
            cases.push(parseInt(data.cases_time_series[i].totalconfirmed))
            deaths.push(parseInt(data.cases_time_series[i].totaldeceased))
            }
            console.log(dates)
            console.log(cases)
            console.log(deaths)

            for (let i = 0; i < dates.length; i += 1) {
                rows.push([dates[i], cases[i],deaths[i]])
            }
            this.setState({
            chartData: [columns,...rows]
            })
            // console.log(this.state.chartData)
    }

    
    render(){
        console.log(this.state.chartData)
        setInterval(this.componentDidMount,1000)
        return(
            <div className="ml4 mt5">
            <Chart
                width={'580px'}
                height={'450px'}
                chartType="LineChart"
                data={this.state.chartData}
                options={{
                    title: 'Per Day Increment',
                    hAxis: {
                    title: 'Date',
                    },
                    vAxis: {
                    title: 'Cases',
                    },
                }}
                rootProps={{ 'data-testid': '4' }}
                >
            </Chart>
            </div>
        )
    }
}

export default CaseChart;
