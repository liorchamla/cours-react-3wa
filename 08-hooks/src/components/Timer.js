import React, { Component } from "react";

class Timer extends Component {
  state = {
    counter: 0,
  };

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("Le compteur a changé !");
    }
  }

  render() {
    return <h1>Timer : {this.state.counter}</h1>;
  }
}

export default Timer;
