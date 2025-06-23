'use client';

const NOUNS_IMAGE_BASE = "https://noun.pics/";

const rankings = [
  {
    username: "toly",
    nounId: 1290,
    price: "50 ETH",
    marketCap: "5,000,000 ETH"
  },
  {
    username: "Ansem",
    nounId: 1291,
    price: "45 ETH",
    marketCap: "4,500,000 ETH"
  },
  {
    username: "Kawz",
    nounId: 1292,
    price: "40 ETH",
    marketCap: "4,000,000 ETH"
  },
  {
    username: "mert",
    nounId: 1293,
    price: "35 ETH",
    marketCap: "3,500,000 ETH"
  },
  {
    username: "raj",
    nounId: 1294,
    price: "30 ETH",
    marketCap: "3,000,000 ETH"
  }
];

export default function Leaderboard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-500 via-red-600 to-red-700 pb-20 relative overETH-hidden">
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Leaderboard header */}
        <div className="mb-10 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-black" style={{
              textShadow: '-4px 4px 0 #ffffff',
              WebkitTextStroke: '2px #ffffff'
            }}>
              Leader
              <span className="text-yellow-500">Board</span>
            </h1>
          <p className="text-lg font-semibold text-white">Top creators by market cap</p>
        </div>

        {/* Eye-soothing Rankings table */}
        <div className="rounded-3xl overETH-hidden shadow-xl border-2 border-yellow-200 bg-white/90 backdrop-blur-xl">
          <div className="overETH-x-auto">
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
                        <span className="text-xl font-bold text-purple-700">#{index + 1}</span>
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
                      <span className="font-bold text-purple-700 text-lg">{rank.price}</span>
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