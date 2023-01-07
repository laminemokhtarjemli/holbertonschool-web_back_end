export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const value of array) {
    const updatedValue = appendString + value;
    array2.push(updatedValue);
  }
  return array2;
}
