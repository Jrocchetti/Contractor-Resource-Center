import PPGLogo from './PPGLogo'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-300/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <PPGLogo className="w-24 h-16 mr-6" />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient">Contractor Portal</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your comprehensive contractor resource hub for Paradigm Productions Group. 
            Access forms, guidelines, and resources to maintain professional standards 
            across all contractor engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Browse Resources
            </button>
            <button className="border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300">
              Quick Forms Access
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
