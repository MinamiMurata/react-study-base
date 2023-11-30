import { produce } from "immer";

const state = {
  name: "Tom",
  hobbies: ["tennis", "soccer"],
};

//下記の書き方だと元のstateが書き変わってしまい、イミュータビリティを保持できていない
// const newState = state;
// newState.name = "John";

// 下記のようなimmerというライブラリを使えば、ミュータブルな値の操作をしてもイミュータビリティを保持できる
const newState = produce(state, (draft) => {
  draft.name = "John";
  draft.hobbies[0] = "baseball";
  console.log(draft);
});

console.log(state, newState);
