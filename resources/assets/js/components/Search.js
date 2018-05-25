import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Search extends Component {
    

    
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <input className="form-control" placeholder="Search your card" type="text" id="card-text"></input>
                        <button className="btn btn-success"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                </div>
            </div>

        );
    }
}

if (document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}
