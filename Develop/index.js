// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');

const generateReadMe = ({ title, description, installation, usage, contributors, tests, license, githubname, email}) =>
// TODO: Create an array of questions for user input
const questions = [] => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
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
        name: 'contributors',
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
        name: 'githubname',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
    ]);

  .then((answers) => {
    const readMeContent = generateReadMe(answers);
  })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        if (err) {
            return console.log(err);
                }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
}