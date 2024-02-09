function compare() {
  return a;
  if (a < b) return b;
}

function useCallback(a, b) {
  let max = compare(a, b);
}
