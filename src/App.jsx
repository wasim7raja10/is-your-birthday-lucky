import { useEffect, useState } from "react";
import "./App.css";
import twitterLogo from "./icons/002-twitter.png";
import githubLogo from "./icons/003-github.png";
import linkedinLogo from "./icons/001-linkedin.png";
import { validateInput } from "./helper/helperfunctions";

function App() {
  const [birthday, setBirthday] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [isLucky, setIsLucky] = useState("");

  function onBirthdayChangeHandler(e) {
    setBirthday(e.target.value);
  }
  function onLuckyNumberChangeHandler(e) {
    setLuckyNumber(e.target.value);
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    if (!validateInput(birthday, luckyNumber)) {
      setIsLucky("Invalid Input");
      return;
    }
    let sumOfBirthday = 0;
    birthday.split("").forEach((char) => {
      if (!isNaN(Number(char))) sumOfBirthday += Number(char);
    });
    if (sumOfBirthday % Number(luckyNumber) === 0) {
      setIsLucky("Your birthday is lucky");
    } else {
      setIsLucky("Your birthday is not that lucky");
    }
  }
  function resetHandler(e) {
    setBirthday("");
    setIsLucky("");
    setLuckyNumber("");
  }

  return (
    <>
      <main>
        <h1>Is your Birthday Lucky?</h1>
        <form onSubmit={onSubmitHandler} onReset={resetHandler}>
          <div className="birthday">
            <label htmlFor="date">Birthday</label>
            <input
              value={birthday}
              onChange={onBirthdayChangeHandler}
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="luckyNumber">
            <label htmlFor="luckyNumber">Lucky Number</label>
            <input
              value={luckyNumber}
              onChange={onLuckyNumberChangeHandler}
              type="number"
              name="luckyNumber"
              id="luckyNumber"
            />
          </div>
          <div className="buttons">
            <button type="submit">Check</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        {isLucky && <h2>{isLucky}</h2>}
      </main>
      <footer>
        <h6>
          created by <a href="https://wasimraja.me/portfolio">Wasim Raja</a>
        </h6>
        <ol>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wasim-raja-31857014b/"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="linkedin logo" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/wasim7raja10"
              rel="noreferrer"
            >
              <img src={twitterLogo} alt="twitter logo" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/wasim7raja10"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github logo" />
            </a>
          </li>
        </ol>
      </footer>
    </>
  );
}

export default App;
