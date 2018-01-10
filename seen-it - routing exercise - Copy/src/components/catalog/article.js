/**
 * Created by zlatii on 07/11/2017.
 */
import React from 'react'

const Article  = (props) =>{
    return (
        <article className="post">
            <div className="col rank">
                <span>{props.data.index}</span>
            </div>
            <div className="col thumbnail">
                <a href={props.data.url}>
                    <img src={props.data.imageUrl}/>
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={props.data.url}>
                        {props.data.title}
                    </a>
                </div>
                <div className="details">
                    <div className="info">
                        submitted 1 day ago by {props.data.author}
                    </div>
                    <div className="controls">
                        <ul>
                            <li className="action"><a className="commentsLink" href="#">comments</a></li>
                            <li className="action"><a className="editLink" href="#">edit</a></li>
                            <li className="action"><a className="deleteLink" href="#">delete</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default Article