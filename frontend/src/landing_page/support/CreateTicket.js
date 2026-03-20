import React from 'react';
function CreateTicket() {
    return (  
       <div className="container">
      <div className="row p-2 mb-3  ">
        <h1 className="fs-4  ">
          To create a ticket, select a relevant topic
        </h1>
      
      <div className="col-4 p-5 mt-2  ">
        <h4 className="fs-5">
            <i class="fa-solid fa-circle-plus " aria-hidden="true"style={{fontSize:"14px"}} ></i>
            Account Opening 
        </h4>
        <a href="" style={{ textDecoration: "none",color:"#3E8EDE" ,lineHeight:"2.5" }}>Online Account Opening</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Offline Account Opening</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Company, Partnership and HUF Accountk</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Opening</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>NRI Account Opening</a> <br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Charges at Zerodha</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Getting Started</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 ">
        <h4 className="fs-5">
            <i class="fa-solid fa-user"></i> Your Zerodha Account  
        </h4>
        <a href="" style={{ textDecoration: "none",color:"#3E8EDE" ,lineHeight:"2.5" }}>Login Credentials</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Account Modification and Segment Addition</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>DP ID and bank details</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Your Profile</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Transfer and conversion of shares</a> <br/>
        
        </div>
        <div className="col-4 p-5 mt-2  ">
        <h4 className="fs-5 "> 
            <i class="fa-solid fa-chart-column"></i>Your Zerodha Account 
        </h4>
        <a href="" style={{ textDecoration: "none",color:"#3E8EDE" ,lineHeight:"2.5" }}>Margin/leverage, Product and Order types</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Kite Web and Mobile</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Trading FAQs</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Corporate Actions</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Sentinel</a> <br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Kite API</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Pi and other platforms</a><br/>
        <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>Stockreports+</a><br/>
         <a href=""style={{ textDecoration: "none",color:"#3E8EDE",lineHeight:"2.5" }}>GTT</a><br/>
      </div>
      </div>
      
      <div className="row p-1 mb-1">
  {/* FUNDS */}
  <div className="col-4 p-3 mt-2 ">
    <h4 className="fs-5">
      <i className="fa-solid fa-wallet me-2" style={{ fontSize: "14px" }}></i>
      Funds
    </h4>

    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Adding Funds</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Fund Withdrawal</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>eMandates</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Adding Bank Accounts</a>
  </div>

  {/* CONSOLE */}
  <div className="col-4 p-3 mt-2 ">
    <h4 className="fs-5">
      <i className="fa-solid fa-circle-dot me-2" style={{ fontSize: "14px" }}></i>
      Console
    </h4>

    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Reports</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Ledger</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Portfolio</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>60 Day Challenge</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>IPO</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Referral Program</a>
  </div>

  {/* COIN */}
  <div className="col-4 p-3 mt-2  ">
    <h4 className="fs-5">
      <i className="fa-solid fa-coins me-2" style={{ fontSize: "14px" }}></i>
      Coin
    </h4>

    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Understanding Mutual Funds</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>About Coin</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Buying and Selling through Coin</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Starting an SIP</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Managing your Portfolio</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Coin App</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Moving to Coin</a><br />
    <a href="" style={{ textDecoration: "none", color: "#3E8EDE", lineHeight: "2.5" }}>Government Securities</a>
  </div>
</div>
      </div>
      
      
    );
}

export default CreateTicket;