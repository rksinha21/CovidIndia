import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class DataTable extends Component{

	constructor(props){
		super(props);
		this.state={
			data:[]
		}
	}

	componentDidMount() {
		fetch("https://api.covid19india.org/data.json")
		.then(response=>response.json())
		.then((item)=>{
			this.setState({data:item.statewise})
		})
		.catch(err=>console.log(err)) 

	}

	
	  render(){
		setInterval(this.componentDidMount,1000)

		this.state.data.shift();

		  return(
				  
			<div className="ma4">
				<p className="f3 baskerville mt3 black">Cases from each State*</p>
				<Table size='small' striped inverted>
					<Table.Header>
					<Table.Row>
						<Table.HeaderCell>State</Table.HeaderCell>
						<Table.HeaderCell>Confirmed</Table.HeaderCell>
						<Table.HeaderCell>Active</Table.HeaderCell>
						<Table.HeaderCell>Recovered</Table.HeaderCell>
						<Table.HeaderCell>Deaths</Table.HeaderCell>
					</Table.Row>
					</Table.Header>

					<Table.Body>
						{this.state.data.map((item,key)=>{
							return(
								<Table.Row key={key}>
									<Table.Cell>{item.state}</Table.Cell>
									<Table.Cell>{item.confirmed}</Table.Cell>
									<Table.Cell>{item.active}</Table.Cell>
									<Table.Cell>{item.recovered}</Table.Cell>
									<Table.Cell>{item.deaths}</Table.Cell>
								</Table.Row>
							)
						})
					
	  				}
					</Table.Body>
					</Table>
		<p className="f5 mb3 black">*As per data from <a href='https://www.mohfw.gov.in/' target="_blank" > Ministry of Health and Family Welfare</a></p>
		</div>
		  )
	  }
	  
}
	

export default DataTable;