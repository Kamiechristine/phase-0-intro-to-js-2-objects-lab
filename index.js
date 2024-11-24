// Write your solution in this file!








const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };


  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }

  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log("Non-destructive update:", updatedEmployee); 
  console.log("Original employee after non-destructive update:", employee); 

 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 30);
  console.log("Destructive update:", employee); 


  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  const clonedEmployee = deleteFromEmployeeByKey(employee, "age");
  console.log("Non-destructive delete:", clonedEmployee); 
  console.log("Original employee after non-destructive delete:", employee); 


  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Destructive delete:", employee);