import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
// import { Table } from 'semantic-ui-react'

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
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} className="ma5">
    <Table striped bordered hover variant="dark" responsive>
      <thead style={{backgroundColor:'rgb(214, 118, 45)'}}>
        <tr >
          <th >State</th>
          <th >Active</th>
          <th >Confirmed</th>
          <th >Recovered</th>
          <th >Deaths</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:'rgb(242, 113, 28)'}}>
      {this.state.data.map((item,key)=>{
							return(
								<tr key={key} >
									<td>{item.state}</td>
									<td>{item.confirmed}</td>
									<td>{item.active}</td>
									<td>{item.recovered}</td>
									<td>{item.deaths}</td>
								</tr>
							)
						})
					
	  				}
      </tbody>
    </Table>
  </div>

		  )
	  }
	  
}
	

export default DataTable;