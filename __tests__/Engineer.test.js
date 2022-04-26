const Engineer = require("../lib/Engineer");

describe("Engingeer", () => {
    describe("Initialization", () => {
      it("should set the values of name, id, email, and github when i set them.", () => {
        // Arrange
        let name = "Reniel";
        let id = 1;
        let email = "Reniel@gmail.com";
        let gitHub = "ggrove87";
        //Act
        let engingeer = new Engingeer(name, id, email, gitHub);
  
        //Assert
        expect(engingeer.name).toEqual("Reniel");
        expect(engingeer.id).toEqual(1);
        expect(engingeer.email).toEqual("Reniel@gmail.com");
        expect(engingeer.gitHub).toEqual("ggrove87");
      });
    });

});