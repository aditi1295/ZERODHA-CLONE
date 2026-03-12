import React from 'react';
function Hero() {
    return ( 
        
        <div className='contaner '>
            <div className='row text-center '>
                <h1 className='mt-5'style={{fontSize:'1.9rem',lineHeight:'1.6'}}>Charges</h1>
                <p className='text-grey text-center'style={{fontSize:'1.3rem',lineHeight:'1.8',marginBottom:'15px'}}>List of all charges and taxes</p>
            </div>
            <div className='row  between text-center p-5 mt-5 '>
                
                <div className='col p-5'>
                    <img src='media/images/pricing0.svg'style={{width:'250px'}}></img>
                    <h1 className=' text-center mb-4'style={{fontSize:'1.75rem',lineHeight:'1.6'}}>Free equity delivery</h1>
                    <p className=' text-center'style={{fontSize:'1rem',lineHeight:'1.8',marginBottom:'15px'}}>All equity delivery investments (NSE, BSE),<br/>
                         are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-5'>
                    <img src='media/images/other-trades.svg'style={{width:'250px'}}></img>
                    <h1 className='text-center mb-4'style={{fontSize:'1.75rem',lineHeight:'1.6'}}>Intraday and F&O trades</h1>
                    <p className=' text-center 'style={{fontSize:'1rem',lineHeight:'1.8',marginBottom:'15px'}}>Flat ₹ 20 or 0.03% (whichever is lower) per<br/>
                         executed order on intraday trades across<br/>
                          equity, currency, and commodity trades. Flat<br/>
                           ₹20 on all option trades.</p>
                </div>
                <div className='col p-5'>
                    <img src='media/images/pricing0.svg'style={{width:'250px'}}></img>
                    <h1 className=' text-center mb-4'style={{fontSize:'1.75rem',lineHeight:'1.6'}}>Free direct MF</h1>
                    <p className='text-center' style={{fontSize:'1rem',lineHeight:'1.8',marginBottom:'15px'}}>All direct mutual fund investments are<br/>
                         absolutely free — ₹ 0 commissions & DP<br/>
                          charges.</p>
                </div>
               
            </div>
        </div>
     );
}

export default Hero;