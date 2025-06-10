'use client';
import Navbar from './components/Navbar';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

export default function Home() {
  // Generate array of Noun IDs from 1300 to 1310
  const nounIds = Array.from({ length: 11 }, (_, i) => 1300 + i);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Dynamic Background */}
      <section className="relative min-h-screen bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Noun Images Grid */}
          <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4 opacity-20">
            {nounIds.map((id) => (
              <div key={id} className="relative aspect-square animate-float-slow">
                <img
                  src={`${NOUNS_IMAGE_BASE}${id}.png`}
                  alt={`NOUN ${id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Main Title with 3D Effect */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-white" style={{
              textShadow: '-8px 8px 0 #1f2024',
              WebkitTextStroke: '3px #1f2024'
            }}>
              ZoraName
              <span className="text-yellow-400">Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Launch your meme, art, or project as a coin + ENS domain + Nounified NFT in one click
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Create</h3>
              <p>Mint your personal coin with matching ENS name</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Launch</h3>
              <p>Bundle your content as a Noun-style NFT</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-white transform hover:scale-105 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Earn</h3>
              <p>Get rewards from Zora Protocol</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/30 transition-colors transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Nouns Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
              Featured Nouns
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {nounIds.map((id) => (
              <div 
                key={id} 
                className="group relative aspect-square bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={`${NOUNS_IMAGE_BASE}${id}.png`}
                  alt={`NOUN ${id}`}
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
                    NOUN #{id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500 via-green-400 to-green-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
              How It Works
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: 1, title: 'Connect', desc: 'Link your wallet', icon: '🔗' },
              { step: 2, title: 'Create', desc: 'Design your coin & NFT', icon: '🎨' },
              { step: 3, title: 'Mint', desc: 'Launch on Zora', icon: '🚀' },
              { step: 4, title: 'Share', desc: 'Grow your community', icon: '🌱' }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform group-hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-700">
              Why Choose Us
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">All-in-One Platform</h3>
              <p className="text-blue-900/90">Create your coin, claim your ENS, and mint your NFT all in one place. No technical knowledge required.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Community Driven</h3>
              <p className="text-blue-900/90">Join a vibrant community of creators and collectors. Get funded through our DAO governance model.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-red-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100">
              Ready to Launch?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already building their legacy on ZoraName Studio
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-red-500 rounded-full font-bold text-lg hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Creating Now
          </button>
        </div>
      </section>
    </main>
  );
}
