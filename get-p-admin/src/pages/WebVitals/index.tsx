import { useState, useEffect } from "react";
import { mockCoreWebVitalsData } from "../../__mocks__/data";
import * as Styles from "./index.style";

import styled from "@emotion/styled";

import { Chart } from "../../components/Chart";

const Select = styled.select`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background-color: white;
`;

type MetricType = "LCP" | "FID" | "CLS";

const metrics: { [key in MetricType]: { name: string; unit: string; color: string } } = {
    LCP: { name: "Largest Contentful Paint", unit: "seconds", color: "#FF6384" },
    FID: { name: "First Input Delay", unit: "milliseconds", color: "#36A2EB" },
    CLS: { name: "Cumulative Layout Shift", unit: "score", color: "#FFCE56" },
};

export default function CoreWebVitals() {
    const [selectedEndpoint, setSelectedEndpoint] = useState<keyof typeof mockCoreWebVitalsData>(
        Object.keys(mockCoreWebVitalsData)[0] as keyof typeof mockCoreWebVitalsData,
    );
    const [data, setData] = useState(mockCoreWebVitalsData[selectedEndpoint]);

    useEffect(() => {
        setData(mockCoreWebVitalsData[selectedEndpoint]);
    }, [selectedEndpoint]);

    const handleEndpointChange = (endpoint: string) => {
        setSelectedEndpoint(endpoint as keyof typeof mockCoreWebVitalsData);
    };
    return (
        <>
            <Select value={selectedEndpoint} onChange={(e) => handleEndpointChange(e.target.value)}>
                {Object.keys(mockCoreWebVitalsData).map((endpoint) => (
                    <option key={endpoint} value={endpoint}>
                        {endpoint}
                    </option>
                ))}
            </Select>

            <Styles.ChartGrid>
                {Object.entries(metrics).map(([key, { name, unit, color }]) => (
                    <Chart key={key} dataKey={key} name={name} unit={unit} color={color} data={data} />
                ))}
            </Styles.ChartGrid>
        </>
    );
}
