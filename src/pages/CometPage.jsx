"use client"

import { ArrowLeft, Info, Zap, ExternalLink, Star, Globe, Rocket } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/comet.css"
import { Link } from "react-router-dom"
import Footer2 from "../components/Footer2"
import { useEffect, useState } from "react"
import comet from "../assets/comet.jpg"

const cometFacts = [
  "Comets are often called 'dirty snowballs' made of ice, dust, and rock",
  "Halley's Comet returns every 75-76 years",
  "Comet tails always point away from the Sun",
  "Some comets have two tails: dust and ion tails",
  "Comets originate from the Kuiper Belt and Oort Cloud",
  "When heated by the Sun, comets develop their characteristic tails",
]

function CometPage() {
  const handleTypeClick = (cometType) => {
    console.log(`Navigating to ${cometType.name} page`)
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
                      const comet = data.bodies.filter((body)=> body.bodyType === "Comet")
                      setBodies(comet)
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
        {/* Floating comet particles */}
        <div className="absolute inset-0">
          <div className="comet-particle comet-particle-1"></div>
          <div className="comet-particle comet-particle-2"></div>
          <div className="comet-particle comet-particle-3"></div>
          <div className="comet-particle comet-particle-4"></div>
          <div className="comet-particle comet-particle-5"></div>
          <div className="comet-particle comet-particle-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to={"/explore"}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Exploration</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 comet-title">
              COMETS
            </h1>
            <p className="text-md md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Icy wanderers from the outer solar system that develop spectacular tails when approaching the Sun
            </p>
          </div>

          {/* Main Comet Image and Info */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300">
                <img
                  src= {comet}
                  alt="Comet"
                  className="w-full h-80 object-cover rounded-xl mb-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-2 text-emerald-400">
                  <Info className="h-5 w-5" />
                  <span className="text-sm">A comet with its characteristic tail</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  General Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">What are Comets?</h3>
                    <p className="text-gray-300">
                      Comets are icy bodies that originate from the outer regions of the solar system. When they
                      approach the Sun, they develop glowing tails of gas and dust.
                    </p>
                  </div>
                  <div> 
                    <h3 className="font-semibold text-white mb-2">Structure</h3>
                    <p className="text-gray-300">
                      Comets consist of a nucleus (ice and rock), coma (gas and dust cloud), and tails that form when
                      solar radiation heats the nucleus.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Origins</h3>
                    <p className="text-gray-300">
                      Most comets come from the Kuiper Belt or the distant Oort Cloud, regions filled with icy remnants
                      from the solar system's formation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30">
                <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cometFacts.map((fact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-300">{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comet Types Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              Comet Types
            </h2>
            <p className="md:text-lg text-gray-300 max-w-2xl mx-auto">
              Discover the different classifications of comets based on their orbital periods and origins
            </p>
          </div>

          {/* Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {bodies.map((type, index) => (
              <Link
              to={`/bodies/${type.id}`}
                key={type.id}
                className="group relative cursor-pointer comet-type-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleTypeClick(type)}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
                ></div>

                {/* Card content */}
                <div className="relative bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-600/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${type.color}`}></div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-500 transition-all duration-300">
                    {type.englishName}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-emerald-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-1 h-1 bg-teal-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Types Indicator */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30 max-w-md mx-auto">
              <p className="text-emerald-400 font-semibold mb-2">And many more...</p>
              <p className="text-sm text-gray-300">
                Explore additional comet classifications and their unique characteristics
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-emerald-900/50 via-teal-900/50 to-cyan-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-emerald-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
              Ready to Chase Comets?
            </h2>
            <p className="md:text-lg text-gray-300 mb-8">
              Follow these cosmic wanderers on their spectacular journeys through the solar system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                Explore All Comets
              </button>
              <Link
                to={"/explore"}
                className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500/20 px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default CometPage
