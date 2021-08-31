import logo from './logo.svg';
import './App.css';
import React from 'react';

const Toolbar = (props) => {
  // React.createElement(React.Fragment, {})

  return (
    <>
      <button onClick={props.onChangeColor}>Changer</button>
      <button onClick={props.onChangeTitle}>Changer le titre</button>
    </>
  );
};

class App extends React.Component {
  state = {
    color: "green",
    title: "Rectangle"
  }

  changeColor = () => {
    this.setState({
      color: "blue"
    })
  }

  changeTitle = () => {
    this.setState({
      title: 'Autre titre'
    })
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <div style={{width: '400px', height: '200px', backgroundColor: this.state.color}}></div>
      <Toolbar onChangeColor={this.changeColor} onChangeTitle={this.changeTitle} />
    </div>
  }
}

export default App;
