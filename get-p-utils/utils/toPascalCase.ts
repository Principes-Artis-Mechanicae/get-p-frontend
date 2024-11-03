export function toPascalCase(str: string) {
    return str.replace(/(^\w|[\s_-]\w)/g, (match) => match.replace(/[\s_-]/, "").toUpperCase());
}
