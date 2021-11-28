const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter your full name.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email.',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter a step, by step instruction of how to get the development running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the instructions for use.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the License you wish to use.',
        choices: ['MIT', 'Mozilla Public License', 'The Unlicense', 'Eclipse Public License']
      },
  ]).then((answers) => {
    console.log(answers)
        fs.writeFile(`${answers.title}.md`, generateMarkdown(answers), (err) => 
        err ? console.error(err) : console.log(`Successfully wrote to ${answers.title}.md`)
        );
        console.log(answers)
  })

    