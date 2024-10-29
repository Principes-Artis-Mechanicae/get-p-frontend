import fs from "fs";

// Function to categorize the score based on thresholds
function categorizeScore(metric, value) {
    switch (metric) {
        case "firstContentfulPaint":
            if (value <= 1800) return "Good";
            if (value <= 3000) return "Needs Improvement";
            return "Poor";
        case "largestContentfulPaint":
            if (value <= 2500) return "Good";
            if (value <= 4000) return "Needs Improvement";
            return "Poor";
        case "speedIndex":
            if (value <= 3400) return "Good";
            if (value <= 5800) return "Needs Improvement";
            return "Poor";
        case "cumulativeLayoutShift":
            if (value <= 0.1) return "Good";
            if (value <= 0.25) return "Needs Improvement";
            return "Poor";
        case "totalBlockingTime":
            if (value <= 200) return "Good";
            if (value <= 600) return "Needs Improvement";
            return "Poor";
        case "timeToInteractive":
            if (value <= 3800) return "Good";
            if (value <= 7300) return "Needs Improvement";
            return "Poor";
        default:
            return "Unknown";
    }
}

// Function to extract performance metrics
function extractPerformanceMetrics(lighthouseReport) {
    const { audits } = lighthouseReport;

    const metrics = {
        firstContentfulPaint: {
            title: audits["first-contentful-paint"].title,
            value: audits["first-contentful-paint"].numericValue,
            status: categorizeScore("firstContentfulPaint", audits["first-contentful-paint"].numericValue),
        },
        largestContentfulPaint: {
            title: audits["largest-contentful-paint"].title,
            value: audits["largest-contentful-paint"].numericValue,
            status: categorizeScore("largestContentfulPaint", audits["largest-contentful-paint"].numericValue),
        },
        speedIndex: {
            title: audits["speed-index"].title,
            value: audits["speed-index"].numericValue,
            status: categorizeScore("speedIndex", audits["speed-index"].numericValue),
        },
        cumulativeLayoutShift: {
            title: audits["cumulative-layout-shift"].title,
            value: audits["cumulative-layout-shift"].numericValue,
            status: categorizeScore("cumulativeLayoutShift", audits["cumulative-layout-shift"].numericValue),
        },
        totalBlockingTime: {
            title: audits["total-blocking-time"].title,
            value: audits["total-blocking-time"].numericValue,
            status: categorizeScore("totalBlockingTime", audits["total-blocking-time"].numericValue),
        },
        timeToInteractive: {
            title: audits["interactive"].title,
            value: audits["interactive"].numericValue,
            status: categorizeScore("timeToInteractive", audits["interactive"].numericValue),
        },
    };

    return metrics;
}

// Read the Lighthouse report JSON file
fs.readFile("_people-2024_10_21_10_20_18-report.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    const lighthouseReport = JSON.parse(data);
    const performanceMetrics = extractPerformanceMetrics(lighthouseReport);
    console.log("Web Performance Metrics:", performanceMetrics);
});
