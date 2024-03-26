import { findPrime } from "../utils/helper";
import { useState, useMemo } from "react";

const Memo = () => {
  const [num, setNum] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //const prime = findPrime(num);
  const prime = useMemo(() => findPrime(num), [num]);

  function updateTheme() {
    console.log("theme value check");
    console.log(isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <div
      className="MemoBox"
      style={isDarkTheme ? { backgroundColor: "lightgray" }: {backgroundColor: "white"}}
    >
      <button onClick={updateTheme}>Toggle</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Memo;
