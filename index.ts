import inquirer from "inquirer"
let todo : string[] = [];
let condition = true;


while(condition){
let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more todo?",
            default: "false"
        }
    ]
);
todo.push(addTask.todo);
condition = addTask.addMore
console.log(todo)
}