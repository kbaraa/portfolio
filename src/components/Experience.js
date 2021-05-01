import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2017</h3>
            <p>Principle Cellist of the Boston Youth Symphony Orchestra and the Boston Philharmonic Youth Orchestra.  Toured across South America playing concerts and volunteering at local schools.  Took a accumulative total of 13 AP courses and Multivariable Calculus at Harvard University</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2019</h3>
            <p>Moved to Japan and started my first year at Keio University.  Met a variety of friends through college classes, college clubs (soccer and dance), and through friends of friends.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>Enrolled into Jun Murai/Jin Nakazawa's Research Seminar for Computer Science, Tatsuya Hagino's Research Seminar for Computer Science, and Ikumi Waragai's Research Seminar for Media and Marketing.  I used libraries/frameworks such as Swift and React.js to create a variety of projects. I learned about dropshipping, amazon fba, shopify, and social media marketing at this time.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>I have continued my studies in my research seminars and I am looking at potential jobs that I believe I will excel in.</p>
          </div>
        </div>
        {/* - */}
       
      </div>
    </div>
  )
}

export default Experience;
