
import React, {Component} from 'react'
import requster from './../../auth/requester'
import Article from './../catalog/article'



class Catalog extends  Component {
    constructor(){
        super()

        this.state = {posts : []}
    }

    componentDidMount(){
        requster.listAllPost().then(posts=>{
            this.setState({posts: posts})
        })
    }
    render(){
        let index = 1
        return (
            <div className="posts">
                {this.state.posts.map(p => {
                    p.index = index++
                    return <Article key={p._id} data={p}/>
                })}
            </div>
        )
    }

}

export default Catalog