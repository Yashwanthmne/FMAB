import React from "react";
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
          <img className="logo" src={logo} alt={"logo"}/>
          <img className="scrollIndicator" src={scroll} alt={""}/>
        </div>
  </div>
);




export default Landing;