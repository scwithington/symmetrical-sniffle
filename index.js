// json packages
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
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage instructions.'
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose a license or leave blank.',
    choices: [
      'Apache 2.0',
      'Eclipse',
      'IBM',
      'MIT',
      'Mozilla',
      'BSD 3-Clause',
      'Unlicense',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Your GitHub username:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Testing information:'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Submit your email for user questions.'
  },
];

function writeFile() {
  inquirer
    .prompt(queries)
    .then((userResponse) => {
        fs.writeFileSync('ReadMe.md', markdown(userResponse), function(err) {
          if (err) throw err;
        });
    })
    .catch((err) => {
      console.log(err);
    })
}

// initial function call
writeFile();