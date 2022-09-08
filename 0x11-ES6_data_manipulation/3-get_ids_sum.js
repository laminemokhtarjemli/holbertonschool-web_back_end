function getStudentIdsSum(students) {
  return students.reduce((idsSum, current) => current.id + idsSum, 0);
}

export default getStudentIdsSum;