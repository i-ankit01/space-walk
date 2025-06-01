"use client"

import { ArrowLeft, Info, Zap, ExternalLink, Star, Globe, Rocket } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/planet.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer2 from "../components/Footer2"
import planet from "../assets/planet.jpg"

const planetFacts = [
  "There are 8 planets in our solar system",
  "Over 5,000 exoplanets have been discovered",
  "Jupiter is the largest planet in our solar system",
  "Venus is the hottest planet with surface temperatures of 900°F",
  "Some planets have rings made of ice and rock",
  "Planets can have dozens of moons orbiting them",
]

function PlanetPage() {
  const handleTypeClick = (planetType) => {
    console.log(`Navigating to ${planetType.name} page`)
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
                  const planets = data.bodies.filter((body)=> body.bodyType === "Planet")
                  setBodies(planets)
              }
              setLoading(false)
          })
      }, [])
      useEffect(() => {
          console.log("Updated bodies:", bodies);
      }, [bodies]);
  

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
        <div className="absolute inset-0 bg-black/80" />
        {/* Floating planet particles */}
        <div className="absolute inset-0">
          <div className="planet-particle planet-particle-1"></div>
          <div className="planet-particle planet-particle-2"></div>
          <div className="planet-particle planet-particle-3"></div>
          <div className="planet-particle planet-particle-4"></div>
          <div className="planet-particle planet-particle-5"></div>
          <div className="planet-particle planet-particle-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to={"/explore"}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Exploration</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 planet-title">
              PLANETS
            </h1>
            <p className="text-md md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Massive celestial bodies that orbit stars, ranging from rocky worlds to gas giants
            </p>
          </div>

          {/* Main Planet Image and Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute bg-gradient-to-r from-blue-500/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
                <img
                  src= {planet}
                  alt="Planets"
                  className="w-full h-80 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-2 text-blue-400">
                  <Info className="h-5 w-5" />
                  <span className="text-sm">Our solar system's planetary family</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-blue-500/30">
                <h2 className="text-2xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  General Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">What are Planets?</h3>
                    <p className="text-gray-300">
                      Planets are large celestial bodies that orbit stars and have cleared their orbital path of debris.
                      They can be rocky like Earth or gaseous like Jupiter.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Formation</h3>
                    <p className="text-gray-300">
                      Planets form from the gravitational collapse of material in protoplanetary disks around young
                      stars, accumulating mass over millions of years.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Diversity</h3>
                    <p className="text-gray-300">
                      From scorching hot Venus to frozen Neptune, planets exhibit incredible diversity in size,
                      composition, atmosphere, and orbital characteristics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-md p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {planetFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planet Types Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Planet Types
            </h2>
            <p className="md:text-lg text-gray-300 max-w-2xl mx-auto">
              Explore the diverse categories of planets found throughout our universe
            </p>
          </div>

          {/* Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {bodies.map((type, index) => (
              <Link
                to={`/bodies/${type.id}`}
                key={type.id}
                className="group relative cursor-pointer planet-type-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleTypeClick(type)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Card content */}
                <div className="relative bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${type.color}`}></div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-500 transition-all duration-300">
                    {type.englishName}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-blue-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
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
          <div className="bg-gradient-to-r from-blue-900/50 via-cyan-900/50 to-teal-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-blue-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              Ready to Explore Worlds?
            </h2>
            <p className="md:text-lg text-gray-300 mb-8">
              Journey to distant worlds and discover the incredible diversity of planets throughout the universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                Explore All Planets
              </button>
              <Link
                to={"/explore"}
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/20 px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default PlanetPage
