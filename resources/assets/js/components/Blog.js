import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Blog extends Component {
    constructor (){
        super();
        this.state = {
            blogs:[]
        }
        console.log(super());
    }

    componentWillMount(){
     axios.get('http://localhost/reactravel/public/api/blog').then(response => {
       this.setState({
            blogs:response.data
       }).catch(error => {
            console.log(error);
       })
     })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Blog Component</div>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
            {console.log(this.state.blogs)}
            </div>
        );
    }
}

if (document.getElementById('blog')) {
    ReactDOM.render(<Blog />, document.getElementById('blog'));
}
