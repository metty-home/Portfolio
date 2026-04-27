"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export default function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <div id="about" className="sections section_02 wait_scroll" ref={ref}>
      <div className="fixed_bg" />
      <div className="width_con">
        <div className="text_con center" style={{ height: 312 }}>
          <h3>Introduce</h3>
          <h2>About Me</h2>
          <h4>
            I&apos;m Eui-young Jung, a junior web front-end developer.
            <br />
            I started because I became interested in programming and design together
            <br />
            and I am developing to become a better designer and developer.
            <br />
            I value communication between colleagues and
            <br />
            customers and strive for the benefit of the company.
          </h4>
          <h5>
            If you and I work together,
            <br />
            it will be a good partner for you.
          </h5>
        </div>
      </div>
    </div>
  );
}
