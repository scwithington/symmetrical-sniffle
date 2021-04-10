
// If there is no license, return an empty string
function renderLicenseBadge(userResponse) {
  if (userResponse.license == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (userResponse.license == 'Eclipse') {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (userResponse.license == 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (userResponse.license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (userResponse.license == 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (userResponse.license == 'BSD 3-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (userResponse.license == 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else if (userResponse.license == 'None') {
    return ` `;
  }
};


// If there is no license, return an empty string
function renderLicenseLink(userResponse) {
  if (userResponse.license == 'Apache 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (userResponse.license == 'Eclipse') {
    return `(https://opensource.org/licenses/EPL-1.0)`;
  } else if (userResponse.license == 'IBM') {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  } else if (userResponse.license == 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (userResponse.license == 'Mozilla') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (userResponse.license == 'BSD 3-Clause') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (userResponse.license == 'Unlicense') {
    return `(http://unlicense.org/)`;
  } else if (userResponse.license == 'None') {
    return ` `;
  }
};


function generateMarkdown(userResponse) {
  return `# ${userResponse.title}
${renderLicenseBadge(userResponse)}
  
## Description
${userResponse.description}

- - - - - - - - - - - - - - - - - -

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

- - - - - - - - - - - - - - - - - -

## Installation
${userResponse.installation}

## Usage
${userResponse.usage}

## License 
${userResponse.license}
${renderLicenseLink(userResponse)}

## Contributing
Github: ${userResponse.contributing}

## Tests
${userResponse.tests}

## Questions
Feel free to email me at with any questions.

Author: ${userResponse.name}
Email: ${userResponse.questions}

  `;
}

module.exports = generateMarkdown;
