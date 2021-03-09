const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (typeof arr !== "object") { throw new Error("THROWN"); }
  let transArr = [];
  let deleted = false;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i += 1;
        deleted = true;
        break;

      case "--double-next":
        if (i != arr.length - 1) transArr.push(arr[i + 1]);
        break;

      case "--discard-prev":
        if (i != 0 && !deleted) transArr.pop()
        deleted = false;
        break;

      case "--double-prev":
        if (transArr.length != 0 && !deleted) transArr.push(transArr[transArr.length - 1]);
        deleted = false;
        break;

      default:
        transArr.push(arr[i]);
        deleted = false;
        break;
    }
  }

  return transArr;
};
