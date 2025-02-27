import SpeakerBox from '@/components/ui/speakerbox';
import React from 'react';

const speakers = [
  { name: "Prof.(Dr.) S.N. Singh", title: "Director IIITM, Gwalior, India" ,image:"https://iccsai.in/assets/persons/snsingh.jpeg"},
  { name: "Dr. Yogesh S. Chauhan", title: "Professor IIT Kanpur Kanpur U.P. India" ,image:"https://iccsai.in/assets/persons/yogesh1.png"},
  { name: "Prof.J. Ramkumar", title: "Dean (Planning), IIT Kanpur, India" ,image:"https://iccsai.in/assets/persons/jramkumar.jpg"},
  { name: "Dr. Liudong Xing", title: "Professor, Director (R) University of Massachusetts, Dartmouth" ,image:"https://iccsai.in/assets/persons/Liudong1.png"},
  { name: "Ts. Dr. Nurfadhlina Mohd Sharef", title: "Assoc. Professor UKM, Malaysia" ,image:"https://iccsai.in/assets/persons/nurfa1.png"},
  { name: "Dr. Ahmed A. Elngar", title: "Associate Professor Beni-Suef University, Egypt" ,image:"https://iccsai.in/assets/persons/elngar1.png"},
  { name: "Prof. Ts. Dr. Murali Raman", title: " Deputy Vice Chancellor Asia Pacific University, Malaysia" ,image:"https://iccsai.in/assets/persons/Murali1.png"},
  { name: "Dr. Rajeev Srivastava", title: "Professor IIT BHU, Varanasi, India" ,image:"https://iccsai.in/assets/persons/RajeevPhoto1.png"},
  { name: "Dr. Asheesh Kumar Singh", title: "Professor MNNIT Allahabad, India" ,image:"https://iccsai.in/assets/persons/AKS_pic.jpg"},

];

export default function Home() {
  return (
    <div className="p-2 sm:p-4 md:p-8 bg-gray-100 min-h-screen  flex flex-col items-center mt-24">
      <h1 className=" font-bold mb-6 text-center text-4xl">Keynote Speakers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
        {speakers.map((speaker, index) => (
          <SpeakerBox key={index} name={speaker.name} title={speaker.title} image={speaker.image} />
        ))}
      </div>
    </div>
  );
}