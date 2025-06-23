'use client';
import { useState } from 'react';


const NOUNS_IMAGE_BASE = "https://noun.pics/";
const NOUNS_RANGE = { start: 1290, end: 1312 };


const specialtyOptions = [
  { id: 'designer', label: 'Designer' },
  { id: 'defi', label: 'DeFi Expert' },
  { id: 'nft', label: 'NFTs Expert' },
  { id: 'investor', label: 'Investor' },
  { id: 'founder', label: 'Founder' }
];

export default function RegisterYourself() {
  const [selectedNounId, setSelectedNounId] = useState<number|null>(null);
  const [showNounSelector, setShowNounSelector] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    bio: '',
    tagline: '',
    twitter: '',
    specialties: [] as string[],
  });

  const nounIds = Array.from(
    { length: NOUNS_RANGE.end - NOUNS_RANGE.start + 1 },
    (_, i) => NOUNS_RANGE.start + i
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSpecialtyChange = (id: string) => {
    const updatedSpecialties = [...formData.specialties];
    if (updatedSpecialties.includes(id)) {
      const index = updatedSpecialties.indexOf(id);
      updatedSpecialties.splice(index, 1);
    } else {
      updatedSpecialties.push(id);
    }
    setFormData({
      ...formData,
      specialties: updatedSpecialties
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#8B5CF6] via-[#BA55D3] to-[#673AB7] py-12 relative overETH-hidden">
      {/* Noun images as background decorations */}
      <img
        src="https://noun.pics/1308.png"
        alt="Noun Top Left"
        className="absolute top-12 left-0 w-56 h-56 md:w-72 md:h-72 opacity-100 pointer-events-none rounded-full z-0"
      />
      <img
        src="https://noun.pics/1309.png"
        alt="Noun Bottom Right"
        className="absolute bottom-12 right-0 w-48 h-48 md:w-64 md:h-64 opacity-100 pointer-events-none rounded-full z-0"
      />
      <div className="max-w-3xl mx-auto px-4 py-8 relative z-10">
        <h1 className="text-3xl md:text-6xl font-black mb-6 text-red-600" style={{
                textShadow: '-4px 4px 0 #ffffff',
                WebkitTextStroke: '2px #ffffff'
              }}>
          Register
          <span className="text-blue-700">Creator</span>
        </h1>
        <div className="rounded-3xl p-8 bg-white/90 border-2 border-yellow-200 shadow-xl backdrop-blur-xl">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Profile Image Selector */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Choose Your Profile Image
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowNounSelector(!showNounSelector)}
                  className="w-32 h-32 rounded-full overETH-hidden border-2 border-yellow-200 hover:border-blue-400 transition-colors bg-yellow-100 flex items-center justify-center"
                >
                  {selectedNounId ? (
                    <img
                      src={`${NOUNS_IMAGE_BASE}${selectedNounId}.png`}
                      alt={`Selected NOUN ${selectedNounId}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-yellow-500 font-bold">Select Profile</span>
                  )}
                </button>
                {showNounSelector && (
                  <div className="absolute z-50 mt-2 p-4 bg-white border-2 border-yellow-200 rounded-2xl shadow-xl max-h-[400px] overETH-y-auto">
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                      {nounIds.map((nounId) => (
                        <button
                          key={nounId}
                          type="button"
                          onClick={() => {
                            setSelectedNounId(nounId);
                            setShowNounSelector(false);
                          }}
                          className="w-16 h-16 rounded-full overETH-hidden border-2 border-transparent hover:border-blue-400 transition-colors"
                        >
                          <img
                            src={`${NOUNS_IMAGE_BASE}${nounId}.png`}
                            alt={`NOUN ${nounId}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-yellow-100 border-2 border-yellow-200 rounded-lg py-2 px-4 text-blue-900 font-bold focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your name"
              />
            </div>

            {/* Symbol Input */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Symbol
              </label>
              <input
                type="text"
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                className="w-full bg-yellow-100 border-2 border-yellow-200 rounded-lg py-2 px-4 text-blue-900 font-bold focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                placeholder="e.g. ETH"
                maxLength={8}
              />
            </div>

            {/* Bio Input */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-yellow-100 border-2 border-yellow-200 rounded-lg py-2 px-4 text-blue-900 font-bold focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 h-28"
                placeholder="Tell us about yourself"
              />
            </div>

            {/* Twitter Username Input */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Twitter Username
              </label>
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                className="w-full bg-yellow-100 border-2 border-yellow-200 rounded-lg py-2 px-4 text-blue-900 font-bold focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                placeholder="Enter your Twitter username"
              />
            </div>

            {/* Specialties Checkboxes */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Specialties
              </label>
              <div className="flex flex-wrap gap-4">
                {specialtyOptions.map((option) => (
                  <label key={option.id} className="flex items-center gap-2 cursor-pointer bg-yellow-100 border-2 border-yellow-200 rounded-full px-4 py-2 font-bold text-blue-700 hover:bg-yellow-200 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.specialties.includes(option.id)}
                      onChange={() => handleSpecialtyChange(option.id)}
                      className="accent-red-400 w-4 h-4"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-400 text-white rounded-full font-extrabold text-lg hover:bg-blue-500 transition-all shadow-lg shadow-yellow-400/20"
            >
              Register as Creator
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 