import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. ?�정 ?�이??변??(빌드 ??'out' ?�더 ?�성)
  output: "export",

  // 2. ?��?지 최적??비활?�화
  images: {
    unoptimized: true,
  },

  // 3. 경로?�정
  basePath: '/Portfolio',
  // assetPrefix: '/Portfolio',
};

export default nextConfig;
