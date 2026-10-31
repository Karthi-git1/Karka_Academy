import React from 'react';

// Row 1: Authentic corporate logos matching the user's reference branding
export const COMPANY_LOGOS_ROW1 = [
  {
    name: 'NOVAC Technology Solutions',
    svg: (
      <svg viewBox="0 0 160 38" className="company-logo-img" aria-hidden="true">
        {/* NOVAC dual-triangle icon: Orange + Teal */}
        <g transform="translate(6, 6)">
          <polygon points="0,15 6,3 13,3 7,15" fill="#E87722" />
          <polygon points="7,25 15,3 22,3 14,25" fill="#00728F" />
        </g>
        {/* NOVAC typography */}
        <text
          x="36"
          y="20"
          fill="#004B6E"
          fontFamily="'Montserrat', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="17"
          letterSpacing="2.8"
        >
          NOVAC
        </text>
        {/* Tagline */}
        <text
          x="37"
          y="29"
          fill="#7F99AC"
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          fontSize="5.5"
          letterSpacing="1.2"
        >
          TECHNOLOGY SOLUTIONS
        </text>
      </svg>
    ),
  },
  {
    name: 'Capecom Solutions',
    svg: (
      <svg viewBox="0 0 145 38" className="company-logo-img" aria-hidden="true">
        {/* Capecom teal rounded brand wordmark */}
        <text
          x="6"
          y="23"
          fill="#00A89D"
          fontFamily="'Comfortaa', 'Quicksand', 'Inter', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-0.5"
        >
          Capecom
        </text>
        {/* Flying bird motif gracefully soaring above the 'm' */}
        <path
          d="M 103 10 C 105 8, 107.5 8, 110 9.5 C 112 8, 114.5 8, 116.5 10 C 114.5 11.2, 112 11, 110 9.5 C 108 11, 105.5 11.2, 103 10 Z"
          fill="#00A89D"
        />
        {/* Capecom Tagline */}
        <text
          x="20"
          y="31"
          fill="#1F2937"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="5.2"
          letterSpacing="0.8"
        >
          MAKING YOUR DREAMS LIVE
        </text>
      </svg>
    ),
  },
  {
    name: 'FLOW',
    svg: (
      <svg viewBox="0 0 98 38" className="company-logo-img" aria-hidden="true">
        {/* Tight bold black "FL" */}
        <text
          x="2"
          y="26"
          fill="#0A0A0A"
          fontFamily="'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="23"
          letterSpacing="0.2"
        >
          FL
        </text>
        {/* Stylized circular flow swirl "O" */}
        <g transform="translate(34, 8)">
          <circle cx="10" cy="10" r="9.5" fill="#0A0A0A" />
          <path
            d="M 10,0.5 A 9.5,9.5 0 0,1 10,19.5 A 4.75,4.75 0 0,1 10,10 A 4.75,4.75 0 0,0 10,0.5 Z"
            fill="#ffffff"
          />
          <circle cx="10" cy="5.25" r="2.2" fill="#0A0A0A" />
          <circle cx="10" cy="14.75" r="2.2" fill="#ffffff" />
        </g>
        {/* Bold black "W" */}
        <text
          x="58"
          y="26"
          fill="#0A0A0A"
          fontFamily="'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="23"
          letterSpacing="0.2"
        >
          W
        </text>
      </svg>
    ),
  },
  {
    name: 'SODISYS',
    svg: (
      <svg viewBox="0 0 150 38" className="company-logo-img" aria-hidden="true">
        {/* 3D Isometric colorful faceted cube icon */}
        <g transform="translate(6, 7)">
          <polygon points="12,1 23,7 12,13 1,7" fill="#00C4D8" />
          <polygon points="1,7 12,13 12,19 1,13" fill="#E8175D" />
          <polygon points="1,13 12,19 12,25 1,19" fill="#7B2CBF" />
          <polygon points="12,13 23,7 23,13 12,19" fill="#FFC72C" />
          <polygon points="12,19 23,13 23,19 12,25" fill="#00A86B" />
        </g>
        {/* Deep navy "SODISYS" text */}
        <text
          x="37"
          y="25"
          fill="#002D62"
          fontFamily="'Inter', 'Montserrat', sans-serif"
          fontWeight="800"
          fontSize="19"
          letterSpacing="1"
        >
          SODISYS
        </text>
      </svg>
    ),
  },
  {
    name: 'Amazon',
    svg: (
      <svg viewBox="0 0 130 38" className="company-logo-img" aria-hidden="true">
        {/* amazon wordmark in charcoal */}
        <text
          x="6"
          y="22"
          fill="#16191F"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-0.6"
        >
          amazon
        </text>
        {/* Amazon iconic vibrant orange smile arrow */}
        <path
          d="M 14 26 C 36 33, 64 33, 83 25"
          stroke="#FF9900"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Arrowhead pointing up at 'z' with smile flick */}
        <path
          d="M 78 23.5 C 80.5 24.5, 83 24.8, 85 24.8 C 84.6 22.8, 83.8 20.8, 82.2 19.5 C 85.5 20.8, 87 23.5, 87.2 26 C 85.2 27.5, 82.2 28.5, 78.5 29 C 80 27.2, 80 25.5, 78 23.5 Z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: 'TCS',
    svg: (
      <svg viewBox="0 0 110 38" className="company-logo-img" aria-hidden="true">
        <defs>
          <linearGradient id="tcsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="48%" stopColor="#E0115F" />
            <stop offset="100%" stopColor="#FF4500" />
          </linearGradient>
        </defs>
        {/* Lowercase rounded "tcs" with vivid gradient */}
        <text
          x="6"
          y="27"
          fill="url(#tcsGradient1)"
          fontFamily="'Inter', 'Outfit', sans-serif"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-1.5"
        >
          tcs
        </text>
      </svg>
    ),
  },
  {
    name: 'HCL Technologies',
    svg: (
      <svg viewBox="0 0 120 38" className="company-logo-img" aria-hidden="true">
        {/* Slanted bold royal blue HCL wordmark */}
        <text
          x="6"
          y="26"
          fill="#0056B3"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="26"
          letterSpacing="1.8"
        >
          HCL
        </text>
      </svg>
    ),
  },
  {
    name: 'Matrimony.com',
    svg: (
      <svg viewBox="0 0 160 38" className="company-logo-img" aria-hidden="true">
        {/* matrimony.com clean crimson wordmark */}
        <text
          x="4"
          y="24"
          fill="#D9383A"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="18.5"
          letterSpacing="-0.3"
        >
          matrimony.com
        </text>
      </svg>
    ),
  },
  {
    name: 'Zoho',
    svg: (
      <svg viewBox="0 0 125 38" className="company-logo-img" aria-hidden="true">
        {/* Zoho 4-color iconic blocks */}
        <rect fill="#E42528" x="4" y="7" width="12" height="12" rx="3" />
        <rect fill="#1C9F48" x="18" y="7" width="12" height="12" rx="3" />
        <rect fill="#2B6EB6" x="4" y="21" width="12" height="12" rx="3" />
        <rect fill="#F7B819" x="18" y="21" width="12" height="12" rx="3" />
        <text
          x="36"
          y="27"
          fill="#1C1C1C"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="-0.5"
        >
          ZOHO
        </text>
      </svg>
    ),
  },
  {
    name: 'Accenture',
    svg: (
      <svg viewBox="0 0 135 38" className="company-logo-img" aria-hidden="true">
        <text
          x="4"
          y="25"
          fill="#111111"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="19"
          letterSpacing="-0.4"
        >
          accenture
        </text>
        {/* Characteristic purple chevron above 't' */}
        <path
          d="M 98 10 L 103 15 L 98 20"
          stroke="#A100FF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

// Row 2: Staggered sequence featuring authentic logos
export const COMPANY_LOGOS_ROW2 = [
  {
    name: 'HCL Technologies',
    svg: (
      <svg viewBox="0 0 120 38" className="company-logo-img" aria-hidden="true">
        <text
          x="6"
          y="26"
          fill="#0056B3"
          fontFamily="'Inter', sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="26"
          letterSpacing="1.8"
        >
          HCL
        </text>
      </svg>
    ),
  },
  {
    name: 'Matrimony.com',
    svg: (
      <svg viewBox="0 0 160 38" className="company-logo-img" aria-hidden="true">
        <text
          x="4"
          y="24"
          fill="#D9383A"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="18.5"
          letterSpacing="-0.3"
        >
          matrimony.com
        </text>
      </svg>
    ),
  },
  {
    name: 'NOVAC Technology Solutions',
    svg: (
      <svg viewBox="0 0 160 38" className="company-logo-img" aria-hidden="true">
        <g transform="translate(6, 6)">
          <polygon points="0,15 6,3 13,3 7,15" fill="#E87722" />
          <polygon points="7,25 15,3 22,3 14,25" fill="#00728F" />
        </g>
        <text
          x="36"
          y="20"
          fill="#004B6E"
          fontFamily="'Montserrat', 'Inter', sans-serif"
          fontWeight="700"
          fontSize="17"
          letterSpacing="2.8"
        >
          NOVAC
        </text>
        <text
          x="37"
          y="29"
          fill="#7F99AC"
          fontFamily="'Inter', sans-serif"
          fontWeight="600"
          fontSize="5.5"
          letterSpacing="1.2"
        >
          TECHNOLOGY SOLUTIONS
        </text>
      </svg>
    ),
  },
  {
    name: 'Capecom Solutions',
    svg: (
      <svg viewBox="0 0 145 38" className="company-logo-img" aria-hidden="true">
        <text
          x="6"
          y="23"
          fill="#00A89D"
          fontFamily="'Comfortaa', 'Quicksand', 'Inter', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-0.5"
        >
          Capecom
        </text>
        <path
          d="M 103 10 C 105 8, 107.5 8, 110 9.5 C 112 8, 114.5 8, 116.5 10 C 114.5 11.2, 112 11, 110 9.5 C 108 11, 105.5 11.2, 103 10 Z"
          fill="#00A89D"
        />
        <text
          x="20"
          y="31"
          fill="#1F2937"
          fontFamily="'Inter', sans-serif"
          fontWeight="700"
          fontSize="5.2"
          letterSpacing="0.8"
        >
          MAKING YOUR DREAMS LIVE
        </text>
      </svg>
    ),
  },
  {
    name: 'FLOW',
    svg: (
      <svg viewBox="0 0 98 38" className="company-logo-img" aria-hidden="true">
        <text
          x="2"
          y="26"
          fill="#0A0A0A"
          fontFamily="'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="23"
          letterSpacing="0.2"
        >
          FL
        </text>
        <g transform="translate(34, 8)">
          <circle cx="10" cy="10" r="9.5" fill="#0A0A0A" />
          <path
            d="M 10,0.5 A 9.5,9.5 0 0,1 10,19.5 A 4.75,4.75 0 0,1 10,10 A 4.75,4.75 0 0,0 10,0.5 Z"
            fill="#ffffff"
          />
          <circle cx="10" cy="5.25" r="2.2" fill="#0A0A0A" />
          <circle cx="10" cy="14.75" r="2.2" fill="#ffffff" />
        </g>
        <text
          x="58"
          y="26"
          fill="#0A0A0A"
          fontFamily="'Inter', 'Arial Black', sans-serif"
          fontWeight="900"
          fontSize="23"
          letterSpacing="0.2"
        >
          W
        </text>
      </svg>
    ),
  },
  {
    name: 'SODISYS',
    svg: (
      <svg viewBox="0 0 150 38" className="company-logo-img" aria-hidden="true">
        <g transform="translate(6, 7)">
          <polygon points="12,1 23,7 12,13 1,7" fill="#00C4D8" />
          <polygon points="1,7 12,13 12,19 1,13" fill="#E8175D" />
          <polygon points="1,13 12,19 12,25 1,19" fill="#7B2CBF" />
          <polygon points="12,13 23,7 23,13 12,19" fill="#FFC72C" />
          <polygon points="12,19 23,13 23,19 12,25" fill="#00A86B" />
        </g>
        <text
          x="37"
          y="25"
          fill="#002D62"
          fontFamily="'Inter', 'Montserrat', sans-serif"
          fontWeight="800"
          fontSize="19"
          letterSpacing="1"
        >
          SODISYS
        </text>
      </svg>
    ),
  },
  {
    name: 'Amazon',
    svg: (
      <svg viewBox="0 0 130 38" className="company-logo-img" aria-hidden="true">
        <text
          x="6"
          y="22"
          fill="#16191F"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-0.6"
        >
          amazon
        </text>
        <path
          d="M 14 26 C 36 33, 64 33, 83 25"
          stroke="#FF9900"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 78 23.5 C 80.5 24.5, 83 24.8, 85 24.8 C 84.6 22.8, 83.8 20.8, 82.2 19.5 C 85.5 20.8, 87 23.5, 87.2 26 C 85.2 27.5, 82.2 28.5, 78.5 29 C 80 27.2, 80 25.5, 78 23.5 Z"
          fill="#FF9900"
        />
      </svg>
    ),
  },
  {
    name: 'TCS',
    svg: (
      <svg viewBox="0 0 110 38" className="company-logo-img" aria-hidden="true">
        <defs>
          <linearGradient id="tcsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="48%" stopColor="#E0115F" />
            <stop offset="100%" stopColor="#FF4500" />
          </linearGradient>
        </defs>
        <text
          x="6"
          y="27"
          fill="url(#tcsGradient2)"
          fontFamily="'Inter', 'Outfit', sans-serif"
          fontWeight="800"
          fontSize="30"
          letterSpacing="-1.5"
        >
          tcs
        </text>
      </svg>
    ),
  },
  {
    name: 'Cognizant',
    svg: (
      <svg viewBox="0 0 135 38" className="company-logo-img" aria-hidden="true">
        <text
          x="6"
          y="25"
          fill="#0033A0"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="-0.3"
        >
          Cognizant
        </text>
      </svg>
    ),
  },
  {
    name: 'Infosys',
    svg: (
      <svg viewBox="0 0 120 38" className="company-logo-img" aria-hidden="true">
        <text
          x="6"
          y="25"
          fill="#007CC3"
          fontFamily="'Inter', sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="0.4"
        >
          Infosys
        </text>
      </svg>
    ),
  },
];
