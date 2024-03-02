import React from "react";
class Counter extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { counter: 0 };
  }
  increment(e) {
    if (this.state.counter > 9) {
        e.currentTarget.disabled = true;
        // alert("sorry");
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  }
  decrement(e) {
    if (this.state.counter < 1) {
      if (this.state.counter > 9) {
        e.currentTarget.disabled = false;
      } 
      } else {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
  }

  render() {
    return (
      <>
        <h2 style={{ padding: "50px" }}>COUNTER {this.state.counter}</h2>
        <input
          type="button"
          name="counetrDrecment"
          value="Increment COUNT"
          onClick={this.increment.bind(this)}
        />
        <input
          type="button"
          name="counetrIncrw"
          value="Decrement COUNT"
          onClick={this.decrement.bind(this)}
        />
      </>
    );
  }
}

export default Counter;
