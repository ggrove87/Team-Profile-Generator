const { func } = require("assert-plus");
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// prompts the user to enter the manager information and which, if any, additional team members to add
inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the team manager's name?",
      name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerID',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    }, 
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOfficeNumber',
    },
    {
        type: 'list',
        choices: ["Engineer", "Intern","I don't want to add any more team members" ],
        message: 'Which type of team member would you like to add?',
        name: 'addAdditionalTeamMembers',
    },
  ])
  .then((response) => {
      createManager(response),
      determineNextAction(response)
  });

//   function for determining which function should be called next based on the user response
  function determineNextAction(userSelection) {
      if(userSelection.addAdditionalTeamMembers === "Engineer") {
          renderEngineerQuestions();
      } else if (userSelection.addAdditionalTeamMembers === "Intern") {
          renderInternQuestions();
      } else {
          renderHTML(userSelection);
      }
  }

// function for generating the engineer questions
  function renderEngineerQuestions() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is your engineers's name?",
        name: 'engineerName',
      },
      {
          type: 'input',
          message: "What is your engineers's id?",
          name: 'engineerID',
      },
      {
          type: 'input',
          message: "What is your engineers's email?",
          name: 'engineerEmail',
      }, 
      {
          type: 'input',
          message: "What is your engineers's GitHub username?",
          name: 'engineerGitHub',
      },
      {
          type: 'list',
          choices: ["Engineer", "Intern","I don't want to add any more team members" ],
          message: 'Which type of team member would you like to add?',
          name: 'addAdditionalTeamMembers',
      },
    ])
    .then((response) => {
        determineNextAction(response.addAdditionalTeamMembers),
        createEngineer(response)
    });
  }

//   Function for generating the intern questions
  function renderInternQuestions() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is your Intern's name?",
        name: 'InternName',
      },
      {
          type: 'input',
          message: "What is your Intern's id?",
          name: 'InternID',
      },
      {
          type: 'input',
          message: "What is your Intern's email?",
          name: 'InternEmail',
      }, 
      {
          type: 'input',
          message: "What is your Intern's school?",
          name: 'InternSchool',
      },
      {
          type: 'list',
          choices: ["Engineer", "Intern","I don't want to add any more team members" ],
          message: 'Which type of team member would you like to add?',
          name: 'addAdditionalTeamMembers',
      },
    ])
    .then((response) => {
        determineNextAction(response.addAdditionalTeamMembers),
        createIntern(response)
    });
  }

function createManager(teamManager){
  let newManager = new Manager(teamManager.managerName, teamManager.managerID, teamManager.managerEmail, teamManager.managerOfficeNumber)
}
function createEngineer(engineer){
  let newEngineer = new Engineer(engineer.engineerName, engineer.engineerID, engineer.engineerEmail, engineer.engineerGitHub)
}
function createIntern(intern){
  let newIntern = new Intern(intern.internName, intern.internID, intern.internEmail, intern.internSchool)
}

function renderHTML(){
    fs.writeFile("./dist/team.html",
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <h1>My Team</h1>
    </body>
    </html>`,
    (err) => (err ? console.error(err): console.log("Team page successfully generated!"))) 
}