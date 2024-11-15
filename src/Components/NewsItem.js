import React, { Component } from "react";

export default class NewsItem extends Component {

  render() {

    // Here newsUrl Is Used As The Source Of News And Also A Unique Identifier 
    // imageUrl Is Used As The Source Of Image For The News

    let {title, description, imageUrl , newsUrl}=this.props

    return (
      <div>
        <div className="card" style={{ width: "20rem" }}>
          <img src={!imageUrl?"https://fortune.com/img-assets/wp-content/uploads/2024/07/Polymarket-Shayne-Coplan.jpg?resize=1200,600":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
