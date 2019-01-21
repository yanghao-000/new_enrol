import React, { Component } from 'react';
// import './App.less'
import style from './index.module.less'
// import logo from './logo.svg';
// import './App.css';
import {Button} from 'antd'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     b: 789
  //   }
  // }
  state = {
    b: 789
  }
  static defaultProps = {
    a: 456
  }
  componentWillMount() {
    this.test()
  }
  // async test() {
  //   await new Promise((resolve, reject) => {
  //     setTimeout(resolve, 3000)
  //   })
  //   this.setState({
  //     b: '000'
  //   })
  // }
  test = async() => {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 3000)
    })
    this.setState({
      b: '000'
    })
  }
  render() {
    return (
      <div className={style.App}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        123{this.props.a}{this.state.b}
        <Button type='primary'>button</Button>
      </div>
    );
  }
}

export default App;
