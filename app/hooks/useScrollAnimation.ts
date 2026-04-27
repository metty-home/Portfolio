"use client";

import { useEffect, useRef } from "react";

/**
 * IntersectionObserver를 이용해 섹션이 뷰포트에 진입하면
 * 'wait_scroll' 클래스를 제거하는 훅.
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("wait_scroll");
            el.classList.add("is_active");
          } else {
            el.classList.remove("is_active");
          }
        });
      },
      { rootMargin: "0px 0px -200px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
