import { program } from "commander";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

export async function browseFileSystem(description: string, baseDir: string, cb: (...args: any[]) => any) {
    program.description(description).action(async () => {
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
                await cb();
                break;
            } else {
                process.chdir(answer.selectedPath);
            }
        }
    });
}
