// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      break;
    case 'Mozilla Public License':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
      break;
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
      break;
    case 'Eclipse Public License':
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
      break;
    default:
      return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://opensource.org/licenses/MIT)]`;
      break;
    case 'Mozilla Public License':
      return `[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)]`;
      break;
    case 'The Unlicense':
      return `[![License: Unlicense](http://unlicense.org/)]`;
      break;
    case 'Eclipse Public License':
      return `[![License](https://opensource.org/licenses/EPL-1.0)]`;
      break;
    default:
      return "";
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ name, email, github, title, license, description, install, usage }) {
  return ` 
  # ${title}
  ${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}
  
  ## Table Of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions?)
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## Contributing

  ## License
  
  ${renderLicenseSection(license)}
  
  ## Questions?
  
  Contact Me, ${name} at...
  [Github](https://github.com/${github}) 
  [Email](${email})
`;
}

module.exports = generateMarkdown;