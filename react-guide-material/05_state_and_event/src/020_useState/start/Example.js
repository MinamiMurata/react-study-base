import { useState } from "react";

const Example = () => {
  // let valArry = useState();
  let [val, setVal] = useState();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value);
        }}
      />{" "}
      = {val}
    </>
  );
};

export default Example;
