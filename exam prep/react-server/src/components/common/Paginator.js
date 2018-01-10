/**
 * Created by zlatii on 15/11/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Paginator extends Component{
    render(props){
        return(
            <div className="row space-top">
                <div className="col-md-12">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <Link className="page-link" to="#">«</Link>
                        </li>
                        <li className="page-item active">
                            <Link className="page-link" to="/furniture/all/1">1</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="/furniture/all/2">2</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="/furniture/all/3">3</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="/furniture/all/4">4</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="/furniture/all/5">5</Link>
                        </li>
                        <li className="page-item">
                            <Link className="page-link" to="#">»</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}