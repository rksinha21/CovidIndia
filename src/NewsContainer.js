import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
// import NewsFeed from './NewsFeed';
import Scroll from './Scroll';

const NewsContainer = () => (
    <div>
        <h3>News Feed</h3>
    <div>
  <Grid textAlign='center'>
    <Grid.Row>
      <Grid.Column>
        <Menu fluid vertical>
          <Menu.Item className='header'><Scroll/></Menu.Item>
        </Menu>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      </div>
      </div>
)

export default NewsContainer;