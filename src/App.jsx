import { FaBeer } from "react-icons/fa";
import people from "./data";
import { useState } from "react";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];
  return (
    <div>
      <h2>Reviews Starter</h2>;
      <FaBeer className="beer"/>
    </div>
  );
};
export default App;
