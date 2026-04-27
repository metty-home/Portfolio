"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function SkillSection() {
  const ref = useScrollAnimation();

  return (
    <div id="skill" className="sections section_03 wait_scroll" ref={ref}>
      <div className="tree">
        <Image src="/Portfolio/images/03_skill/img_skill_01.png" alt="벚꽃 나무 2그루" width={500} height={400} priority style={{ width: "auto", height: "100%" }} />
      </div>
      <div className="width_con">
        <div className="title">
          <h3>Available</h3>
          <h2>Skill</h2>
        </div>

        <div className="desc tools">
          <h3>Tools</h3>
          <ul className="left">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Brackets</li>
          </ul>
          <ul className="right">
            <li>Microsoft Word</li>
            <li>Microsoft Excel</li>
            <li>Microsoft PowerPoint</li>
          </ul>
        </div>

        <div className="desc knowledge">
          <h3>Knowledge</h3>
          <ul className="left">
            <li>UX / UI</li>
            <li>HTML &amp; CSS</li>
            <li>Javascript (jQuery)</li>
            <li>Reseponsive Web</li>
            <li>Fullpage Web</li>
            <li>Mobile Web</li>
            <li>Grid System(Layout)</li>
          </ul>
          <ul className="right">
            <li>C / C++</li>
            <li>Java</li>
            <li>AJAX</li>
            <li>Brand Design</li>
            <li>Logo(BI/CI) Design</li>
            <li>Interactive Design</li>
          </ul>
        </div>

        <div className="desc certificate">
          <h3>Certificate</h3>
          <ul className="left">
            <li>Engineer Information Processing(22.06)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
