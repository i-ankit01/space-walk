import React from 'react'
import Header from '../components/Header'
import { ChevronRight, Star, Zap, Globe } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import "../animations/asteroid.css"


const LandingPage = () => {
  return (
    <>
        <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background with stars effect */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${spaceBackground})`,
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      
      <div className="absolute inset-0 " />
        {/* Floating asteroid particles */}
        <div className="absolute inset-0">
          <div className="asteroid-particle asteroid-particle-1"></div>
          <div className="asteroid-particle asteroid-particle-2"></div>
          <div className="asteroid-particle asteroid-particle-3"></div>
          <div className="asteroid-particle asteroid-particle-4"></div>
          <div className="asteroid-particle asteroid-particle-5"></div>
          <div className="asteroid-particle asteroid-particle-6"></div>
        </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        
        <Header/>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
              Explore The Final Frontier
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Journey through the space and discover the wonders of our universe. From distant galaxies to neighboring
              planets, the adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <Link to={"/explore"}  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-5 py-2 rounded-md cursor-pointer flex items-center justify-center transition-all">
                Start Exploring
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              
              <button className="border border-purple-500 bg-black text-purple-400 hover:text-white hover:bg-purple-500/20 px-5 py-2 rounded-md cursor-pointer transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Discover The <span className="text-purple-400">Universe</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                <Star className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Stellar Phenomena</h3>
              <p className="text-gray-400">
                Explore the most breathtaking stellar events and cosmic phenomena across the universe.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exoplanet Discovery</h3>
              <p className="text-gray-400">
                Journey to distant worlds and learn about the latest exoplanet discoveries and research.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900/60 backdrop-blur-md p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="bg-indigo-500/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Space Technology</h3>
              <p className="text-gray-400">
                Discover cutting-edge space technologies that are pushing the boundaries of exploration.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Space <span className="text-purple-400">Gallery</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:ml-45">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Galaxy"
                alt="Galaxy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Nebula"
                alt="Nebula"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Planet"
                alt="Planet"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x300/1a1a1a/ffffff?text=Space+Station"
                alt="Space Station"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/20 px-6 py-3 bg-black cursor-pointer hover:text-white rounded-md transition-colors">
              View Full Gallery
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-purple-500/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Cosmic Journey?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join us as we venture into the unknown and uncover the secrets of the universe.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 text-lg rounded-md transition-all">
                Begin Your Adventure
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default LandingPage
