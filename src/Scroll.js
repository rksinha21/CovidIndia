import React from 'react';
import NewsFeed from './NewsFeed';

const Scroll = (props) =>{
    return(
        <div style={{overflow:'scroll', height:'300px' }}>
            <NewsFeed/>
        </div>
    );
}

export default Scroll;