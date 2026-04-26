'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 서비스에 기록할 수 있습니다.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-950/30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 text-red-600 dark:text-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      <h1 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        문제가 발생했습니다
      </h1>
      <p className="mb-8 max-w-md text-neutral-600 dark:text-neutral-400">
        페이지를 불러오는 중에 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-900 px-6 font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          다시 시도하기
        </button>
        <button
          onClick={() => (window.location.href = '/')}
          className="inline-flex h-11 items-center justify-center rounded-lg border border-neutral-200 bg-white px-6 font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900"
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}
