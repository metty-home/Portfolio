"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PETALS = [1, 2, 3, 4, 5];

export default function LoadingCover() {

  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => {
      if (coverRef.current) {
        coverRef.current.classList.remove("loading");
        document.body.style.overflow = "auto";
      }
    }, 2000);

    return () => {
      clearTimeout(t1);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div ref={coverRef} className="loading_cover loading">
      <ul className="loading_petal">
        {PETALS.map((n) => (
          <li key={n}>
            <Image
              src={`/images/00_loading/img_loading_0${n}.png`}
              alt={`loading petal ${n}`}
              width={300}
              height={286}
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
