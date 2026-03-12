import React from "react";
function Founder() {
  return (
    <div className="container">
      <div className="row p-3  mt-5">
        <h1 className="  fs-3 text-center ">People</h1>
      </div>
      
      <div className="row p-3  between" style={{marginBottom:"15px",lineHeight:"1.8",fontSize:"1.0rem"}}>
         <div className="col-2"></div>
        <div className="col-4 text-center">
            <img src="media/images/nithinKamath.jpg" className="p-1" style={{width:"75%",borderRadius:"100%"}}></img>
            <h5  className="mt-3 text-muted">Nithin Kamath</h5>
            <p className="text-grey">Founder, CEO</p>
        </div>
        <div className="col-5 " >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href="#" style={{textDecoration:"none"}}>Homepage</a> 
            /<a href="#" style={{textDecoration:"none"}}>TradingQnA</a> /
            <a href="#"style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div> 
        <div className="col-1"></div>
        
      </div>
    </div>
  );
}

export default Founder;
