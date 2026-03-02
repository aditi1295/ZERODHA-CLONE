import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 ">
        <div className="row mt-5 mb-3">
          <div className="col-1"></div>
          <div className="col-2">
            <img
              src="media/images/logo.svg"
              style={{
                width: "50%",
                fontSize: ".875rem",
                lineHeight: "1.7",
                fontWeight: "400",
              }}
            />
            <p className=" text-muted mt-3 mb-3" style={{ fontSize: ".8rem" }}>
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <p className=" text-muted d-flex gap-3">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </p>
            <hr />
            <p className=" text-muted d-flex gap-3">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
            </p>
          </div>
          <div className="col-9">
            <div className="row">
              {/* Account */}
              <div
                className="col-3"
                style={{
                  fontSize: ".875rem",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
              >
                <p style={{ color: "#424242", fontWeight: "500" }}>Account</p>

                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Open demat account
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Minor demat account
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  NRI demat account
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Commodity
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Dematerialisation
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Fund transfer
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  MTF
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Referral program
                </a>
              </div>

              {/* Support */}
              <div
                className="col-3"
                style={{
                  fontSize: ".875rem",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
              >
                <p style={{ color: "#424242", fontWeight: "500" }}>Support</p>

                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Contact us
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Support portal
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  How to file a complaint?
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Status of your complaints
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Bulletin
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Circular
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Z-Connect blog
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Downloads
                </a>
              </div>

              {/* Company */}
              <div
                className="col-3"
                style={{
                  fontSize: ".875rem",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
              >
                <p style={{ color: "#424242", fontWeight: "500" }}>Company</p>

                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  About
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Philosophy
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Press & media
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Careers
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Zerodha Cares (CSR)
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Zerodha.tech
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Open source
                </a>
              </div>

              {/* Quick Links */}
              <div
                className="col-3"
                style={{
                  fontSize: ".875rem",
                  lineHeight: "1.8",
                  fontWeight: "400",
                }}
              >
                <p style={{ color: "#424242", fontWeight: "500" }}>
                  Quick links
                </p>

                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Upcoming IPOs
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Brokerage charges
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Market holidays
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Economic calendar
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Calculators
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Markets
                </a>
                <br />
                <a href="#" style={{ textDecoration: "none", color: "#666" }}>
                  Sectors
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5   text-muted" style={{ fontSize: "10px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633. CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019. Registered Address: Zerodha Broking Ltd., #153/154,
            4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar
            4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
            pertaining to securities broking please write to
            <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>,
            for DP related queries write to
            <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure
            you carefully read the Risk Disclosure Document as prescribed by
            SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, and E-mail ID. Benefits: Effective
            communication and speedy redressal of grievances.
          </p>

          <p>
            <strong>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </strong>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            <strong>Attention investors:</strong>
            <br />
            1) Stock brokers can accept securities as margins from clients only
            by way of pledge in the depository system w.e.f September 01, 2020.
            <br />
            2) Update your e-mail and phone number with your stock broker /
            depository participant and receive OTP directly from the depository
            on your e-mail and/or mobile number to create pledge.
            <br />
            3) Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.
            <a href="#">NSE broker factsheet</a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is a one-time exercise while dealing in securities
            markets — once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment, the funds will remain in
            your bank account.
          </p>

          <p>
            As a business we don't give stock tips and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming to
            be part of Zerodha and offering such services, please{" "}
            <a href="#">create a ticket here</a>.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No. CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </footer>
  );
}

export default Footer;
