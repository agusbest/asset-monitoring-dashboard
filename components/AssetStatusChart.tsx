"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type Asset = {
    id: number;
    region: string;
    status: string;
};

type Props = {
    assets: Asset[];
};

export default function AssetStatusChart({
    assets,
}: Props) {
    const regions = [
        "Jakarta",
        "Bekasi",
        "Bandung",
        "Karawang",
    ];

    const chartData = regions.map((region) => ({
        region,
        total: assets.filter(
            (a) => a.region === region
        ).length,
    }));

    return (
        <div className="bg-white rounded-xl p-4 mb-6 shadow">
            <h2 className="font-semibold mb-3">
                Asset per Region
            </h2>

            <ResponsiveContainer
                width="100%"
                height={250}
            >
                <BarChart data={chartData}>
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}