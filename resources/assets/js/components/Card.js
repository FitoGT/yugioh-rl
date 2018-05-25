import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Card extends Component {
    constructor (){
        super();
        this.state = {
            card:[]
        }
    }
    render() {
        if(this.props.value.data){
           return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">                    
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                        <span>{this.props.value.data.name}</span>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        <span className="pull-right">{ this.props.value.data.family }</span>
                                    </div>
                                </div>    
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-responsive" src="http://uploads2.yugioh.com/card_images/257/detail/Dark-Magician.jpg?1375127294"></img>
                                </div>
                                <div className="col-xs-12">
                                    <p>[{this.props.value.data.type}]</p>
                                    <i> {this.props.value.data.text}</i>
                                </div>
                                <div className="col-xs-12 text-right">
                                    <p><span>ATK / {this.props.value.data.atk}</span><span> DEF / {this.props.value.data.def}</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            
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
