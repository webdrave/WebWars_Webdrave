import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";


export function BentoGridSecondDemo() {
  return (
    <section className="h-screen bg-[#F2F3F2]">

    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
    </section>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2]"></div>
);
const items = [
  {
    title: "ABOUT GALGOTIAS UNIVERSITY",
    description: "Galgotias University hosts over 35,000 students across 100+ undergraduate and postgraduate programs. Renowned for excellence in teaching, research, and innovation, the university is committed to nurturing leaders who make a global impact. Hosting ICCSAI-2025 reinforces this mission by fostering Knowledge exchange and innovation.",
    className: "md:col-span-1",
  
  },
  {
    title: "CO",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "CONFERENCE OBJECTIVE",
    description: "ICCSAI-2025 is a non-profit international conference designed to advance knowledge in Computer & Communication Engineering. With multiple tracks covering diverse topics in computing, communication, information security, and artificial intelligence, the conference fosters global collaboration and sets new directions in research.",
    className: "md:col-span-1",
  },
  {
    title: "EVENT HIGHLIGHTS",
    description:
    <>
    <p>Global Gathering: A prestigious event bringing together global researchers, academics, and industry professionals. </p>
    <p>Focus Areas: Discussing advancements in Communication, Security, and Artificial Intelligence.</p>
    </>,
    

    className: "md:col-span-2",
  },
];

export default BentoGridSecondDemo;