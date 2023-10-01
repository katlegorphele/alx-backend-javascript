export default function createReportObject(employeesList) {
  const employeesObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(obj) {
      return Object.entries(obj).length;
    },
  };
  return employeesObj;
}
