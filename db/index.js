const inquirer = require('inquirer');
const connection = require('../config/connection');


class Data {
    constructor(connection){
        this.connection = connection
    }

    findDepartments(){
        return this.connection.promise().query('SELECT * FROM department;')
    }
    
    findRoles(){
        return this.connection.promise().query('SELECT role.title, role.id, role.salary, department.name AS departmentName FROM role LEFT JOIN department ON role.department_id = department.id;')
    }
    
    findEmployees(){
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, role.title , role.salary, department.name AS departmentName, CONCAT(manager.first_name, " ", manager.last_name) as Manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee AS manager ON manager.id = employee.manager_id;')
        
    }
    
    createDepartment(name){
        return this.connection.promise().query(`INSERT INTO department set ?`, name)
      
    }
    
    createRole(role){
        return this.connection.promise().query(`INSERT INTO role set ?`, role)
    }
    
    createEmployee(employee){
        return this.connection.promise().query(`INSERT INTO employee set ?`, employee)
    }
    
    updateRole(newRole){
        return this.connection.promise().query(`ALTER TABLE employee ALTER COLUMN role.title, role.salary, department.name, CONCAT(manager.first_name, " ", manager.last_name) as Manager `, newRole)
    }
};

module.exports =  new Data(connection)