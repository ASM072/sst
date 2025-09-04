// import React from 'react';
// import { HashLink } from 'react-router-hash-link';
// import { useState } from 'react/cjs/react.development';

// const NavLinks = () => {
//     const [open, setOpen] = useState(false);
//     return (
//         <>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/#about">
//                 About
//             </HashLink>
//             <div className="relative inline-block text-left">
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="px-4 font-extrabold text-gray-500 hover:text-green-700 focus:outline-none"
//                 >
//                     Services ▾
//                 </button>
//                 {open && (
//                     <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg">
//                         <HashLink
//                             smooth
//                             to="/#web-dev"
//                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                             onClick={() => setOpen(false)}
//                         >
//                             Web Development 
//                         </HashLink>
//                         <HashLink
//                             smooth
//                             to="/#mobile-dev"
//                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                             onClick={() => setOpen(false)}
//                         >
//                             Mobile Development
//                         </HashLink>
//                         <HashLink
//                             smooth
//                             to="/#uiux"
//                             className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                             onClick={() => setOpen(false)}
//                         >
//                             UI/UX Design
//                         </HashLink>
//                     </div>
//                 )}
//             </div>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" to="/">
//                 Portfolio
//             </HashLink>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" to="/contact#contact">
//                 Contact Us
//             </HashLink>
//             <HashLink className="text-white bg-green-700 hover:bg-green-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
//                 Demo our products
//             </HashLink>
//         </>
//     )
// }

// export default NavLinks;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
// const NavLinks = () => {
//   const [open, setOpen] = useState(false); // Toggle dropdown visibility
//   const categories = [
//     {
//       title: "Cloud & Virtualization",
//       link: "/cloud",
//       subServices: [
//         "Cloud Services",
//         "Multi-Cloud Strategy",
//         "Cloud Automation",
//         "Hybrid Cloud Solutions",
//         "Cloud Security",
//         "Cloud Cost Optimization",
//         "Cloud Performance Monitoring",
//         "Cloud Compliance & Governance",
//         "Cloud-Based Disaster Recovery",
//         "Managed Cloud Services",
//       ],
//     },
//     {
//       title: "IT Infrastructure & Networking",
//       link: "/infrastructure",
//       subServices: [
//         "Enterprise IT Infrastructure",
//         "Servers & Storage",
//         "Networking Solutions",
//         "Data Center Solutions",
//         "Virtualization",
//         "Middleware",
//         "Bring Your Own Device (BYOD)",
//         "Identity & Access Management (IAM)",
//       ],
//     },
//     {
//       title: "Enterprise Applications & Management",
//       link: "/enterprise",
//       subServices: [
//         "Enterprise Resource Planning (ERP)",
//         "Business Continuity",
//         "Big Data",
//         "Professional Services",
//         "Business Process Automation",
//         "Project Management",
//       ],
//     },
//     {
//       title: "Cybersecurity & Risk Management",
//       link: "/cybersecurity",
//       subServices: [
//         "Threat Intelligence",
//         "SIEM",
//         "Endpoint Security",
//         "Network Security",
//         "Cloud Security",
//         "Compliance & Risk Management",
//         "Security Audits & Assessments",
//         "Incident Response",
//         "Data Loss Prevention (DLP)",
//         "Security Awareness Training",
//         "Managed Security Services",
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-row space-x-6 items-center">
//       {/* Other NavLinks */}
//         <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/#hero">
//             About
//         </HashLink>

//       {/* Services Dropdown */}
//       <div
//         className="relative group"
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={() => setOpen(false)}
//       >
//         <button className="px-4 font-extrabold text-gray-500 hover:text-green-700">
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" smooth to="/#services">
//                 Services
//             </HashLink>
//         </button>

//         {open && (
//           <div className="absolute top-full left-0 mt-2 w-[600px] bg-white shadow-lg rounded-lg z-50 p-4 grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
//             {categories.map((cat, index) => (
//               <div key={index}>
//                 {/* Heading - clickable */}
//                 <Link
//                   to={cat.link}
//                   className="font-bold text-gray-700 hover:text-green-700 block mb-2"
//                 >
//                   {cat.title}
//                 </Link>

