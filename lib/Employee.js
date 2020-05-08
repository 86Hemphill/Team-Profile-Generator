// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  };

  getName() {
      return this.name;
  };

  getId() {
      return this.id;
  };

  getEmail() {
      return this.email;
  };

  getRole() {
      return this.role;
  };

  printInfo() {
    for (var key in this) {
      console.log(`${key}: ${this[key]}`);
    }};

};

console.log(new Employee("logan", 1, "test"));
module.exports = Employee;
