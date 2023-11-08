const Example = () => {
  //関数型
  const nums = [1, 2, 3];
  const sum = (arry) => {
    // const nums = arry;
    // let sumValue = 0;
    // for文
    // for (let i = 0; i < nums.length; i++) {
    //   sumValue += nums[i];
    // }
    // forEach文
    // nums.forEach((num) => (sumValue += num));
    // reduceを使う
    // let sumValue = nums.reduce((accu, curr) => accu + curr);
    // return sumValue;
    // 一文にまとめる
    return arry.reduce((accu, curr) => accu + curr);
  };
  // オブジェクト指向型
  const numObj = {
    nums: [1, 2, 3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for (let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    },
  };
  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <div>オブジェクト指向型：{numObj.sum()}</div>
      <div>関数型：{sum(nums)}</div>
    </>
  );
};

export default Example;
