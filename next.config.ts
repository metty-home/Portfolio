import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. 정적 사이트 변환(빌드 시 'out' 폴더 생성)
  output: "export",

  // 2. 이미지 최적화 비활성화
  images: {
    unoptimized: true,
  },

  // 3. 경로설정
  basePath: '/Portfolio',
  // assetPrefix: '/Portfolio',
};

export default nextConfig;
