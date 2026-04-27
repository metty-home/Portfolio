"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

interface CardProps {
  title: string;
  description: string;
}

function PersonalityCard({ title, description }: CardProps) {
  const cardRef = useRef<HTMLLIElement>(null);
  const reflectRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const card = cardRef.current;
    const reflect = reflectRef.current;
    if (!card || !reflect) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(800px) rotateX(${y / 20}deg) rotateY(${x / -25}deg)`;
    reflect.style.transform = `translate(${x / 2}px, ${y / 2}px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const reflect = reflectRef.current;
    if (!card || !reflect) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    reflect.style.transform = "translate(0,0)";
  };

  return (
    <li ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="reflect" ref={reflectRef} />
      <span>
        <h3>{title}</h3>
        <h6 dangerouslySetInnerHTML={{ __html: description }} />
      </span>
    </li>
  );
}

const CARDS: CardProps[] = [
  {
    title: "Calmness",
    description:
      "Calmness helps me concentrate on my work without being swayed<br/>by the surroundings.",
  },
  {
    title: "Thoroughness",
    description:
      "This quickly solves problems that will<br/>arise later and makes<br/>the results more robust.",
  },
  {
    title: "Receptive",
    description:
      "It actively accepts<br/>other people's opinions and produces better results through continuous modifications.",
  },
  {
    title: "Altruistic",
    description:
      "Thinking about<br/>the other person is<br/>the most important<br/>thing in communication, so it is a good<br/>personality in work.",
  },
];

export default function PersonalitySection() {
  const ref = useScrollAnimation();

  useEffect(() => {
    const sync = () => {
      const cards = document.querySelectorAll<HTMLLIElement>(
        "#personality.section_04 .width_con .four_con li"
      );
      cards.forEach((li) => {
        li.style.height = `${li.offsetWidth}px`;
      });
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <div id="personality" className="sections section_04 wait_scroll" ref={ref}>
      <div className="fixed_bg" />
      <div className="width_con">
        <div className="text_con">
          <h3>Optimum</h3>
          <h2>Personality</h2>
          <h4>
            Technical skills are important in working,
            <br />
            but I think we can get better results only
            <br />
            when we communicate with others smoothly.
          </h4>
          <h5>
            It is also important because the quality of the results
            <br />
            may vary depending on the personality.
          </h5>
        </div>
        <ul className="four_con">
          {CARDS.map((card) => (
            <PersonalityCard key={card.title} {...card} />
          ))}
        </ul>
      </div>
    </div>
  );
}
