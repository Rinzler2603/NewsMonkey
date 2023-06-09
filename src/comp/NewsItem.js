import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class NewsItem extends Component {

  static defaultProps={
    author: "anonoymous",
    date:"unknown date"
  }

  static propTypes={
    author:PropTypes.string,
    date:PropTypes.string
  }

  render() {

    let {title, description,imgurl,newsUrl,author,date,source}=this.props;
    
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span class="position-absolute top-0 start-100 translate-middle badge badge text-bg-success">
                {source}      
            </span>

                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">by {author?author:"Anonymous"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
