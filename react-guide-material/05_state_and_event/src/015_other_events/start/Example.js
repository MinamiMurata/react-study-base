import "./Example.css";

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          onChange={() => console.log("onChange検知")} //入力欄の変更を検知(JSのoninputイベントと同じで入力されたタイミングで発火)
          onBlur={() => console.log("onBlur検知")} //入力欄からのフォーカスを失ったことを検知
          onFocus={() => console.log("onFocus検知")} //入力欄のフォーカスを得たことを検知
        />
      </label>
      <div>
        <label>
          入力値を取得：
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")} //このコードだとChromeではバグが起きて反応しなかった（Firefoxで確認可）
        onMouseLeave={() => console.log("カーソルが出ていきました。")} //上記同様
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;
