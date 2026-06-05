"use client";

import dynamic from "next/dynamic";

const AssetMap = dynamic(
  () => import("./AssetMap"),
  {
    ssr: false,
  }
);

export default AssetMap;