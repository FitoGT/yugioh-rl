import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import Monster from './Monster';
import Spell from './Spell';
import Trap from './Trap';

export default class Card extends Component {
    constructor (){
        super();
        this.state = {
            card:[],
            loading:false
        }
        store.subscribe(()=>
          this.setState({
            card:store.getState().card,
            loading:store.getState().loading
          })
        )

    }
    render() {
      //console.log(this.state.loading);
        if(this.state.loading==true && !this.state.card.data){
          return (
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <img className="img-responsive card-back" src="images/cargando.gif"></img>
                      </div>
                  </div>
              </div>
          )
        }
        if(this.state.card.data && this.state.loading==false){
            let card_data = this.state.card.data.card;
           return (
            <div className="container">
               {console.log(card_data)}
                
               {this.drawMonster(card_data)}

            </div>
        );
        }else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img className="img-responsive card-back" src="images/back.jpg"></img>
                        </div>
                    </div>
                </div>
            )
        }

    }

    

    drawMonster(card_data){
        return <Monster value={card_data} />
    }


}
