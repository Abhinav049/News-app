import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
      currentPage: 1,
      newsPerPage: 9,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6c0e1c67f5d64bf4b9898ad13d82b0b5`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
  }

  handlePrevClick = () => {
    this.setState(
      (prevState) => ({
        currentPage: Math.max(prevState.currentPage - 1, 1),
      }),
      () => {
        window.scrollTo(0, 0);
      }
    );
  };

  handleNextClick = () => {
    // this.setState({ loading: true });
    const totalPages = Math.ceil(
      this.state.articles.length / this.state.newsPerPage
    );
    this.setState(
      (prevState) => ({
        currentPage: Math.min(prevState.currentPage + 1, totalPages),
      }),
      () => {
        window.scrollTo(0, 0);
      }
      // this.setState({ loading: false })
    );
  };

  render() {
    const { articles, currentPage, newsPerPage } = this.state;
    const totalPages = Math.ceil(articles.length / newsPerPage);

    // Pagination logic
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentArticles = articles.slice(indexOfFirstNews, indexOfLastNews);

    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            (currentArticles || []).map((element) => {
              return (
                <div
                  className="col-sm my-2"
                  key={element.url}
                  style={{ display: "flex" }}
                >
                  <div style={{ flex: 1, height: "100%" }}>
                    <NewsItem
                      title={element.title.slice(0, 68) + "..."}
                      description={
                        element.description
                          ? element.description.slice(0, 133) +
                            (element.description.length > 133 ? "..." : "")
                          : ""
                      }
                      imageurl={element.urlToImage}
                      author={
                        element.author ? element.author : "Unknown Author"
                      }
                      source={element.source.name}
                      publishedAt={new Date(
                        element.publishedAt
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      url={element.url}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between my-3">
          <button
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={currentPage === 1}
          >
            &larr; Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-dark"
            onClick={this.handleNextClick}
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
