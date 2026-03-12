import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-5 mb-3'>
            <div className='row p-5'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat 
                        fees and no hidden charges.</p>
                        <a href='' style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-8">
  <div className="row align-items-center">

    {/* First */}
    <div className="col-4 d-flex align-items-center">
      <img 
        src="media/images/pricing0.svg" 
        alt="0"
        className="img-fluid w-50"
      />
      <div className="ms-3">
        <div>Free</div>
        <div>account opening</div>
      </div>
    </div>

    {/* Second */}
    <div className="col-4 d-flex align-items-center">
      <img 
        src="media/images/pricing0.svg" 
        alt="0"
        className="img-fluid w-50"
      />
      <div className="ms-3">
        <div>Free equity delivery</div>
        <div>and direct mutual funds</div>
      </div>
    </div>

    {/* Third */}
    <div className="col-4 d-flex align-items-center">
      <img 
        src="media/images/other-trades.svg" 
        alt="20"
        className="img-fluid w-50"
      />
      <div className="ms-3">
        Intraday and F&O
      </div>
    </div>
  </div>
</div>
  </div>
</div>
     );
}

export default Pricing;