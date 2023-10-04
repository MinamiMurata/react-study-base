import "./Child.css";

// const Child = (props) => {
//   return (
//     <div className={`component ${props.color}`}>
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

const Child = ({ color: c = "green", num, fn, bool, obj }) => {
  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn("Props")}</h3>
      <h3>{bool ? "true" : "false"}</h3>
      <h3>{obj.name + obj.age}</h3>
    </div>
  );
};

export default Child;
