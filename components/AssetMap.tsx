"use client";


import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";

import L from "leaflet";
import { useMemo } from "react";

import "leaflet/dist/leaflet.css";

type Asset = {
    id: number;
    name: string;
    region: string;
    status: string;
    lat: number;
    lng: number;
};

type Props = {
    assets: Asset[];
    selectedRegion: string;
};


// ====================
// STATUS ICON
// ====================

// ====================
// COMPONENT
// ====================

export default function AssetMap({
    assets,
    selectedRegion,
}: Props) {

    const greenIcon = useMemo(
        () =>
            new L.Icon({
                iconUrl: "/markers/green.png",
                shadowUrl: "/markers/shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
            }),
        []
    );

    const yellowIcon = useMemo(
        () =>
            new L.Icon({
                iconUrl: "/markers/gold.png",
                shadowUrl: "/markers/shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
            }),
        []
    );

    const redIcon = useMemo(
        () =>
            new L.Icon({
                iconUrl: "/markers/red.png",
                shadowUrl: "/markers/shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
            }),
        []
    );

    const getIcon = (status: string) => {
        if (status === "Offline") return redIcon;
        if (status === "Maintenance") return yellowIcon;
        return greenIcon;
    };


    return (
        <>
            {/* Header */}

            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">
                    Asset Map
                </h2>

                <span className="text-sm text-gray-500">
                    Region: {selectedRegion}
                </span>
            </div>

            {/* Legend */}

            <div className="flex gap-5 mb-4 text-sm">
                <span>🟢 Active</span>
                <span>🟡 Maintenance</span>
                <span>🔴 Offline</span>
            </div>

            {/* Map */}

            <MapContainer
                center={[-6.4, 107]}
                zoom={8}
                style={{
                    height: "500px",
                    width: "100%",
                }}
            >
                <TileLayer
                    attribution="© OpenStreetMap"
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {assets.map((asset) => (
                    <Marker
                        key={asset.id}
                        position={[asset.lat, asset.lng]}
                        icon={getIcon(asset.status)}
                    >
                        <Popup>
                            <div>
                                <h3 className="font-bold">
                                    {asset.name}
                                </h3>

                                <p>
                                    Region: {asset.region}
                                </p>

                                <p>
                                    Status: {asset.status}
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}