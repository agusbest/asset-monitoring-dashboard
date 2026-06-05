type Asset = {
    id: number;
    name: string;
    region: string;
    status: string;
};

type Props = {
    assets: Asset[];
};

export default function SummaryCards({
    assets,
}: Props) {
    const total = assets.length;

    const active = assets.filter(
        (a) => a.status === "Active"
    ).length;

    const maintenance = assets.filter(
        (a) => a.status === "Maintenance"
    ).length;

    const offline = assets.filter(
        (a) => a.status === "Offline"
    ).length;

    return (
        <div className="grid grid-cols-4 gap-4 mb-6">
            <Card title="Total Asset" value={total} />
            <Card title="Active" value={active} />
            <Card title="Maintenance" value={maintenance} />
            <Card title="Offline" value={offline} />
        </div>
    );
}

function Card({
    title,
    value,
}: {
    title: string;
    value: number;
}) {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <p className="text-gray-500 text-sm">
                {title}
            </p>

            <h2 className="text-3xl font-bold">
                {value}
            </h2>
        </div>
    );
}