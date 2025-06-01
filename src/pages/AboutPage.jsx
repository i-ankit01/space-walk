"use client"

import {
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Globe,
  Heart,
  Rocket,
  Star,
  Award,
  TrendingUp,
  Zap,
} from "lucide-react"
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/about.css"
import Header from '../components/Header'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Footer2 from "../components/Footer2"
import MobileNavbar from "../components/MobileNavbar"


const features = [
  {
    id: 1,
    icon: BookOpen,
    title: "Educational Content",
    description: "Comprehensive information about celestial bodies, space missions, and astronomical phenomena",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    icon: Globe,
    title: "Interactive Exploration",
    description: "Explore planets, moons, asteroids, and comets with detailed data and visualizations",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Latest Discoveries",
    description: "Stay updated with recent space discoveries and breakthroughs from leading organizations",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    icon: Users,
    title: "Community Learning",
    description: "Join a community of space enthusiasts and learners exploring the cosmos together",
    color: "from-orange-500 to-red-600",
  },
]

const team = [
  {
    id: 1,
    name: "Ankit Kumar",
    role: "Developer",
    description: "Expert in building web interfaces and scalable websites",
    avatar: "👨‍💻",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 2,
    name: "Dherya Pratap",
    role: "UI/UX Designer",
    description: "Passionate about making complex space concepts and designs accessible to everyone",
    avatar: "👨‍💻",
    color: "from-orange-500 to-amber-600",
  },
]

const stats = [
  { label: "Website Visits", value: "500+", icon: Users, color: "text-blue-400" },
  { label: "Celestial Objects Cataloged", value: "3,200+", icon: Globe, color: "text-emerald-400" },
  { label: "Interactive Space Guides", value: "20+", icon: BookOpen, color: "text-purple-400" },
  { label: "Missions Tracked", value: "100+", icon: Heart, color: "text-pink-400" },
];


function AboutPage({ onBack }) {
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
        {/* Floating about particles */}
        <div className="absolute inset-0">
          <div className="about-particle about-particle-1"></div>
          <div className="about-particle about-particle-2"></div>
          <div className="about-particle about-particle-3"></div>
          <div className="about-particle about-particle-4"></div>
          <div className="about-particle about-particle-5"></div>
          <div className="about-particle about-particle-6"></div>
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
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 about-title">
              ABOUT <br /> SPACE-WALK
            </h1>
            <p className=" md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Empowering curiosity and education through interactive space exploration. We make the wonders of the
              universe accessible to everyone.
            </p>
            <div className="md:flex items-center justify-center gap-4 hidden text-blue-400">
              <Star className="h-5 w-5 animate-pulse" />
              <span className="text-lg">Inspiring the next generation of space explorers</span>
              <Star className="h-5 w-5 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 md:py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Platform Features
            </h2>
            <p className="md:text-lg text-gray-300 max-w-2xl mx-auto">
              Discover what makes SPACE-WALK the ultimate destination for space education and exploration
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.id}
                  className="group relative bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer feature-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="bg-blue-500/20 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Meet Our Team
            </h2>
            <p className="md:text-lg text-gray-300 max-w-2xl mx-auto">
              Passionate experts dedicated to making space education accessible and engaging for everyone
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.id}
                className="group relative bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl border border-gray-600/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer team-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-500 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-emerald-400 font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{member.description}</p>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 md:py-16 py-3">
          <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-emerald-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-purple-500/30 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-emerald-500">
                Our Impact
              </h2>
              <p className="md:text-lg text-gray-300">
                Reaching learners worldwide and making space education accessible to all
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center stats-card">
                    <IconComponent className={`md:h-8 md:w-8 ${stat.color} mx-auto mb-2`} />
                    <div className={`text-xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-blue-500/30 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Join Our Cosmic Journey
            </h2>
            <p className="md:text-lg text-gray-300 mb-8">
              Be part of a community that's passionate about space exploration and education. Together, we'll unlock the
              mysteries of the universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link  to={"/explore"} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Rocket className="h-5 w-5" />
                Start Exploring
              </Link>
              <Link
                to={"/"}
                className="border border-blue-500 text-blue-400 hover:bg-blue-500/20 px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default AboutPage
