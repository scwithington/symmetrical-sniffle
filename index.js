const fs = require("fs");
const inquirer = require("inquirer");

const queries = [
  {
    type: "input",
    name: "Name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "Project Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What would you like for your description?",
  },
];

function init() {
  inquirer
    .prompt(queries)
    .then((userResponse) => {
        fs.writeFile('ReadMe.md')
    })
}
