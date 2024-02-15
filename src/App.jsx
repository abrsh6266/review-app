import { FaQuoteRight,FaChevronLeft,FaChevronRight, } from "react-icons/fa";
import people from "./data";
import { useState } from "react";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const prevPerson = ()=>{
    setIndex((cur)=>{
      const ind = cur+1
      return ind 
    })
  }
  const nextPerson = ()=>{
    setIndex((cur)=>{
      const ind = cur+1
      return ind 
    })
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
          <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
        </div>
        </article>;

    </main>
  );
};
export default App;
