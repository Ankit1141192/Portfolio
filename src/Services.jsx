import React from 'react'

function Services() {
  return (
   <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-300">Creating intuitive and beautiful user interfaces that provide exceptional user experiences across all devices.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Website Design</h3>
              <p className="text-gray-300">Building responsive, modern websites with clean code and optimized performance for the best user experience.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">App Design</h3>
              <p className="text-gray-300">Developing cross-platform mobile applications with native performance and engaging user interfaces.</p>
            </div>
          </div>
  )
}

export default Services
