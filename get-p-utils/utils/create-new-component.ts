import fs from "fs";
import path from "path";

import inquirer from "inquirer";
import { program } from "commander";
import { createSkeletonCode } from "./create-skeleton-code";

export async function createNewComponent(baseDir: string) {
    program.description("Select Package to Create").action(async () => {
        process.chdir(path.join("..", baseDir, "src"));

        while (true) {
            const currentDir = process.cwd();

            const items = fs.readdirSync(currentDir).map((item) => {
                return {
                    name: item,
                    value: path.join(currentDir, item),
                };
            });
            items.unshift({ name: "<< Select Current Directory >>", value: path.resolve(currentDir) });

            const answer = await inquirer.prompt({
                type: "list",
                name: "selectedPath",
                message: "Select Directory",
                choices: items.filter((item) => {
                    return fs.statSync(item.value).isDirectory() && !item.name.startsWith(".");
                }),
            });

            if (answer.selectedPath === process.cwd()) {
                await createSkeletonCode();
                break;
            } else {
                process.chdir(answer.selectedPath);
            }
        }
    });

    program.parse(process.argv);
}
