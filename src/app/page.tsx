"use client";
import Image from "next/image";

import BentoGridSecondDemo from "../components/bentoDemo";
import ScrollBaseAnimation from "@/components/ui/ScrollBaseAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="h-screen w-full bgkeliye relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 flex flex-col mt-10 lg:mt-24 lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#222222]">
                ICCSAI - 2025
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 text-[#444444]">
                2025 3rd International Conference on Communication, Security,
                and Artificial Intelligence
              </h2>
              <div className="space-y-4 text-[#666666]">
                <p>
                  <strong>Conference ID:</strong> #64074
                </p>
                <p>
                  <strong>Mode:</strong> Hybrid
                </p>
                <p>
                  <strong>Date:</strong> 4th - 6th April, 2025
                </p>
                <p>
                  <strong>Technically Sponsored by:</strong> IEEE Uttar Pradesh
                  Section
                </p>
                <p>
                  <strong>Venue:</strong> Galgotias University, Greater Noida,
                  India (NCR New Delhi)
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/pictures/audience.png"
                  alt="Conference audience"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <BentoGridSecondDemo />
        <ScrollBaseAnimation children="25th December, 2024 : Abstract Submission Date   -    5th January, 2025 : Full Paper Submission Date      -      28th February, 2025:Notification of Acceptance" baseVelocity={-1} scrollDependent/>
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 py-16 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4">
              ICCSAI 2025 - 2025 Third International Conference on Communication,
              Security, and Artificial Intelligence
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
