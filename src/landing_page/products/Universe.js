import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1 className="text-muted fs-4">The Zerodha Universe</h1>
        <p className="fs-6 mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5 p-5">
       
          <div className="col text-center ">
            <img src="media/images/ZerodhaFundhouse.png" style={{width:'60%'}}></img>
            
            <p className="text-muted mt-3"style={{lineHeight:'18px',fontSize:'.85rem'}}>
              Our asset management venture <br/>
              that is creating simple and transparent index<br/>
               funds to help you save for your goals.
            </p>
            <br/><br/>
            <img src="media/images/streakLogo.png"style={{width:'60%'}}></img>
            
            <p className="text-muted mt-3 "style={{lineHeight:'18px',fontSize:'.85rem'}}>
              Our assSystematic trading platform <br/>
              that allows you to create and
              backtest<br/>
               strategies without coding.
            </p>
           
          </div>
          
          <div className="col text-center" >
            <img src="media/images/sensibullLogo.svg" style={{width:'60%'}}></img>
            
            <p className="text-muted mt-3 "style={{lineHeight:'18px',fontSize:'.85rem'}}>
              Options trading platform that lets you<br/>
               create strategies, analyze
              positions, and examine<br/>
               data points like open interest, FII/DII,
              and more.
            </p>
            <br/><br/>
             <img src="media/images/smallcaseLogo.png"style={{width:'60%'}}></img>
            <p className="text-muted mt-3"style={{lineHeight:'18px',fontSize:'.85rem'}}>
              Thematic investing platform <br/>
              that helps you invest in diversified<br/>
              baskets of stocks on ETFs.
            </p>

            
          </div>
         
          <div className="col text-center"  >
            <img src="media/images/tijori.svg"style={{width:'60%'}}></img>
            
          <p className=" text-muted mt-3 " style={{lineHeight:'18px',fontSize:'.85rem'}}>
            Investment research platform<br/>
             that offers detailed insights on
            stocks, <br/>
            sectors, supply chains, and more.
          </p>
            
            <br/><br/>
             <img src="media/images/dittoLogo.png"style={{width:'40%'}}></img>
            <p className="text-muted mt-3 "style={{lineHeight:'18px',fontSize:'.85rem'}}>
              Personalized advice on life <br/>
              and health insurance. No spam <br/>
              and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className="row">
            <button  className='p-2  mb-5 btn btn-primary fs-5'style={ {  backgroundColor:"#387ed1",width:"20%",margin:"0 auto"}}>Sign up for Free</button>
        </div>
      </div>
    
  );
}

export default Universe;
