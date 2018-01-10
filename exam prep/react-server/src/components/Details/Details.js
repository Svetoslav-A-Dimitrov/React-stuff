/**
 * Created by zlatii on 15/11/2017.
 */
import React, { Component } from 'react';
import {details} from '../../api/remote'

export default class Details extends Component{
    constructor(props){
        super(props)
        this.state = {furniture: {}}
    }

    componentDidMount(){
        let id = this.props.match.params.id
        details(id).then(furniture => this.setState({furniture: furniture}))
    }

    render(){
        let {make, model, price, description, material, year, image } = this.state.furniture
        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Furniture Details</h1>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <img src="img/sofa.jpg"/>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>Make: {make}</p>
                        <p>Model: {model}</p>
                        <p>Year: {year}</p>
                        <p>Description: {description}e</p>
                        <p>Price: {price}</p>
                        <p>Material: {material}</p>
                        <a href="#" className="btn btn-primary">Like</a>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-8">
                        <form>
                            <legend>Leave a review</legend>
                            <div className="form-group">
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Rating</label>
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary">1</button>
                                    <button type="button" className="btn btn-secondary">2</button>
                                    <button type="button" className="btn btn-primary">3</button>
                                    <button type="button" className="btn btn-secondary">4</button>
                                    <button type="button" className="btn btn-secondary">5</button>
                                </div>
                                <input type="submit" className="btn btn-primary" value="Submit review"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <div className="card text-black bg-light">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card text-black bg-light">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card text-black bg-light">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}