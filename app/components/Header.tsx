"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const NAV_ITEMS = [
  { label: "Welcome", href: "#visual" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Personality", href: "#personality" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["visual", "about", "skill", "personality", "portfolio", "contact"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // 헤더 스크롤 변환 + 활성 nav 계산
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);

    // 각 섹션의 offsetTop 계산
    const sectionTops = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      return el ? el.offsetTop : 0;
    });

    let current = 0;
    for (let i = sectionTops.length - 1; i >= 0; i--) {
      if (scrollY + 80 >= sectionTops[i]) {
        current = i;
        break;
      }
    }
    setActiveIndex(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 앵커 클릭 시 부드러운 스크롤
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 78;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div id="header" className={isScrolled ? "on" : ""}>
      <div className="width_con">
        <div className="logo">
          <a href="#visual" onClick={(e) => handleNavClick(e, "#visual")}>
            <Image src="/Portfolio/images/logo_bi.png" alt="로고이미지" width={120} height={60} priority style={{ width: 120, height: 60 }} />
          </a>
        </div>
        <ul className="nav_con">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href} className={activeIndex === i ? "on" : ""}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
