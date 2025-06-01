import { ArrowRight, Sparkles, Zap, Globe, Moon, CompassIcon as Comet, AsteriskIcon as Asteroid } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import Header from "../components/Header"
import "../animations/explore.css"
import { Link } from "react-router-dom"
import planet from "../assets/planet.jpg"
import moon from "../assets/moon.jpg"
import dwarfplanet from "../assets/dwarf-planet.webp"
import comet from "../assets/comet.jpg"
import asteroid from "../assets/asteroid.jpg"
import MobileNavbar from "../components/MobileNavbar"

const celestialBodies = [
  {
    id: 1,
    name: "Asteroid",
    icon: Asteroid,
    description: "Rocky remnants from the solar system's formation",
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    hoverBorder: "hover:border-orange-500/60",
    textColor: "text-orange-400",
    facts: ["Over 1 million known asteroids", "Mostly found in asteroid belt", "Can contain precious metals"],
    image: asteroid,
    url: "/asteroid"
  },
  {
    id: 2,
    name: "Planet",
    icon: Globe,
    description: "Massive celestial bodies orbiting stars",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60",
    textColor: "text-blue-400",
    facts: ["8 planets in our solar system", "Can have multiple moons", "Diverse atmospheric compositions"],
    image: planet,
    url : "/planet"
  },
  {
    id: 3,
    name: "Comet",
    icon: Comet,
    description: "Icy wanderers with spectacular tails",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/60",
    textColor: "text-emerald-400",
    facts: ["Made of ice, dust, and rock", "Develop tails near the sun", "Originate from outer solar system"],
    image: comet,
    url : "/comet"
  },
  {
    id: 4,
    name: "Moon",
    icon: Moon,
    description: "Natural satellites orbiting planets",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/60",
    textColor: "text-purple-400",
    facts: ["Over 200 moons in our solar system", "Influence planetary tides", "Some have subsurface oceans"],
    image: moon,
    url : "/moon"
  },
  {
    id: 5,
    name: "Dwarf Planet",
    icon: Sparkles,
    description: "Small planetary bodies with unique characteristics",
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-500/60",
    textColor: "text-yellow-400",
    facts: ["5 recognized dwarf planets", "Pluto is the most famous", "Found in outer solar system"],
    image: dwarfplanet,
    url : "/dwarf-planet"
  },
]

function Explore() {
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
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>
        
        <MobileNavbar/>
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <Header/>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
              Cosmic Explore
            </h1>
            <p className="text-md md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Embark on an extraordinary journey through space and discover the fascinating celestial bodies that
              populate our universe
            </p>
            <div className="w-max mx-auto flex items-center justify-center px-4 py-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 gap-2 shadow-inner shadow-black font-semibold text-black">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="text-xs md:text-lg">Choose your cosmic adventure</span>
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Celestial Bodies Grid */}
        <section className="container mx-auto px-4 md:py-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {celestialBodies.map((body, index) => {
              const IconComponent = body.icon
              return (
                <div
                  key={body.id}
                  className={`group relative md:h-142 md:w-92 bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl border ${body.borderColor} ${body.hoverBorder} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer Explore-card`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${body.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`${body.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`md:h-8 md:w-8 ${body.textColor}`} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {body.name}
                      </h3>
                    </div>

                    {/* Image */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={body.image || "/placeholder.svg"}
                        alt={body.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Description */}
                    <div className="h-45">
                    <p className="text-gray-300 mb-4 text-lg">{body.description}</p>

                    {/* Facts */}
                    <div className="space-y-2 mb-6">
                      {body.facts.map((fact, factIndex) => (
                        <div key={factIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${body.bgColor}`}></div>
                          <span className="text-sm text-gray-400">{fact}</span>
                        </div>
                      ))}
                    </div>
                    </div>

                    {/* Explore Button */}
                    <Link to={body.url}
                      className={`w-full bg-gradient-to-r ${body.color} hover:shadow-lg hover:shadow-${body.textColor}/25 text-white font-semibold mx-auto px-3 py-2 md:py-3 md:px-6 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}
                    >
                      Explore {body.name}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-3 h-3 rounded-full ${body.bgColor} animate-pulse`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-purple-500/30 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Ready for Your Cosmic Adventure?
              </h2>
              <p className="md:text-lg text-gray-300 mb-8">
                Each celestial body holds unique secrets and wonders waiting to be discovered. Choose your path and
                begin an unforgettable journey through the cosmos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 cursor-pointer hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Start Random Explore
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 px-6 py-2 cursor-pointer rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  View All Discoveries
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-gray-800 mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                SPACE-WALK
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-md">Exploring the universe, one celestial body at a time</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Explore
