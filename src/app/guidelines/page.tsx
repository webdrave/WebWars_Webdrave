import React from "react";

const Page = () => {
  return (
    <div className="relative p-6 md:p-8 bg-gray-100 min-h-screen mt-20 md:mt-32 ">
      {/* Left side line */}
      <div className="absolute -top-32 min-h-full bottom-0 left-2 md:left-4 lg:left-10 xl:left-20 border-[#C9DCEA] border-l-4 md:border-l-8 w-full"></div>
      
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">Author&apos;s Guidelines</h1>
      
      <div className="max-w-4xl mx-auto">
        {/* Author's Guidelines */}
        <div className="bg-white p-4 md:p-6 rounded-2xl mt-6 -z-50 md:mt-10 shadow-md">
          <p className="text-gray-700 text-sm md:text-base z-50 ">
            Authors are invited to submit original, high-quality, and previously unpublished research articles. Submissions must not be under review by any other publication or conference. All manuscripts should be submitted electronically via Microsoft CMT in strict adherence to the IEEE standard two-column conference template, which can be accessed through the provided link. Each manuscript is limited to a maximum of six (6) pages, including figures, tables, and references. Additional pages may be accommodated with a nominal fee.
          </p>
        </div>
        
        <div className="relative">
          <h2 className="text-2xl md:text-3xl mt-8 md:mt-10 font-semibold mb-4">Paper Formatting Guidelines</h2>
          <button className="absolute top-0 right-0 rounded-xl text-white px-3 md:px-4 py-2 bg-[#222222] hover:bg-[#212121] text-sm md:text-base">
            Download Template
          </button>
        </div>
        
        {/* Paper Formatting Guidelines */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md mt-6 md:mt-8">
          <ul className="list-decimal list-inside text-gray-700 space-y-2 text-sm md:text-base">
            <li>Paper Size: US Letter (8.5&quot; x 11&quot;).</li>
            <li>Paper Length: Maximum of 6 pages, including figures, tables, and references. Two additional pages are permitted with a charge of ₹1000 per page (Indian authors) or $50 per page (International authors).</li>
            <li>Formatting: Double-column layout, single-spaced, using 10pt Times New Roman font.</li>
            <li>Margins: Top: 1&quot; (25 mm) on the title page; 0.75&quot; (19 mm) elsewhere. Left, Right, and Bottom margins: 0.75&quot; (19 mm).</li>
            <li>File Format: PDF, with a maximum size of 5MB. All fonts must be embedded.</li>
            <li>No page numbering should be included in the manuscript.</li>
            <li>Use the IEEE MS Word template provided via the link above for proper formatting.</li>
          </ul>
        </div>
        
        <h2 className="text-2xl md:text-3xl mt-8 md:mt-10 font-semibold mb-4">General Instructions</h2>
        
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md mt-6 md:mt-8">
          <ul className="list-decimal list-inside text-gray-700 space-y-2 text-sm md:text-base">
            <li>Papers violating formatting guidelines may be rejected.</li>
            <li>Submissions must be original, unpublished work not under review elsewhere.</li>
            <li>Simultaneous submissions to other conferences or journals are prohibited.</li>
            <li>All manuscripts must be written in English and prepared as a PDF document.</li>
            <li>Papers should strictly adhere to the IEEE two-column format with 10pt font size.</li>
            <li>The page limit is six (6) pages. An additional two pages are allowed with extra charges as specified.</li>
            <li>All figures, tables, and references must fit within the page limit.</li>
            <li>Papers will be reviewed based on originality, significance, technical quality, and clarity.</li>
            <li>The decision to accept or reject a paper rests with the Technical Program Committee.</li>
            <li>Accepted papers must address reviewers&apos; comments and meet final submission requirements.</li>
            <li>The Conference Chair reserves the right to exclude papers not presented or meeting guidelines from the proceedings.</li>
            <li>All submissions should be made via Microsoft CMT.</li>
          </ul>
        </div>
        
        <div className="border-y-2 border-[#1A8EF7] p-4 md:p-6 mt-6 md:mt-8 relative">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">IEEE E-Copyright Process Document</h2>
          <p className="text-[#1A8EF7] font-normal text-sm md:text-base">Final Submission with IEEE Xplore®-Compatible PDFs</p>
          <button className="absolute top-1/3 right-4 md:right-6 bg-[#1A8EF7] text-white px-3 md:px-4 py-2 rounded-xl hover:bg-blue-600 text-sm md:text-base">
            Download Here
          </button>
        </div>
        
        <div className="bg-blue-100 p-4 md:p-6 rounded-xl mt-4 text-sm md:text-base">
          <ul className="list-disc list-outside pl-4 md:pl-5 text-gray-700 space-y-2">
            <li>Papers of acceptable quality presented at the conference will be submitted to IEEE Xplore for potential inclusion.</li>
            <li>Accepted papers must be presented by at least one author. Authors must complete paid registration to upload the final IEEE-compliant version of their paper.</li>
            <li>Failure to register or present the paper will result in removal from the conference program and proceedings.</li>
            <li>No refunds will be provided for cancellations, but substitutions are allowed before the event.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
