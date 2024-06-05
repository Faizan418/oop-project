#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright("\n>>>>>>>>>>>>. . WELCOME . .<<<<<<<<<<<<!\n"));
// Creating Student Class...
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
// Creating Person Class...
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const Persons = new Person();
const programStart = async (persons) => {
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: (chalk.bold.magentaBright("Whom would you like to interact with?")),
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log(chalk.bold.magentaBright("\nYou approach the staff room...\nPlease feel free to ask an question...\n"));
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: ("Enter the student's name you wish to engage with:")
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.bold.blueBright(`Hello i am ${name.name}... \n\tNice to meet you...!\n`));
                console.log(chalk.bold.gray("New student added\n"));
                console.log(chalk.bold.blueBright("Current Student List:"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.bold.blueBright(`Hello i am ${student.name}... \n\tNice to see you agaon...!\n`));
                console.log(chalk.bold.blueBright("Existing Student List:"));
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log(chalk.bold.redBright("Exiting the program...\n\tHave a great day...!\n"));
            process.exit();
        }
    } while (true);
};
programStart(Persons);
