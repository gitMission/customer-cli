#!/usr/bin/env node
const program = require('commander')
const { prompt } = require('inquirer')
const { addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers } = require('./index')

// Customer questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer first name: '
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer last name: '
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer phone: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer email: '
    }
]


program
    .version('1.0.0')
    .description('Client Management System')

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a customer')
//     .action(( firstname, lastname, phone, email ) => {
//         addCustomer( { firstname, lastname, phone, email } );
//     });

//Add customer
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action( () => {
        prompt(questions)
            .then(answers => addCustomer(answers));
    });

//Find customer
program
    .command('find <name>')
    .alias('f')
    .description('find a customer')
    .action( name => findCustomer(name) );

//Update customer
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action( _id => {
        prompt(questions)
            .then(answers => updateCustomer(_id, answers));
    });

//Remove customer
program
    .command('remove <_id>')
    .alias('r')
    .description('remove a customer')
    .action( _id => removeCustomer(_id) );

//List customer
program
    .command('list')
    .alias('l')
    .description('list all customers')
    .action( () => listCustomers() );



program.parse(process.argv)