/**
 * Created by zlatii on 15/11/2017.
 */
import React, { Component } from 'react';

export default class Input extends Component{
    render(){
        const{name, value, onChange, label, type='text'} = this.props
        return(
            <div className="form-group">
                {/*<div class="form-group">*/}
                    {/*<label class="form-control-label" for="email">E-mail</label>*/}
                    {/*<input class="form-control" id="email" type="text">*/}
                {/*</div>*/}
                <label className="form-control-label" htmlFor={name}>{label}</label>
                <input
                    onChange={onChange}
                    className="form-control"
                    name={name}
                    id={name}
                    type={type}
                    value={value}
                />
            </div>
        )
    }
}