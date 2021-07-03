import $ from 'jquery';
import './App.css';
import React,{useEffect} from 'react'
import Landing from './components/Landing/Landing';
import About from './components/2ndpage/About';
import Page4 from './components/4thpage/4thpage';
import Page3 from './components/3rdPage/3rdPage';
import Page5 from './components/5thpage/5thpage'
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
                'bulletsColor': '#FF0000',
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

      <div class='section'>
        <About/>
      </div>
      <div class='section'>
        <Page3/>
      </div>
      <div class='section'>
        <Page4/>
      </div>
      <div class='section'>
        <Page5/>
      </div>
      {/* <div class='section'>testing</div> */}
 
    </div>
  );
}

export default App;
