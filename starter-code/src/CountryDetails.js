import React, { Component } from 'react';
import countries from './countries.json'
import { Link } from 'react-router-dom';


class CountryDetails extends Component {
  render() {
    return (
        <div className="col-7">
            <h1>{this.props.name.common}</h1>
                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: '30%'}}>Capital</td>
                    <td>{this.props.capital[0]}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>{this.props.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {this.props.borders.map(el => {
                          return (<li>
                           <Link to={el}>{countries.find(tab => tab.cca3 === el).name.common}</Link>
                          </li>)
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
    );
  }
}

export default CountryDetails;