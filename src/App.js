import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import React,{useEffect} from 'react'
import YoutubeEmbed from './components/Landing/YoutubeEmbed';
import Landing from './components/Landing/Landing';

function App() {
  useEffect(()=>{

    $(document).ready(function() {
      window.$('#container-horizontal').pagepiling({
          menu: null,
            direction: 'horizontal',
            verticalCentered: true,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: false,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#000',
                'position': 'right',
                'tooltips': ['section1', 'section2', 'section3', 'section4']
            },
             normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: false,
    
        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
      });
    });
    

  },[])
  return (
    <div id="container-horizontal">

      <div class='section'>
      <Landing/>
        
      </div>
      <div class='section'>two</div>
      <div class='section'>three</div>
      <div class='section'>four</div>
      <div class='section'>five</div>
      <div class='section'>six</div>
 
    </div>
  );
}

export default App;
