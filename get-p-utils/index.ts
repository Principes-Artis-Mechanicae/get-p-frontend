import inquirer from "inquirer";
import { Command } from "commander";
import { choices, GET_P_ADMIN, GET_P_CLIENT } from "./constants/choics";

import { createNewComponent } from "./utils/create-new-component";

const program = new Command();

program
    .name("get-p-cli")
    .description("GETP Frontend Utility Command Line Interface")
    .version("1.0.0")
    .action(async () => {
        console.clear();

        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: "select optoion",
                choices: choices,
            },
        ]);
        switch (answer.select) {
            case GET_P_CLIENT:
                await createNewComponent("get-p-client");
                break;
            case GET_P_ADMIN:
                await createNewComponent("get-p-admin");
                break;
        }
    });

program.parse(process.argv);
