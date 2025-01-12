import { Component } from "react";

import * as Icon from "react-bootstrap-icons";

class NetFooter extends Component {
  render() {
    return (
      <div className="bg-black d-flex justify-content-center">
        <div>
          <div className="text-secondary">
            <div className="d-flex mb-2">
              <Icon.Facebook className="me-2" />
              <Icon.Instagram className="me-2" />
              <Icon.TwitterX className="me-2" />
              <Icon.Youtube />
            </div>
            <div className="d-flex" style={{fontSize:'13px'}}>
              <div className="me-5">
                <p>Audio and Subtitles</p>
                <p>Media Center</p>
                <p>Privacy</p>
                <p>Contact us</p>
              </div>
              <div className="me-5">
                <p>Audio Description</p>
                <p>Investor</p>
                <p>Legal Notices</p>
              </div>
              <div className="me-5">
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
              </div>
              <div>
                <p>Gift Cards</p>
                <p>Terms of Use</p>
                <p>Corporate Information</p>
              </div>
            </div>
            <div style={{fontSize:'13px'}}>
              <button className="bg-transparent border border-secondary text-secondary mt-1">Service Code</button>
            </div>
            <div className="mt-2" style={{fontSize:'13px'}}><Icon.CCircle /> 1997-2023 Netflic, Inc.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NetFooter;
