
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should set the values of name, id and email, when i set them.", () => {
      // Arrange
      let name = "Gene";
      let id = 1;
      let email = "Gene@gmail.com";
      //Act
      let employee = new Employee(name, id, email);

      //Assert
      expect(employee.name).toEqual("Gene");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("Gene@gmail.com");
    });
  });

  describe("getName", () => {
    it("should return the name of the employee", () => {
      let name = "Gene";
      let id = 1;
      let email = "Gene@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
      let employeeName = employee.getName()
      //Assert
      expect(name).toEqual(employeeName);
    });
  });
  describe("getId", () => {
    it("should return the id of the employee", () => {
      let name = "Gene";
      let id = 1;
      let email = "Gene@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
      let employeeId = employee.getId();
      //Assert
      expect(id).toEqual(employeeId);
    });
  });
  describe("getEmail", () => {
    it("should return the email of the employee", () => {
      let name = "Gene";
      let id = 1;
      let email = "Gene@gmail.com";
      //Act
      let employee = new Employee(name, id, email);
      let employeeEmail = employee.getEmail();
      //Assert
      expect(email).toEqual(employeeEmail);
    });
  });
  describe("getRole", () => {
    it("should return Employee when getRole is called ", () => {
      //Arrange
      // Arrange
      let name = "Gene";
      let id = 1;
      let email = "Gene@gmail.com";
      let employee = new Employee(name, id, email);

      //Act
      let role = employee.getRole();

      //Assert
      expect(role).toEqual("Employee");
    });
  });
});
