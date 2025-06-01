"use client"

import { ArrowLeft, Calendar, Users, ExternalLink, Star, Telescope, Globe, Award, TrendingUp, Rocket } from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/discovery.css"
import { Link } from "react-router-dom"
import Footer2 from "../components/Footer2"
import Header from "../components/Header"
import MobileNavbar from "../components/MobileNavbar"

const recentDiscoveries = [
  {
    id: 1,
    title: "James Webb Telescope Discovers Most Distant Galaxy",
    description: "JADES-GS-z13-0 galaxy observed just 325 million years after the Big Bang, breaking previous records.",
    date: "2024-01-15",
    organization: "NASA/ESA",
    category: "Galaxy",
    image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=JWST+Galaxy",
    impact: "High",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    title: "Water Vapor Detected on Exoplanet K2-18b",
    description: "Atmospheric analysis reveals water vapor and possible clouds on this potentially habitable world.",
    date: "2023-12-08",
    organization: "ESA/Hubble",
    category: "Exoplanet",
    image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=K2-18b",
    impact: "High",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    title: "Perseverance Rover Finds Organic Molecules on Mars",
    description: "Complex organic compounds discovered in Martian rock samples, suggesting past microbial life.",
    date: "2023-11-22",
    organization: "NASA/JPL",
    category: "Mars",
    image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Mars+Organics",
    impact: "High",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 4,
    title: "New Ring System Discovered Around Dwarf Planet Quaoar",
    description: "Unexpected ring system found around distant dwarf planet, challenging current formation theories.",
    date: "2023-10-30",
    organization: "ESO",
    category: "Dwarf Planet",
    image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Quaoar+Rings",
    impact: "Medium",
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 5,
    title: "Breakthrough Listen Detects Mysterious Radio Signals",
    description: "Fast Radio Bursts from distant galaxy show repeating patterns, sparking new research.",
    date: "2023-09-14",
    organization: "SETI Institute",
    category: "Radio Astronomy",
    image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Radio+Signals",
    impact: "Medium",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 6,
    title: "Artemis Mission Successfully Returns to Moon Orbit",
    description: "Artemis 1 mission completes lunar flyby, paving the way for human return to the Moon.",
    date: "2023-08-28",
    organization: "NASA",
    category: "Space Mission",
    image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Artemis",
    impact: "High",
    color: "from-violet-500 to-purple-600",
  },
]

const organizations = [
  {
    id: 1,
    name: "ISRO",
    fullName: "Indian Space Research Organisation",
    description: "India's space agency achieving remarkable milestones",
    achievements: "Mars Orbiter Mission, Chandrayaan, cost-effective launches",
    founded: "1969",
    country: "India",
    logo: "🇮🇳",
    color: "from-orange-600 to-amber-700",
    website: "isro.gov.in",
  },
  {
    id: 2,
    name: "ESA",
    fullName: "European Space Agency",
    description: "Europe's gateway to space exploration and research",
    achievements: "Rosetta mission, Gaia telescope, ExoMars",
    founded: "1975",
    country: "Europe",
    logo: "🌍",
    color: "from-emerald-600 to-teal-700",
    website: "esa.int",
  },
  {
    id: 3,
    name: "SpaceX",
    fullName: "Space Exploration Technologies Corp.",
    description: "Revolutionizing space technology and transportation",
    achievements: "Reusable rockets, Dragon capsule, Starlink",
    founded: "2002",
    country: "United States",
    logo: "🚀",
    color: "from-gray-600 to-slate-700",
    website: "spacex.com",
  },
  {
    id: 4,
    name: "JAXA",
    fullName: "Japan Aerospace Exploration Agency",
    description: "Japan's national space agency advancing space science",
    achievements: "Hayabusa missions, ISS contributions, lunar exploration",
    founded: "2003",
    country: "Japan",
    logo: "🗾",
    color: "from-red-600 to-pink-700",
    website: "jaxa.jp",
  },
  {
    id: 5,
    name: "NASA",
    fullName: "National Aeronautics and Space Administration",
    description: "Leading space exploration and scientific discovery",
    achievements: "Moon landings, Mars rovers, Hubble telescope",
    founded: "1958",
    country: "United States",
    logo: "🚀",
    color: "from-blue-600 to-indigo-700",
    website: "nasa.gov",
  },
  {
    id: 6,
    name: "CNSA",
    fullName: "China National Space Administration",
    description: "China's space program advancing rapidly",
    achievements: "Chang'e lunar missions, Tianwen Mars rover, space station",
    founded: "1993",
    country: "China",
    logo: "🇨🇳",
    color: "from-yellow-600 to-red-700",
    website: "cnsa.gov.cn",
  },
]

