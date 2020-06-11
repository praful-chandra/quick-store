import React from "react";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={require("../../assets/Logo-User.png")} alt="quick store" />
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-column">
            <ul>
              <li className="footer-top-right-column-head">GOTO</li>
              <li className="footer-top-right-column-item">Categories</li>
              <li className="footer-top-right-column-item">What's new</li>
              <li className="footer-top-right-column-item">Campaign</li>
              <li className="footer-top-right-column-item">Sales</li>
            </ul>
          </div>

          <div className="footer-top-right-column">
            <ul>
              <li className="footer-top-right-column-head">Join US</li>
              <li className="footer-top-right-column-item">refer a friend</li>
              <li className="footer-top-right-column-item">collaboration</li>
              <li className="footer-top-right-column-item">our story</li>
              <li className="footer-top-right-column-item">our fabric</li>
            </ul>
          </div>

          <div className="footer-top-right-column">
            <ul>
              <li className="footer-top-right-column-head">help</li>
              <li className="footer-top-right-column-item">mu account</li>
              <li className="footer-top-right-column-item">FAQ</li>
              <li className="footer-top-right-column-item">track my order</li>
              <li className="footer-top-right-column-item">Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.022"
            height="28.022"
            viewBox="0 0 28.022 28.022"
          >
            <defs>
              <style></style>
            </defs>
            <path
              id="facebook"
              className="cls-1"
              d="M4.1,28.022h9.14V18.061H9.961V14.777h3.284v-4.1a4.109,4.109,0,0,1,4.1-4.1h4.1V9.851H18.17a1.644,1.644,0,0,0-1.642,1.642v3.284h4.778l-.547,3.284h-4.23v9.961h7.389a4.109,4.109,0,0,0,4.1-4.1V4.1a4.109,4.109,0,0,0-4.1-4.1H4.1A4.109,4.109,0,0,0,0,4.1V23.917A4.109,4.109,0,0,0,4.1,28.022ZM1.642,4.1A2.466,2.466,0,0,1,4.1,1.642H23.917A2.466,2.466,0,0,1,26.38,4.1V23.917a2.466,2.466,0,0,1-2.463,2.463H18.17V19.7H22.15l1.095-6.568H18.17V11.493H23.1V4.926H17.349A5.753,5.753,0,0,0,11.6,10.672v2.463H8.319V19.7H11.6V26.38H4.1a2.466,2.466,0,0,1-2.463-2.463Zm0,0"
            />
          </svg>
        </div>
        <div className="footer-bottom-item">
          <svg
            id="instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="28.022"
            height="28.022"
            viewBox="0 0 28.022 28.022"
          >
            <defs></defs>
            <path
              id="Path_8"
              data-name="Path 8"
              className="cls-1"
              d="M4.1,28.022H23.917a4.109,4.109,0,0,0,4.1-4.1V4.1a4.109,4.109,0,0,0-4.1-4.1H4.1A4.109,4.109,0,0,0,0,4.1V23.917A4.109,4.109,0,0,0,4.1,28.022ZM1.642,4.1A2.466,2.466,0,0,1,4.1,1.642H23.917A2.466,2.466,0,0,1,26.38,4.1V23.917a2.466,2.466,0,0,1-2.463,2.463H4.1a2.466,2.466,0,0,1-2.463-2.463Zm0,0"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              className="cls-1"
              d="M129.713,138.426A8.713,8.713,0,1,0,121,129.713,8.723,8.723,0,0,0,129.713,138.426Zm0-15.49a6.777,6.777,0,1,1-6.777,6.777A6.784,6.784,0,0,1,129.713,122.936Zm0,0"
              transform="translate(-115.702 -115.702)"
            />
            <path
              id="Path_10"
              data-name="Path 10"
              className="cls-1"
              d="M362.97,64.941A1.97,1.97,0,1,0,361,62.97,1.973,1.973,0,0,0,362.97,64.941Zm0-2.627a.657.657,0,1,1-.657.657A.658.658,0,0,1,362.97,62.314Zm0,0"
              transform="translate(-339.59 -58.329)"
            />
          </svg>
        </div>
        <div className="footer-bottom-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.022"
            height="28.022"
            viewBox="0 0 28.022 28.022"
          >
            <defs></defs>
            <path
              id="twitter"
              className="cls-1"
              d="M28.022,3.743c-1.763.1-1.724.091-1.923.112L27.142.212s-3.259,1.465-4.085,1.727a5.626,5.626,0,0,0-7.7-.756,7.092,7.092,0,0,0-2.563,6.7A13.845,13.845,0,0,1,3.58,1.543L2.807.409,2.229,1.7a9.365,9.365,0,0,0-.683,5.273,8.73,8.73,0,0,0,.6,2.058l-.663-.314-.079,1.354a8.444,8.444,0,0,0,1,4.294,7.564,7.564,0,0,0,.781,1.177l-.343-.064.418,1.551a7.291,7.291,0,0,0,3.173,4.492A48.736,48.736,0,0,1,1.8,23.572L0,24.294,1.66,25.4a15.618,15.618,0,0,0,5.08,2.259c4.913.941,10.444.175,14.168-3.923,3.136-3.451,4.166-8.361,3.952-13.47a3.718,3.718,0,0,1,.488-2.078c.7-1.134,2.669-4.441,2.673-4.448ZM24.035,6.989a6.046,6.046,0,0,0-.814,3.382c.216,5.153-.932,9.15-3.411,11.878-2.9,3.187-7.568,4.438-12.816,3.432a11.049,11.049,0,0,1-2.746-1,39.492,39.492,0,0,0,4.974-2.5l2.868-1.658-3.166-.248a4.392,4.392,0,0,1-3.556-2.475,4.748,4.748,0,0,0,1.205-.246l3.02-1.028-3.045-.911a4.7,4.7,0,0,1-2.77-2.354,6.353,6.353,0,0,1-.6-1.618,6.347,6.347,0,0,0,1.235.241l2.818.341L5,10.1A6.469,6.469,0,0,1,3.217,4.051,14.8,14.8,0,0,0,14.728,10.1a14.375,14.375,0,0,0-.168-1.7c-.76-3.283.906-4.949,1.657-5.514A4.219,4.219,0,0,1,22,3.475a1.291,1.291,0,0,0,1.348.441A9.88,9.88,0,0,0,24.461,3.5l-.708,2.471h.9l-.621,1.015Zm0,0"
              transform="translate(0 0)"
            />
          </svg>
        </div>
        <div className="footer-bottom-item">
            <div className="footer-bottom-item-dot"></div> Terms of use
        </div>
        <div className="footer-bottom-item">
        <div className="footer-bottom-item-dot"></div> Privacy policy
        </div>
        <div className="footer-bottom-item">
        <div className="footer-bottom-item-dot"></div> All rights reserved .2020
        </div>
      </div>
    </div>
  );
}
