import React from 'react'
import './4thpage.css'
import riza from '../../static/riza.png'
import roy from '../../static/roy.png'

 const Page4=()=>(
     <div className='containerChar'>
            <div className='character'>
                <div className='riza'>
                    <div className='content'>
                        <div className='title'>
                            <h3>RIZA </h3> 
                            <h3>HAWKEYE</h3>
                            <h5>リザ・ホークアイ</h5>
                            <p className='textCharRiza' style={{width:'40%', fontSize:'18px'}}>
                            Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
                            as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
                            in office and on the battlefield and serves as his closest and most supportive subordinate.
                            <br/><br/>
                            Riza is a quiet and collected woman with a serious but courteous demeanor. She is viewed by her peers as the 
                            model of a perfect soldier; strictly disciplined and extremely rational, she rarely 
                            relaxes when on the job and is usually tasked with keeping her colleagues on track. 
                            Though from the outside she might seem strict, rigid, and even a little mean, Riza is 
                            not as cold and distant as she may appear. Those close to her know that there is more 
                            to her than her no-nonsense attitude; beneath her professional aura is a kind soul who 
                            understands the difficulty of carrying a heavy burden.
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className='roy'>
                    <div className='content'>
                   
                    <div className='title' style={{paddingLeft:'40%'}}>
                        <h3>ROY </h3>
                        <h3>MUSTANG</h3> 
                        <h5>ロイ・マスタング</h5>
                        <p className='textChar' >
                        Roy is really cool. In his teenage years, Roy Mustang discovered an affinity for alchemy, 
                        the art of manipulating matter. After learning more about alchemy from Berthold Hawkeye,
                        a master alchemist, Mustang joined the military with the intent of becoming a State Alchemist. 
                        At the age of twenty, Mustang returned to Hawkeye's estate to learn more.
                        <br/><br/>
                        On the surface, Roy seems to be a shallow, self-absorbed and an incorrigible womanizer who is infamous among many of his colleagues and subordinates alike for the selfish and narcissistic aura he gives off. Easily as arrogant as his young protégé Edward, Colonel Mustang is one to act in an ostentatious manner and appears to act mostly out of self-interest rather than any sort of philanthropy.


                        </p>
                    </div>
                    </div>
                </div>


            </div>
     </div>

)

export default Page4;