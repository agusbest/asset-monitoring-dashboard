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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            <Card
                title="Total Asset"
                value={total}
                color="bg-blue-50 border-blue-200"
                textColor="text-blue-700"
            />

            <Card
                title="Active"
                value={active}
                color="bg-green-50 border-green-200"
                textColor="text-green-700"
            />

            <Card
                title="Maintenance"
                value={maintenance}
                color="bg-amber-50 border-amber-200"
                textColor="text-amber-700"
            />

            <Card
                title="Offline"
                value={offline}
                color="bg-red-50 border-red-200"
                textColor="text-red-700"
            />
        </div>
    );
}

function Card({
    title,
    value,
    color,
    textColor,
}: {
    title: string;
    value: number;
    color: string;
    textColor: string;
}) {
    return (
        <div
            className={`
            ${color}
            border
            rounded-xl
            p-3 md:p-5
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-200
            `}
        >
            <p
                className="
          text-xs
          md:text-sm
          text-gray-600
          break-words
          whitespace-normal
          leading-tight
          mb-2
        "
            >
                {title}
            </p>

            <h2
                className={`
          text-2xl
          md:text-3xl
          font-bold
          ${textColor}
        `}
            >
                {value}
            </h2>
        </div>
    );
}