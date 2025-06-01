"use client"

import { ArrowLeft, Info, Zap, Globe, Moon, Orbit, Thermometer, Scale, Clock, Eye, Star, Ruler, RotateCcw } from 'lucide-react'
import spaceBackground from "../assets/space-vsit.webp"
import "../animations/data.css"
import { Link } from "react-router-dom"
import Footer2 from '../components/Footer2'


function DataPage({ data }) {
  // Helper functions for data formatting
  const formatMass = (mass) => {
    if (!mass) return "Unknown"
    return `${mass.massValue} × 10^${mass.massExponent} kg`
  }

  const formatVolume = (vol) => {
    if (!vol) return "Unknown"
    return `${vol.volValue} × 10^${vol.volExponent} km³`
  }

  const formatDistance = (distance) => {
    if (!distance) return "Unknown"
    return `${distance.toLocaleString()} km`
  }

  const formatTemperature = (temp) => {
    if (!temp) return "Unknown"
    const celsius = temp - 273.15
    const fahrenheit = (celsius * 9/5) + 32
    return `${temp}K (${celsius.toFixed(1)}°C / ${fahrenheit.toFixed(1)}°F)`
  }

  const formatTime = (days) => {
    if (!days) return "Unknown"
    if (days < 1) {
      const hours = days * 24
      return `${hours.toFixed(2)} hours`
    }
    const years = days / 365.25
    if (years >= 1) {
      return `${years.toFixed(2)} years (${days.toFixed(2)} days)`
    }
    return `${days.toFixed(2)} days`
  }

  const getBodyTypeColor = (bodyType) => {
    switch (bodyType?.toLowerCase()) {
      case 'planet':
        return 'from-blue-500 to-cyan-600'
      case 'moon':
        return 'from-purple-500 to-pink-600'
      case 'asteroid':
        return 'from-orange-500 to-red-600'
      case 'comet':
        return 'from-emerald-500 to-teal-600'
      case 'dwarf planet':
        return 'from-yellow-500 to-amber-600'
      default:
        return 'from-gray-500 to-slate-600'
    }
  }

  const getBodyTypeIcon = (bodyType) => {
    switch (bodyType?.toLowerCase()) {
      case 'planet':
        return Globe
      case 'moon':
        return Moon
      case 'asteroid':
        return Star
      case 'comet':
        return Orbit
      default:
        return Globe
    }
  }

  const colorTheme = getBodyTypeColor(data?.bodyType)
  const IconComponent = getBodyTypeIcon(data?.bodyType)

  // Orbital characteristics data
  const orbitalData = [
    { label: "Semi-major Axis", value: formatDistance(data?.semimajorAxis), icon: Ruler },
    { label: "Perihelion", value: formatDistance(data?.perihelion), icon: Orbit },
    { label: "Aphelion", value: formatDistance(data?.aphelion), icon: Orbit },
    { label: "Eccentricity", value: data?.eccentricity?.toFixed(4) || "Unknown", icon: Orbit },
    { label: "Inclination", value: data?.inclination ? `${data.inclination}°` : "Unknown", icon: Orbit },
    { label: "Orbital Period", value: formatTime(data?.sideralOrbit), icon: Clock },
  ]

  // Physical characteristics data
  const physicalData = [
    { label: "Mass", value: formatMass(data?.mass), icon: Scale },
    { label: "Volume", value: formatVolume(data?.vol), icon: Globe },
    { label: "Density", value: data?.density ? `${data.density} g/cm³` : "Unknown", icon: Scale },
    { label: "Gravity", value: data?.gravity ? `${data.gravity} m/s²` : "Unknown", icon: Scale },
    { label: "Escape Velocity", value: data?.escape ? `${data.escape.toLocaleString()} m/s` : "Unknown", icon: Orbit },
    { label: "Mean Radius", value: data?.meanRadius ? `${data.meanRadius.toLocaleString()} km` : "Unknown", icon: Ruler },
  ]

  // Rotational characteristics data
  const rotationalData = [
    { label: "Rotation Period", value: formatTime(data?.sideralRotation), icon: RotateCcw },
    { label: "Axial Tilt", value: data?.axialTilt ? `${data.axialTilt}°` : "Unknown", icon: RotateCcw },
    { label: "Equatorial Radius", value: data?.equaRadius ? `${data.equaRadius.toLocaleString()} km` : "Unknown", icon: Ruler },
    { label: "Polar Radius", value: data?.polarRadius ? `${data.polarRadius.toLocaleString()} km` : "Unknown", icon: Ruler },
    { label: "Flattening", value: data?.flattening?.toFixed(5) || "Unknown", icon: Globe },
    { label: "Average Temperature", value: formatTemperature(data?.avgTemp), icon: Thermometer },
  ]

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
        {/* Floating data particles */}
        <div className="absolute inset-0">
          <div className="data-particle data-particle-1"></div>
          <div className="data-particle data-particle-2"></div>
          <div className="data-particle data-particle-3"></div>
          <div className="data-particle data-particle-4"></div>
          <div className="data-particle data-particle-5"></div>
          <div className="data-particle data-particle-6"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              to={"/explore"}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Exploration</span>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`bg-gradient-to-r ${colorTheme} p-4 rounded-2xl`}>
                <IconComponent className="md:h-12 md:w-12 text-white" />
              </div>
              <div>
                <h1 className={`text-4xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${colorTheme} data-title`}>
                  {data?.englishName || data?.name || "Unknown Body"}
                </h1>
                <p className="md:text-xl text-gray-300">
                  {data?.bodyType || "Celestial Body"} • {data?.name !== data?.englishName ? data?.name : ""}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
            <div className={`bg-gradient-to-r ${colorTheme} bg-opacity-20 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center`}>
              <Scale className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-300">Mass</p>
              <p className="font-bold text-white">{formatMass(data?.mass)}</p>
            </div>
            <div className={`bg-gradient-to-r ${colorTheme} bg-opacity-20 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center`}>
              <Ruler className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-300">Radius</p>
              <p className="font-bold text-white">{data?.meanRadius ? `${data.meanRadius.toLocaleString()} km` : "Unknown"}</p>
            </div>
            <div className={`bg-gradient-to-r ${colorTheme} bg-opacity-20 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center`}>
              <Clock className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-300">Orbital Period</p>
              <p className="font-bold text-white">{formatTime(data?.sideralOrbit)}</p>
            </div>
            <div className={`bg-gradient-to-r ${colorTheme} bg-opacity-20 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center`}>
              <Thermometer className="h-8 w-8 mx-auto mb-2 text-white" />
              <p className="text-sm text-gray-300">Temperature</p>
              <p className="font-bold text-white">{data?.avgTemp ? `${data.avgTemp}K` : "Unknown"}</p>
            </div>
          </div>
        </section>

        {/* Main Data Sections */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Overview Section */}
            <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h2 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorTheme} flex items-center gap-3`}>
                <Info className="h-8 w-8" />
                Overview
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Basic Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">English Name:</span>
                      <span className="text-white font-medium">{data?.englishName || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Local Name:</span>
                      <span className="text-white font-medium">{data?.name || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Body Type:</span>
                      <span className="text-white font-medium">{data?.bodyType || "Unknown"}</span>
                    </div>
                   
                    {data?.discoveredBy && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Discovered By:</span>
                        <span className="text-white font-medium">{data.discoveredBy}</span>
                      </div>
                    )}
                    {data?.discoveryDate && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Discovery Date:</span>
                        <span className="text-white font-medium">{data.discoveryDate}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Moons & Satellites</h3>
                  {data?.moons && data.moons.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-gray-400 mb-3">Number of Moons: <span className="text-white font-medium">{data.moons.length}</span></p>
                                          <div className="max-h-32 overflow-y-auto space-y-1">
                                              {data.moons?.map((moon, index) => {
                                                  const id = moon.rel.split('/').pop();

                                                  return (
                                                      <Link
                                                          to={`/bodies/${id}`}
                                                          key={index}
                                                          className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"
                                                      >
                                                          <Moon className="h-4 w-4 text-gray-400" />
                                                          <span className="text-white text-sm">{moon.moon}</span>
                                                      </Link>
                                                  );
                                              })}

                                          </div>
                    </div>
                  ) : (
                    <p className="text-gray-400">No known moons</p>
                  )}
                </div>
              </div>
            </div>

            {/* Orbital Characteristics */}
            <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h2 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorTheme} flex items-center gap-3`}>
                <Orbit className="h-8 w-8" />
                Orbital Characteristics
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {orbitalData.map((item, index) => {
                  const ItemIcon = item.icon
                  return ( 
                    <div key={index} className="data-card group">
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`bg-gradient-to-r ${colorTheme} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <ItemIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white">{item.label}</h3>
                      </div>
                      <p className="text-gray-300 font-medium">{item.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Physical Characteristics */}
            <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h2 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorTheme} flex items-center gap-3`}>
                <Globe className="h-8 w-8" />
                Physical Characteristics
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {physicalData.map((item, index) => {
                  const ItemIcon = item.icon
                  return (
                    <div key={index} className="data-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-gradient-to-r ${colorTheme} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <ItemIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white">{item.label}</h3>
                      </div>
                      <p className="text-gray-300 font-medium">{item.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Rotational Characteristics */}
            <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h2 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorTheme} flex items-center gap-3`}>
                <RotateCcw className="h-8 w-8" />
                Rotational & Surface Characteristics
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rotationalData.map((item, index) => {
                  const ItemIcon = item.icon
                  return (
                    <div key={index} className="data-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-gradient-to-r ${colorTheme} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <ItemIcon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white">{item.label}</h3>
                      </div>
                      <p className="text-gray-300 font-medium">{item.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Advanced Orbital Parameters */}
            {(data?.mainAnomaly || data?.argPeriapsis || data?.longAscNode) && (
              <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h2 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colorTheme} flex items-center gap-3`}>
                  <Eye className="h-8 w-8" />
                  Advanced Orbital Parameters
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {data?.mainAnomaly && (
                    <div className="data-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-gradient-to-r ${colorTheme} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Orbit className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white">Mean Anomaly</h3>
                      </div>
                      <p className="text-gray-300 font-medium">{data.mainAnomaly}°</p>
                    </div>
                  )}
                  {data?.argPeriapsis && (
                    <div className="data-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-gradient-to-r ${colorTheme} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Orbit className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white">Argument of Periapsis</h3>
                      </div>
                      <p className="text-gray-300 font-medium">{data.argPeriapsis}°</p>
                    </div>
                  )}
                  {data?.longAscNode && (
                    <div className="data-card group">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`bg-gradient-to-r ${colorTheme} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Orbit className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-semibold text-white">Longitude of Ascending Node</h3>
                      </div>
                      <p className="text-gray-300 font-medium">{data.longAscNode}°</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
  <div className={`relative bg-gradient-to-r bg-opacity-20 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/30 max-w-4xl mx-auto text-center`}>
    
    {/* Optional light overlay */}
    <div className="absolute inset-0 bg-white/10 rounded-3xl pointer-events-none mix-blend-overlay" />

    <h2 className={`relative text-3xl md:text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r text-white`}>
      Explore More Celestial Bodies
    </h2>
    <p className="relative md:text-lg text-gray-100 mb-8">
      Discover the fascinating characteristics and data of other planets, moons, asteroids, and comets in our cosmic database.
    </p>

    <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
      <button className={`bg-gradient-to-r border border-white/20 cursor-pointer hover:bg-white/10 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}>
        <Star className="h-5 w-5" />
        View Similar Bodies
      </button>
      <Link
        to={"/explore"}
        className="border border-white/30 text-white hover:bg-white/10 px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default DataPage
