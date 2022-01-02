const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2/promise');

 /*db.connect(err => {
   if (err) throw err;
   console.log('Database connected.');
 });*/


const promptUser = async function() {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'choiceList',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update an Employee Role', 'Exit']
    }
  ])
    .then( async choiceCheck => {

      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'stormlight',
        database: 'employee_tracker'
      })

      if (choiceCheck.choiceList === 'View All Departments') {

        // Print Departments
        const [results] = await connection.execute(
          `SELECT Department_name AS 'Department Name' 
          FROM departments `);
        const table = cTable.getTable(results);
        console.log(table);

        // Return to choice list
        promptUser();

      } else if (choiceCheck.choiceList === 'View All Roles') {

        // Print Roles
        const [results] = await connection.execute(
        `SELECT Title, Salary, Department_name AS 'Department Name' 
        FROM Roles 
        INNER JOIN Departments ON Department_id=Departments.Id`);
        const table = cTable.getTable(results);
        console.log(table);

        // Return to choice list
        promptUser();

      } else if (choiceCheck.choiceList === 'View All Employees') {

        // Print Employees
        const [results] = await connection.execute(
        `SELECT Employees.Id, 
                Employees.First_name AS 'First Name', 
                Employees.Last_name AS 'Last Name', 
                Roles.Title, 
                Departments.Department_name AS 'Department Name', 
                Roles.Salary, 
                CONCAT(Manager.First_name,' ',Manager.Last_name) AS 'Manager Name'
        FROM Employees 
        INNER JOIN Roles ON Roles.Id = Employees.Role_id 
        INNER JOIN Departments ON Departments.Id = Roles.Department_id
        LEFT JOIN Employees as Manager ON Manager.Id = Employees.Manager_id`);
        const table = cTable.getTable(results);
        console.log(table);

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
        console.log('Goodbye!')
        return;
      }
    });
}

promptUser();