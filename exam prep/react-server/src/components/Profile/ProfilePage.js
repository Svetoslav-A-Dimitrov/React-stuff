/**
 * Created by zlatii on 15/11/2017.
 */

import React, { Component } from 'react';
import {profile} from './../../api/remote'

export default class Profile extends Component{

    componentDidMount(){
        profile().then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Profile Page</h1>
                        <p>Listing  your furniture.</p>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" placeholder="Search" type="text"/>
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <img src="img/sofa.jpg"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                    <div className="pull-right">
                                        <a href="details.html" className="btn btn-info">Details</a>
                                        <a href="#" className="btn btn-danger">Delete Item</a>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <img src="img/sofa.jpg"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                    <div className="pull-right">
                                        <a href="details.html" className="btn btn-info">Details</a>
                                        <a href="#" className="btn btn-danger">Delete Item</a>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <img src="img/sofa.jpg"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                    <div className="pull-right">
                                        <a href="details.html" className="btn btn-info">Details</a>
                                        <a href="#" className="btn btn-danger">Delete Item</a>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-12">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#">«</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">4</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">5</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">»</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}