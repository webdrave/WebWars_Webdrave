"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search, X } from "lucide-react"

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
    "DNA Computing"
];
  
export default function ConferenceTopics() {
  const [searchQuery, setSearchQuery] = useState("")
  const [modalSearchQuery, setModalSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredTopics = topics.filter((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()))

  const modalFilteredTopics = topics.filter((topic) => topic.toLowerCase().includes(modalSearchQuery.toLowerCase()))

  const visibleTopics = filteredTopics.slice(0, 12)

  return (
    <div className="h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Conference Topics</h1>
          <p className="text-lg text-gray-600">Explore the diverse range of topics covered in ICCSAI 2025.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search topics..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[calc(100vh-24rem)] overflow-hidden">
            {visibleTopics.map((topic) => (
              <div key={topic} className="relative group">
                <div className="absolute inset-0  rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative h-full backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-center font-medium text-gray-900">{topic}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredTopics.length > 8 && (
            <>
              <div className="absolute bottom-0 left-0 right-0 h-32  pointer-events-none" />
              <div className="flex justify-center mt-10">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="group">
                      Show All Topics
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
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
                      {modalSearchQuery && (
                        <Button
                          variant="ghost"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                          onClick={() => setModalSearchQuery("")}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pr-4">
                      {modalFilteredTopics.map((topic) => (
                        <div
                          key={topic}
                          className="bg-white/60 backdrop-blur-md rounded-xl p-4 shadow border border-white/20"
                        >
                          <h3 className="text-center font-medium text-gray-900">{topic}</h3>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}