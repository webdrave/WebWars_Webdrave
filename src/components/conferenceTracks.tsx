"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const tracks = [
  {
    title:
      "Emerging Trends and Applications in Machine Learning and Deep Learning",
    chairs: [],
    side: "left",
  },
  {
    title: "Immersive Futures: Merging Realities with Intelligent Systems",
    chairs: [
      "Dr. Bhanu Sharma, Chitkara University, Punjab, India",
      "Dr. Gurjinder Singh, Chitkara University, Punjab, India",
    ],
    side: "right",
  },
  {
    title:
      "Artificial Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems",
    chairs: [
      "Dr. Anurag Dwivedi,Bansal Institute of Engineering and Technology, Lucknow, India",
      "Dr. Saurabh Kumar,Institute of Engineering and Rural Technology (IERT), Prayagraj, India",
      "Dr. Punit Kumar Chaubey,Bansal Institute of Engineering and Technology, Lucknow, India",
    ],
    side: "left",
  },
  {
    title: "Innovative and Disruptive Technologies",
    chairs: ["Dr. Amanpreet Kaur, Chitkara University, Punjab, India"],
    side: "right",
  },
  {
    title:
      "The Convergence of Generative AI and Quantum Computing: Unlocking the Next Frontier of Innovation",
    chairs: [
      "Dr. Anitha Julian, Saveetha Engineering College, Tamilnadu India",
      "Dr. Ramyadevi R,Saveetha Engineering College, Tamilnadu India",
      "Dr T.Ganesh Kumar,School of Computer Science and Engineering, Galgotias University Greater Noida, India",
      "Dr Priti Rishi,SRM Institute of science and technology, Vadapalani campus, Chennai, India",
    ],
    side: "left",
  },
  {
    title: "Federated Learning for Predictive Healthcare Paradigm",
    chairs: [
      "Dr. Balamurugan Balasamy,Shiv Nadar University, Delhi-NCR Campus, Noida, India",
      "Dr. Seema Rawat, Amity University, Uttar Pradesh, Noida, India",
      "Dr Prithi Samuel,SRM Institute of Science and Technology, Kattankulathur, Chennai, India",
      "Dr. Firoz Khan, Center for Information & Communication Sciences, Ball state university, USA",
    ],
    side: "right",
  },
  {
    title:
      "Advances in Adversarial and Multi- Source Transfer learning for secure and Robust Modern Healthcare System",
    chairs: [
      "Dr. Ganesh Gopal Devarajan, SRM Institute of Science and Technology, Delhi - NCR Campus, India",
      "Dr. Rajendra Prasad Mahapatra, SRM Institute of Science and Technology, Delhi - NCR Campus, India",
    ],
    side: "left",
  },
  {
    title:
      "Transformation with AI, Deep Learning Breakthroughs and Real World Applications",
    chairs: [
      "Dr P Privietha, Sathyabama Institute of Science and Technology,Chennai, TN, India",
      "Dr T.Ganesh Kumar,School of Computer Science and Engineering, Galgotias University Greater Noida, India",
      "Dr Shajilin Loret,Francis Xavier Engineering College,Tirunelveli, Tamilnadu, India",
      "Dr Manish T.I,Department of Computer Science and Engineering,SCMS,School of Engineering and Technology, Kerala",
    ],
    side: "right",
  },
  {
    title:
      "Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies",
    chairs: [
      "Dr. Nagresh Kumar, Amity University, India",
      "Dr. Hemant Kumar Saini, Amity University, India",
    ],
    side: "left",
  },
  {
    title:
      "Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices",
    chairs: [
      "Dr Amruta Deshpande, Director Research and Development, Indira Group of Institutes, Pune, India",
      "Dr Rajesh Raut,HOD,Research and Development, MIT School of Distance Education, Pune, India",
      "Dr Natashaa Kaul,Symbiosis Centre for Management and Human Resource Development, Pune, India",
    ],
    side: "right",
  },
  {
    title:
      "Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications",
    chairs: [
      "Dr Varun Malik, Chitkara University, Punjab, India",
      "Dr. Jagjit Singh Dhatterwal,Koneru Lakshmaiah Education Foundation, Vaddeswaram, Andhra Pradesh, India",
      "Dr Kiran Malik,GL Bajaj Institute of Technology & Management, Greater Noida, India",
    ],
    side: "left",
  },
  {
    title:
      "Blockchain, Cybersecurity, and AI: Building Resilient Systems for the Future",
    chairs: [
      "Prof. Keshav Kaushik,Amity School of Engineering and Technology, Amity University Punjab, Mohali, India",
      "Dr T.Ganesh Kumar,School of Computer Science and Engineering, Galgotias University Greater Noida, India",
      "Dr. Gunjan Chhabra,Department of CSE, Graphic Era Hill University, Dehradun, Uttarakhand, India",
    ],
    side: "right",
  },
  {
    title:
      "Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond",
    chairs: [
      "Dr. Ashutosh Kumar Singh,Department of Computer Science, ADC, University of Allahabad, India",
      "Dr. Naveen Kumar, Department of CSE, SV National Institute of Technology, Surat,Gujrat, India",
    ],
    side: "left",
  },
  {
    title:
      "Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a Sustainable Future",
    chairs: [
      "Dr. Abhishek Sharma, PCE, JAIPUR, India",
      "Dr.Nikita Jain, PCE, JAIPUR, India",
      "Dr.Aryan Chaudhary,Chief Scientific Advisor Bio Tech Sphere Research, India",
    ],
    side: "right",
  },
];

