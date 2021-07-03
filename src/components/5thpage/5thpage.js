import React from 'react'
import './5thPage.css'
import antagonist from '../../static/antagonist.png';
import symbol from '../../static/symbol.png';

 const Page5=()=>(
     <div className='Container' style={{display:'flex',flexDirection:'column ',justifyContent:'center',alignItems:'center'}}>
         <div className='Title' class='mt-3'>
            <div className='heading mr-5'>
                <img src={symbol}className='img-responsive' style={{width:'60px'}} ></img>
                <h1 className='ml-5' style={{color: '#C60000',fontFamily: 'Staatliches',fontSize: '60px'}}>THE ANTAGONISTS</h1>
            </div>
             <p style={{marginTop:'2%'}}>
             The primary antagonists are named after the Seven Sins: Lust, Greed, Envy, Pride, Gluttony and Wrath.
             They were created by a demi-divine entity called 'Father', he created them to seperate himself from these emotions
             in a bid to become a perfect being. They are called Homunculi and use the crest of the dragon swallowing itself as their embelem.
             
             <br/><br/>
             Aside from the primary emotion/desire they embody, Homunculi generally possess the belief that they are superior 
             to every other living thing, including humans. This is the psychological effect of their
              being born with immense strengths. Many of the Homunculi even have ill feelings towards humans.
               Out of the Homunculi, the sadistic Envy is the one who hates and treats them the most
                personally and with utmost bitterness, while Pride has the evilest malice, disdain, 
                discrimination, prejudice and contempt towards humans. Greed is the only Homunculus 
                that does not openly hate humans in any respect


                <br/><br/>
             The Homunculi were created by injecting a Philosopher's Stone (imbued with one of Father's seven basic vices) broken off from 
             Father's own Philosopher's Stone, into the body of a living being. Five of the Homunculi
              are based on (and have exactly the same composition as) humans, which were either 
              artificial bodies transmuted from Father or naturally occurring humans; Envy is based
               on a disturbing leviathan creature created by Father; and Pride is created from
                Father's own semi-divine essence, being, and image. If the Homunculus is based on 
                a natural person (like with Wrath and the Second Greed), the stone and the body of 
                the human clash until one overcomes the other. Most often than not, the stone wins,
                 and the human dies, though sometimes the human wins.
             </p>
         </div>
         <div>
             <img className='img-responsive'src={antagonist} style={{width:'850px'}}></img>
         </div>
        
     </div>

)

export default Page5;