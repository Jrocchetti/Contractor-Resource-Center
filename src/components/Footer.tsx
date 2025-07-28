export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-800 text-white px-3 py-1 rounded-md font-bold text-lg">
                PPG
              </div>
              <h3 className="text-xl font-bold text-primary-400">Contractor Portal</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Paradigm Productions Group&apos;s comprehensive contractor resource center. 
              Professional tools and resources to maintain consistent standards 
              across all contractor engagements.
            </p>
            <div className="text-gray-500 text-sm">
              <p>215 E Main Street</p>
              <p>Leesburg, Florida 34748</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/forms/w9" className="hover:text-primary-400 transition-colors duration-300">W9 Forms</a></li>
              <li><a href="/resources/code-of-conduct" className="hover:text-primary-400 transition-colors duration-300">Code of Conduct</a></li>
              <li><a href="/resources/dress-code" className="hover:text-primary-400 transition-colors duration-300">Dress Code</a></li>
              <li><a href="/forms/direct-deposit" className="hover:text-primary-400 transition-colors duration-300">Direct Deposit</a></li>
              <li><a href="/forms/insurance" className="hover:text-primary-400 transition-colors duration-300">Insurance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/support" className="hover:text-primary-400 transition-colors duration-300">Contact Support</a></li>
              <li><a href="/resources/help" className="hover:text-primary-400 transition-colors duration-300">Help Resources</a></li>
              <li><a href="mailto:contractors@paradigmproductionsgroup.com" className="hover:text-primary-400 transition-colors duration-300">Email Support</a></li>
              <li><a href="https://paradigmproductionsgroup.com" className="hover:text-primary-400 transition-colors duration-300">Official Website</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2025 Paradigm Productions Group. All rights reserved. | Contractor Portal v1.0
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://paradigmproductionsgroup.com" className="text-gray-500 hover:text-primary-400 transition-colors duration-300">
              <span className="sr-only">Official Website</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="mailto:contractors@paradigmproductionsgroup.com" className="text-gray-500 hover:text-primary-400 transition-colors duration-300">
              <span className="sr-only">Email</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
