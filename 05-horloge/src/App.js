import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0,
  };

  constructor() {
    super();

    this.input = React.createRef();
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  resetInput = () => {
    console.log(this.input);
    this.input.current.value = '';
    this.input.current.focus();
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <input ref={this.input} type="text" placeholder="Tapez quelque chose" defaultValue="Texte idiot" />
        <button onClick={this.resetInput}>Réinitialiser l'input</button>
      </>
    );
  }
}

export default App;
