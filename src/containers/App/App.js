import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import { fetchHouses } from '../../thunks/fetchHouses'
import './App.css';
import CardContainer from '../CardContainer'

export class App extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses'
    this.props.fetchHouses(url)
  }

  render() {
    if (this.props.error) {
      return (
        <div>{this.props.error}</div> 
      )
    } else {
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Westeros</h2>
          </div> 
          <CardContainer />
        </div>
      );
    }
  }
}

export const mapStateToProps = (state) => ({
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: (url) => dispatch(fetchHouses(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
