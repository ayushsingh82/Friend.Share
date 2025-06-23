'use client';
import { useState } from 'react';

const NOUNS_IMAGE_BASE = "https://noun.pics/";
const NOUNS_RANGE = { start: 1290, end: 1350 };

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
    tagline: '',
    twitter: '',
    specialties: [] as string[],
    bio: '',
    tags: [] as string[]
  });
  const [newTag, setNewTag] = useState('');

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

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      });
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
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
    <main className="min-h-screen bg-yellow-50 py-12">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
          Register as a Creator
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
                  className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-200 hover:border-blue-400 transition-colors bg-yellow-100 flex items-center justify-center"
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
                  <div className="absolute z-50 mt-2 p-4 bg-white border-2 border-yellow-200 rounded-2xl shadow-xl max-h-[400px] overflow-y-auto">
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
                      {nounIds.map((nounId) => (
                        <button
                          key={nounId}
                          type="button"
                          onClick={() => {
                            setSelectedNounId(nounId);
                            setShowNounSelector(false);
                          }}
                          className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-400 transition-colors"
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

            {/* Tags Input */}
            <div className="space-y-2">
              <label className="block text-lg font-bold text-blue-700">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full border border-yellow-200"
                  >
                    <span className="text-blue-700 font-bold">{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-red-400 hover:text-red-600 font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="flex-1 bg-yellow-100 border-2 border-yellow-200 rounded-lg py-2 px-4 text-blue-900 font-bold focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  placeholder="Add a new tag"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-bold"
                >
                  +
                </button>
              </div>
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