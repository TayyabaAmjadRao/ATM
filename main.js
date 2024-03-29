#! /usr/bin/env node
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "Welcome Tayyaba Rao",
    },
    {
        type: "number",
        name: "pinCode",
        message: "Enter your 4 digit pinCode"
    },
    //creating listing and withdraw method
    {
        type: "list",
        name: "accountType",
        message: "Select your account type",
        choices: ["current", "saving"]
    },
    //              transition type
    {
        type: "list",
        name: "transitionType",
        message: "Select your transition type",
        choices: ["cash", "withdrawl"]
    },
    //selected amount
    {
        type: "list",
        name: "amount",
        message: ["Select your amount"],
        choices: [1000, 2000, 5000, 10000],
        when(user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user) {
            return user.transitionType === "withdrawl";
        }
    }
]);
//final slip
if (user.pinCode) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    const enteramount = user.account;
    if (enteramount <= balance) {
        const remaining = balance - enteramount;
        console.log(`You have withdrawl rupees ${enteramount} and you have remaining balance ${remaining}`);
    }
}
