const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should set the values of name, id, email, and office number when i set them.", () => {
        // Arrange
        let name = "Gene";
        let id = 1;
        let email = "Gene@gmail.com";
        let officeNumber = 1;
        //Act
        let manager = new Manager(name, id, email, officeNumber);
  
        //Assert
        expect(manager.name).toEqual("Gene");
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual("Gene@gmail.com");
        expect(manager.officeNumber).toEqual(1);
      });
    });
      describe("getRole", () => {
        it("should return Manager when getRole is called ", () => {
          //Arrange
          // Arrange
          let name = "Gene";
          let id = 1;
          let email = "Gene@gmail.com";
          let officeNumber = 1;
          let manager = new Manager(name, id, email, officeNumber);
    
          //Act
          let role = manager.getRole();
    
          //Assert
          expect(role).toEqual("Manager");
        });
      });
});