import React, { useState, useEffect } from "react";

const ShortCircuit = () => {
  const text = true;
  //   const firstValue = text && "hello world";
  //   const secondValue = text || "hello world";

  //   const [text, setText] = useState("");
  //   const [isError, setIsError] = useState(false);

  const [isError, setIsError] = useState(false);
  return (
    <>
      <h1>{text && "hello World"}</h1>
      <button onClick={() => setIsError(!isError)}>toggle Error</button>
      {isError && <h1>Error....</h1>}

      {isError ? <p>there is an error...</p> : <h2>there is no error</h2>}
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}
    </>
  );
};
export default ShortCircuit;
