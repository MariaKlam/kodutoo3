import { useState } from "react";

function Counter() {
  const [readings, setReadings] = useState(0);

  const suurenda = () => {
    setReadings(readings + 1);
  };

  const vahenda = () => {
    setReadings(readings - 1);
  };

  return (
    <div>
      <h5>How many times have you read:</h5>
      <button className="counterButton" onClick={vahenda}>
        -
      </button>
      {readings}
      <button className="counterButton" onClick={suurenda}>
        +
      </button>
    </div>
  );
}
export default Counter;
