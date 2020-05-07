const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

async function init() {
    try {
      const questions = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's full name?",
            name: "name",
          },
          {
            type: "input",
            message: "What is the employee's id #?",
            name: "id",
          },
          {
            type: "input",
            message: "What is the employee's email?",
            name: "email",
          },
          {
            type: "input",
            message: "What is the employee's company role?",
            name: "role",
          },
        ]);
        if (questions.role.toLowerCase() === "engineer") {
            console.log("engineer");
            
        } else if (questions.role.toLowerCase() === "intern") {
            console.log("intern");
            
        } else if (questions.role.toLowerCase() === "manager") {
            console.log("manager")
            
        }
        console.log(questions);
        // const userInfo = await app.getUser(questions.username);
        // questions.email = userInfo.email;
        // questions.profilePic = userInfo.avatar_url;
        // const answers = generateMarkdown(questions);
        // fs.writeFile(filename, answers, function () {
        //   console.log("Successfully generated README.md file!");
        // });
      } catch (err) {
        console.log(err);
      }
    }
    
    init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// ​Break
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// ​Break
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// ​Break
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// ​Break
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```