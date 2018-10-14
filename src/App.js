import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ShowTotalScore from './components/ShowTotalScore';
import GetCards from './containers/GetCards';
// import UpdateScore from './containers/UpdateScore';
import DealOrDraw from './components/DealOrDraw';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ShowTotalScore />
        {/* <UpdateScore /> */}
        <Cards />
        <GetCards />
        <DealOrDraw />
      </div>
    );
  }
}

export default App;
