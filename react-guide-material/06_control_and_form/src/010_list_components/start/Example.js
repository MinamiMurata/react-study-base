const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* 単純に書く場合 */}
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}

        {/* for文を使う場合 */}
        {animalList}

        {/* mapを使う場合 */}
        {helloAnimals}

        {/* 以下のようにmapを使った”式”はJSX内に直接記述することが可能 */}
        {animals.map((animal) => (
          <li>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
