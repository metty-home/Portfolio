"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

interface PortfolioItem {
  className: string;
  href: string;
  title: string;
  type: string;
  period: string;
  tools: string;
  scope: string;
}

const ITEMS: PortfolioItem[] = [
  {
    className: "space",
    href: "/portfolio/oortcloud",
    title: "Oort Cloud",
    type: "Fullpage Web",
    period: "16d",
    tools: "Adobe photoshop,<br/>Adobe Illustrator,<br/>HTML, CSS, Javascript",
    scope: "Web design,<br/>Front-end development",
  },
  {
    className: "piano",
    href: "/portfolio/steinway",
    title: "Steinway & Sons",
    type: "Reseponsive Web",
    period: "21d",
    tools: "Adobe photoshop,<br/>Adobe Illustrator,<br/>HTML, CSS, Javascript",
    scope: "Web design,<br/>Front-end development",
  },
  {
    className: "hotel",
    href: "/portfolio/fourseasons",
    title: "Four Seasons Hotel",
    type: "Web(Team project)",
    period: "15d",
    tools: "Adobe photoshop,<br/>Adobe Illustrator,<br/>HTML, CSS, Javascript",
    scope: "Web design,<br/>Front-end development",
  },
];

export default function PortfolioSection() {
  const ref = useScrollAnimation();

  return (
    <div id="portfolio" className="sections section_05 wait_scroll" ref={ref}>
      <div className="width_con">
        <div className="text_con center" style={{ height: 183 }}>
          <h3>Works</h3>
          <h2>Portfolio</h2>
          <h4>
            I have created and will continue to create
            <br />
            using various types of website formats, topics, and colors.
          </h4>
          <h5>Knowing many areas is important for developers.</h5>
        </div>
        <ul className="product_con">
          {ITEMS.map((item) => (
            <li key={item.className} className={`product ${item.className}`}>
              <Image className="guide" src="/Portfolio/images/guide_16_10.png" alt="" width={391} height={244} />
              <a className="info" href={item.href} target="_blank" rel="noopener noreferrer" title={item.title}>
                <h6>Promotion Site</h6>
                <h4>{item.title}</h4>
                <ul className="title">
                  <li>Type</li>
                  <li>Project period</li>
                  <li>Tools</li>
                  <li>Scope</li>
                </ul>
                <ul className="desc">
                  <li>{item.type}</li>
                  <li>{item.period}</li>
                  <li dangerouslySetInnerHTML={{ __html: item.tools }} />
                  <li dangerouslySetInnerHTML={{ __html: item.scope }} />
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
