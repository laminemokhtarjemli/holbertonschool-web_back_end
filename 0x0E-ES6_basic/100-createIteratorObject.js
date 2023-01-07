export default function createIteratorObject(report) {
  const result = [];
  const values = Object.values(report.allEmployees);
  for (let i = 0; i < values.length; i++) {
    result.push(...values[i]);
  }
  return result;
}
