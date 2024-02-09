function compare() {
  return a;
  if (a < b) return b;
}

function useCallback(a, b) {
  let max = compare(a, b);
}

function callBack(number) {
  console.log("Số lớn nhất trong 2 số là: " + number);
}
