const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown');

const queries = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What would you like for your description?",
  },
];

function writeFile() {
  inquirer
    .prompt(queries)
    .then((userResponse) => {
        fs.writeFileSync('ReadMe.md', userResponse, data);
    })

}

writeFile();