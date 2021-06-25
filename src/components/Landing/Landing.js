import React from "react";
import PropTypes from "prop-types";
import YoutubeEmbed from "./YoutubeEmbed";
import "./landing.css"
import logo from '../../static/fmab.png'
import scroll from "../../static/scroll.png"
const Landing = ({ embedId }) => (
    <div>
        
        <div className="video-responsive">
        <YoutubeEmbed embedId="2-J18qRRjYY"/>
        
        </div>
        <div className="banner"/>
          
    
        <div className="front">
          <img className="logo" src={logo}/>
          <img className="scrollIndicator" src={scroll}/>
        </div>
  </div>
);




export default Landing;