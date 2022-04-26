
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      //Act
      let employee = new Employee(name, id, email);

      //Assert
      expect(employee.name).toEqual("Reniel");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("Reniel@gmail.com");
    });
  });

  describe("getName", () => {
    it("should return the name of the employee", () => {});
  });
  describe("getId", () => {
    it("should return the id of the employee", () => {});
  });
  describe("getEmail", () => {
    it("should return the email of the employee", () => {});
  });
  describe("getRole", () => {
    it("should return Employee when getRole is called ", () => {
      //Arrange
      // Arrange
      let name = "Reniel";
      let id = 1;
      let email = "Reniel@gmail.com";
      let employee = new Employee(name, id, email);

      //Act
      let role = employee.getRole();

      //Assert
      expect(role).toEqual("Employee");
    });
  });
});
