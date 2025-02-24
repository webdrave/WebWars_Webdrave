"use client";
import Image from "next/image";

import BentoGridSecondDemo from "../components/bentoDemo";
import ScrollBaseAnimation from "@/components/ui/ScrollBaseAnimation";
import ConferenceTopics from "@/components/conferencetopic";
import KeyHighlights from "@/components/keyHighlights";
import ConferenceTracks from "@/components/conferenceTracks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
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
        <ScrollBaseAnimation baseVelocity={-1} scrollDependent>
          <div className="flex justify-center items-center gap-14">

        <span className="text-sm">⚫  </span> 25th December, 2024 : Abstract Submission Date <span className="text-sm">⚫  </span> 5th January, 2025 :
          Full Paper Submission Date <span className="text-sm">⚫  </span> 28th February, 2025: Notification of
          Acceptance
          </div>

        </ScrollBaseAnimation>

        <section className="py-16 overflow-hidden">
          <ConferenceTopics />
        </section>
        <section className="-mt-10 overflow-hidden">
          <KeyHighlights />
        </section>
        <section className="-mt-32 overflow-hidden">
          <ConferenceTracks />
        </section>
        <section className="">
          {/* Add footer here  */}
          <Footer />
        </section>
      </main>
    </div>
  );
}
