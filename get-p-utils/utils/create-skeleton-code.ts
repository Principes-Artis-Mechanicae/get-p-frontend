import { program } from "commander";
import fs from "fs/promises";
import inquirer from "inquirer";
import { toPascalCase } from "./toPascalCase";
import {
    createIndexFileContent,
    createStoryBookFileContent,
    createStyleFileContent,
    createTestFileContent,
} from "../constants/content";

export async function createSkeletonCode() {
    program.description("Create Skeleton Code").action(async () => {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Component Name?",
            },
        ]);

        const componentName = answer.name;
        const componentNamePascalCase = toPascalCase(answer.name);

        console.log("Creating Directory...");
        await fs.mkdir(componentName);
        process.chdir(componentName);

        console.log("Creating Files...");
        await fs.writeFile("index.style.ts", createStyleFileContent());
        await fs.writeFile("index.tsx", createIndexFileContent(componentNamePascalCase));
        await fs.writeFile("index.story.tsx", createStoryBookFileContent(componentNamePascalCase));
        await fs.writeFile("index.test.tsx", createTestFileContent(componentNamePascalCase));
    });
    program.parse(process.argv);
}
