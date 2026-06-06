type Asset = {
    id: number;
    name: string;
    region: string;
    status: string;
};

type Props = {
    assets: Asset[];
};

export default function AssetTable({
    assets,
}: Props) {
    return (
        <div className="overflow-x-auto">
    <table className="min-w-full">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-3">Asset Name</th>
                    <th className="p-3">Region</th>
                    <th className="p-3">Status</th>
                </tr>
            </thead>

            <tbody>
                {assets.map((asset) => (
                    <tr key={asset.id}>
                        <td className="p-3">{asset.name}</td>
                        <td className="p-3">{asset.region}</td>
                        <td className="p-3">{asset.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}