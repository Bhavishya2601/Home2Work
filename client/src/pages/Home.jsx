import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <header className="bg-white border-b border-gray-300">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-gray-800">Home2Work</h1>
    <Link to={'/login'} className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
      Get Started
    </Link>
  </div>
</header>


    
<section className="bg-blue-50 h-screen relative flex items-center">

  <div className="container mx-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-0 mt-10">
    <div className="text-center md:text-left flex flex-col">
      <h1 className="text-7xl font-bold text-gray-800 leading-tight">
        Renovations Simplified
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        A streamlined platform to design, plan, and build — all in one place.
      </p>
      <Link to={'/login'} className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-teal-700 self-start">
        Get Started
      </Link>
    </div>

    
    <div className="flex justify-center items-center">
      <div className="relative">
        <img
          src="/Frame1.png"
          alt="Renovation example 1"
          className="rounded-lg shadow-lg w-[35rem] h-auto -mt-28" 
        />
        <img
          src="/31.png"
          alt="Renovation example 2"
          className="absolute -left-20 -bottom-10  w-[60rem] h-auto rounded-lg shadow-lg border border-white"
        />
      </div>
    </div>
  </div>
</section>

<section id="how-it-works" className="py-16 bg-teal-600">
  <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center">
    <div className="lg:w-1/3 text-left">
      <h3 className="text-5xl font-bold text-white mb-6">
        A simple and streamlined process
      </h3>
      <p className="text-white text-lg">
        Use our tools to plan, design, and build your renovation with the
        industry's top designers and contractors.
      </p>
      <a
        href="#"
        className="mt-6 inline-block text-white font-medium underline hover:text-teal-200"
      >
        How does it work?
      </a>
    </div>

    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 lg:mt-0">
      <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
        <img
          src="/Process 01.png"
          alt="Plan"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">01 Plan</h4>
          <p className="text-gray-600 text-sm">
            Work with a Block Project Planner to receive a custom proposal
            tailored to your renovation goals with a detailed scope of work.
          </p>
        </div>
      </div>

      {/* Design */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
        <img
          src="/5.png"
          alt="Design"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">02 Design</h4>
          <p className="text-gray-600 text-sm">
            Use our curated design system and access our in-house designers to
            bring your space to life.
          </p>
        </div>
      </div>

      {/* Build */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden text-center">
        <img
          src="/Process 03.png"
          alt="Build"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">03 Build</h4>
          <p className="text-gray-600 text-sm">
            We’ve built relationships with the best, local contractors in your
            area. They’re 100% licensed and insured—and they’ll provide
            milestone updates throughout the build.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 bg-green-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <img src="/7.png" alt="SpaceCrafter Design" className="rounded-lg shadow-md" />
          </div>
          <div>
            <div className="bg-white p-8 shadow-md rounded-lg">
              <p className="text-2xl font-bold text-gray-800">★★★★★</p>
              <p className="mt-4 text-gray-700 text-3xl">
              Home2Work transformed my space into a functional and beautiful home office, perfectly suited for remote work during the pandemic.
              </p>
              <p className="mt-2 text-gray-500 italic">— Home2Work.s</p>
            </div>
        
            {/* <div className="flex justify-between items-center mt-4 text-gray-600">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">←</button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">→</button>
            </div> */}
          </div>
        </div>
       
        {/* <div className="text-center mt-8">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-md text-gray-800 font-semibold hover:bg-gray-100">
            Get your estimate
          </button>
        </div> */}
      </section>

     
      <section className="relative h-screen bg-cover bg-center bg-[url('/Background.png')]">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Renovate your home as low as 0% APR
          </h1>
          {/* <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-teal-700">
            Explore financing
          </button> */}
        </div>
      </section>
      <section id="look-what-weve-done" className="py-16 bg-teal-600">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2">
      <img
        src="/photo1.png"
        alt="Workstation setup"
        className=" h-screen object-cover rounded-lg shadow-lg"
      />
    </div>

    <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left lg:pl-12">
      <h2 className="text-5xl font-bold text-white mb-6">
        Look at what we’ve done!
      </h2>
      <p className="text-white text-lg mb-6">
        Discover what clients were able to achieve with Reno.
      </p>
      {/* <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
        View project gallery
      </button> */}
    </div>
  </div>
</section>


<section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
  {/* Text Section */}
  <div className="md:w-1/2 text-center md:text-left">
    <h2 className="text-4xl font-bold text-teal-600 mb-4">
      Welcome to  Home2Work’s planner.
    </h2>
    <p className="text-lg text-gray-700 mb-6">
      In less than 2 minutes, start your design process and get a starting estimate for your project.
    </p>
    <ul className="text-gray-700 space-y-4 mb-6">
      <li className="flex items-center">
        <span className="text-teal-600 font-bold mr-2">1.</span>
        Customize your project
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 font-bold mr-2">2.</span>
        Chat with a planner
      </li>
      <li className="flex items-center">
        <span className="text-teal-600 font-bold mr-2">3.</span>
        Receive a personalized proposal
      </li>
    </ul>
    {/* <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-teal-700">
      Get started
    </button> */}
  </div>

  
  <div className="md:w-1/2 relative mt-10 md:mt-0">
    <img
      src="/6.png"
      alt="Desk Image 1"
      className="rounded-lg shadow-lg"
    />
    {/* <img
      src="/5.png"
      alt="Desk Image 2"
      className="absolute top-40 right-[-10%] w-4/5 md:w-2/3 rounded-lg shadow-md"
    /> */}
  </div>
</section>


     
      <Footer />


    </>
  );
}
