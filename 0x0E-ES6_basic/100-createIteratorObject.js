export default function createIteratorObject(report) {
    const departments = Object.keys(report.allEmployees);
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
    
    return {
    next() {
    const currentDepartment = departments[currentDepartmentIndex];
    const employees = report.allEmployees[currentDepartment];
    const employee = employees[currentEmployeeIndex];
    if (currentEmployeeIndex >= employees.length - 1) {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      } else {
        currentEmployeeIndex++;
      }
    
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }
    
      return { value: employee, done: false };
    },
};
}