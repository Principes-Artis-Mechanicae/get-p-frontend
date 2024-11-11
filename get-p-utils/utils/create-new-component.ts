import { program } from "commander";
import { createSkeletonCode } from "./create-skeleton-code";
import { browseFileSystem } from "./browse-file-system";

export async function createNewComponent(baseDir: string) {
    browseFileSystem("Select Package to Create", baseDir, async () => {
        await createSkeletonCode();
    });
    program.parse(process.argv);
}
