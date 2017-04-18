import React, { Component } from 'react';
import headshotImage from './images/headshot2.jpg';

export default class AboutPage extends Component {

  render() {

  let style = {
    width: '200px',
    margin: '10px 5px 0px 5px',
    backgroundSize: '100%',
  };
    return (
      <div>
        <img src={headshotImage}
             alt={"Erin Hoops"}
             style={style} />
        <h2>Erin Hoops</h2>
        <p>Front-end developer and analytics
          enthusiast. Customer engagement,
          education and research experience.
          Passionate about problem solving,
          communication and gaining insights
          through data analysis.
        </p>
        <h4>Hobbies</h4>
        <p>
          Learning,
          Hiking with my dogs,
          Playing board games and video games,
          Playing and Coaching basketball
        </p>
      </div>
    )
  }
}
