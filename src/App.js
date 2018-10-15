import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Start from './components/Start';
// import Credit from './components/Credit';
// import Hand from './components/Hand';
// import Play from './components/Play';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />

        {/* <Hand /> */}
        {/* <Play /> */}
        {/* <Credit credit={props.credit} /> */}
      </div>
    );
  }
}

export default App;
