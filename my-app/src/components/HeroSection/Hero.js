import React from 'react';
import dashboard from './../../assets/main-img.png';
import leftImage from './../../assets/imageleft.png';
import rightImage from './../../assets/imageright.png';
import backgroundImage from './../../assets/backimg.png';
import './Hero.css'

const gradientClass = 'bg-gradient-to-b from-black to-green-900';
const buttonClass = 'text-white py-2 px-6 rounded-full shadow-lg transition-colors duration-300 inline-flex items-center justify-center';

const ArrowIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block w-4 h-4 text-white ml-2"
  >
    <g clipPath="url(#clip0_1_1208)">
      <g clipPath="url(#clip1_1_1208)">
        <path
          d="M9.74861 3.33203L14.4153 7.99869M14.4153 7.99869L9.74861 12.6653M14.4153 7.99869H2.41528"
          stroke="#F1F1EF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_1208">
        <rect width="16" height="16" fill="white" transform="translate(0.415283)" />
      </clipPath>
      <clipPath id="clip1_1_1208">
        <rect width="16" height="16" fill="white" transform="translate(0.415283)" />
      </clipPath>
    </defs>
  </svg>
);

const MainComponent = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className={`${gradientClass} w-full h-2/3`}></div>
        <div className="bg-black w-full h-1/3"></div>
      </div>
      <div className="absolute top-0 left-0">
        <img
          src={leftImage}
          alt="Left Image"
          className="w-[315px] h-[305px] rounded-lg shadow-lg hidden md:block"
        />
      </div>
      <div className="absolute top-0 right-0">
        <img
          src={rightImage}
          alt="Right Image"
          className="w-[315px] h-[305px] rounded-lg shadow-lg hidden md:block"
        />
      </div>
      <div
        className="absolute right-0 top-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'contain' }}
      ></div>
      <div className="w-full max-w-4xl text-center px-4 mt-16 md:mt-32 relative z-10">
        <h1 className="text-4xl md:text-[68px] font-medium leading-tight md:leading-[80px] tracking-tight text-transparent bg-clip-text bg-text-gradient mb-8 mx-auto flex items-center justify-center md:w-[653.69px] md:h-[160px] md:ml-24 glow-effect">
          Most Awaited!
        </h1>
        <p className="text-base md:text-lg text-gray-400 mb-8">
          a world of cybersecurity to learn, compete, and grow. <br /> Some more content about what we
          offer will come here.
        </p>
        <div className="flex justify-center mb-32 md:mb-[8rem]">
          <button className={`${buttonClass} glow-button`} style={{
            width: '193.79px',
            height: '47.69px',
            gap: '0px',
            border: '1.01px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(31, 35, 33, 0.2)', // Semi-transparent background
            backdropFilter: 'blur(10px)', // Increased blur for a stronger mirror effect
            opacity: '0.9', // Slightly higher opacity for visibility
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '17px',
            borderRadius: '25px',
          }}>
            Get Started Now<ArrowIcon />
          </button>
        </div>
        <div className="relative mt-8">
          <img
            src={dashboard}
            alt="Main Image"
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
