type Props = {
    selectedRegion: string;
    onChange: (region: string) => void;
};

export default function RegionFilter({
    selectedRegion,
    onChange,
}: Props) {
    return (
        <div className="mb-4">
            <label className="block mb-2 font-medium">
                Filter Region
            </label>

            <select
                value={selectedRegion}
                onChange={(e) => onChange(e.target.value)}
                className="border rounded-lg px-4 py-2 w-60"
            >
                <option value="All">All Region</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bekasi">Bekasi</option>
                <option value="Bandung">Bandung</option>
                <option value="Karawang">Karawang</option>
            </select>
        </div>
    );
}