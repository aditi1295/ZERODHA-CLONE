import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row  text-center mt-5 p-5 border-bottom  ">
        <h1 className="fs-3 text-muted">Zerodha Products</h1>
        <p className="fs-5 text-grey">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="fs-6 text-grey">
          Check out our{" "}
          <a href="#" style={{textDecoration:"none",color:'#387ed1'}}>
            investment offerings
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>

      <div className="row mt-5 p-5 ">
        <div className="col-1"></div>

        <div className="col-5">
          <img src="media/images/kite.png" alt="Kite" className="img-fluid mb-5" />
        </div>

        <div className="col-2"></div>

        <div className="col-4">
          <h1 className="fs-4 mt-5 mb-3">Kite</h1>
          <p
            style={{
              marginBottom: "15px",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              fontWeight: "400",
            }}
          >
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>

          <div className="mb-3">
            <a href="#" className="me-3"style={{textDecoration:"none",color:'#387ed1'}}>
              Try demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="#" className="mx-5" style={{textDecoration:"none",color:'#387ed1'}}>
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
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
    </div>
  );
}

export default Hero;