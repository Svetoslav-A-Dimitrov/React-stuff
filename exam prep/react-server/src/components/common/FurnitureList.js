/**
 * Created by zlatii on 15/11/2017.
 */
import React, { Component } from 'react';
import FurnitureCard from './FurnitureCard'

export default class FurnitureList extends Component{
    render(){
        const {furniture, remove} = this.props

        return(
            <div className="row space-top">
                {furniture.map(f => {
                        return(
                            <FurnitureCard
                                id={f.id}
                                key = {f.id}
                                image={f.image}
                                make={f.make}
                                model={f.model}
                                price={f.price}
                                remove= {remove}
                            />
                        )
                    })
                }
            </div>
        )
    }
}