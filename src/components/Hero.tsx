export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contractor Portal
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Your comprehensive contractor resource hub for Paradigm Productions Group. 
            Access forms, guidelines, and resources to maintain professional standards 
            across all contractor engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Browse Resources
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Quick Forms Access
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-primary-200">Essential Forms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-primary-200">Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-primary-200">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Fast</div>
              <div className="text-primary-200">Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
