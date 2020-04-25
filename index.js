const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");

// -- They give us an ARRAY called 'questions' What could we do with this (?) -- Put all the questions we want to ask in one array declared eary and then pass it into the inquirer prompt... research other inquirer documentation//

// this question array with be for the functions, treat each question as a function.


/*
“What is your GitHub username?”
“What is your email?”
“the URL to your project?”
“What is your project’s name?”
“Please write a short description of your project”
“What kind of license should your project have?” - This one should be a list
“What command should be run to install dependencies?”
“What command should be run to run tests?”
“What does the user need to know about using the repo?”
“What does the user need to know about contributing to the repo?”
*/


  const questions = [
  {
    type: "input",
    name: "userName",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "url",
    message: "What is the URL to your project?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project."
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "GNU General Public License v3.0", 
      "MIT License", 
      "Apache License 2.0",
      "none" 
    ]
  }
];

inquirer.prompt(questions)
.then( ({ userName, email, url, title, description, license}) => { 

  // console.log(userName);
  // console.log(email);
  // console.log(url);
  // console.log(title);
  // console.log(description);
  // console.log(license);

  const queryUrl = `https://api.github.com/users/${userName}`;
  axios
  .get(queryUrl)
  .then(resp => {
    console.log(resp.data.avatar_url)
  })


  //the response strigify if needed...
  // console.log(JSON.stringify(answers, null, '  '))

  //axios for grabbing github info
  
});
// -- They give us a writeToFile() FUNCTION, Looks like we may need to read/write to a file. What BUILT-IN node module will help us out with this (?) -- // 

// function writeToFile(fileName, data) {
// }

// -- This is a fairly common programming construct. They are just giving us a FUNCTION to INITIALIZE or SETUP our project parameter. It's also where we usually kick off our project flow -- //

// function init() {

// }

// -- We DEFINED our INITALIZATION FUNCTION above, here we are just kicking off (running) our program. -- // 

// init();
