import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Monster(props) {
	return (
		<div className="row justify-content-center">
	        <div className="col-md-8">
	            <div className="card card-holder">
	                <div className={"card-header "+props.value.monster_types[0].toLowerCase()}>
	                    <div className="row header-title">
	                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
	                            <h3 className="h3-title">{props.value.name}</h3>
	                        </div>
	                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	                            <span className="pull-right"><img className="attr-image" src={'images/'+props.value.attribute+'.png'}></img></span>
	                        </div>
	                    </div>
	                </div>
	                <div className={"card-body "+props.value.monster_types[0].toLowerCase()}>
	                    <div className="text-right">
	                         {getLevel(props.value.stars)}

	                    </div>
	                    <div className="text-center">
	                        <img className="img-responsive" src={props.value.image_path}></img>
	                    </div>
	                    <div className={"description "+props.value.monster_types[0].toLowerCase()}>
	                        <div className="col-xs-12">
	                            <h4>[{props.value.species} / {props.value.monster_types[0]}]</h4>
	                            <i> {props.value.text}</i>
	                        </div>
	                        <hr></hr>
	                        <div className="col-xs-12 text-right">
	                            <strong><span>ATK / {props.value.attack}</span><span> DEF / {props.value.defense}</span></strong>
	                        </div>
	                    </div>
	                </div>

	            </div>
	        </div>
    </div>
	)

}

function getLevel(stars){
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
export default Monster;