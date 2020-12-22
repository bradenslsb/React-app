import React, { Component } from "react"

import PortfolioContainer from "./portfolio/portfolio-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Braden Bird's Portfolio</h1>
        <PortfolioContainer />
        
      </div>
    );
  }
}
