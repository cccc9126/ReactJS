import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Homework3 extends Component {
  render() {
    return (
        <>
        <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-danger">Danger</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-light">Light</button>
      <button className="btn btn-dark">Dark</button>
      <button className="btn btn-link">Link</button></>
    )
  }
}
