import "./Child.css";
// import React from "react";
import { Fragment } from "react";

const Child = () => {
  return (
    // <React.Fragment> import Reactとする場合
    // <>のみでも<Fragment>と同じ
    // <Fragment key="1">　Fragmentにはkey属性のみ付与可
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
        suscipit recusandae eius perspiciatis illo corporis? Aliquam nam repellendus quos expedita est?
      </p>
    </>
    // </React.Fragment>
  );
};

export default Child;
