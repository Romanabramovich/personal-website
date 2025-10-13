// app/work/page.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';


const experiences = [
  {
    company: "wdi wise device inc ",
    role: "software developer intern ", 
    //period: "may - august 2025",
    responsibilities: [
      <>engineered a <span className="text-red-600 dark:text-red-400">ci/cd pipeline</span> for firmware builds to reduce build-to-test waiting by <span className="text-red-600 dark:text-red-400">5h/day</span></>,
      <>developed automated sdk testing software for <span className="text-red-600 dark:text-red-400">400+ api endpoints</span></>
    ],
    techstack: ["c++. c#, jenkins, autoit, tortoisesvn"]
    // No githubUrl
  },

  {
    company: "nhl game prediction model ",
    responsibilities: [
        <>an xgboost model that predicts the outcome of nhl games</>,
        <>trained on <span className="text-red-600 dark:text-red-400">11,000+ games</span> and achieved <span className="text-red-600 dark:text-red-400">86% accuracy</span> on validation set</>
      ],
    techstack: ["python, xgboost, scikit-learn, postgreSQL"],
    githubUrl: "https://github.com/Romanabramovich/nhl-prediction"
  },

  {
    company: "ttc bus & streetcar live visualizer ",
    responsibilities: [
      <>developed full-stack flask app parsing <span className="text-red-600 dark:text-red-400">real-time gtfs feeds</span> to visualize live positions and occupancy for <span className="text-red-600 dark:text-red-400">170+ ttc routes</span></>,
      <>built interactive folium mapping system with dynamic route visualization and automated service disruption alerts</>
    ],
    techstack: ["python, flask, folium, pandas"],
    githubUrl: "https://github.com/Romanabramovich/TTC-GTFS-Realtime"
  },
  
  {
    company: "car dealership database management system ",
    responsibilities: [
      "built full-stack crud web app for car dealership inventory management using node.js, express, and mongodb",
      "implemented dynamic search with multi-filter queries, duplicate prevention, and scrollable table views using ejs templating"
    ],
    techstack: ["node.js, express, mongodb, mongoose, ejs"],
    githubUrl: "https://github.com/Romanabramovich/CarDealership"
  },

   {
    company: "ice tea tracker ", 
    responsibilities: [
      "made my girlfriend a website to track her monthly & yearly ice tea consumption"
    ],
    techstack: ["html, css, javascript, firebase"],
    githubUrl: "https://github.com/Romanabramovich/ice-tea-tracker"
  },
];

export default function Page() {
  // State must be INSIDE the component function
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
   <div className="space-y-6">
      {/* header section */}
      <header>
        {/* name + born/raised row */}
        <div className="flex items-center gap-2 md:gap-14">
          
          {/* page title */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">work</h1>

          {/* page description - vertically centered with 'roman' */}
          <div className="flex gap-8 text-sm md:text-base mt-3">
            <div className="text-gray-600 dark:text-gray-400 space-y-1 ml-10">
              <p>internships:</p>
              <p>projects:</p>
            </div>
            <div className="space-y-1">
              <p>one ... and counting</p>
              <p>four ... and counting</p>
            </div>
          </div>         
        </div>

        {/*<h6 className="text-xl text-gray-600 dark:text-gray-400 pl-2">always looking for more</h6>*/}
      </header>

      <hr className="w-full border-gray-200 dark:border-white-200 border-2.5 -mt-3"/>
      
      {/* page content */}
      <div className="space-y-3">
       {experiences.map((exp,index) => {
        //check if item is open
        const isOpen = openIndex === index;
        return (
            <div key={index} className="border rounded-lg">
              {/* Clickable Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center">
                <div>
                  {exp.company}  
                  {exp.role ? `| ${exp.role}` : ''}  
                  {exp.techstack && <> | <span className="text-xs text-gray-600 dark:text-gray-400">{exp.techstack}</span></>}
                </div>
                
                {/* GitHub icon + toggle */}
                <div className="flex items-center gap-3">
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:opacity-70 transition-opacity"
                      aria-label="View on GitHub"
                    >
                      <Image src="/icons/github-mark-white.svg" width={20} height={20} alt="GitHub" />
                    </a>
                  )}
                  <span className="text-xl">{isOpen ? '−' : '+'}</span>
                </div>
              </button>

              {/* Expandable Content */}
              {isOpen && (
                <div className="pl-4 pr-4 pb-4 text-sm">
                  {/* Responsibilities */}
                  <ul>
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
       })}

       </div>
    </div>
  );
}