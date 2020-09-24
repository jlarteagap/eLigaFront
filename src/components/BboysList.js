import React from 'react';
import axios from 'axios';

export default class BboysList extends React.Component {
/*  state = {
    bboys: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/v1/bboys/`)
      .then(res => {
        const bboys = res.data;
        this.setState({ bboys });
      })
  }
*/
  render() {
    return (
      <ul>
        { this.state.bboys.map(bboy => <li>{bboy.name}</li>)}
      </ul>
    )
  }
}