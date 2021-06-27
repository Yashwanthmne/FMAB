import React from 'react';
import './2ndpage.css'
import elricbros from '../../static/screen2.jpg'
import circle from '../../static/transmutation-circle.png'
const About = () =>(

    <div className='container'>
        <div className='circle'>
            <img style={{ height:'184.72px', width:'240px'}}  src={circle}/>

        </div>
        <div className='image'>
          <img className='img-responsive' style={{ height:'485px', width:'800px'}} src={elricbros}/>
        </div>
        <div className="title">
        <h1>FULLMETAL ALCHEMIST</h1> 
        <h4>はがねのれんきんじゅつし</h4>
        </div>
        <div className="text">
            <p>
                Set in the early 20th century, in a fictional universe in which alchemy is a widely practiced science, the series follows the journey of two alchemist brothers, Edward and Alphonse Elric, who are searching for the philosopher's stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.<br/>
                <br/>
The premise of the series is a parallel to our own world, what would have happened if the scientific progress of humanity progressed along the path of chemistry and biology rather than physics like in our world?<br/>
<br/>
This anime delves into the possibility of alchemy as the leading edge of the 
scientific community. Alchemists in the anime are talented scientists who have
learnt how to manipulate chemistry and transform objects from one form to
another.
<br/><br/>
Despite the scientific angle, the anime proposes several very 
philosophical ideas. The major idea being “The Law of Equivalent 
Exchange”, a common scientifc theory but the show goes on to
show how this empirical law applies to universe and life itself.
<br/><br/>
A story with compelling world politics, fantasy like 
alchemical powers, mystery villains,
<br/> unknown puppet 
masters and deep rooted core moral values, makes 
this anime a must watch for <br/>all age groups!
<br/><br/>

            </p>
        </div>
    </div>

);

export default About;