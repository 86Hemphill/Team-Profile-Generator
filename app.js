const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employees = [];
const filename = "./output/team.html";

async function init() {
  try {
    const q = await inquirer.prompt([
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

    if (q.role.toLowerCase() === "engineer") {
      let engQuestions = await inquirer.prompt([
        {
          type: "input",
          message: "What is the employee's GitHub user name?",
          name: "github",
        },
      ]);
      const engineer = new Engineer(q.name, q.id, q.email, engQuestions.github);
      employees.unshift(engineer);
    } else if (q.role.toLowerCase() === "intern") {
      let intQuestions = await inquirer.prompt([
        {
          type: "input",
          message: "What school does the intern attend?",
          name: "school",
        },
      ]);
      const intern = new Intern(q.name, q.id, q.email, intQuestions.school);
      employees.unshift(intern);
    } else if (q.role.toLowerCase() === "manager") {
      let manQuestions = await inquirer.prompt([
        {
          type: "input",
          message: "What is the Manager's office number?",
          name: "officeNumber",
        },
      ]);
      const manager = new Manager(
        q.name,
        q.id,
        q.email,
        manQuestions.officeNumber
      );
      employees.unshift(manager);
    }

    let addAnother = await inquirer.prompt({
      type: "confirm",
      message: "Would you like to add another employee?",
      name: "add",
    });

    const addemployee = addAnother.add;
    if (addemployee) {
      init();
      return;
    }

    console.log(employees);
    const team = render(employees);
    fs.writeFile(outputPath, team, function () {
      console.log("Successfully generated team profile page!");
    });
    
  } catch (err) {
    console.log(err);
  }
}

init();

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.