// "use client";
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// const topics = [
//   "Artificial Intelligence", "LLM (Large Language Models)", "Federated Learning",
//   "Data Science", "Big Data", "Software Reliability Engineering",
//   "Blockchain", "Cryptography", "Watermarking", "Privacy and Preservation",
//   "Information Security", "Digital Services and Protection Mechanism",
//   "Cyber Security", "Electronics & Communication Engineering", "Renewable Energy",
//   "Control Systems", "AI in Fashion Technology", "Soft Computing", "Quantum Computing",
//   "Machine Learning", "Deep Learning", "5G/6G/7G Technologies",
//   "IoT (Internet of Things)", "IIoT (Industrial IoT)", "IMoT (Internet of Medical Things)",
//   "Ontology", "Image Processing", "Wireless Communication Network", "Bitcoin",
//   "Robotics and Automation", "Smart Grid", "Electric Vehicles", "Cryptocurrency",
//   "Distributed & Parallel Computing", "High Performance Computing", "Cloud Quality Management",
//   "Cloud & Grid Computing", "Mobile Computing", "Edge Computing", "Fog Computing",
//   "Cognitive Computing", "Computer Vision and Image Processing Applications",
//   "Intelligent Computing Systems", "AR/VR/Metaverse", "Human Computer Interface",
//   "Cyborg", "Sustainability", "Multimedia Technology", "E-commerce", "DNA Computing"
// ];

// export default function ConferenceTopics() {
//   const [search, setSearch] = useState("");
//   const filteredTopics = topics.filter(topic =>
//     topic.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 max-w-6xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50">
//       <h1 className="text-3xl font-bold mb-4">Conference Topics</h1>
//       <p className="text-gray-600 mb-6">Explore the diverse range of topics covered in ICCSAI 2025.</p>
//       <Input
//         type="text"
//         placeholder="Search topics..."
//         className="w-full max-w-md mx-auto mb-6"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {filteredTopics.map((topic, index) => (
//           <motion.div key={index} whileHover={{ scale: 1.05 }}>
//             <Card className="shadow-md hover:shadow-lg bg-gradient-to-r from-blue-100 to-purple-100">
//               <CardContent className="p-4 text-center">
//                 <Badge variant="outline" className="text-sm">{topic}</Badge>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
