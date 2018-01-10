/**
 * Created by zlatii on 15/11/2017.
 */
import React, { Component } from 'react';
import FurnitureList from './../common/FurnitureList'
import Paginator from './../common/Paginator'
import {getFurnitures, search, remove} from '../../api/remote'
import {withRouter} from 'react-router-dom'


 class HomePage extends Component{
    constructor(props){
        super(props)

        this.state = {funitures: [], searchString: ''}

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.remove = this.remove.bind(this)
    }

     remove(id){
         remove(id)
             .then(res =>{
                 getFurnitures().then(res => {
                     this.setState({funitures: res})
                 })
             })
     }


     componentDidMount(){
        getFurnitures().then(res => {
            this.setState({funitures: res})
        })
    }

     componentWillReceiveProps(nexProps){
        if(nexProps.match.params.page !== this.props.match.params.page){
            getFurnitures(nexProps.match.params.page).then(res => {
                this.setState({funitures: res})
            })
        }
    }

    onChange(e){
         this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        search(this.state.searchString)
            .then(res => {
                this.setState({funitures: res})
            })

    }


    render(){
        return(
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Welcome to Furniture System</h1>
                        <p>Select furniture from the catalog to view details.</p>

                        <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0">
                            <input value={this.state.searchString} onChange={this.onChange} name="searchString" className="form-control mr-sm-2" placeholder="Search" type="text"/>
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <FurnitureList furniture={this.state.funitures} remove={this.remove}/>
                <Paginator />
            </div>
        )
    }
}

export default withRouter(HomePage)