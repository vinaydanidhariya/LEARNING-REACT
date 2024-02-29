import React from "react";

class Sum extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {};
  }
  doSum() {
    this.setState({
      ans: parseInt(this.state.txt1) + parseInt(this.state.txt2),
    });
  }
  render() {
    return (
      <>
        <input
          type="number"
          name="input"
          onChange={(e) => {
            this.setState({
              txt1: e.target.value,
            });
          }}
        />
        <input
          type="number"
          name="input"
          onChange={(e) => {
            this.setState({
              txt2: e.target.value,
            });
          }}
        />
        <input type="button" value="sum" onClick={this.doSum.bind(this)} />
        {"value is " + this.state.ans }
      </>
    );
  }
}

export default Sum;
