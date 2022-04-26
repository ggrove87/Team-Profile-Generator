const Engineer = require("../lib/Engineer");

describe("Engingeer", () => {
    describe("Initialization", () => {
      it("should set the values of name, id, email, and github when i set them.", () => {
        // Arrange
        let name = "Reniel";
        let id = 1;
        let email = "Reniel@gmail.com";
        let github = "ggrove87";
        //Act
        let engingeer = new Engineer(name, id, email, github);
  
        //Assert
        expect(engingeer.name).toEqual("Reniel");
        expect(engingeer.id).toEqual(1);
        expect(engingeer.email).toEqual("Reniel@gmail.com");
        expect(engingeer.github).toEqual("ggrove87");
      });
    });
    describe("getGithub", () => {
        it("should return the github username of the Engineer", () => {
          let name = "Reniel";
          let id = 1;
          let email = "Reniel@gmail.com";
          let github = "ggrove87";
          //Act
          let engineer = new Engineer(name, id, email, github);
          let engineerGithub = engineer.getGithub();
          //Assert
          expect(github).toEqual(engineerGithub);
        });
      });
      describe("getRole", () => {
        it("should return Engineer when getRole is called ", () => {
          //Arrange
          // Arrange
          let name = "Reniel";
          let id = 1;
          let email = "Reniel@gmail.com";
          let github = "ggrove87";
          let engineer = new Engineer(name, id, email, github);
    
          //Act
          let role = engineer.getRole();
    
          //Assert
          expect(role).toEqual("Engineer");
        });
      });
});