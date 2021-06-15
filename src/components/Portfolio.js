import React from "react";
import foods from "../images/foods.png";
import cookies from "../images/cookies.png";
import messenger from "../images/messenger.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Food
  const openPopupboxFood = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={foods} alt="Kent's Food Store" />
        <p>A platform where users can buy their meals online</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://restuarant-kent.herokuapp.com/", "_blank")}>https://restuarant-kent.herokuapp.com/</a>
        {/* <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/kbaraa/Food")}>https://github.com/kbaraa/Food</a> */}
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigFood = {
    titleBar: {
      enable: true,
      text: "Kent's Food Store Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // cookies
  const openPopupboxcookies = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cookies} alt="cookies" />
        <p>A site where people can track their accomplishments and failures (David Goggins Cookie Jar Method)(Being Revised due to npmjs error)</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://cookies-kent.herokuapp.com/cookies", "_blank")}>https://cookies-kent.herokuapp.com/cookies</a>
        {/* <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/kbaraa/cookie", "_blank")}>https://github.com/kbaraa/cookie</a> */}
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigcookies = {
    titleBar: {
      enable: true,
      text: "David Goggin Cookie Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // messenger 
  const openPopupboxmessenger = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={messenger} alt="messenger Project" />
        <p>Work in Progress Group Work - An Analog Messaging System (Revised every Monday and Thursday)</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://messengerlist-kent.herokuapp.com/", "_blank")}>https://messengerlist-kent.herokuapp.com/</a>
        {/* <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/leochoo/analog-messenger", "_blank")}>https://github.com/leochoo/analog-messenger</a> */}
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigmessenger = {
    titleBar: {
      enable: true,
      text: "Messenger List Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }




  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxFood}>
            <img className="portfolio-image" src={foods} alt="Kent's Food Store" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxcookies}>
            <img className="portfolio-image" src={cookies} alt="cookies" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxmessenger}>
            <img className="portfolio-image" src={messenger} alt="messenger List" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigFood} />
      <PopupboxContainer {...popupboxConfigcookies} />
      <PopupboxContainer {...popupboxConfigmessenger} />
    
    </div>
  )
}

export default Pofrfolio;