interface Track {
  title: string;
  chairs: string[];
  side: string;
}

export default function ConferenceTracks() {
  const containerRef = useRef(null);
  const [selectedTrack, setSelectedTrack] = useState(null as Track | null);
  useEffect(() => {
    if (selectedTrack) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [selectedTrack]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 60%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="min-h-screen w-full py-8 sm:py-12 px-4">
      <div className="mx-auto max-w-6xl space-y-16 sm:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-3xl backdrop-blur-md border border-white/20 bg-white/60 p-8 sm:p-12 shadow-sm">
          <h1 className="mb-4 sm:mb-6 text-center font-serif text-3xl sm:text-[45px] md:text-[55px] tracking-wide">
            Conference Tracks and Track Chairs
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            Exploring innovations in AI, security, computing, and global
            collaboration.
          </p>
        </motion.div>
      </div>
      <div className="relative flex  justify-center items-center mt-16">
        <svg
          width="373"
          height="2900"
          viewBox="0 0 373 2900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M185.084 51.6787H222.604C240.893 51.6787 258.816 56.8046 274.34 66.4749L276.784 67.9975C289.055 75.6416 299.215 86.2381 306.336 98.8194V98.8194C313.695 111.821 317.563 126.506 317.563 141.446V158.611C317.563 172.507 314.328 186.212 308.114 198.641V198.641C299.893 215.082 286.772 228.614 270.605 237.36V237.36C257.488 244.456 242.778 248.189 227.864 248.189H185.084H165.412C127.971 248.189 92.9331 266.634 71.7412 297.501V297.501L66.8378 306.719C58.0536 323.234 54.5671 342.052 56.852 360.617V360.617C58.4192 373.35 62.6587 385.609 69.2929 396.589L70.5788 398.718C77.1789 409.642 85.8364 419.182 96.0711 426.808V426.808C110.488 437.55 127.567 444.147 145.462 445.887L171.1 448.38H220.412L231.831 449.215C244.168 450.118 256.13 453.862 266.78 460.156V460.156L279.867 468.209C290.112 474.514 298.597 483.305 304.535 493.767V493.767C308.77 501.229 311.625 509.393 312.963 517.868L315.487 533.856C316.864 542.573 316.948 551.446 315.738 560.187V560.187C312.652 582.476 301.314 602.794 283.967 617.125L277.084 622.81V622.81C264.999 632.478 250.742 639.058 235.544 641.98L231.059 642.843C223.977 644.205 216.782 644.89 209.571 644.89H182.14H152.83C142.05 644.89 131.372 646.97 121.38 651.014V651.014C110.964 655.23 101.503 661.497 93.5573 669.442L80.5731 682.426L78.3661 685.022C63.6367 702.351 55.5493 724.353 55.5493 747.096V748.143C55.5493 757.751 57.0983 767.296 60.1367 776.411L60.4616 777.386C67.6887 799.068 83.1668 817.029 103.543 827.378V827.378C113.169 832.268 123.622 835.32 134.367 836.38L170.364 839.929H203.484H217.093C245.854 839.929 273.207 852.378 292.096 874.066V874.066C298.732 881.685 304.168 890.269 308.217 899.525L308.984 901.278C314.642 914.212 317.563 928.289 317.563 942.406V942.406C317.563 956.297 314.705 970.15 309.167 982.888L306.265 989.561C299.273 1005.64 287.176 1018.97 271.845 1027.49V1027.49C265.553 1030.99 258.817 1033.62 251.82 1035.3L239.085 1038.38C226.191 1041.49 212.974 1043.06 199.71 1043.06H157.117H150.215C129.367 1043.06 109.072 1049.78 92.3356 1062.21V1062.21C75.6159 1074.63 63.3351 1092.1 57.3076 1112.04L55.0554 1119.49C50.1179 1135.82 50.5502 1153.3 56.2886 1169.37V1169.37C57.7559 1173.48 59.558 1177.46 61.6766 1181.27L67.652 1192.03C71.3432 1198.67 75.8972 1204.8 81.1955 1210.25V1210.25C92.7984 1222.18 107.609 1230.5 123.839 1234.2L141.103 1238.13C151.745 1240.56 162.625 1241.78 173.54 1241.78H219.676L235.112 1243.37C257.431 1245.67 278.169 1255.95 293.504 1272.33V1272.33C299.213 1278.43 304.076 1285.27 307.959 1292.67L308.465 1293.64C314.475 1305.08 318.233 1317.58 319.535 1330.44L320.578 1340.74C322.45 1359.22 318.679 1377.83 309.762 1394.13V1394.13C304.697 1403.38 298.076 1411.7 290.189 1418.71L289.656 1419.18C272.075 1434.81 249.37 1443.44 225.848 1443.44H203.484H163.016C150.795 1443.44 138.628 1445.06 126.829 1448.24L112.592 1452.08C103.128 1454.64 94.3095 1459.16 86.7106 1465.35V1465.35C81.1797 1469.85 76.3732 1475.18 72.4588 1481.15L71.2614 1482.97C65.7384 1491.39 61.7756 1500.73 59.5626 1510.55L57.668 1518.96C53.4031 1537.88 54.715 1557.64 61.4448 1575.83L62.0309 1577.42C67.905 1593.3 77.9513 1607.31 91.1127 1617.96V1617.96C98.2767 1623.76 106.253 1628.48 114.787 1631.96L117.396 1633.03C130.99 1638.57 145.532 1641.43 160.214 1641.43H203.484L230.828 1643.82C251.474 1645.63 271.259 1652.93 288.124 1664.98V1664.98L289.361 1666.13C302.043 1677.9 311.337 1692.86 316.278 1709.45V1709.45C318.112 1715.6 319.328 1721.93 319.91 1728.33L320.338 1733.04C321.424 1744.98 320.387 1757.02 317.277 1768.59V1768.59C311.722 1789.27 299.778 1807.66 283.149 1821.14L281.5 1822.48V1822.48C268.932 1831.18 254.433 1836.69 239.257 1838.52L219.676 1840.88H185.084H160.272C149.901 1840.88 139.603 1842.62 129.81 1846.04V1846.04C121.315 1849 113.297 1853.18 106.009 1858.45L104.123 1859.82C97.0667 1864.92 90.6508 1870.86 85.014 1877.49L82.3895 1880.59C74.8533 1889.46 68.9096 1899.57 64.8212 1910.48L64.3913 1911.62C61.8067 1918.52 60.0688 1925.7 59.2158 1933.01L59.0362 1934.55C57.6934 1946.06 58.7598 1957.72 62.1675 1968.79V1968.79C64.0496 1974.91 66.6283 1980.79 69.853 1986.32L70.9171 1988.14C73.9663 1993.37 77.4753 1998.32 81.4024 2002.92L83.5103 2005.39C87.8254 2010.45 92.6487 2015.05 97.9044 2019.13V2019.13C105.919 2025.34 114.856 2030.25 124.393 2033.7L126.395 2034.42C138.443 2038.77 151.156 2041 163.966 2041H175H211.5H221.703C229.861 2041 237.98 2042.14 245.824 2044.38V2044.38C254.228 2046.78 262.226 2050.42 269.554 2055.18L278.5 2061L285.124 2066.01C294.215 2072.88 301.338 2082.02 305.778 2092.52V2092.52C307.74 2097.16 309.157 2102.01 309.999 2106.97L312.773 2123.32C313.922 2130.1 314.5 2136.95 314.5 2143.82V2154.38C314.5 2160.42 313.536 2166.43 311.644 2172.17V2172.17C309.715 2178.02 306.848 2183.51 303.154 2188.44L298.976 2194.02C295.002 2199.33 290.507 2204.22 285.56 2208.63L285.306 2208.86C275.202 2217.86 263.418 2224.79 250.631 2229.23L248.063 2230.12C238.726 2233.36 229.014 2235.4 219.161 2236.19L196.5 2238H153.5H151.987C141.428 2238 130.967 2240.03 121.176 2243.99V2243.99C113.765 2246.98 106.829 2251.04 100.588 2256.03L98.5504 2257.66C92.8671 2262.21 87.6967 2267.36 83.1308 2273.03L81.516 2275.03C77.5113 2280 73.8978 2285.28 70.7078 2290.81L68.2039 2295.15C63.1014 2303.99 59.4591 2313.6 57.4173 2323.61V2323.61C56.1424 2329.85 55.5 2336.21 55.5 2342.59V2345.4C55.5 2352.1 56.3862 2358.78 58.1357 2365.25V2365.25C59.7064 2371.06 61.961 2376.67 64.8525 2381.95L65.2781 2382.73C69.7284 2390.85 75.5121 2398.19 82.3678 2404.43V2404.43C90.0463 2411.41 98.9693 2416.91 108.655 2420.64L110.798 2421.46C116.916 2423.81 123.26 2425.53 129.73 2426.6L150.5 2430L181 2433H210L229.841 2435.1C238.57 2436.03 247.125 2438.18 255.255 2441.49V2441.49C265.015 2445.47 274.032 2451.07 281.926 2458.05L284.763 2460.56C292.208 2467.15 298.567 2474.86 303.607 2483.43V2483.43C308.507 2491.76 312.1 2500.79 314.262 2510.21L314.392 2510.78C316.781 2521.19 317.458 2531.92 316.395 2542.55L316.121 2545.29C315.047 2556.03 312.315 2566.54 308.023 2576.45L306.503 2579.96C303.188 2587.6 298.7 2594.69 293.201 2600.96V2600.96C284.533 2610.83 273.57 2618.43 261.277 2623.07L257.5 2624.5V2624.5C241.321 2631.1 224.013 2634.5 206.538 2634.5H201L155.5 2638L142.297 2639.02C129.54 2640 117.072 2643.31 105.509 2648.79L99.7535 2651.51C90.0307 2656.12 81.4076 2662.75 74.4646 2670.97V2670.97C65.3395 2681.77 59.4395 2694.92 57.4398 2708.92L55.5 2722.5L54.2734 2734.59C52.7936 2749.18 55.8296 2763.87 62.9707 2776.67V2776.67C65.3176 2780.88 68.0834 2784.84 71.2261 2788.49L74.1388 2791.88C81.3425 2800.25 89.708 2807.55 98.9806 2813.55L99.6195 2813.96C106.852 2818.64 114.565 2822.53 122.625 2825.58L137 2831L168 2838L204.5 2842.5"
            stroke="url(#paint0_linear_213_175)"
            strokeWidth="14.7199"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
            transition={{ ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_213_175"
              x1="185.452"
              y1="51.6787"
              x2="185.452"
              y2="1840.88"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#CBDDE6" />
              <stop offset="0.276" stopColor="#B9DAE1" stopOpacity="0.88" />
              <stop offset="0.51" stopColor="#A2CEE1" stopOpacity="0.62" />
              <stop offset="0.724" stopColor="#A5EBE7" stopOpacity="0.54" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-20 sm:top-20 left-1/2 -translate-x-1/2 w-full flex flex-col items-center gap-[3.8rem] lg:gap-[3.8rem]">
          {tracks.map((track, index) => (
            <div
              key={index}
              onClick={() => setSelectedTrack(track)}
              className={`relative cursor-pointer ${
                track.side === "left"
                  ? "-translate-x-[80px] sm:-translate-x-[120px] md:-translate-x-[160px] text-right"
                  : "translate-x-[80px] sm:translate-x-[120px] md:translate-x-[160px] text-left rotate-180"
              }`}>
              <Card text={track.title} side={track.side} />
            </div>
          ))}
        </div>
        {selectedTrack && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 p-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 border border-gray-200">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 transition-all"
                onClick={() => setSelectedTrack(null)}>
                ✖
              </button>

              {/* Modal Content */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                {selectedTrack.title}
              </h2>

              <div className="border-t border-gray-300 pt-4">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  Track Chairs:
                </h4>
                {selectedTrack.chairs.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedTrack.chairs.map((chair, index) => (
                      <li
                        key={index}
                        className="text-gray-700 text-sm sm:text-base">
                        {chair}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm sm:text-base">
                    No chairs listed for this track.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

const Card = ({ text, side }: { text: string; side: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#E9EBEF] rounded-r-full
      w-[300px] sm:w-[350px] md:w-[450px] lg:w-[512px] h-[138px] py-4 px-6`}>
      <p
        className={`text-center text-sm sm:text-base md:text-lg px-4 ${
          side === "right" ? "rotate-180" : ""
        }`}>
        {text}
      </p>
    </div>
  );
};
