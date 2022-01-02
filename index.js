const inquirer = require('inquirer');
const db = require('./db/connection');
const cTable = require('console.table');

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
});

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'choiceList',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update an Employee Role', 'Exit']
    }
  ])
    .then(choiceCheck => {
      if (choiceCheck.choiceList === 'View All Departments') {

        // Print Departments
        const sql = `SELECT * FROM departments`;

        // Return to choice list
        promptUser();
      } else if (choiceCheck.choiceList === 'View All Roles') {

        // Print Roles

        // Return to choice list
        promptUser();
      } else if (choiceCheck.choiceList === 'View All Employees') {

        // Print Employees

        // Return to choice list
        promptUser();
      } else if (choiceCheck.choiceList === 'Add Department') {

        // prompt user for department information
        return inquirer.prompt(departmentPrompts)

          // add information to database
          .then(responses => {
            interns.push(new Intern(responses.internName, responses.internId, responses.internEmail, 'Intern', responses.internSchool));
            // Return to choice list
            promptUser();
          });
      } else if (choiceCheck.choiceList === 'Add Role') {

        // prompt user for role information
        return inquirer.prompt(rolePrompts)

          // add information to database
          .then(responses => {
            interns.push(new Intern(responses.internName, responses.internId, responses.internEmail, 'Intern', responses.internSchool));
            // Return to choice list
            promptUser();
          });
      } else if (choiceCheck.choiceList === 'Add Employee') {
        // prompt user for employee information
        return inquirer.prompt(employeePrompts)

          // add information to database
          .then(responses => {
            interns.push(new Intern(responses.internName, responses.internId, responses.internEmail, 'Intern', responses.internSchool));
            // Return to choice list
            promptUser();
          });
      } else if (choiceCheck.choiceList === 'Update an Employee Role') {
        // prompt user for update information
        return inquirer.prompt(updatePrompts)

          // add information to database
          .then(responses => {
            interns.push(new Intern(responses.internName, responses.internId, responses.internEmail, 'Intern', responses.internSchool));
            // Return to choice list
            promptUser();
          });
      } else {
        //once 'Exit' is chosen from the list prompt, end recursion 
        return;
      }
    });
}

