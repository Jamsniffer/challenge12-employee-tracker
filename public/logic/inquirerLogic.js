function viewDepartments() {
    db.findDepartments().then(([data]) => {
        console.table(data)
    }).then(() => start())
}

function viewRoles() {
    db.findRoles().then(([data]) => {
        console.table(data)
    }).then(() => start())
}

function viewEmployees() {
    db.findEmployees().then(([data]) => {
        console.table(data)
    }).then(() => start())
}

function newDepartment() {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What department would you like to add?'

    }).then((res) => {
        db.createDepartment(res)
    }).then(() => start())
};

function newRole() {
    db.findDepartments().then(([data]) => {
        const deptChoices = data.map(({ id, name }) => ({
            name: name,
            value: id
        }));


        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the new Role you would like to add?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary you would like to add?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'What is the new Role you would like to add?',
                choices: deptChoices
            }
        ]).then((res) => {
            db.createRole(res)
        }).then(() => start())
    })

};

function newEmployee() {
    db.findRoles().then(([data]) => {
        const roleChoice = data.map(({ id, title }) => ({
            name: title,
            value: id
        }));

        db.findEmployees().then(([data]) => {
            const managerId = data.map(({ id, first_name, last_name }) => ({
                name: `${first_name} ${last_name}`,
                value: id
            }));

            inquirer.prompt([

                {
                    type: 'input',
                    name: 'first_name',
                    message: 'New employees first name?'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'New employees last name?'
                },
                {
                    type: 'list',
                    name: 'role_id',
                    message: 'Please select a role for the new employee.',
                    choices: roleChoice
                },

            ]).then((res) => {
                db.createEmployee(res)
            }).then(() => start())

        })
    });

};

function updateEmployeeRole() {


    db.updateRole().then(([data]) => {
        console.table(data)
    }).then(() => start())
}



module.exports = { viewDepartments, viewRoles, viewEmployees, newDepartment, newRole, newEmployee, updateEmployeeRole }