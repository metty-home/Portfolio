import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-9xl font-black text-neutral-100 dark:text-neutral-900">
        404
      </h1>
      <div className="absolute flex flex-col items-center">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="mb-8 max-w-md text-neutral-600 dark:text-neutral-400">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-8 font-medium text-white transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
        >
          홈으로 돌아가기
        </Link>
      </div>

      {/* Decorative background blur */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-200/50 blur-[100px] dark:bg-neutral-800/20"></div>
      </div>
    </div>
  );
}
