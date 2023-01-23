import { react, useState } from "react";
import styled from "styled-components";
import { Modal } from "./components/Modal.js"
import { GlobalStyle } from "./globalStyles.js";

function Square({ value, onSquareClick }) { // <!------------------- Square()
  let Fart = new Audio("/sounds/fart.wav");

  const start = () => {
    Fart.play()
  }
  return (
    <button className="square"
    onClick={() =>{
      start();
      onSquareClick();
    }}
    > {value}
    </button>
  );
} // <!------------------------------------------------------------ Square()

export default function Board() {
  // <!----------------------------- Board()
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [darkMode, setDarkMode] = useState(true);
  const [inChinese, setInChinese] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const winner = calculateWinner(squares);
  let Bleep = new Audio("/sounds/bleep.wav");
  let Explosion = new Audio("/sounds/explosion.mp3");
  let status;
  let loser;
  let linkedin;
  let github;
  let instructLineOne;
  let instructLineTwo;
  let instructLineThree;
  let instructLineFour;
  let bufficornBrigade;
  
  const start = () => {
    Bleep.play()
  }
  
  const explode = () => {
    Explosion.play()
  }

  function handleClick(i) {
    // <!----------------------------- handleClick()
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (XisNext) {
      nextSquares[i] = "🦬";
    } else {
      nextSquares[i] = "🦙";
    }
    setSquares(nextSquares);
    setXisNext(!XisNext);
  } // <!--------------------------------------------------- handleClick()

  if (winner) {
    if (inChinese) {
      status = winner + winner + winner + "赢了";
      loser = (XisNext ? "🦬" : "🦙") + (XisNext ? "🦬" : "🦙") + "太烂了!";
      instructLineOne = "谢谢玩我创建的电子";
      instructLineTwo = "游戏 请点击你浏览器刷";
      instructLineThree = "新按钮来再玩🦬对🦙";    
      linkedin = (XisNext ? "我想跟你创建程序" : "linkedin.com/in/frankenmiller");
      github = (XisNext ? "https://github.com/frankenmiller" : "让我们一起创建顺利的程序")      
    } else {
      status = winner + winner + winner + "'s Win!";
      loser = (XisNext ? "🦬" : "🦙") + (XisNext ? "🦬" : "🦙") + "'s SUCK!";
      instructLineOne = "Thank you for testing my";
      instructLineTwo = "game! Please hit browser";
      instructLineThree = "refresh button play 🦬's ";
      instructLineFour = "vs 🦙's again and again!";
      linkedin = (XisNext ? "🧑🏽‍💻 Let's hang out and BUIDL" : "linkedin.com/in/frankenmiller");
      github = (XisNext ? "https://github.com/frankenmiller" : "🧑🏽‍💻 I want to be on your team!")    
    }
  } else { // when in case still no winner...
    if (inChinese) {
      status = "下位动物: " + (XisNext ? "🦬" : "🦙");
      loser = "战斗战斗啊!";
      instructLineOne = "轮流点按正方形 第一";
      instructLineTwo = "个连续获得所有三个的";
      instructLineThree = "球员会将赢得比赛呀";
      instructLineFour = "________________";
      linkedin = (XisNext ? "我想跟你创建程序" : "linkedin.com/in/frankenmiller");
      github = (XisNext ? "https://github.com/frankenmiller" : "让我们一起创建顺利的程序")
    } else {
      linkedin = (XisNext ? "I want to be on your team!" : "linkedin.com/in/frankenmiller");
      github = (XisNext ? "https://github.com/frankenmiller" : "Let's build cool things together")
      instructLineOne = "Take turns clicking on";
      instructLineTwo = "squares. The 1st player";
      instructLineThree = "to get all 3-in-a-row will";
      instructLineFour = "be declared the winner!";
      loser = "FIGHT! FIGHT!";
      status = "Next player: " + (XisNext ? "🦬" : "🦙");
    }
  }
  if (winner) {
    if (calculateWinner(squares) === "🦬") {
      bufficornBrigade = "👏🏽 👏🏽 Buffaloes Win! 👏🏽 👏🏽";
    } else if (calculateWinner(squares) === "🦙") {
      bufficornBrigade = "👏🏽👏🏽👏🏽 llamas Win! 👏🏽👏🏽👏🏽";
    }
  } else {
    bufficornBrigade = "🦬 Buffaloes vs llamas 🦙";
  }

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    transform: translate(-150px, -312px);
    position: relative;
    `
    const Button = styled.button`
    min-width: 100px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 4px solid #000;
    background: #141414;
    color: #FFF;
    font-size: 15px;
    cursor: pointer;
  `
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="dark-mode-container">
        <div>
        <label className="switch">
        <input type="checkbox" />
        </label>
        </div>
        <span></span>
      </div >
      <div className="spare-container">
        <span id="sunandmoon">🌓</span>
        <div className="switch-checkbox">
        <label className="switch">
        <input type="checkbox" 
        onChange={() => {
          setDarkMode(!darkMode);
          start();
          }
        } 
        />
        <span className="slider round"> </span>
        </label>
        </div>
        <span id="sunandmoon">☀️</span>
      </div >
      <tag className={darkMode ? "dark-mode" : "light-mode"} id="dark-toggle-script">
      ⬅ ⬅ ⬅ Click here<br/> to toggle night mode on/off!!
      </tag>

      <p className={darkMode ? "dark-mode" : "light-mode"}>
        {inChinese ? "富蓝克迷拉的井字棋电子游戏" : "Frankenmiller's Tic-Tac-Toe game"}
        <br />
        {inChinese ? "在ReactJS中创建了2023年1月" : "Created January 2023 in ReactJS"}
      </p>
      <p className={darkMode ? "bufficorns light-mode" : "bufficorns dark-mode"}>
        {inChinese ? "🦬 水牛对阵美洲驼 🦙" : "🦬 Buffaloes vs llamas 🦙"}</p>
      <div className={darkMode ? "gamebox light-mode" : "gamebox dark-mode"}>
        <div id={inChinese ? "status_chinese" : "status_english"}
        className={darkMode ? "status light-mode" : "status dark-mode"}>{status}</div>
        <div id={inChinese ? "loser_box_chinese" : "loser_box_english"}
        className={darkMode ? "loser_box light-mode" : "loser_box dark-mode"}>{loser}</div>
        <div className={inChinese ? "chinese_instructions" : "english_instructions"}
           id={inChinese ? "line_first" :"line_one"}>
          {instructLineOne}
        </div>
        <div className={inChinese ? "chinese_instructions" : "english_instructions"}
        id={inChinese ? "line_second" : "line_two"}>
          {instructLineTwo}
        </div>
        <div className={inChinese ? "chinese_instructions" : "english_instructions"}
          id={inChinese ? "line_third" : "line_three"}>
          {instructLineThree}
        </div>
        <div className={inChinese ? "chinese_instructions" : "english_instructions"} 
        id={inChinese ? "line_zero" :"line_four"}>
          {instructLineFour}
        </div>
        <div className={darkMode ? "board-row dark-mode" : "board-row light-mode"}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <br /><br />
      <div className="footer">
        <div className={darkMode ? "social_links dark-mode" : "social_links light-mode"} id="linkedin">{linkedin}</div>
        <div className={darkMode ? "social_links dark-mode" : "social_links light-mode"} id="github">{github}</div>
      </div>  
      <tag className={darkMode ? "dark-mode" : "light-mode"} id="language-toggle-script">
      Click here to 👉🏼 👉🏼 👉🏼<br/> toggle from chinese to <br/> english! 简体汉语 ↔️ EN
      </tag>      
      <div className="china-container">
        <span class={darkMode ? "dark-mode switch-script" : "light-mode switch-script"}>中文</span>
        <div className="switch-checkbox">
        <label className="switch">
        <input type="checkbox" 
        onChange={() => {
          setInChinese(!inChinese);
          start();
          } 
        }
        />
        <span className="slider round"> </span>
        </label>
        </div>
        <span id="usflag">🇺🇸</span>
      </div > 
      <br /><br /><br /><br />
      <Container>
          <Button className="bufficorn-button" onClick={() => {
            explode();
            openModal();
          }} >
            Frankenmiller's<br />Bufficorn&nbsp;&nbsp;&nbsp;🦬
          </Button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <GlobalStyle />
      </Container>        
    </div>
  );
} // <!------------------------------------------------------------- Board()

function calculateWinner(squares) {
  // <!------------------ calculateWinner()
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} // <!---------------------------------------------------- calculateWinner()

