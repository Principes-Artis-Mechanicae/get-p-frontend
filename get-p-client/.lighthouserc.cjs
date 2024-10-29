module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm run start",
            url: ["http://localhost:5173"],
            numberOfRuns: 3,
            isSinglePageApplication: true,
        },
        upload: {
            target: "filesystem",
            outputDir: "lighthouse",
            reportFilenamePattern: "report%%PATHNAME%%-%%DATETIME%%.%%EXTENSION%%",
        },
    },
};
