import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="bg-black pv4 ph3 ph5-m ph6-l white">
                <small className="f6 db tc">© 2020 <b class="ttu"> Developed By Rakshat Sinha</b></small>
                <div className="tc mt3">
                    <p className="f5 dib ph2 white">Data Scraped from Covid19 India</p>
                </div>
            </footer>

        )
    }
}

export default Footer;