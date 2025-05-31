"use client"

import { ArrowLeft, Info, Zap, ExternalLink, Star, Globe } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/dwarfPlanet.css"

const dwarfPlanetTypes = [
  { id: 1, name: "Classical Kuiper Belt Objects", color: "from-yellow-500 to-amber-600" },
  { id: 2, name: "Plutoids", color: "from-amber-500 to-orange-600" },
  { id: 3, name: "Scattered Disk Objects", color: "from-orange-500 to-red-600" },
  { id: 4, name: "Detached Objects", color: "from-yellow-400 to-amber-500" },
  { id: 5, name: "Resonant Objects", color: "from-amber-400 to-yellow-500" },
  { id: 6, name: "Asteroid Belt Dwarf Planets", color: "from-orange-400 to-amber-500" },
  { id: 7, name: "Binary Dwarf Planets", color: "from-yellow-600 to-orange-600" },
  { id: 8, name: "Ice-Rich Dwarf Planets", color: "from-cyan-400 to-yellow-500" },
  { id: 9, name: "Rocky Dwarf Planets", color: "from-red-500 to-amber-600" },
  { id: 10, name: "Trans-Neptunian Objects", color: "from-purple-500 to-yellow-600" },
]

const dwarfPlanetFacts = [
  "There are 5 officially recognized dwarf planets",
  "Pluto was reclassified as a dwarf planet in 2006",
  "Ceres is the only dwarf planet in the asteroid belt",
  "Eris is more massive than Pluto",
  "Some dwarf planets have their own moons",
  "Most dwarf planets are found beyond Neptune's orbit",
]

function DwarfPlanetPage({ onBack }) {
  const handleTypeClick = (dwarfPlanetType) => {
    console.log(`Navigating to ${dwarfPlanetType.name} page`)
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
        {/* Floating dwarf planet particles */}
        <div className="absolute inset-0">
          <div className="dwarf-planet-particle dwarf-planet-particle-1"></div>
          <div className="dwarf-planet-particle dwarf-planet-particle-2"></div>
          <div className="dwarf-planet-particle dwarf-planet-particle-3"></div>
          <div className="dwarf-planet-particle dwarf-planet-particle-4"></div>
          <div className="dwarf-planet-particle dwarf-planet-particle-5"></div>
          <div className="dwarf-planet-particle dwarf-planet-particle-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 dwarf-planet-title">
              DWARF PLANETS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Small planetary bodies that orbit the Sun but haven't cleared their orbital neighborhood
            </p>
          </div>

          {/* Main Dwarf Planet Image and Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300">
                <img
                  src="https://via.placeholder.com/600x400/eab308/ffffff?text=Pluto+System"
                  alt="Dwarf Planet"
                  className="w-full h-80 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-2 text-yellow-400">
                  <Info className="h-5 w-5" />
                  <span className="text-sm">The Pluto-Charon system</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/30">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  General Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">What are Dwarf Planets?</h3>
                    <p className="text-gray-300">
                      Dwarf planets are celestial bodies that orbit the Sun and have enough mass to be roughly round,
                      but haven't cleared their orbital neighborhood of other objects.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Classification</h3>
                    <p className="text-gray-300">
                      The International Astronomical Union created this category in 2006, leading to Pluto's
                      reclassification from planet to dwarf planet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">
                      Most dwarf planets are found in the outer solar system, particularly in the Kuiper Belt, though
                      Ceres resides in the asteroid belt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/30">
                <h3 className="text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dwarfPlanetFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dwarf Planet Types Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
              Dwarf Planet Types
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore the different categories of dwarf planets based on their location and characteristics
            </p>
          </div>

          {/* Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {dwarfPlanetTypes.map((type, index) => (
              <div
                key={type.id}
                className="group relative cursor-pointer dwarf-planet-type-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleTypeClick(type)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Card content */}
                <div className="relative bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${type.color}`}></div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 transition-all duration-300">
                    {type.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-yellow-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Types Indicator */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/30 max-w-md mx-auto">
              <p className="text-yellow-400 font-semibold mb-2">And many more...</p>
              <p className="text-sm text-gray-300">
                Discover additional dwarf planet classifications in the outer solar system
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-yellow-900/50 via-amber-900/50 to-orange-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-yellow-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
              Ready to Discover Dwarf Planets?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Explore these fascinating small worlds that challenge our understanding of planetary classification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                Explore All Dwarf Planets
              </button>
              <button
                onClick={onBack}
                className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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
            <p className="text-gray-400">Exploring the small worlds of our solar system</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DwarfPlanetPage
