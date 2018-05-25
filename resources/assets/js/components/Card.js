import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Card extends Component {
    constructor (){
        super();
        this.state = {
            card:[]
        }
        console.log(super());
    }

    componentWillMount(){
     axios.get('http://localhost/yugioh/public/api/card').then(response => {
       this.setState({
            card:response.data
       })
     })
    }
    render() {
        if(this.state.card.data){
           return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">                    
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                        <span>{this.state.card.data.name}</span>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        <span className="pull-right">{ this.state.card.data.family }</span>
                                    </div>
                                </div>    
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-responsive" src="http://uploads2.yugioh.com/card_images/257/detail/Dark-Magician.jpg?1375127294"></img>
                                </div>
                                <div className="col-xs-12">
                                    <p>[{this.state.card.data.type}]</p>
                                    <i> {this.state.card.data.text}</i>
                                </div>
                                <div className="col-xs-12 text-right">
                                    <p><span>ATK / {this.state.card.data.atk}</span><span> DEF / {this.state.card.data.def}</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {console.log(this.state.card.data)}
            
            </div>
        ); 
        }else{
            return (
                <div className="container">
                </div>
            )
        }
        
    }
}

if (document.getElementById('card')) {
    ReactDOM.render(<Card />, document.getElementById('card'));
}
