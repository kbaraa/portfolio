import React from "react";
import foods from "../images/foods.png";
import quotes from "../images/quotes.png";
import todo from "../images/todo.png";
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
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://kent-foods.herokuapp.com/", "_blank")}>https://kent-foods.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/kbaraa/Food")}>https://github.com/kbaraa/Food</a>
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

  // Quotes
  const openPopupboxQuotes = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={quotes} alt="Quotes" />
        <p>A site where people can upload funny and inspiring quotes and lessons.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://quotes-kent.herokuapp.com/quotes", "_blank")}>https://quotes-kent.herokuapp.com/quotes</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/kbaraa/Quote", "_blank")}>https://github.com/kbaraa/Quote</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigQuotes = {
    titleBar: {
      enable: true,
      text: "Quotes Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Todo 
  const openPopupboxTodo = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={todo} alt="Todo Project" />
        <p>A visually appealing todo list</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://todolist-kent.herokuapp.com/", "_blank")}>https://todolist-kent.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/kbaraa/todoList", "_blank")}>https://github.com/kbaraa/todoList</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTodo = {
    titleBar: {
      enable: true,
      text: "Todo List Project"
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
          <div className="portfolio-image-box" onClick={openPopupboxQuotes}>
            <img className="portfolio-image" src={quotes} alt="Quotes" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTodo}>
            <img className="portfolio-image" src={todo} alt="Todo List" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigFood} />
      <PopupboxContainer {...popupboxConfigQuotes} />
      <PopupboxContainer {...popupboxConfigTodo} />
    
    </div>
  )
}

export default Pofrfolio;
