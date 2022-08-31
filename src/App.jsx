import { useEffect, useState } from "react";
import "./App.css";

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
  useEffect(() => {
    console.log(typeof birthday);
    console.log(luckyNumber);
  }, [birthday, luckyNumber]);

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
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;
