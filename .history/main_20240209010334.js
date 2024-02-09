function compare(a, b) {
  if (a < b) return b;
  return a;
}

function useCallback(a, b) {
  let max = compare(a, b);
  callBack(max);
}

function callBack(number) {
  console.log("Số lớn nhất trong 2 số là: " + number);
}

console.log(useCallback(23, 30));
