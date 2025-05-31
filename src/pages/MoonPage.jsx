"use client"

import { ArrowLeft, Info, Zap, ExternalLink, Star, Globe } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/moon.css"

const moonTypes = [
  { id: 1, name: "Regular Moons", color: "from-purple-500 to-pink-600" },
  { id: 2, name: "Irregular Moons", color: "from-violet-500 to-purple-600" },
  { id: 3, name: "Captured Asteroids", color: "from-pink-500 to-rose-600" },
  { id: 4, name: "Shepherd Moons", color: "from-fuchsia-500 to-pink-600" },
  { id: 5, name: "Trojan Moons", color: "from-purple-400 to-violet-500" },
  { id: 6, name: "Co-orbital Moons", color: "from-indigo-500 to-purple-600" },
  { id: 7, name: "Binary Moons", color: "from-pink-400 to-purple-500" },
  { id: 8, name: "Subsurface Ocean Moons", color: "from-cyan-500 to-purple-600" },
  { id: 9, name: "Volcanic Moons", color: "from-red-500 to-pink-600" },
  { id: 10, name: "Ice Moons", color: "from-blue-400 to-purple-500" },
]

const moonFacts = [
  "Our solar system has over 200 known moons",
  "Jupiter has the most moons with 95 confirmed satellites",
  "Some moons are larger than the planet Mercury",
  "Titan has a thick atmosphere and liquid methane lakes",
  "Europa may harbor life in its subsurface ocean",
  "Our Moon is gradually moving away from Earth",
]

function MoonPage({ onBack }) {
  const handleTypeClick = (moonType) => {
    console.log(`Navigating to ${moonType.name} page`)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${spaceBackground})`,
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        {/* Floating moon particles */}
        <div className="absolute inset-0">
          <div className="moon-particle moon-particle-1"></div>
          <div className="moon-particle moon-particle-2"></div>
          <div className="moon-particle moon-particle-3"></div>
          <div className="moon-particle moon-particle-4"></div>
          <div className="moon-particle moon-particle-5"></div>
          <div className="moon-particle moon-particle-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Exploration</span>
            </button>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                COSMOS
              </span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-violet-600 moon-title">
              MOONS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Natural satellites that orbit planets, from our familiar Moon to exotic worlds with hidden oceans
            </p>
          </div>

          {/* Main Moon Image and Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <img
                  src="https://via.placeholder.com/600x400/a855f7/ffffff?text=Moon+Phases"
                  alt="Moon"
                  className="w-full h-80 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-2 text-purple-400">
                  <Info className="h-5 w-5" />
                  <span className="text-sm">The phases of our Moon</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30">
                <h2 className="text-2xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  General Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">What are Moons?</h3>
                    <p className="text-gray-300">
                      Moons are natural satellites that orbit planets. They range from tiny captured asteroids to
                      massive worlds larger than some planets.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Formation</h3>
                    <p className="text-gray-300">
                      Moons form through various processes: accretion from planetary disks, capture of passing objects,
                      or giant impacts that eject material.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Importance</h3>
                    <p className="text-gray-300">
                      Moons influence planetary tides, stabilize rotational axes, and some may harbor conditions
                      suitable for life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {moonFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moon Types Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Moon Types
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore the diverse categories of moons based on their formation and characteristics
            </p>
          </div>

          {/* Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {moonTypes.map((type, index) => (
              <div
                key={type.id}
                className="group relative cursor-pointer moon-type-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleTypeClick(type)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Card content */}
                <div className="relative bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${type.color}`}></div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                    {type.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-1 h-1 bg-pink-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Types Indicator */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30 max-w-md mx-auto">
              <p className="text-purple-400 font-semibold mb-2">And many more...</p>
              <p className="text-sm text-gray-300">
                Discover additional moon classifications throughout the solar system
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-violet-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-purple-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Ready to Explore Moons?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Journey to the fascinating satellites that orbit planets throughout our solar system and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                Explore All Moons
              </button>
              <button
                onClick={onBack}
                className="border border-purple-500 text-purple-400 hover:bg-purple-500/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Back to Exploration
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-gray-800 mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                COSMOS
              </span>
            </div>
            <p className="text-gray-400">Discovering the satellites of our cosmic neighborhood</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MoonPage
