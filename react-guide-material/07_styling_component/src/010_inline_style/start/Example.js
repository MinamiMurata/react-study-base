import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height: 60,
    display: "block",
    fontWeight: "bold",
    "border-radius": 9999,
    cursor: "pointer",
    border: "none",
    margin: "auto",
    background: isSelected ? "pink" : "",
    // インラインスタイルの場合は、擬似要素・擬似セレクタ（::beforeや:hoverなど）を使えない
    // @media(min-width: などのメディアクエリ)の記述も不可
    // パフォーマンスも良くない
  };
  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
