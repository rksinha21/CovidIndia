import React, { Component } from 'react';
import _ from 'lodash';
import { Divider, Statistic } from 'semantic-ui-react'

class Stats extends Component{

    constructor(){
        super();
        this.state={
            stats:{}
        }
    }

    componentDidMount(){
        fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then((data)=>{
            const fig = data.statewise[0]
            this.setState({stats:fig})
            
        })
        .catch(err => {
            console.log(err);
        });
    }

  render() {

    setInterval(this.componentDidMount,1000)
    return (
    <div className="mt3">
        <p className="tc f2 white tracked-mega fw9-l">CURRENT STATS</p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }} className="mt3">

        <Divider hidden />
        <Statistic.Group size='huge' color="orange" inverted>
                        <Statistic >
                            <Statistic.Value >{this.state.stats.confirmed}</Statistic.Value>
                            <Statistic.Label className="mb4">Total Confirmed Cases</Statistic.Label>
                            </Statistic >
                            <Statistic >
                            <Statistic.Value>{this.state.stats.active}</Statistic.Value>
                            <Statistic.Label className="mb4">Total Active Cases</Statistic.Label>
                            </Statistic>
                            <Statistic >
                            <Statistic.Value>{this.state.stats.deaths}</Statistic.Value>
                            <Statistic.Label className="mb4">Total Deaths</Statistic.Label>
                            </Statistic >
                            <Statistic >
                            <Statistic.Value>{this.state.stats.recovered}</Statistic.Value>
                            <Statistic.Label className="mb4">Total Recovered</Statistic.Label>
                        </Statistic>
        </Statistic.Group>
      </div>
    </div>
    )
  }

}

export default Stats
