export default function createIteratorObject(report) {
let iterable = [];

if (!report.allEmployees || typeof report.allEmployees !== 'object') {
return iterable;
}

iterable = {
*Symbol.iterator {
const departments = Object.keys(report.allEmployees);
let currentDepartmentIndex = 0;
let currentEmployeeIndex = 0;
      while (currentDepartmentIndex < departments.length) {
    const currentDepartment = departments[currentDepartmentIndex];
    const employees = report.allEmployees[currentDepartment];
    const employee = employees[currentEmployeeIndex];

    if (currentEmployeeIndex >= employees.length - 1) {
      currentEmployeeIndex = 0;
      currentDepartmentIndex++;
    } else {
      currentEmployeeIndex++;
    }

    yield employee;
  }
},
};

return iterable;
}
