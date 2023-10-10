import React from "react";

const Bye = () => {
  return <h2>GoodBye!</h2>;
};

// コンポーネントもReact要素（reactのcreateElementメソッドによって作成されるオブジェクト）
const Example = () => {
  return (
    <div>
      <Bye />
    </div>
  );
};

console.log(Example());

export default Example;
