'use client';

import React from 'react';

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-white bg-[url('/images/magic-valley-26.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <main className="min-h-screen text-gray-900">
        
        {/* Hero Section */}
        <section className="flex justify-center pt-8 pb-12">
          <div 
            className="relative w-full max-w-[65%] aspect-[1920/900] rounded-xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: "url('/images/Gaelic-Wolf-Home-Page-Hero-1920x900.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Button positioned at 10% from the bottom */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10">
              <button 
                onClick={() => {
                  const element = document.getElementById('about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-8 py-3 bg-emerald-100 text-emerald-800 font-medium rounded-full border border-emerald-600 hover:bg-emerald-200 transition-colors shadow-sm"
              >
                Let's Start a Conversation
              </button>
            </div>
          </div>
        </section>

        {/* About Section - No white card, slightly larger text */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-semibold tracking-tight mb-6">
            Norman MacLeod
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg">
              Founder of Gaelic Wolf Consulting. Policy consultant and researcher 
              focused on evidence-based conservation policy, natural resource
              governance, and the protection of the natural and human environments
              of the working landscapes of the United States and beyond.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}