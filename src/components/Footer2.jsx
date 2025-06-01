import { Rocket } from 'lucide-react'
import React from 'react'

const Footer2 = () => {
  return (
    <div>
      <footer className="container mx-auto px-4 py-12 border-t border-gray-800 mt-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                SPACE-WALK
              </span>
            </div>
            <p className="text-xs md:text-md text-gray-400">Exploring the small worlds of our solar system</p>
          </div>
        </footer>
    </div>
    
  )
}

export default Footer2
