import React from "react";
import { Link } from "react-router-dom";
// c22bb20da98b414ca8bcaeaa1d602973
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mydata: [] };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c22bb20da98b414ca8bcaeaa1d602973"
    ).then((res) =>
      res.json().then((res) => {
        this.setState({ mydata: res.articles });
      })
    );
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.state.mydata.map((value, index, arr) => {
              return (
                <>
                  <div className="col">
                    <div className="card" style={{ width: "16rem" }}>
                      <div className="card-body">
                        <img
                          className="card-img-top"
                          src={value.urlToImage}
                          alt="Card image cap"
                        />

                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <a href={value.url} className="btn btn-primary">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
