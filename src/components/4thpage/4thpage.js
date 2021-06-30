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
                            <p className='textChar' style={{width:'50%'}}>
                            Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
                            as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
                            in office and on the battlefield and serves as his closest and most supportive subordinate.
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className='roy'>
                    <div className='content'>
                   
                    <div className='title' style={{paddingLeft:'50%'}}>
                        <h3>ROY </h3>
                        <h3>MUSTANG</h3> 
                        <h5>ロイ・マスタング</h5>
                        <p className='textChar' >
                        Roy is really cool. In his teenage years, Roy Mustang discovered an affinity for alchemy, 
                        the art of manipulating matter. After learning more about alchemy from Berthold Hawkeye,
                        a master alchemist, Mustang joined the military with the intent of becoming a State Alchemist. 
                        At the age of twenty, Mustang returned to Hawkeye's estate to learn more.
                        </p>
                    </div>
                    </div>
                </div>


            </div>
     </div>

)

export default Page4;