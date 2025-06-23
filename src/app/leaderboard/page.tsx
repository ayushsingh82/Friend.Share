'use client';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

const rankings = [
  {
    username: "toly",
    nounId: 1290,
    price: "50 FLOW",
    marketCap: "5,000,000 FLOW"
  },
  {
    username: "Ansem",
    nounId: 1291,
    price: "45 FLOW",
    marketCap: "4,500,000 FLOW"
  },
  {
    username: "Kawz",
    nounId: 1292,
    price: "40 FLOW",
    marketCap: "4,000,000 FLOW"
  },
  {
    username: "mert",
    nounId: 1293,
    price: "35 FLOW",
    marketCap: "3,500,000 FLOW"
  },
  {
    username: "raj",
    nounId: 1294,
    price: "30 FLOW",
    marketCap: "3,000,000 FLOW"
  }
];

export default function Leaderboard() {
  return (
    <main className="min-h-screen bg-yellow-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Leaderboard header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 text-blue-700 drop-shadow-sm">
            Leaderboard
          </h1>
          <p className="text-lg font-semibold text-blue-500/80">Top creators by market cap</p>
        </div>

        {/* Eye-soothing Rankings table */}
        <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-yellow-200 bg-white/90 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="px-6 py-4 text-left text-base font-bold text-blue-700 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-base font-bold text-blue-700 uppercase tracking-wider">Price / min</th>
                  <th className="px-6 py-4 text-left text-base font-bold text-blue-700 uppercase tracking-wider">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((rank, index) => (
                  <tr
                    key={rank.username}
                    className={
                      `transition-colors ${index % 2 === 0 ? 'bg-yellow-50' : 'bg-blue-50'} hover:bg-yellow-100`
                    }
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-red-400">#{index + 1}</span>
                        <img
                          src={`${NOUNS_IMAGE_BASE}${rank.nounId}.png`}
                          alt={`NOUN ${rank.nounId}`}
                          className="w-12 h-12 rounded-full border-2 border-yellow-200 bg-white"
                        />
                        <div>
                          <p className="text-base font-bold text-blue-700">@{rank.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-red-500 text-lg">{rank.price}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-blue-600 text-lg">{rank.marketCap}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
} 