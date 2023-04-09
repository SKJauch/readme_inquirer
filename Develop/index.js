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
      {
        type: 'checkbox',
        message: 'Choose a license',
        name: 'license',
        choices: ['Apache 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0'],
      },
      {
        type: 'input',
        name: 'github_name',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
