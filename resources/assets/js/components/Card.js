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
            let card_data = this.props.value.data.card;
           return (
            <div className="container">
               {console.log(card_data)}
                <div className="row justify-content-center">
                    <div className="col-md-8">                    
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                        <span>{card_data.name}</span>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        <span className="pull-right"><img className="attr-image" src={'images/'+card_data.attribute+'.png'}></img></span>
                                    </div>
                                </div>    
                            </div>
                            <div className="card-body">
                                <div className="text-right">
                                     {this.getLevel(card_data.stars)}

                                </div>
                                <div className="text-center">
                                    <img className="img-responsive" src={card_data.image_path}></img>
                                </div>
                                <div className="col-xs-12">
                                    <p>[{card_data.species} / {card_data.monster_types[0]}]</p>
                                    <i> {card_data.text}</i>
                                </div>
                                <div className="col-xs-12 text-right">
                                    <p><span>ATK / {card_data.attack}</span><span> DEF / {card_data.defense}</span></p>
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

    getLevel(stars){
        let img = [];
        _.times(stars, (i) => {
            img.push(<img className="img-level" src="images/level.png" key={i}></img>);
        });
        return(

           <ul className="list-inline">
               {img}           
           </ul> 
                                   
        )
    }


}
