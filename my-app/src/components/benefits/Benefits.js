import React from 'react';
import './Benefits.css';

// Shared base styles for the cards with gradient background and handling overflow
const baseCardClass = "rounded-2xl shadow-lg transition transform hover:scale-105 p-4 overflow-hidden glowing-card";
const gradientBackground = "bg-gradient-to-b from-[rgba(255,255,255,0.04)] via-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.12)]";

// Specific classes for titles and text
const titleClass = "text-xl font-semibold mb-2 text-gray-100 dark:text-gray-300 glowing-heading";
const textClass = "font-inter text-base font-normal leading-6 text-custom";

const ThingsUsersLove = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-3xl md:text-[56px] font-medium leading-tight md:leading-[64px] tracking-tight text-center font-inter mb-10 md:mb-[5rem] mt-4 glowing-heading">
        Things users love <br /> <span className="text-[rgba(255,255,255,0.6)]">about X-ACK</span>
      </h1>
      <div className="relative w-full flex flex-wrap gap-6 justify-center">

        {/* First card */}
        <div className={`${baseCardClass} ${gradientBackground} w-full md:w-[680px] h-auto md:h-[440.14px]`}>
          <h3 className={titleClass}>Users appreciate X-ACK's intuitive interface</h3>
          <p className={textClass}>An intuitive interface means that users can quickly understand how to <br /> use the platform without the need for extensive training or guidance.</p>
        </div>

        {/* Second card */}
        <div className={`${baseCardClass} ${gradientBackground} w-full md:w-[450px] h-auto md:h-[440.14px]`}>
          <h3 className={titleClass}>Robust Learning Tools</h3>
          <p className={textClass}>Something about our learning tools and features <br /> goes here</p>
        </div>

        {/* Third card */}
        <div className={`${baseCardClass} ${gradientBackground} w-full md:w-[367px] h-auto md:h-[401px]`}>
          <h3 className={titleClass}>Flexible Difficulty</h3>
          <p className={textClass}>We have sophisticatedly designed <br /> machines for all beginner to advance <br /> level players</p>
        </div>

        {/* Fourth card */}
        <div className={`${baseCardClass} ${gradientBackground} flex flex-col justify-end w-full md:w-[367px] h-auto md:h-[401px]`}>
          <h3 className={`${titleClass} mb-0`}>Community</h3>
          <p className={`${textClass} mb-4`}>We fostered a nurturing community <br /> ...some more 1 line about community</p>
        </div>

        {/* Fifth card */}
        <div className={`${baseCardClass} ${gradientBackground} w-full md:w-[366px] h-auto md:h-[401px]`}>
          <h3 className={titleClass}>Gamified UI elements</h3>
          <p className={textClass}>Info about earning badges and respect <br />from players and machines. Gamified <br /> features</p>
        </div>
        
      </div>
    </div>
  );
};

export default ThingsUsersLove;
