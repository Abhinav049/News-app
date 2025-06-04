import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, url } = this.props;
    return (
      <div>
        <div className="card mx-3 my-2" style={{ width: "20rem" }}>
          <img
            src={
              !imageurl
                ? "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/06/swift-ui.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1}"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
