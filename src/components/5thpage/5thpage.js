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
             <p>
                    Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
                as well as the personal adjutant and bodyguard of Colonel Roy Mustang. A sharpshooter and firearms specialist, Lt. Hawkeye is an invaluable asset to the Colonel both 
                in office and on the battlefield and serves as his closest and most supportive subordinate.
                Lieutenant Riza Hawkeye  is an officer in the Amestrian State Military 
                as well as the personal adjutant and bodyguard of Colonel Roy Mustang.
             </p>
         </div>
         <div>
             <img className='img-responsive'src={antagonist} style={{width:'850px'}}></img>
         </div>
        
     </div>

)

export default Page5;