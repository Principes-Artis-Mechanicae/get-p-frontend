import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import * as Styles from "./index.style";
import { Paragraph } from "get-p-design";

export interface ChartProps {
    dataKey: string;
    name: string;
    unit: string;
    data: unknown[];
    color: string;
}

export const Chart = ({ dataKey, name, unit, data, color }: ChartProps) => {
    return (
        <Styles.Card>
            <Styles.CardHeader>
                <Styles.CardTitle>{name}</Styles.CardTitle>
            </Styles.CardHeader>
            <Styles.CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey={dataKey}
                            stroke={color}
                            strokeWidth={2}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <Paragraph>Unit: {unit}</Paragraph>
            </Styles.CardContent>
        </Styles.Card>
    );
};
