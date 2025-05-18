export function generateRandomNumbers() {
  const n1 = Math.floor(Math.random() * 9) + 1;
  const n2 = Math.floor(Math.random() * 9) + 1;
  return { n1, n2 };
}
