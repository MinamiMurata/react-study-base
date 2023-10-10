import React from "react";

const Example = () => {
  const sample1 = (
    // JSXのコード↓
    <h1 className="greeting">Hello World</h1>
  );

  // React.createElement("h1", {
  // babelによって上記JSXのコードは以下のような関数に置き換えられている
  // それが実行されると生成されるオブジェクトを仮想DOMという
  //   className: "greeting"
  // }, "Hello World");

  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  return React.createElement("div", null, React.createElement("h1", null, "Hello!"), React.createElement("h2", null, "Good to see you."));
  // reactのcreateElementメソッドによって作成されるオブジェクトをReact要素という
};

export default Example;