//                 {/* Sub-services - just text */}
//                 {cat.subServices.map((sub, subIndex) => (
//                   <span
//                     key={subIndex}
//                     className="block text-gray-500 text-sm mb-1"
//                   >
//                     {sub}
//                   </span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Other links */}
//           <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" to="/#portfolio">
//               Portfolio
//           </HashLink>
//           <HashLink className="px-4 font-extrabold text-gray-500 hover:text-green-700" to="/contact#contact">
//               Contact Us
//           </HashLink>
//           <HashLink className="text-white bg-green-700 hover:bg-green-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
//               Demo our products
//           </HashLink>
//     </div>
//   );
// };

// export default NavLinks;

import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const categories = [
    {
      title: "Cloud & Virtualization",
      link: "/cloud",
      subServices: [
        "Cloud Services",
        "Multi-Cloud Strategy",
        "Cloud Automation",
        "Hybrid Cloud Solutions",
        "Cloud Security",
        "Cloud Cost Optimization",
        "Cloud Performance Monitoring",
        "Cloud Compliance & Governance",
        "Cloud-Based Disaster Recovery",
        "Managed Cloud Services",
      ],
    },
    {
      title: "IT Infrastructure & Networking",
      link: "/infrastructure",
      subServices: [
        "Enterprise IT Infrastructure",
        "Servers & Storage",
        "Networking Solutions",
        "Data Center Solutions",
        "Virtualization",
        "Middleware",
        "Bring Your Own Device (BYOD)",
        "Identity & Access Management (IAM)",
      ],
    },
    {
      title: "Enterprise Applications & Management",
      link: "/enterprise",
      subServices: [
        "Enterprise Resource Planning (ERP)",
        "Business Continuity",
        "Big Data",
        "Professional Services",
        "Business Process Automation",
        "Project Management",
      ],
    },
    {
      title: "Cybersecurity & Risk Management",
      link: "/cybersecurity",
      subServices: [
        "Threat Intelligence",
        "SIEM",
        "Endpoint Security",
        "Network Security",
        "Cloud Security",
        "Compliance & Risk Management",
        "Security Audits & Assessments",
        "Incident Response",
        "Data Loss Prevention (DLP)",
        "Security Awareness Training",
        "Managed Security Services",
      ],
    },
  ];

  return (
    <div className="flex flex-row items-center space-x-6">
      {/* About */}
      <Link to="/about" className="px-4 font-extrabold text-gray-500 hover:text-green-700">
        About
      </Link>

      {/* Services (no hover gap, headings clickable only) */}
      <div className="relative group">
        <button
          className="px-4 font-extrabold text-gray-500 hover:text-green-700"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Services
        </button>

        {/* Dropdown: attached directly under button (no mt gap), stays open while hovering button or menu */}
        <div
          className="absolute left-0 top-full w-[640px] bg-white shadow-lg rounded-lg z-50 hidden group-hover:block"
        >
          {/* Scrollable content if tall */}
          <div className="p-4 grid grid-cols-2 gap-6 max-h-96 overflow-y-auto overscroll-contain">
            {categories.map((cat) => (
              <div key={cat.title}>
                {/* Clickable heading to category page */}
                <Link
                  to={cat.link}
                  className="block font-bold text-gray-800 hover:text-green-700 mb-2"
                >
                  {cat.title}
                </Link>

                {/* Sub-services as non-clickable descriptors */}
                <ul className="space-y-1">
                  {cat.subServices.map((s) => (
                    <li key={s} className="text-sm text-gray-600">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other links */}
      <Link to="/portfolio" className="px-4 font-extrabold text-gray-500 hover:text-green-700">
        Portfolio
      </Link>

      <Link to="/contact" className="px-4 font-extrabold text-gray-500 hover:text-green-700">
        Contact Us
      </Link>

      <Link
        to="/get-demo"
        className="text-white bg-green-700 hover:bg-green-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
      >
        Demo our products
      </Link>
    </div>
  );
};

export default NavLinks;
