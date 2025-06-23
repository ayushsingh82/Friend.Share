'use client';
import React from 'react'

const topCreators = [
  {
    name: "Alex Thompson",
    username: "alexdev",
    rate: 50,
    growth: "+245%",
    responseRate: "100%",
    bio: "Senior Blockchain Developer |  Expert",
    tags: ["Blockchain"]
  },
  {
    name: "Sarah Chen",
    username: "sarahc",
    rate: 90,
    growth: "+187%",
    responseRate: "98%",
    bio: "Digital Artist | NFT Specialist |  Designer",
    tags: ["NFT", "Design"]
  },
  {
    name: "Mike Roberts",
    username: "mikero",
    rate: 120,
    growth: "+120%",
    responseRate: "99%",
    bio: "Tech Consultant |  Developer | Web3 Expert",
    tags: ["Web3", "Tech"]
  },
  {
    name: "Lisa Wong",
    username: "lisa",
    rate: 160,
    growth: "+160%",
    responseRate: "97%",
    bio: "Business Mentor |  Ambassador | Startup Advisor",
    tags: ["Business", "Startup"]
  },
  {
    name: "John Smith",
    username: "johndev",
    rate: 150,
    growth: "+132%",
    responseRate: "100%",
    bio: "Financial Advisor |  Token Economics | DeFi Expert",
    tags: ["DeFi", "Finance"]
  },
  {
    name: "Emma Davis",
    username: "emmadev",
    rate: 110,
    growth: "+178%",
    responseRate: "99%",
    bio: "Web Developer | Move Language Specialist |  Builder",
    tags: ["Move", "Development"]
  }
];

// Placeholder avatar generator
const generateAvatar = (index: number) => (
  <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xl">
    {topCreators[index].name.charAt(0)}
  </div>
);

const page = () => {
  // Placeholder for navigation
  const navigate = (url: string) => {
    window.location.href = url;
  };

  return (
    <section className="px-4 py-12 bg-gradient-to-b from-[#FF8C00] via-[#FF7F50] to-[#CC5500] min-h-screen">
      <div className="mt-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-black text-center" style={{
            textShadow: '-4px 4px 0 #ffffff',
            WebkitTextStroke: '2px #ffffff'
          }}>
            Top<span className="text-red-500">Creators</span>
          </h2>
        </div>
        <div className="flex justify-between items-center mb-8">
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCreators.map((creator, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-xl border-4 border-yellow-200 rounded-2xl p-6 flex flex-col gap-4 \
              hover:shadow-xl hover:shadow-blue-300/20 transition-all duration-300 hover:border-blue-400 \
              hover:translate-y-[-4px] hover:bg-yellow-100 relative"
            >
              {/* Move price to left side */}
              <div className="flex items-end justify-between mt-auto pt-4 border-t border-blue-200">
                <div>
                  <span className="text-blue-500 text-2xl font-bold">{creator.rate} ZORA</span>
                  <span className="text-blue-900/60 text-sm ml-1">/ min</span>
                </div>
                {/* Buy Time button - positioned in bottom right */}
                <button 
                  onClick={() => navigate('/buy')} 
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 \
                  px-4 py-2 bg-yellow-400 text-blue-900 rounded-lg text-sm font-semibold \
                  transform scale-95 group-hover:scale-100 hover:bg-yellow-500 \
                  shadow-lg shadow-yellow-400/25 z-10"
                >
                  Buy Time
                </button>
              </div>
              {/* Rest of the card content */}
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  {generateAvatar(index)}
                  <div>
                    <h3 className="text-blue-900 font-semibold text-lg">{creator.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500 text-sm font-medium">@{creator.username}</span>
                      <span className="text-purple-500 text-xs">{creator.growth}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 items-center text-xs text-blue-400">
                  <span>{creator.responseRate}</span>
                  <span className="text-red-300">✓</span>
                </div>
              </div>
              <p className="text-blue-900/80 text-sm">
                {creator.bio}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {creator.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-500 rounded-full text-xs">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page