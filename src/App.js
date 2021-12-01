import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      input: 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + this.state.input });
    console.log(this.state);
  }

  decrement() {
    this.setState({ count: this.state.count - this.state.input });
  }

  reset() {
    this.setState({ count: 0 });
  }

  handleChange(e) {
    const changeToNumber = parseInt(e.target.value);
    this.setState({
      input: changeToNumber,
    });
  }

  render() {
    return (
      <div>
        <h1> My Fancy counter</h1>
        <input
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Subtract</button>
        <button onClick={this.reset}>reset</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default App;
