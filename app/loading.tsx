'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-neutral-950">
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800"></div>
        {/* Animated Ring */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-black dark:border-t-white"></div>
        {/* Center Dot */}
        <div className="h-2 w-2 animate-pulse rounded-full bg-black dark:bg-white"></div>
      </div>
      
      <div className="mt-8 flex flex-col items-center gap-2">
        <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
          로딩 중...
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          멋진 포트폴리오를 불러오고 있습니다.
        </p>
      </div>

      {/* Background Decorative Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[10%] h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] right-[10%] h-[40%] w-[40%] rounded-full bg-purple-500/5 blur-[120px]"></div>
      </div>
    </div>
  );
}
