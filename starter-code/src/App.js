import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetails from './CountryDetails.js'
import {Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import countries from './countries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                <a className="navbar-brand" href="/">WikiCountries</a>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                <div className="col-5">
                    <div className="list-group">
                  {countries.map(el => {
                    return <Link to={el.cca3} className="list-group-item list-group-item-action">{el.flag} {el.name.common}</Link>
                  })} 
                    
                    </div>
                </div>
                

                <Switch>
                  <Route exact path="/:id" 
                    render={(props) => {
                      const id = props.match.params.id;
                      const country = countries.find(p => p.cca3 === id);
                      return <CountryDetails {...country}/>
                    }}
                   />
                </Switch>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
