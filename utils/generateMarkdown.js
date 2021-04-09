// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const index = require('../index')

function renderLicenseBadge(userResponse) {
  if (userResponse.license == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (userResponse.license == 'Eclipse') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (userResponse.license == 'IBM') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (userResponse.license == 'MIT') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (userResponse.license == 'BSD 3-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (userResponse.license == 'BSD 3-Clause') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


function generateMarkdown(userResponse) {
  return `# ${userResponse.title}
${renderLicenseBadge(userResponse)}
  
## Description
${userResponse.description}

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

## Installation
${userResponse.installation}

## Usage
${userResponse.usage}

## License 
${userResponse.license}
${renderLicenseBadge(userResponse)}

## Contributing
${userResponse.contributing}

## Tests
${userResponse.tests}

## Questions
Feel free to email me at with any questions.
My Name: ${userResponse.name}
Email: ${userResponse.questions}

  `;
}

module.exports = generateMarkdown;
