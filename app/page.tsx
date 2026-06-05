"use client";

import { useState } from "react";

import AssetMap from "../components/AssetMap";
import AssetTable from "../components/AssetTable";
import RegionFilter from "../components/RegionFilter";
import SummaryCards from "../components/SummaryCards";

import { assets } from "../data/assets";

export default function Home() {
  const [selectedRegion, setSelectedRegion] =
    useState("All");

  const filteredAssets =
    selectedRegion === "All"
      ? assets
      : assets.filter(
        (asset) =>
          asset.region === selectedRegion
      );

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Asset Monitoring Dashboard
      </h1>

      <SummaryCards assets={filteredAssets} />

      <RegionFilter
        selectedRegion={selectedRegion}
        onChange={setSelectedRegion}
      />

      <div className="grid grid-cols-12 gap-4">

        <div className="col-span-8 bg-white p-4 rounded-xl">
          <AssetMap
            assets={filteredAssets}
            selectedRegion={selectedRegion}
          />
        </div>

        <div className="col-span-4 bg-white p-4 rounded-xl">
          <AssetTable
            assets={filteredAssets}
          />
        </div>

      </div>
    </main>
  );
}