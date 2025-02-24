import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
export function BentoGridSecondDemo() {
  
  return (
    <section className="h-screen bg-[#F2F3F2] pt-8 ">
      <BentoGrid className=" mx-auto md:auto-rows-[9rem]">
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
  
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl p-0 border border-transparent dark:border-white/[0.2]">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper w-full h-full rounded-xl"
      >
{images.map(image=>{
      return(
        <SwiperSlide key={image} className="w-full h-full rounded-xl">
          <Image src={image} alt="img" key={image} fill className="w-full h-full rounded-xl"></Image>
          </SwiperSlide>
        
      )
    })}
      </Swiper>
    
  </div>
);
const images=["/pictures/confSlider1.jpg",
  "/pictures/confSlider2.webp",
  "/pictures/confSlider3.webp",
  "/pictures/confSlider4.webp",
  "/pictures/confSlider5.webp",
  "/pictures/confSlider6.webp",
  "/pictures/confSlider7.webp",]
const items = [
  {
    title: "ABOUT GALGOTIAS UNIVERSITY",
    description:
      "Galgotias University hosts over 35,000 students across 100+ undergraduate and postgraduate programs. Renowned for excellence in teaching, research, and innovation, the university is committed to nurturing leaders who make a global impact. Hosting ICCSAI-2025 reinforces this mission by fostering Knowledge exchange and innovation.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-3 p-0 rounded-xl",
  },
  {
    title: "CONFERENCE OBJECTIVE",
    description:
      "ICCSAI-2025 is a non-profit international conference designed to advance knowledge in Computer & Communication Engineering. With multiple tracks covering diverse topics in computing, communication, information security, and artificial intelligence, the conference fosters global collaboration and sets new directions in research.",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "EVENT HIGHLIGHTS",
    description: (
      <>
        <p>
          Global Gathering: A prestigious event bringing together global
          researchers, academics, and industry professionals.{" "}
        </p>
        <p>
          Focus Areas: Discussing advancements in Communication, Security, and
          Artificial Intelligence.
        </p>
      </>
    ),

    className: "md:col-span-2 md:row-span-1",
  },
];

export default BentoGridSecondDemo;
