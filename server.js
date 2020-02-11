const inquirer = require('inquirer');
const mysql = require('mysql')
const cTable = require('console.table');
const logo = require('asciiart-logo');

console.log(
    logo({
        name: 'Eat-Da-Burger',
        font: 'Speed',
        lineChars: 10,
        padding: 2,
        margin: 3,
        borderColor: 'blue',
        logoColor: 'bold-red',
        textColor: 'red',
    })
    .render()
);

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "coder2020",
    database: "employeeTracker_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
});