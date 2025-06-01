import React from 'react'
import { Rocket } from "lucide-react"

const Header = () => {
  return (
    <>
        <header className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 ml-3">
              <Rocket className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                SPACE-WALK
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm hover:text-purple-400 transition-colors">
                Home
              </a>
              <a href="/explore" className="text-sm hover:text-purple-400 transition-colors">
                Exploration
              </a>
              <a href="/discoveries" className="text-sm hover:text-purple-400 transition-colors">
                Discoveries
              </a>
              <a href="/about" className="text-sm hover:text-purple-400 transition-colors">
                About
              </a>
            </nav>
            <button className="hidden md:flex border hover:text-white bg-black border-purple-500 text-purple-400 cursor-pointer hover:bg-purple-500/20 px-4 py-2 rounded-md transition-colors">
              Contact Us
            </button>
          </div>
        </header>
    </>
  )
}

export default Header
