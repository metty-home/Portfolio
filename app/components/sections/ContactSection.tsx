"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  const ref = useScrollAnimation();

  return (
    <div id="contact" className="sections section_06 wait_scroll" ref={ref}>
      <div className="width_con">
        <div className="text_con">
          <h3>My</h3>
          <h2>Contact</h2>
          <h4>
            Thank you for visiting my portfolio page.
            <br />
            I hope to meet you again as your partner.
          </h4>
          <h5>
            I&apos;m always ready to take on your work.
            <br />
            Goodbye! See you later.
          </h5>
        </div>
        <div className="info">
          <ul className="icon">
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              {" "}010-5165-4325
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              {" "}jey0916@blossomjung.com
            </li>
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              {" "}Incheon, Republic of Korea
            </li>
          </ul>
        </div>
        <div className="contact_logo">
          <Image src="/images/logo_bi.png" alt="로고이미지" width={260} height={120} priority style={{ width: 260, height: 120 }} />
        </div>
        <div className="copy">&copy; 2023 JEY. All rights reserved.</div>
      </div>
      <div className="flower">
        <Image src="/images/06_contact/img_contact_01.png" alt="" width={600} height={600} priority style={{ width: 600, height: 600 }} />
      </div>
    </div>
  );
}
