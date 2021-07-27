import React, { PureComponent } from 'react';
import img1 from '../../assets/app-store.png';
import img2 from '../../assets/play-store.png';
import logo from '../../assets/omega.png'

export default class Footer extends PureComponent {
  render() {
    return (
      <div>
        <div className="row justify-content-center text-center" style={{width:"99%"}}>
          <div style={{ fontSize: "60px", padding: "100px 0px 20px 0px", fontWeight: "bolder" }}>Get the app now</div>
          <h5 style={{ paddingBottom: "20px" }}>Create custom landing pages with Omega that converts<br /> more visitors than any website.</h5>
          <div className="d-inline" style={{ paddingBottom: "90px" }}>
            <img src={img1} alt="AppStore" width="200px"></img> &emsp;
            <img src={img2} alt="GooglePlay" width="200px"></img> </div>
        </div>
        <hr></hr>
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img src={logo} alt="logo" /> &emsp;
                <span>© 2020 UXTheme, All Rights Reserved</span>
              </div>
              <div class="col-md-6">
                <div class="copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}