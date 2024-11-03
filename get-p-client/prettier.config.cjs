module.exports = {
    ...require("../prettier.config.cjs"),

    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: [
        "^react",
        "<THIRD_PARTY_MODULES>",

        "^(@getp/apps)(.*)$",
        "^(@getp/common)(.*)$",
        "^(@getp/components)(.*)$",
        "^(@getp/pages)(.*)$",

        "^(@getp/hooks)(.*)$",
        "^(@getp/services)(.*)$",
        "^(@getp/store)(.*)$",

        "^(@getp/assets)(.*)$",
        "^(@getp/styles)(.*)$",

        "^(.*)/(.*)$",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: false,
};
