import React from 'react';

// Core & Tools (v2 Strict Imports)
import zapierLogo from '../assets/brands/zapier_v2.jpeg';
import githubLogo from '../assets/brands/github_v2.svg';
import notionLogo from '../assets/brands/notion_v2.webp';
import makeLogo from '../assets/brands/make_v2.png';
import n8nLogo from '../assets/brands/n8n_v2.svg';
import protonLogo from '../assets/brands/proton_v2.svg';
import googleDocsLogo from '../assets/brands/google_docs_v2.svg';
import googleSheetsLogo from '../assets/brands/google_sheets_v2.svg';
import googleDriveLogo from '../assets/brands/google_drive_v2.svg';
import googleCalendarLogo from '../assets/brands/google_calendar_v2.svg';
import canvaLogo from '../assets/brands/canva_v2.svg';
import codePenLogo from '../assets/brands/codepen_v2.svg';
import dribbbleLogo from '../assets/brands/dribbble_v2.svg';
import mobbinLogo from '../assets/brands/mobbin_v2.svg';
import vercelLogo from '../assets/brands/vercel_v2.svg';
import reactLogo from '../assets/brands/react_v2.png';
import googleLogo from '../assets/brands/google_v2.svg';
import geminiLogo from '../assets/brands/gemini_v2.png';
import windowsLogo from '../assets/brands/windows_v2.svg';
import base44Logo from '../assets/brands/base44_v2.png';
import lovableLogo from '../assets/brands/lovable_v2.png';

const Brands: React.FC = () => {

  // Strict Manifest - 23 Items, Exact Order
  const MANIFEST = [
    { id: 'zapier', name: 'Zapier', logo: zapierLogo },
    { id: 'github', name: 'GitHub', logo: githubLogo },
    { id: 'notion', name: 'Notion', logo: notionLogo },
    { id: 'make', name: 'Make.com', logo: makeLogo },
    { id: 'n8n', name: 'n8n', logo: n8nLogo },
    { id: 'proton', name: 'Proton Mail', logo: protonLogo },
    { id: 'googledocs', name: 'Google Docs', logo: googleDocsLogo },
    { id: 'googlesheets', name: 'Google Sheets', logo: googleSheetsLogo },
    { id: 'googledrive', name: 'Google Drive', logo: googleDriveLogo },
    { id: 'googlecalendar', name: 'Google Calendar', logo: googleCalendarLogo },
    { id: 'canva', name: 'Canva', logo: canvaLogo },
    { id: 'codepen', name: 'CodePen', logo: codePenLogo },
    { id: 'dribbble', name: 'Dribbble', logo: dribbbleLogo },
    { id: 'mobbin', name: 'Mobbin', logo: mobbinLogo },
    { id: 'vercel', name: 'Vercel', logo: vercelLogo },
    { id: 'react', name: 'React', logo: reactLogo },
    { id: 'google', name: 'Google', logo: googleLogo },
    { id: 'gemini', name: 'Gemini', logo: geminiLogo },
    { id: 'windows', name: 'Windows', logo: windowsLogo },
    { id: 'base44', name: 'Base44', logo: base44Logo },
    { id: 'lovable', name: 'Lovable', logo: lovableLogo }
  ];

  // Validate: Ensure no missing logos (though static imports would fail build if missing)
  const brands = MANIFEST.filter(brand => !!brand.logo);

  // Duplicate brands for seamless loop (A + B)
  const duplicatedBrands = [...brands, ...brands];

  if (brands.length === 0) return null;

  return (
    <section className="py-10 md:py-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-12">
          Built with the tools that power modern business
        </p>

        <div className="relative marquee-mask overflow-hidden w-full max-w-full py-2 -my-2">
          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
            {duplicatedBrands.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
