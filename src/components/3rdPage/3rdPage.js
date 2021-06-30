import React from 'react'
import './3rdPage.css'
import edal from '../../static/edal.png'


 const Page3=()=>(
    <div className='Container'>
    <div class='Title'>
        <h1>THE PROTAGONISTS</h1>
        <p>
        Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
        as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
        in office and on the battlefield and serves as his closest and most supportive subordinate.
        Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
        as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
        in office and on the battlefield and serves as his closest and most supportive subordinate.
       
        </p>
    </div>
    <div className='bottom'>
        <div className='alphonse'>
            <div className='title' style={{marginTop:'0'}}>
                <h3>ALPHONSE</h3>
                <h3>ELRIC</h3>
                <h5>リザ・ホークアイ</h5>
                <p>
                    Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
                    as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
                    in office and on the battlefield and serves as his closest and most supportive subordinate.
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
                <h5>リザ・ホークアイ</h5>
                <p>
                    Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
                    as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
                    in office and on the battlefield and serves as his closest and most supportive subordinate.
                </p>
            </div>
        </div>
        
    </div>
    </div>
    

)

export default Page3;