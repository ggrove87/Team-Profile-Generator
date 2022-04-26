const { func } = require("assert-plus");
const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
let employees = [];

// prompts the user to enter the manager information and which, if any, additional team members to add
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "managerID",
    },
    {
      type: "input",
      message: "What is the team manager's email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "managerOfficeNumber",
    },
    {
      type: "list",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
      message: "Which type of team member would you like to add?",
      name: "addAdditionalTeamMembers",
    },
  ])
  .then((response) => {
    createManager(response), determineNextAction(response);
  });

//   function for determining which function should be called next based on the user response
function determineNextAction(userSelection) {
  if (userSelection.addAdditionalTeamMembers === "Engineer") {
    renderEngineerQuestions();
  } else if (userSelection.addAdditionalTeamMembers === "Intern") {
    renderInternQuestions();
  } else {
    renderHTML(employees);
  }
}

// function for generating the engineer questions
function renderEngineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your engineers's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is your engineers's id?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is your engineers's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is your engineers's GitHub username?",
        name: "engineerGitHub",
      },
      {
        type: "list",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
        message: "Which type of team member would you like to add?",
        name: "addAdditionalTeamMembers",
      },
    ])
    .then((response) => {
      createEngineer(response), determineNextAction(response);
    });
}

//   Function for generating the intern questions
function renderInternQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is your Intern's id?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is your Intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is your Intern's school?",
        name: "internSchool",
      },
      {
        type: "list",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
        message: "Which type of team member would you like to add?",
        name: "addAdditionalTeamMembers",
      },
    ])
    .then((response) => {
      createIntern(response), determineNextAction(response);
    });
}

function createManager(teamManager) {
  let newManager = new Manager(
    teamManager.managerName,
    teamManager.managerID,
    teamManager.managerEmail,
    teamManager.managerOfficeNumber
  );
  employees.push(newManager);
}
function createEngineer(engineer) {
  let newEngineer = new Engineer(
    engineer.engineerName,
    engineer.engineerID,
    engineer.engineerEmail,
    engineer.engineerGitHub
  );
  employees.push(newEngineer);
}
function createIntern(intern) {
  let newIntern = new Intern(
    intern.internName,
    intern.internID,
    intern.internEmail,
    intern.internSchool
  );
  employees.push(newIntern);
}

function renderHTML(array) {
  fs.writeFile(
    "./dist/team.html",
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
        <div id="employeeList">
        ${buildCards(array)}
        </div>
    </body>
    </html>`,
    (err) =>
      err
        ? console.error(err)
        : console.log("Team page successfully generated!")
  );
}

function buildCards(array) {
  let cardString = "";
  for (let i = 0; i < array.length; i++) {
     if(array[i].getRole() === "Manager") {
  cardString += 
  `<div class="card">
            <h5 class="card-title">${array[i].getRole()}</h5>
            <img src="" alt="managerIcon">
            <div class="card-body">
                
                <p id="manager-name">Name: ${array[i].getName()}</p>
                <p id="manager-id">ID: ${array[i].getId()}</p>
                <p id="manager-email">email: ${array[i].getEmail()}</p>
                <p id="manager-office">Office Number: ${array[i].officeNumber}</p>
            </div>
        </div>`;} else if(array[i].getRole() === "Engineer"){
            cardString +=
            `<div class="card">
            <h5 class="card-title">${array[i].getRole()}</h5>
            <img src="" alt="engineerIcon">
            <div class="card-body">
                
                <p id="engineer-name">Name: ${array[i].getName()}</p>
                <p id="engineer-id">ID: ${array[i].getId()}</p>
                <p id="engineer-email">email: ${array[i].getEmail()}</p>
                <p id="engineer-gitHub">GitHub Username: ${array[i].github}</p>
            </div>
        </div>`;
        } else if (array[i].getRole() === "Intern") {
            cardString += 
            `<div class="card">
            <h5 class="card-title">${array[i].getRole()}</h5>
            <img src="" alt="internIcon">
            <div class="card-body">
                
                <p id="intern-name">Name: ${array[i].getName()}</p>
                <p id="intern-id">ID: ${array[i].getId()}</p>
                <p id="intern-email">email: ${array[i].getEmail()}</p>
                <p id="intern-office">School: ${array[i].school}</p>
            </div>
        </div>`;
        }
  }

  return cardString;
}
