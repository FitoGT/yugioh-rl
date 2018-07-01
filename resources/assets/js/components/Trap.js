import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Trap(props) {
	return (
		<div className="row justify-content-center">
	        <div className="col-md-8">
	            <div className="card card-holder">
	                <div className="card-header trap">
	                    <div className="row header-title trap">
	                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
	                            <h3 className="h3-title trap">{props.value.name}</h3>
	                        </div>
	                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
	                            <span className="pull-right"><img className="attr-image" src={'images/TRAP.png'}></img></span>
	                        </div>
	                    </div>
	                </div>
	                <div className="card-body trap">
	                   
	                    <div className="text-center">
	                        <img className="img-responsive" src={props.value.image_path}></img>
	                    </div>
	                    <div className="description trap">
	                        <div className="col-xs-12">
	                            <h4>{props.value.text}</h4>
	                        </div>
	                    </div>
	                </div>

	            </div>
	        </div>
    </div>
	)
}
export default Trap;