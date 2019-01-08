import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import { fetchHouses } from '../../thunks/fetchHouses'
import './App.css';
import { CardContainer } from '../CardContainer'
import { Card } from '../../components/Card'

export class App extends Component {

  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses'
    this.props.fetchHouses(url)
  }

  render() {

    let containerContents = !this.props.isLoading ? this.props.houses.map(house => <Card {...house} />) : <img src="../../wolf.gif" />

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div> 
        <div className='Display-info Container'>
          { containerContents }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  houses: state.houses
})

export const mapDispatchToProps = (dispatch) => ({
  fetchHouses: (url) => dispatch(fetchHouses(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
