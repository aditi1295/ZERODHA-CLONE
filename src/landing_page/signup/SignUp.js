import React from 'react';
function SignUp() {
    return ( 
     <div className='container '>
            <div className='row mt-auto'>
                <h1 className='text-center   '>Open a free demat & trading account online</h1>
                    <p className='text-center text-grey'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
                <div className='col-6 mt-5'>
                    <img src='media/images/account_open.svg'/>
                </div>
                <div className='col-6'>
                    <h1>Signup Now</h1>
                    <button className='btn-primary'>Get OTP</button>
                    
                </div>
            </div>
        </div>
 );
}

export default SignUp;