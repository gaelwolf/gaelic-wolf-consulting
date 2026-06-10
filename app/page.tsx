import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section 
        className="relative h-[100dvh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Gaelic-Wolf-Home-Page-Hero-1920x900.png')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-4">
            Magic Wolf in Magic Valley
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Olympic National Park, Washington
          </p>

          <button 
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Explore the Vision
          </button>
        </div>
      </section>

      {/* About Section (Placeholder for now) */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold tracking-tight mb-6">
          Norman J. MacLeod
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Founder of Gaelic Wolf Consulting. Policy consultant, researcher, and 
            photographer focused on evidence-based conservation policy, natural 
            resource governance, and the protection of working landscapes in the 
            American West.
          </p>
        </div>
      </section>
    </main>
  );
}
