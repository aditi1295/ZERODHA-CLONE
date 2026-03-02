import React from "react";

function LeftSection() {
  return (
    <div className="container">
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
            Console
          </h1>

          <p className="fs-5"
            style={{
              lineHeight: "1.8",
              marginBottom: "20px",
              color: "#424242"
            }}
          >
            The central dashboard for your Zerodha
             account. Gain insights into your trades
              and investments with in-depth reports and
            visualisations.
          </p>

          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontWeight: "500"
            }}
          >
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="media/images/console.png"
            alt="Console"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default LeftSection;