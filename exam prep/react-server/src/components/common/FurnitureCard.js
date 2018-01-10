/**
 * Created by zlatii on 15/11/2017.
 */
import React, { Component } from 'react';

export default class FurnitureCard extends Component{

    render(){
        const {id, image, make, model, price, remove} = this.props
        return(
            <div className="col-md-4">
                <div className="card text-white bg-primary">
                    <div className="card-body">
                        <blockquote className="card-blockquote">
                            <img src={image}/>
                            <p>{model} by {make}</p>
                            <footer>
                                <cite title="Source Title">{price} lv.</cite>
                            </footer>
                            <div className="pull-right">
                                <a href={'/details/' + id} className="btn btn-info">Details</a>
                                <a href="javascript:void(0)" onClick={()=>{remove(id)}}>delete</a>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}