import React from "react";

function RightSection() {
  return (
    <div className="container">
    

      <div className="row mt-5 p-5 ">
        <div className="col-1"></div>

        <div className="col-5">
          <img src="media/images/coin.png"  className="img-fluid mb-5" />
        </div>

        <div className="col-2"></div>

        <div className="col-4">
          <h1 className="fs-4 mt-5 mb-3">Coin</h1>
          <p
            style={{
              marginBottom: "15px",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              fontWeight: "400",
            }}
          >
            Buy direct mutual funds online, commission-
            free, delivered directly to your Demat
             account. Enjoy the investment experience 
             on your Android and iOS devices.
          </p>

          <div className="mb-3">
            <a href="#" className="me-3"style={{textDecoration:"none",color:'#387ed1'}}>
              Coin <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="d-flex gap-4 mt-3">
            <img
              src="media/images/google-play-badge.svg"
              alt="Google Play"
              style={{ height: "50px", cursor: "pointer" }}
            />
            <img
              src="media/images/appstore-badge.svg"
              alt="App Store"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="row align-items-center" style={{ minHeight: "60vh" }}>
        <div className="col-1"></div>
        <div className="col-md-5 px-5">
          <h1 className="fs-5"
            style={{
              fontSize: "2.8rem",
              fontWeight: "500",
              marginBottom: "25px"
            }}
          >
            Kite Connect API
          </h1>

          <p className="fs-5"
            style={{
              lineHeight: "1.8",
              marginBottom: "20px",
              color: "#424242"
            }}
          >
            Build powerful trading platforms and experiences 
            with our super simple HTTP/JSON APIs. If you 
            are a startup, build your investment app and 
            showcase it to our clientbase..
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontWeight: "500"
            }}
          >
            Kite Connect <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="media/images/landing.svg"
            alt="Console"
            className="img-fluid"
          />
        </div>

      </div>
      <div className="row mt-4 p-5 ">
        <div className="col-1"></div>

        <div className="col-5">
          <img src="media/images/varsity-products.svg"  className="img-fluid mb-5" />
        </div>

        <div className="col-1"></div>

        <div className="col-5">
          <h1 className="fs-4 mt-5 mb-3">Varsity mobile</h1>
          <p
            style={{
              marginBottom: "15px",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              fontWeight: "400",
            }}
          >
            An easy to grasp, collection of stock market 
            lessons with in-depth coverage and illustrations.
             Content is broken down into bite-size cards 
             to help you learn on the go.
          </p>

          {/* App Store Buttons */}
          <div className="d-flex gap-4 mt-3">
            <img
              src="media/images/google-play-badge.svg"
              alt="Google Play"
              style={{ height: "50px", cursor: "pointer" }}
            />
            <img
              src="media/images/appstore-badge.svg"
              alt="App Store"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <hp className="fs-5 text-center text-muted mb-5">Want to know more about our technology stack? Check out the 
            <a href="" style={{textDecoration:"none",color:'#387ed1'}}> Zerodha.tech blog. </a></hp>
      </div>
      </div>
    
  );
}

export default RightSection;