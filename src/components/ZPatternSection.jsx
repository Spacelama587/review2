import React from 'react';

const ZPatternSection = () => {
  return (
    <div className="container mx-auto py-28 h-full">
      {/* First Section: Video on the left, Text on the right */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-300 to-sky-400 h-screen">
        <div className="w-full md:w-1/2 p-4">
          <div className="rounded-3xl overflow-hidden h-full md:h-[40rem] border-4 border-white shadow-lg">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="Recording1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Psychological Astrology Report</h2>
          <h1 className="text-3xl font-bold mb-4">Exploring the Depths of Psychological Astrology</h1>
          <p className="text-base">
            Explore the profound insights offered by <strong>Psychological Astrology Report</strong>, where the alignment of celestial bodies illuminates deeper truths about your psyche. Dive into our personalized analyses and discover how planetary influences shape your journey. <a href="#" className="underline">Learn more</a> about unlocking the mysteries of your inner self.
          </p>
        </div>
      </div>

      {/* Second Section: Text on the left, Video on the right */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-green-300 to-lime-400 h-screen">
        <div className="w-full md:w-1/2 p-4 order-last md:order-first">
          <h2 className="text-xl font-semibold mb-2">AI Astrologer</h2>
          <h1 className="text-3xl font-bold mb-4">Harnessing AI for Personalized Insights</h1>
          <p className="text-base">
            Delve into the future with our AI Astrologer, combining advanced algorithms with astrological wisdom to provide personalized predictions. Explore your birth chart, uncover hidden patterns, and gain clarity on relationships, career, and more. Trust AI Astrologer to navigate life's uncertainties with precision and insight.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="rounded-3xl overflow-hidden h-full md:h-[35rem] border-4 border-white shadow-xl">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="Recording2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Third Section: Video on the left, Text on the right */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-amber-200 to-yellow-500 h-screen">
        <div className="w-full md:w-1/2 p-4">
          <div className="rounded-3xl overflow-hidden h-full md:h-[40rem] border-4 border-white shadow-lg">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src="Recording3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Discover Your Path</h2>
          <h1 className="text-3xl font-bold mb-4">Insightful Guidance for Every Journey</h1>
          <p className="text-base">
            Embrace clarity and foresight with our comprehensive astrology service. Whether seeking direction in relationships, career decisions, or personal growth, our expert astrologers provide personalized readings tailored to your unique journey. Unlock the wisdom of the stars and discover profound insights that empower your life choices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZPatternSection;
