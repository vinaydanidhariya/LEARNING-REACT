import React, { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub1: "",
      sub2: "",
      sub3: "",
      sub4: "",
      sum: null,
      avg: null
    };
    this.result = this.result.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    this.setState({ [key]: e.target.value });
  }

  result() {
    const { sub1, sub2, sub3, sub4 } = this.state;
    const sub1Int = parseInt(sub1);
    const sub2Int = parseInt(sub2);
    const sub3Int = parseInt(sub3);
    const sub4Int = parseInt(sub4);

    const sum = sub1Int + sub2Int + sub3Int + sub4Int;
    const avg = sum / 4;

    this.setState({ sum, avg });
  }

  render() {
    const { sum, avg } = this.state;

    return (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>RESULT</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Sub1 input:{" "}
            <input
              name="sub1"
              onChange={(e) => this.handleChange(e, "sub1")}
            />
          </label>

          <label>
            Sub2 input:{" "}
            <input
              name="sub2"
              onChange={(e) => this.handleChange(e, "sub2")}
            />
          </label>

          <label>
            Sub3 input:{" "}
            <input
              name="sub3"
              onChange={(e) => this.handleChange(e, "sub3")}
            />
          </label>

          <label>
            Sub4 input:{" "}
            <input
              name="sub4"
              onChange={(e) => this.handleChange(e, "sub4")}
            />
          </label>
        </div>

        <button
          style={{
            margin: "20px auto",
            color: "white",
            backgroundColor: "#007bff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "block"
          }}
          onClick={this.result}
        >
          RESULT
        </button>

        {sum && (
          <h2 style={{ textAlign: "center" }}>
            TOTAL OF ALL SUBJECTS: {sum}
          </h2>
        )}

        {avg && (
          <h2 style={{ textAlign: "center" }}>
            AVERAGE OF ALL SUBJECTS: {avg}
          </h2>
        )}
      </div>
    );
  }
}

export default Result;
