"use client"

import { ArrowLeft, Info, Zap, ExternalLink, Star, Globe, Rocket } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/asteroid.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer2 from "../components/Footer2"
import asteroid from "../assets/asteroid.jpg"

const asteroidFacts = [
  "Most asteroids are found in the asteroid belt between Mars and Jupiter",
  "The largest asteroid is Ceres, which is also classified as a dwarf planet",
  "Asteroids are remnants from the formation of our solar system 4.6 billion years ago",
  "Some asteroids contain valuable metals like platinum and gold",
  "NASA's DART mission successfully changed an asteroid's orbit in 2022",
  "Asteroids range in size from tiny pebbles to objects hundreds of kilometers wide",
]

function AsteroidPage() {
    const handleTypeClick = (asteroidType) => {
        // This would navigate to individual asteroid type page
        console.log(`Navigating to ${asteroidType.name} page`)
        // In a real app, you'd use router navigation here
    }

    const [bodies, setBodies] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error, status ${response.status}`)
            }
            const data = await response.json()
            console.log(data)
            return data;
        } catch (err) {
            console.log("failed to fetch the data", err)
            return null
        }
    }
    useEffect(() => {
        const url = "https://api.le-systeme-solaire.net/rest/bodies/";
        fetchData(url).then((data) => {
            if (data && data.bodies) {
                const asteroids = data.bodies.filter((body)=> body.bodyType === "Asteroid")
                setBodies(asteroids)
            }
            setLoading(false)
        })
    }, [])
    useEffect(() => {
        console.log("Updated bodies:", bodies);
    }, [bodies]);

  return (
    <div className="min-h-screen bg-black/80 text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${spaceBackground})`,
            backgroundSize: "cover",
          }}
        />
       <div className="absolute inset-0 bg-black/80" />
        {/* Floating asteroid particles */}
        <div className="absolute inset-0">
          <div className="asteroid-particle asteroid-particle-1"></div>
          <div className="asteroid-particle asteroid-particle-2"></div>
          <div className="asteroid-particle asteroid-particle-3"></div>
          <div className="asteroid-particle asteroid-particle-4"></div>
          <div className="asteroid-particle asteroid-particle-5"></div>
          <div className="asteroid-particle asteroid-particle-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to={"/explore"}
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Exploration</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-amber-600 asteroid-title">
              ASTEROIDS
            </h1>
            <p className="text-md md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Rocky remnants from the dawn of our solar system, floating through space as ancient time capsules
            </p>
          </div>

          {/* Main Asteroid Image and Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                <img
                  src= {asteroid}
                  alt="Asteroid"
                  className="w-full h-80 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-2 text-orange-400">
                  <Info className="h-5 w-5" />
                  <span className="text-sm">Artist's representation of the asteroids</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-orange-500/30">
                <h2 className="text-2xl font-bold mb-4 text-orange-400 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  General Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">What are Asteroids?</h3>
                    <p className="text-gray-300">
                      Asteroids are rocky objects that orbit the Sun, primarily found in the asteroid belt between Mars
                      and Jupiter. They are remnants from the early formation of our solar system, about 4.6 billion
                      years ago.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Composition</h3>
                    <p className="text-gray-300">
                      Made of rock, metal, and sometimes ice, asteroids vary greatly in composition. Some contain
                      valuable metals like platinum, while others are rich in carbon compounds.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Size Range</h3>
                    <p className="text-gray-300">
                      From tiny pebbles to massive objects hundreds of kilometers wide. The largest, Ceres, is about 940
                      km in diameter and is also classified as a dwarf planet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 backdrop-blur-md p-6 rounded-2xl border border-orange-500/30">
                <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {asteroidFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asteroid Types Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
              Asteroid Types
            </h2>
            <p className="md:text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the different classifications of asteroids based on their composition and spectral
              characteristics
            </p>
          </div>

          {/* Types Grid */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {bodies.map((type, index) => (
              <Link
                to={`/bodies/${type.id}`}
                key={type.id}
                className="group relative cursor-pointer asteroid-type-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleTypeClick(type)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Card content */}
                <div className="relative bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${type.color}`}></div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
                    {type.englishName}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-orange-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-1 h-1 bg-red-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-orange-900/50 via-red-900/50 to-amber-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-orange-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
              Ready to Explore More?
            </h2>
            <p className="md:text-lg text-gray-300 mb-8">
              Dive deeper into the fascinating world of asteroids and discover their secrets, origins, and potential for
              future exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                Explore All Types
              </button>
              <Link
                to={"/explore"}
                className="border border-orange-500 text-orange-400 hover:bg-orange-500/20 px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Back to Exploration
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer2/>
      </div>
    </div>
  )
}

export default AsteroidPage
