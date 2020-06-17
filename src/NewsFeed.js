import React from 'react';
import { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react'

class NewsFeed extends Component{

    constructor(props){
        super(props);
        this.state={
            feed:[]
        }
    }

    componentDidMount(){
        fetch('http://newsapi.org/v2/top-headlines?country=in&apiKey=b138b4421d654edaba6e378d6451fcca')
        .then(response=> response.json())
        .then((data)=>{
            this.setState({feed:data.articles})
            console.log(this.state.feed)
        })
    }

    render(){
        return(
            <div>
                <Feed>{this.state.feed.map((item,key)=>{
                    return(
                    <Feed.Event key={key}>
                    <Feed.Label/>
                    <Feed.Content>
                        <Feed.Summary>
                        <a href={item.url} target="_blank">{item.title}</a>
                        <Feed.Date>{item.publishedAt}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                        {item.description}
                        </Feed.Extra>
                        <Feed.Extra images>
                            <a href={item.url} target="_blank">
                                <img src={item.urlToImage}/>
                            </a>
                        </Feed.Extra>
                    </Feed.Content>
                    </Feed.Event>
                    )
                })
                    }
                </Feed>
            </div>
        )
    }
}

export default NewsFeed;