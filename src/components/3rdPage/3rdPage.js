import React from 'react'
import './3rdPage.css'
import edal from '../../static/edal.png'


 const Page3=()=>(
    <div className='Container'>
    <div class='Title'>
        <h1>THE PROTAGONISTS</h1>
        <p>
        The story revolves around the Elric Brothers, the story starts with the untimely demise of their 
        mother. Being gifted in the science of alchemy even when they were only 5 years of age, they
        thought they could bring their mother back to life through the power of alchemy. With no better 
        person to advice them, they commit the ultimate taboo and commit human transmutation.
<br/><br/>
        They are punished for this act by a omnipotent being that calls itself "Truth" or "God", this being 
        offers to trade Ed's arm for advanced alchemical knowledge which Ed unwittingly gives up. Al has a worse trade and 
        trades away his entire body believing he can meet his mother again. Ed later trades his leg in return for Al's soul
        which he binds to the suit of armor.
        <br/><br/>
        The rest of the story is about how they restore their bodies and the people they meet in between and the mysterious
        contraptions they walk into along the story. They are in continuous search on how to undo the damage and learn more 
        about alchemy to get their bodies back. Ed join the military divison of alchmist so he can access to advanced research documents
        and make progress towards this end. As the journey progresses, Ed and Al find themselve in the thick of a nation wide conspiracy.
        <br/><br/>
        With the entire country in danger and only a handful of people who know about it, they have to race against
        time to save the country and its people who will otherwise be devoured by the primary antagonist. The objective of the
        antagonist is to convert the people of Amestris into a condensed form of energy in what the calls the "Philosopher's Stone" which is the condensed
        form of people's souls. 
        <br/><br/>
       
        </p>
    </div>
    <div className='bottom'>
        <div className='alphonse'>
            <div className='title' style={{marginTop:'0'}}>
                <h3>ALPHONSE</h3>
                <h3>ELRIC</h3>
                <h5>アルフォンス・エルリック</h5>
                <p>        
                Also known as Al, is the deuteragonist of the Fullmetal Alchemist series. He 
                is the younger brother of the Fullmetal Alchemist Edward Elric. Al is also a victim 
                of the failed Human Transmutation experiment in which Ed lost his right arm and left leg. 
                Having had his entire physical being taken away from him in the aftermath of the tragedy, 
                Alphonse exists solely as a soul alchemically bound to a large suit of steel armor. 
                Now, Al travels with his brother in search of a legendary Philosopher's Stone, 
                an item with the power to restore their bodies to normal.
                </p>
                
            </div>
        </div>
        <div>
            <img src={edal} className='img-responsive ' style={{width:'5500px',bottom:'0px',objectFit:'cover'}}></img>
        </div>
        <div className='edward'>
            <div className='title'>
                <h3>EDWARD</h3>
                <h3>ELRIC</h3>
                <h5>エドワード・エルリック</h5>
                <p>
                After losing his right arm and left leg due to a failed Human Transmutation attempt, Ed became the youngest State Alchemist in history by achieving his 
                certification at age twelve. Three years later, Ed has become fully engrossed in his search for the legendary Philosopher's Stone, an item with which he 
                hopes to restore his younger brother Alphonse Elric, whose whole body had been lost in the aftermath of the human transmutation.<br/>

                
                </p>
            </div>
        </div>
        
    </div>
    </div>
    

)

export default Page3;