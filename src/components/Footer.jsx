import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Solar System
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Galaxies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Black Holes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Nebulae
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Podcasts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-purple-400">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} SPACE-WALK. All rights reserved.</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer
