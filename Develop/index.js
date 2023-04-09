// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [] => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'project_title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
      },
      {
        type: 'list',
        name: 'contributing',
        message: 'List all contributors',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter tests performed',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
