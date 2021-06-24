import React from "react";
import PropTypes from "prop-types";
import YoutubeEmbed from "./YoutubeEmbed";
import "./landing.css"
import logo from '../../static/fmab.png'
const Landing = ({ embedId }) => (
    <div>
        
        <div className="video-responsive">
        <YoutubeEmbed embedId="2-J18qRRjYY"/>
        
        </div>
        <div className="banner"/>
          
    
        <div className="front">
          <img src={logo}/>
        </div>
  </div>
);




export default Landing;