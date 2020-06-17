import CasesChart from './CaseChart';
import React from 'react';
import GeoChart from './GeoChart';
import { Grid } from 'semantic-ui-react'

const Graphs = ()=>{
    return(
        <div>
        <Grid stackable columns={2}>
            <Grid.Column>
            <CasesChart/>
            </Grid.Column>
            <Grid.Column>
            <GeoChart/>
            </Grid.Column>
        </Grid>
        
        
        </div>
    )
}

export default Graphs;