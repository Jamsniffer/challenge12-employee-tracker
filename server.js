const inquirer = require('inquirer');
const db = require('./db');
require('dotenv').config();
require('console.table');
const { viewDepartments, viewRoles, viewEmployees, newDepartment, newRole, newEmployee, updateEmployeeRole } = require('./public/logic/inquirerLogic')

function start() {

    const jobsArr = ['HR', 'IT', 'ADMIN'];

    inquirer.prompt({
        type: 'list',
        name: 'userInput',
        message: 'what would you like to do?',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'quit',
        ]

    }).then((res) => {
        switch (res.userInput) {

            case 'view all departments':
                viewDepartments();
                break;
            case 'view all roles':
                viewRoles();
                break;
            case 'view all employees':
                viewEmployees();
                break;
            case 'add a department':
                newDepartment()
                break;
            case 'add a role':
                newRole()
                break;
            case 'add an employee':
                newEmployee()
                break;
            case 'update an employee role':
                updateRole()
                break;
            case 'update an employee role':
                removeEmployee()
                break;
            default:
                process.exit()
        }
    })
    .catch(err => {
        console.log(err.message);
    });
}

start();