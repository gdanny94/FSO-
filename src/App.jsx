import { useState } from "react";

const Stats = ({good, eh, bad}) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Eh:{eh}</p>
      <p>Bad:{bad}</p>
      <p>Total:{good + eh + bad}</p>
      <p>Avg:{(good - bad) / (good + eh + bad)}</p>
      <p>Positive:{(good * 100) / (good + eh + bad)}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [eh, setEh] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Us Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setEh(eh + 1)}>Eh</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h3>Results</h3>
      <Stats good={good} eh={eh} bad={bad} />
    </div>
  );
};

export default App;
