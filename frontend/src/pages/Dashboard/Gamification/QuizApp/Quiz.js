import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "./assets/data";
import bg from '../../../../assets/que1.png'
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   backgroundSize:'cover',
   backgroundAttachment: 'fixed',
   zIndex: "1", 
   height:"100vh"
  };
  const check = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
        if (score + 1 === data.length) {
          setResult(true);
          if (score === data.length) {
            setPointsEarned(1);
          } else if (score > 6) {
            setPointsEarned(2);
          } else {
            setPointsEarned(3);
          }
        }
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    setPointsEarned(0);
  };

  return (
    <div style={style} className="quiz-page">
      <div style={{ position: "relative", zIndex: "2", padding: "20px" }}>
    
      <h2 style={{ color: "black", fontWeight: "900" }}>Finance Quiz</h2>
      <hr style={{ color: "black", backgroundColor: "black", height: "2px", border: "none" }} />
      </div>
      <div className="reward-info">
        <div className="reward-icon">🏆</div>
        <div className="reward-text">
          <p style={{ color: "rgba(11, 11, 69, 0.912)", fontSize: "25px", width:'500px', fontWeight:'600' }}>Winning one set of quiz will reward you with a free session with a financial advisor!</p>
        </div>
      </div>
    
      <div className="container">
        <div className="score-container">
          <h2 style={{ fontSize: "20px", fontWeight: "900" }}>
            Score: {score}
          </h2>
        </div>
        {result ? (
          <>
            <h2>
              You Scored {score} out of {data.length}
            </h2>
            {score === data.length && (
              <div className="reward-message">
                <p
                  style={{
                    color: "rgba(11, 11, 69, 0.912)",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Congratulations! You scored perfectly!
                </p>
                <p
                  style={{ color: "rgba(11, 11, 69, 0.912)", fontSize: "16px" }}
                >
                  You have earned a free consultation with our financial
                  advisor!
                </p>
              </div>
            )}
            {score > 6 && score < data.length && (
              <div className="reward-message">
                <p
                  style={{
                    color: "rgba(11, 11, 69, 0.912)",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Great job!
                </p>
                <p
                  style={{ color: "rgba(11, 11, 69, 0.912)", fontSize: "16px" }}
                >
                  You have earned {pointsEarned} points which can be used for
                  reward vouchers!
                </p>
              </div>
            )}
            <button style={{ marginTop: "5px" }} onClick={reset}>
              Reset
            </button>
          </>
        ) : (
          <>
            <h2>
              {index + 1}.{question.question}{" "}
            </h2>
            <ul>
              <li
                ref={Option1}
                onClick={(e) => {
                  check(e, 1);
                }}
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                onClick={(e) => {
                  check(e, 2);
                }}
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                onClick={(e) => {
                  check(e, 3);
                }}
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                onClick={(e) => {
                  check(e, 4);
                }}
              >
                {question.option4}
              </li>
            </ul>
            <button onClick={next}>Next</button>
            <div className="index">
              {index + 1} of {data.length} questions
            </div>
          </>
        )}
      </div>

      {/* <div className="reward-info">
        <div className="reward-icon">🏆</div>
        <div className="reward-text">
          <p style={{ color: "#b5b9d4", fontSize: "16px" }}>Winning one set of quiz will reward you with a free session with a financial advisor!</p>
        </div>
      </div> */}
    </div>
  );
};

export default Quiz;