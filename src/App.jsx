import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "./data";
import { useState } from "react";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];
  const checkNumber = (cur) => {
    if (cur === -1) return people.length - 1;
    else if (cur === people.length) return 0;
    else return cur;
  };
  const prevPerson = () => {
    setIndex((cur) => {
      return checkNumber(cur - 1);
    });
  };
  const nextPerson = () => {
    setIndex((cur) => {
      return checkNumber(cur + 1);
    });
  };
  const randomPerson = () => {
    let ind = Math.floor(Math.random() * people.length);
    if (ind === index) ind = ind + 1;
    const ne = ind % people.length
    setIndex(ne);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
      ;
    </main>
  );
};
export default App;
