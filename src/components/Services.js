import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
              <h3>Web Design</h3>
              <p>knowledgable of how to style websites that is appealing</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

              <h3>Web Development</h3>
              <p>Specialist in Front End Web Development</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

              <h3>Social Media Marketing</h3>
              <p>Knowledgable about online marketing such as Facebook Ads</p>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>

  )
}

export default Services;
