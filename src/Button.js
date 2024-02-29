import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>{count}</p>
    </>
  );
}