function DiscoveriesPage({ onBack }) {
  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "text-red-400 bg-red-500/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-500/20"
      case "Low":
        return "text-green-400 bg-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
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
        <div className="absolute inset-0 bg-black/80" />
        {/* Floating discovery particles */}
        <div className="absolute inset-0">
          <div className="discovery-particle discovery-particle-1"></div>
          <div className="discovery-particle discovery-particle-2"></div>
          <div className="discovery-particle discovery-particle-3"></div>
          <div className="discovery-particle discovery-particle-4"></div>
          <div className="discovery-particle discovery-particle-5"></div>
          <div className="discovery-particle discovery-particle-6"></div>
        </div>
      </div>

          <MobileNavbar/>
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <Header/>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 discovery-title">
              DISCOVERIES
            </h1>
            <p className="md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore the latest breakthroughs in space exploration and the organizations making them possible
            </p>
            <div className="hidden md:flex items-center justify-center gap-4 text-indigo-400">
              <Star className="h-5 w-5 animate-pulse" />
              <span className="text-lg">Recent Breakthroughs & Leading Organizations</span>
              <Star className="h-5 w-5 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Recent Discoveries Section */}
        <section className="container mx-auto px-4 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Recent Discoveries
            </h2>
            <p className="md:text-lg text-gray-300 max-w-2xl mx-auto">
              The latest groundbreaking discoveries that are reshaping our understanding of the universe
            </p>
          </div>

          {/* Discoveries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recentDiscoveries.map((discovery, index) => (
              <div
                key={discovery.id}
                className="group relative bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-600/30 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer discovery-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${discovery.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6">

                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(discovery.date)}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${getImpactColor(discovery.impact)}`}
                    >
                      {discovery.impact} Impact
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
                    {discovery.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{discovery.description}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-indigo-400" />
                      <span className="text-sm text-indigo-400 font-semibold">{discovery.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">{discovery.category}</span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Organizations Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Leading Organizations
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The pioneering space agencies and companies driving humanity's exploration of the cosmos
            </p>
          </div>

          {/* Organizations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {organizations.map((org, index) => (
              <div
                key={org.id}
                className="group relative bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer org-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${org.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{org.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                        {org.name}
                      </h3>
                      <p className="text-sm text-gray-400">{org.country}</p>
                    </div>
                  </div>

                  {/* Full Name */}
                  <p className="text-sm text-indigo-400 font-semibold mb-3">{org.fullName}</p>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{org.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{org.achievements}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-purple-400">Founded {org.founded}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-400">{org.website}</span>
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-indigo-500/30 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                Space Exploration by the Numbers
              </h2>
              <p className="text-lg text-gray-300">Remarkable achievements in our quest to understand the universe</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">5,000+</div>
                <div className="text-sm text-gray-300">Exoplanets Discovered</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-sm text-gray-300">Humans on Moon</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">200+</div>
                <div className="text-sm text-gray-300">Active Missions</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">∞</div>
                <div className="text-sm text-gray-300">Possibilities</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-purple-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
              Stay Updated on Space Discoveries
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Follow the latest breakthroughs and join the community of space enthusiasts exploring the cosmos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Follow Latest Discoveries
              </button>
              <Link
                to={"/"}
                className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500/20 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Back to Home
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

export default DiscoveriesPage
