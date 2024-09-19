import { useState } from "react";

export default function Calculator() {
  const [no1, setno1] = useState(0);
  const [no2, setno2] = useState(0);
  const [ans, setAns] = useState(0);

  const cal = (val) => {
    let ansVal = 0;
    const val1 = parseInt(no1);
    const val2 = parseInt(no2);
    if (val === "+") {
      ansVal = val2 + val1;
      setAns(ansVal);
    } else if (val === "-") {
      ansVal = val2 - val1;
      setAns(ansVal);
    } else if (val === "*") {
      ansVal = val2 * val1;
      setAns(ansVal);
    } else if (val === "/") {
      ansVal = val2 / val1;
      setAns(ansVal);
    }
  };
  return (
    <>
      <h1>Calculator</h1>
      <br />
      <input type="text" onChange={(e) => setno1(e.target.value)} />
      <br />

      <input type="text" onChange={(e) => setno2(e.target.value)} />
      <br />

      {ans}
      <br />

      <input type="input" value="" onChange={(e) => cal(e.target.value)} />
    </>
  );
}
