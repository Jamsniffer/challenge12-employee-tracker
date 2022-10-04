const { default: inquirer } = require('inquirer');
const inquirer = require('inquirer');
const db =require('./db');

function start() {

    const jobsArr = ['HR','IT', 'ADMIN'];

    inquirer.prompt({
        type: 'list',
        name: 'userInput',
        message: 'what would you like to do?',
        Options: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'quit',

        ]
    })
}