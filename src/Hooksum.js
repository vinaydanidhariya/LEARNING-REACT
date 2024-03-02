import React, { useState } from "react";

const Hooksum = () => {
  const [no1, setno1] = React.useState(0);
  const [no2, setno2] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  const doSum = () => {
    setSum(parseInt(no1) + parseInt(no2));
  };
  return (
    <>
      <h1>Hook Sum</h1>
      <br />
      <input type="text" onChange={(e) => setno1(e.target.value)} />
      <br />

      <input type="text" onChange={(e) => setno2(e.target.value)} />
      <br />

      {sum}
      <br />

      <input type="button" value="sum" onClick={doSum} />
    </>
  );
};

export default Hooksum;
