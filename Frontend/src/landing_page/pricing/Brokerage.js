import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="">
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"12px"}} className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff. Additional charges of 250 GST
              per order.
            </li>
            <li>Digital contract nates will be sent via email</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply
            </li>
            <li>
              For NRI account (non-PIS), 0.5% of 100 per executed order for
              equity (whichever is jover)
            </li>
            <li>
              For NR) account (PIS), 0.5% or 2200 ner executed order for equaty
              (whichever is lower)
            </li>
            <li>
              f the account is in debit balance, any order placed will be
              charged 740 per executed order instead of 120 per executed ordes
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
