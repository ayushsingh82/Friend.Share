'use client';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

export default function Home() {
  // Generate array of Noun IDs from 1300 to 1310
  const nounIds = Array.from({ length: 11 }, (_, i) => 1300 + i);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Dynamic Background */}
      <section className="relative min-h-screen bg-gradient-to-b from-red-500 via-red-600 to-red-700 overflow-hidden">
        {/* Noun Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Noun */}
          <div className="absolute left-0 top-20 w-72 h-72 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1300.png`}
              alt="NOUN 1300"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
          {/* Right Noun */}
          <div className="absolute right-0 top-40 w-64 h-64 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1301.png`}
              alt="NOUN 1301"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-20">
          {/* Main Title with 3D Effect */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-black" style={{
              textShadow: '-4px 4px 0 #ffffff',
              WebkitTextStroke: '2px #ffffff'
            }}>
              Zora.
              <span className="text-yellow-500">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold max-w-2xl mx-auto">
            Get instant access to and invest in your favorite creators & experts.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-blue-600 p-6 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">FIND CREATORS</h3>
              <p className="text-white/90">Discover creators across a variety of specialties</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">BUY THEIR TIME</h3>
              <p className="text-white/90">Buy minutes of the creators you want to connect with or invest in</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">CONNECT</h3>
              <p className="text-white/90">Connect with powerful creators through direct messages, API calls, and automated tasks.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-black/80 text-white rounded-full font-bold text-lg hover:bg-black transition-colors transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Noun Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Noun */}
          <div className="absolute left-0 top-1/4 w-64 h-64 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1302.png`}
              alt="NOUN 1302"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
          {/* Right Noun */}
          <div className="absolute right-0 top-1/3 w-56 h-56 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1303.png`}
              alt="NOUN 1303"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-gradient">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/30 text-white text-center transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <p className="text-white/90">Link your wallet</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/30 text-white text-center transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4">Create</h3>
              <p className="text-white/90">Design your coin & NFT</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/30 text-white text-center transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Mint</h3>
              <p className="text-white/90">Launch on Zora</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/30 text-white text-center transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-4">Share</h3>
              <p className="text-white/90">Grow your community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#FF8C00] via-[#FF7F50] to-[#CC5500] relative overflow-hidden">
        {/* Noun Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Noun */}
          <div className="absolute left-0 top-1/3 w-60 h-60 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1304.png`}
              alt="NOUN 1304"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
          {/* Right Noun */}
          <div className="absolute right-0 top-1/4 w-52 h-52 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1305.png`}
              alt="NOUN 1305"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-gradient">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4">All-in-One Platform</h3>
              <p className="text-lg">Create your coin, claim your ENS, and mint your NFT all in one place. No technical knowledge required.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
              <p className="text-lg">Join a vibrant community of creators and collectors. Get funded through our DAO governance model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#8B5CF6] via-[#BA55D3] to-[#673AB7] relative overflow-hidden">
        {/* Noun Images */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left Noun */}
          <div className="absolute left-0 top-1/4 w-56 h-56 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1306.png`}
              alt="NOUN 1306"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
          {/* Right Noun */}
          <div className="absolute right-0 top-1/3 w-48 h-48 opacity-80 z-10">
            <img
              src={`${NOUNS_IMAGE_BASE}1307.png`}
              alt="NOUN 1307"
              className="w-full h-full object-contain drop-shadow-2xl rounded-full"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Zora.Connect
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already building their legacy on Zora.Connect
          </p>
          <button className="px-12 py-5 bg-white text-[#8B5CF6] rounded-full font-bold text-xl hover:bg-white/90 transition-colors transform hover:scale-105 shadow-lg">
            Start Creating Now
          </button>
        </div>
      </section>
    </main>
  );
}
