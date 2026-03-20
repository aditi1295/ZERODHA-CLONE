import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
        
      <div  id="supportWrapper">
        <h4> Support Portal</h4>
        <a href="" className="mx-5">Track Tickets</a>
        
      </div>
      <div className=" row p-5 " >
        <div className="col-1"></div>
        <div className=" col-5 p-5 " >
            <h1 className="fs-5">Search for an answer or browse help topics
to create a ticket</h1><br/>
<input  placeholder="Eg: how do i activate F&O,why is my order getting rejected."></input>
<br/><br/>
<a href="">Track account opening</a>&nbsp;&nbsp;
<a href="">Track segment activations</a>&nbsp;&nbsp;
<a href="">Intraday<br/> margins</a>&nbsp;&nbsp;
<a href="">Kite user manual</a>
        </div>
        <div className=" col-5 p-5 " >
            <h1 className="fs-4">Featured</h1>
            <ol>
            <li><a href="">Current Takeovers and Delisting - January 2024</a></li><br/>
            <li><a href="">.. Latest Intraday leverages - MIS & CO</a></li>
</ol>
        </div>
        
        <div className="col-1"></div>
      </div>
      
    </section>
  );
}

export default Hero;
