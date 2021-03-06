import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card';
import store from '../store';

export default class Search extends Component {

    constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-group">
                        <input className="form-control" placeholder="Search your card" type="text" id="card-text"></input>
                        <button className="btn btn-lg btn-dark search-btn" onClick={() => this.getCard()}><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                </div>
                {this.drawCard()}
            </div>

        );
    }

    getCard(){
     let card = document.getElementById('card-text').value
     store.dispatch({
       type:"GET_CARD",
       data:[],
       loading:true
     });
     axios.get('api/card/'+card).then(response => {
     //axios.get('json/response.json').then(response => {
       store.dispatch({
         type:"GET_CARD",
         data:response,
         loading:false
       })
       // this.setState({
       //      data:response
       // })
     })
    }

    drawCard(){
        return <Card />
    }

}

if (document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}
