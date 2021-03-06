const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should set the values of name, id, email, and school when i set them.", () => {
        // Arrange
        let name = "Gene";
        let id = 1;
        let email = "Gene@gmail.com";
        let school = "Northwestern";
        //Act
        let intern = new Intern(name, id, email, school);
  
        //Assert
        expect(intern.name).toEqual("Gene");
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual("Gene@gmail.com");
        expect(intern.school).toEqual("Northwestern");
      });
    });
    describe("getSchool", () => {
        it("should return the school of the Intern", () => {
          let name = "Gene";
          let id = 1;
          let email = "Gene@gmail.com";
          let school = "Northwestern";
          //Act
          let intern = new Intern(name, id, email, school);
          let internSchool = intern.getSchool();
          //Assert
          expect(school).toEqual(internSchool);
        });
      });
      describe("getRole", () => {
        it("should return Intern when getRole is called ", () => {
          //Arrange
          // Arrange
          let name = "Gene";
          let id = 1;
          let email = "Gene@gmail.com";
          let school = "Northwestern";
          let intern = new Intern(name, id, email, school);
    
          //Act
          let role = intern.getRole();
    
          //Assert
          expect(role).toEqual("Intern");
        });
      });
});