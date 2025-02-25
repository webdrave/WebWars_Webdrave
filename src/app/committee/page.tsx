"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const sections_data = [
  {
    id: "Conference-Chair",
    facultyData: [
      {
        name: "DR. AANJEY M. TRIPATHI",
        designation: "PROFESSOR, GALGOTIAS UNIVERSITY, GREATER NOIDA, INDIA",
      },
      {
        name: "PROF. PRASHANT JOHRI",
        designation: "GALGOTIAS UNIVERSITY, GREATER NOIDA, INDIA",
      },
      {
        name: "DR. KULDEEP S. KASWAN",
        designation: "PROFESSOR, GALGOTIAS UNIVERSITY, GREATER NOIDA, INDIA",
      },
    ],
  },
  {
    id: "Conference-Organizing-Chair",
    facultyData: [
      {
        name: "Dr. Vimal Kumar",
        designation: "Professor, Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Gaurav Agarwal",
        designation: "Professor, Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Abdul Aleem",
        designation: "Professor, Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Conference-Technical-Chair",
    facultyData: [
      {
        name: "Dr. Suneeta Yadav",
        designation: "Dean, SCSE, Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. V. Khemchandani",
        designation: "Dean, SCAT, Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Anurag Singh",
        designation: "Associate Professor, NIT Delhi, India",
      },
      {
        name: "Dr. Arvind Panwar",
        designation: "Professor, Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Publication-Chairs",
    facultyData: [
      {
        name: "Prof. Shrddha Sagar",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. Ashok K. Yadav",
        designation: "Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Conference-Organizing-Co-Chairs",
    facultyData: [
      {
        name: "Prof. Meenakshi Awasthi",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. Deepak Soni",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. Sunil Bharti",
        designation: "GCET, Greater Noida, India",
      },
    ],
  },
  {
    id: "Conference-Technical-Co-Chairs",
    facultyData: [
      {
        name: "Prof. Ravi Sharma",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. Tarun Kumar",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Manish Kumar",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Sonu Jha",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Sunil Kumar",
        designation: "Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Conference-Secretaries",
    facultyData: [
      {
        name: "Dr. K.K. Agrawal",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Vipin Rai",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. Arunendra Mani Tripathi",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. Avneesh Kumar",
        designation: "Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "International-Advisory-Chairs",
    facultyData: [
      {
        name: "Prof. Sanjeev K. Singh",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Prof. N. Partheeban",
        designation: "Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Publication-Co-Chairs",
    facultyData: [
      {
        name: "Dr. Sachi Mall",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Ajeet Singh",
        designation: "Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Publicity-Chairs",
    facultyData: [
      {
        name: "Dr. Ravi Sharma",
        designation: "Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "Publicity-&-Industry-Chairs",
    facultyData: [
      {
        name: "Prof. Vipul Narayan Srivastava",
        designation: "Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "Event-Organising-Chairs",
    facultyData: [
      {
        name: "Dr. Pragya Tewari",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Ambika Gupta",
        designation: "Galgotias University, Greater Noida, India",
      },
      {
        name: "Dr. Pooja Singh",
        designation: "Galgotias University, Greater Noida, India",
      },
    ],
  },
  {
    id: "Finance-Chairs",
    facultyData: [
      {
        name: "Prof. E. Rajesh",
        designation: "Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "Transport-Chairs",
    facultyData: [
      {
        name: "Prof. T. Ganesh Kumar",
        designation: "Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "Website-&-Graphics-Chairs",
    facultyData: [
      {
        name: "Mr. Pankaj Lamba",
        designation: "Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "Media-Chairs",
    facultyData: [
      {
        name: "Prof. AR Pandey",
        designation: "Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "Hospitality-Chairs",
    facultyData: [
      {
        name: "Prof. (Dr.) Rajiv Mishra",
        designation: "Dean of SOHT, Galgotias University, Greater Noida, India",
      },
      {
        name: "Ms. Monalisha Dash",
        designation: "Associate Professor, Galgotias University, Greater Noida, India",
      }
    ],
  },
  {
    id: "International-Advisory-Committee",
    facultyData: [
      {
        name: "Dr. Liudong XIng",
        designation: "Electrical and Computer Engineering Department, University of Massachusetts, Dartmouth",
      },
      {
        name: "Dr. Ling Tok Wang",
        designation: "Emeritus Professor, Department of Computer Science, National University of Singapore, Singapore",
      },
      {
        name: "Dr. Norjihan Abdul Ghani",
        designation: "HoD, Department of Information Systems, University of MALAYA, Malaysia",
        
      },
      {
        name: "Dr. Norbik Bashah Bin Idris",
        designation: "Professor, IIUM Gombak Campus, Malaysia",

      },
      {
        name: "Dr. Maizatul Akmar Ismail",
        designation: "Department of Information Systems, University of MALAYA, Malaysia",

      },
      {
        name: "Dr. Suzan Jabbar Obaiys",
        designation: "Multimedia Unit, University of MALAYA, Malaysia",

      },
      {
        name: "Dr. Mufti Mahmud",
        designation: "Department of Computer Science, Nottingham Trent University, United Kingdom",

      },
      {
        name: "Dr. Deepak K Jain",
        designation: "Dalian University of Technology, China",

      },
      {
        name: "Dr. Kishore Bingi",
        designation: "Universiti Teknologi PETRONAS, Malaysia",

      },
      {
        name: "Dr Noor Zaman Jhanjhi",
        designation: "Taylor's University, Malaysia",

      },
      {
        name: "Dr. Chaman Verma ",
        designation: "Taylor's University, Malaysia",

      },

    ],
  },
];

// Galgotias University, Greater Noida, India
// Prof. Deepak Soni
// Galgotias University, Greater Noida, India
// Prof. Sunil Bharti
// GCET, Greater Noida, India

const sections = [
  { id: "Chief-Patron", label: "CHIEF PATRON" },
  { id: "Patron", label: "PATRON" },
  { id: "Conference-General-Chair", label: "CONFERENCE GENERAL CHAIR" },
  { id: "Conference-Chair", label: "CONFERENCE CHAIR" },
  { id: "Conference-Organizing-Chair", label: "CONFERENCE ORGANIZING CHAIR" },
  { id: "Conference-Technical-Chair", label: "CONFERENCE TECHNICAL CHAIR" },
  { id: "Publication-Chairs", label: "PUBLICATION CHAIRS" },
  {
    id: "Conference-Organizing-Co-Chairs",
    label: "CONFERENCE ORGANIZING CO-CHAIRS",
  },
  {
    id: "Conference-Technical-Co-Chairs",
    label: "CONFERENCE TECHNICAL CO-CHAIRS",
  },
  { id: "Conference-Secretaries", label: "CONFERENCE SECRETARIES" },
  {
    id: "International-Advisory-Chairs",
    label: "INTERNATIONAL ADVISORY CHAIRS",
  },
  { id: "Publication-Co-Chairs", label: "PUBLICATION CO-CHAIRS" },
  { id: "Publicity-Chairs", label: "PUBLICITY CHAIRS" },
  {
    id: "Publicity-&-Industry-Chairs",
    label: "PUBLICITY & INDUSTRY CHAIRS",
  },
  { id: "Event-Organising-Chairs", label: "EVENT ORGANISING CHAIRS" },
  { id: "Finance-Chairs", label: "FINANCE CHAIRS" },
  { id: "Transport-Chairs", label: "TRANSPORT CHAIRS" },
  { id: "Website-&-Graphics-Chairs", label: "WEBSITE & GRAPHICS CHAIRS" },
  { id: "Media-Chairs", label: "MEDIA CHAIRS" },
  { id: "Hospitality-Chairs", label: "HOSPITALITY CHAIRS" },
  { id: "International-Advisory-Committee", label: "INTERNATIONAL ADVISORY COMMITTEE" },
];

const Page = () => {
  const [activeSection, setActiveSection] = useState(sections[0].label);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const newActive = sections.find(
            (sec) => sec.id === visibleSection.target.id
          );
          if (newActive) setActiveSection(newActive.label);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen mb-28 w-screen flex flex-col gap-28">
      {/* Sidebar with Animated Text */}
      <div className="fixed w-24 px-3 -z-10 -top-32 min-h-full bottom-0 left-2 md:left-4 lg:left-10 xl:left-20 bg-[#C9DCEA]">
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#A0C9E8]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-center h-24 w-full"
            >
              <span className="text-black text-2xl font-bold italic mt-28 whitespace-nowrap transform -rotate-90">
                {activeSection}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Conference Committee Header */}
      <div className="mt-32 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Conference Committee
        </h1>
      </div>

      {/* Sections for Different Positions */}
      <Section id="Chief-Patron">
        <div id="Chief-Patron" className="flex justify-center items-center">
          <div
            className="flex items-center border rounded-3xl shadow-lg p-4 w-full max-w-2xl"
            style={{
              background:
                "linear-gradient(101deg, #F8F9F8 1.3%, #C9DCEA 99.52%)",
            }}
          >
            <Image
              src="/assets/persons/sunilSir.jpeg"
              alt="Shri Suneel Galgotia"
              width={208} // Adjust width
              height={208} // Adjust height
              className="h-52 rounded-3xl object-cover border border-gray-300"
            />

            <div className="ml-12">
              <h2 className="text-xl font-bold mb-6">SHRI SUNEEL GALGOTIA</h2>
              <p className="text-gray-600 mb-2">HON&apos;BLE CHANCELLOR</p>
              <p className="text-gray-600">GALGOTIAS UNIVERSITY, INDIA</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="Patron">
        <div className="flex flex-col gap-10">
          <PersonCard
            name="Prof.(Dr.) S.N. Singh"
            role="Director IIITM"
            location="Gwalior, India"
            image="/assets/persons/snsingh.jpeg"
          />
          <PersonCard
            name="Prof.(Dr.) M.K. Babu Kayala"
            role="VC"
            location="Galgotias University, India"
            image="/assets/persons/vcsir.jpg"
          />
        </div>
        <div className="flex flex-col gap-10">
          <PersonCard
            name="Dr. Dhruv Galgotia"
            role="CEO"
            location="Galgotias University, India"
            image="/assets/persons/dhruvSir.jpeg"
          />
          <PersonCard
            name="Ms. Aradhana Galgotia"
            role="Director Operations"
            location="Galgotias University, India"
            image="/assets/persons/aradhanaMaam.jpg"
          />
        </div>
      </Section>

      <Section id="Conference-General-Chair">
        <div className="flex flex-col gap-10">
          <PersonCard
            name="Prof.(Dr.) Avadhesh Kumar"
            role="Pro-VC"
            location="Galgotias University, India"
            image="/assets/persons/pvcsir.jpg"
          />
        </div>
        <div className="flex flex-col gap-10">
          <PersonCard
            name="Dr. Yogesh S. Chauhan"
            role="Professor"
            location="Indian Institute of Technology Kanpur Kanpur, U.P., India"
            image="/assets/persons/yogesh1.png"
          />
        </div>
      </Section>
      {sections_data.map((section, index) => (
        <Section id={section.id} key={index}>
          <FacultyCard facultyMembers={section.facultyData} />
        </Section>
      ))}
    </div>
  );
};

// Section Wrapper with Framer Motion
const Section: React.FC<{ id: string; children: React.ReactNode }> = ({
  id,
  children,
}) => {
  return (
    <motion.div
      id={id}
      className="flex justify-center items-center gap-10 min-h-[50vh]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
};
const FacultyCard = ({ facultyMembers }: { facultyMembers: any[] }) => {
  return (
    <div className="relative min-h-[400px] w-full p-8">
      {/* Checkerboard pattern container */}
      <div className="absolute inset-0 opacity-90" />

      {/* Content container */}
      <div
        className="relative mx-auto max-w-3xl rounded-3xl p-12 shadow-xl"
        style={{
          background: "linear-gradient(101deg, #F8F9F8 1.3%, #C9DCEA 99.52%)",
        }}
      >
        <div className="space-y-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-wide">
                {faculty.name}
              </h2>
              <p className="text-lg tracking-wider">{faculty.designation}</p>
              {index !== facultyMembers.length - 1 && (
                <hr className="border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// PersonCard Component
const PersonCard: React.FC<{
  name: string;
  role: string;
  image: string;
  location?: string;
}> = ({ name, role, image, location }) => {
  return (
    <motion.div
      className="flex flex-col items-center border rounded-3xl shadow-lg p-6 w-[20rem] h-[24rem] bg-white"
      style={{
        background: "linear-gradient(101deg, #F8F9F8 1.3%, #C9DCEA 99.52%)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="w-48 h-48 mb-10 overflow-hidden rounded-full border-4 border-white shadow-md ">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 font-medium mb-1">{role}</p>
        {location && <p className="text-gray-600">{location}</p>}
      </div>
    </motion.div>
  );
};
export default Page;
