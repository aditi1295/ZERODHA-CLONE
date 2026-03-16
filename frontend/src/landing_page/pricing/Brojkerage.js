import React from "react";
function Brojkerage() {
  return (
    <div className="container">
      <div className="row p-5 nt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none",color:"#3E8EDE" }}>
            <h3 className="fs-5">Brokrage Calculator</h3>
          </a>
          <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"13px"}} className="text-muted ">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ?50 +
              GST per onder.
            </li>

            <li> Digital contract notes will be sent via e-mail.</li>

            <li>
              Physical copies of contract notes, if required, shall be changed
              ₹20 per contract nobe. Courier charges apply.
            </li>

            <li>
              For NRl accoun (non-PIS), 0.5% or 2100 per execubed order for
              equity (whichever is lower).
            </li>

            <li>
              For NRl account (PIS), 0.5% or 2200 per eceouted order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any onder placed will be
              changed ?40 per gsecuted onder instead of ?20 per executed onder,
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none",color:"#3E8EDE" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brojkerage;
