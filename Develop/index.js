// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

   inquirer.prompt([
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
        type: 'input',
        name: 'contributors',
        message: 'List all contributors',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter tests performed',
      },
      {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['Apache 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'none'],
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
    ])

  .then((answers) => {
    fs.writeFile("README.md", generateMarkdown(answers),err => {
      if (err) console.log (err)
      console.log ("file successfully created")
    })
  })


// TODO: Create a function to write README file
