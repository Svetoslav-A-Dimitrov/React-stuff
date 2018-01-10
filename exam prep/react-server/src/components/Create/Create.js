/**
 * Created by zlatii on 15/11/2017.
 */

import React, { Component } from 'react';
import Input from './../Auth/Input'
import {create} from './../../api/remote'

export default class CreatePage extends Component{
    constructor(props){
        super(props)

        this.state = {
            make: '',
            model: '',
            price: '',
            year: '',
            description: '',
            image: '',
            material: ''

        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)

    }
    onChangeHandler(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmitHandler(e){
        e.preventDefault()
        create(this.state).then(fur => console.log(fur))
    }

    render(){
        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Create New Furniture</h1>
                        <p>Please fill all fields.</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-md-4">

                            <Input
                                name='make'
                                label="Make"
                                onChange={this.onChangeHandler}
                                value={this.state.make}
                            />
                            <Input
                                name='model'
                                label="Model"
                                onChange={this.onChangeHandler}
                                value={this.state.model}
                            />
                            <Input
                                name='year'
                                label="Year"
                                onChange={this.onChangeHandler}
                                value={this.state.year}
                            />
                            <Input
                                name='description'
                                label="Description"
                                onChange={this.onChangeHandler}
                                value={this.state.description}
                            />
                        </div>
                        <div className="col-md-4">
                            <Input
                                name='price'
                                label="Price"
                                onChange={this.onChangeHandler}
                                value={this.state.price}
                            />
                            <Input
                                name='image'
                                label="Image URL"
                                onChange={this.onChangeHandler}
                                value={this.state.image}
                            />
                            <Input
                                name='material'
                                label="Material (optional"
                                onChange={this.onChangeHandler}
                                value={this.state.material}
                            />
                            <input type="submit" className="btn btn-primary" value="Create"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}