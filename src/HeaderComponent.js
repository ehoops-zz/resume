import React, { Component } from 'react';
import './HeaderComponent.css';


export default class HeaderComponent extends Component {
  render () {
    return (
      <div className="App-header">
        <button className="Name"
              onClick={() => {this.props.onPageClick("main")}} >
          E. Hoops
        </button>

        <button className="Logo LinkedIn"
          onClick={() => window.location.href="https://www.linkedin.com/in/erin-hoops-a7786935/"} >
        </button>
        <button className="Logo GitHub"
          onClick={() => window.location.href="https://github.com/ehoops"} >
        </button>
        <button className="Logo Twitter"
          onClick={() => window.location.href="https://twitter.com/Erin3112"}>
        </button>

        <button className="About"
              onClick={() => {this.props.onPageClick("about")}} >
          About Me
        </button>
        <a className="ResumeLink"
              href="https://app.box.com/s/vel1tfoqec4swegae8twr39ly7180yp4">
        Resume PDF
        </a>
      </div>
    )
  }
}
