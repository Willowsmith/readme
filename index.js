// TODO: Include packages needed for this application
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = ['What is the problem being solved?', 'What languages are being used?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', process.argv[2], err) =>
    err ? console.error(err) : console.log('Success!')
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
