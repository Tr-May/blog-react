import React, { useEffect, useState } from "react";

const Test = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect is rendered!");
  }, []);
  console.log("component is rendered!");

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <h1>{value}</h1>
      <input type="text" placeholder="Your Name" onChange={handleChange} />
      <button onClick={() => setValue(value + 1)}>Click</button>
    </>
  );
};

export default Test;
