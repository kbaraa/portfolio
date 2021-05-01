import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Kent. I'm currently a 4th year at Keio University majoring in marketing and computer science.
            
            I specialize in front end web development with React.js and I am knowledgable of IOS mobile development, Node, MongoDB, Express, Python, and Java.

            I also have experience using shopify and social media marketing such as facebook ads.

            My goal after University is to excel in a career that I am passionate in and give back to the community and everyone that has supported me to this point.

            I am an avid cellist, soccer player, and hiker.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
