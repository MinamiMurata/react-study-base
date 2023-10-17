import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    });
    setFruits(newFruits);

    // パターン1
    // let sumVal = 0;
    // newFruits.forEach((fruit) => {
    //   if (fruit.checked) {
    //     sumVal += fruit.value;
    //   }
    // });

    // パターン2
    // let sumVal = 0;
    // newFruits.filter((fruit) => fruit.checked).forEach((fruit) => (sumVal += fruit.value));

    // パターン3
    let sumVal = newFruits.filter((fruit) => fruit.checked).reduce((sumVal, fruit) => sumVal + fruit.value, 0);

    setSum(sumVal);
  };

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label}>
            <input id={fruit.label} type="checkbox" checked={fruit.checked} value={fruit.label} onChange={handleChange} />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        );
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
