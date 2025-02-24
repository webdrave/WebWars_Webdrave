"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const topics = [
  "Artificial Intelligence",
  "LLM (Large Language Models)",
  "Federated Learning",
  "Data Science",
  "Big Data",
  "Software Reliability Engineering",
  "Blockchain",
  "Cryptography",
  "Watermarking",
  "Privacy and Preservation",
  "Information Security",
  "Digital Services and Protection Mechanism",
  "Cyber Security",
  "Electronics & Communication Engineering",
  "Renewable Energy",
  "Control Systems",
  "AI in Fashion Technology",
  "Soft Computing",
  "Quantum Computing",
  "Machine Learning",
  "Deep Learning",
  "5G/6G/7G Technologies",
  "IoT (Internet of Things)",
  "IIoT (Industrial IoT)",
  "IMoT (Internet of Medical Things)",
  "Ontology",
  "Image Processing",
  "Wireless Communication Network",
  "Bitcoin",
  "Robotics and Automation",
  "Smart Grid",
  "Electric Vehicles",
  "Cryptocurrency",
  "Distributed & Parallel Computing",
  "High Performance Computing",
  "Cloud Quality Management",
  "Cloud & Grid Computing",
  "Mobile Computing",
  "Edge Computing",
  "Fog Computing",
  "Cognitive Computing",
  "Computer Vision and Image Processing Applications",
  "Intelligent Computing Systems",
  "AR/VR/Metaverse",
  "Human Computer Interface",
  "Cyborg",
  "Sustainability",
  "Multimedia Technology",
  "E-commerce",
  "DNA Computing",
];

const FadeInWhenVisible = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  );
};

export default function ConferenceTopics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalSearchQuery, setModalSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const modalFilteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(modalSearchQuery.toLowerCase())
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(4); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(8); // Tablet
      } else {
        setVisibleCount(12); // Laptop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  const visibleTopics = filteredTopics.slice(0, visibleCount);


  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <div className="min-h-screen overflow-x-hidden" ref={containerRef}>
      <motion.div
        className="max-w-7xl mx-auto space-y-8 py-12"
        style={{ opacity, scale }}>
        <FadeInWhenVisible>
          <div className="text-center space-y-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              Conference Topics
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Explore the diverse range of topics covered in ICCSAI 2025.
            </motion.p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search topics..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </FadeInWhenVisible>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[calc(100vh-24rem)]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}>
            {visibleTopics.map((topic, index) => (
              <FadeInWhenVisible key={topic} delay={index * 0.05}>
                <motion.div
                  className="relative group"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.95 }}>
                  <motion.div
                    className="relative h-[80px] flex flex-col justify-center backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 overflow-hidden bento-grid"
                    whileHover={{
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      borderColor: "rgba(255,255,255,0.4)",
                    }}>
                    <h3 className="text-center font-medium text-gray-900">
                      {topic}
                    </h3>
                  </motion.div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </motion.div>

          {filteredTopics.length > 8 && (
            <FadeInWhenVisible delay={0.4}>
              <div className="flex justify-center c mt-10 p-4 rounded-xl">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <motion.button
                      className="group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}>
                      Show All Topics
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] bg-[#F2F3F2] mt-5 overflow-hidden flex flex-col">
                    <DialogHeader>
                      <DialogTitle>All Conference Topics</DialogTitle>
                    </DialogHeader>
                    <div className="relative mb-4">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        type="search"
                        placeholder="Search all topics..."
                        className="w-full pl-10"
                        value={modalSearchQuery}
                        onChange={(e) => setModalSearchQuery(e.target.value)}
                      />
                    </div>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hideScroll overflow-y-auto pr-4"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.05 } },
                      }}>
                      {modalFilteredTopics.map((topic, index) => (
                        <motion.div
                          key={topic}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow border border-white/20"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                          }}>
                          
                          <h3 className="text-center font-medium text-gray-900">
                            {topic}
                          </h3>
                        </motion.div>
                      ))}
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </div>
            </FadeInWhenVisible>
          )}
        </div>
      </motion.div>
    </div>
  );
}