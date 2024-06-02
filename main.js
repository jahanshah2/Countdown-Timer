#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const response = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please Enter The Amount Of Second",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter Valid Number";
        }
        else if (input > 60) {
            return "Please Enter Number is Under 60";
        }
        else {
            return true;
        }
    }
});
let input = response.userInput;
function startTime(valu) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + valu);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time Has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
