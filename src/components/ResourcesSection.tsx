const resourceCategories = [
  {
    title: 'Essential Forms',
    description: 'Required documentation for all contractors',
    items: [
      { name: 'W9 Tax Form', description: 'Tax information form', href: '/forms/w9' },
      { name: 'Direct Deposit Setup', description: 'Banking information form', href: '/forms/direct-deposit' },
      { name: 'Emergency Contact', description: 'Emergency contact details', href: '/forms/emergency-contact' },
      { name: 'Insurance Upload', description: 'Submit insurance documents', href: '/forms/insurance' }
    ]
  },
  {
    title: 'Guidelines & Policies',
    description: 'Professional standards and expectations',
    items: [
      { name: 'Code of Conduct', description: 'Professional behavior standards', href: '/resources/code-of-conduct' },
      { name: 'Dress Code', description: 'Appearance and attire guidelines', href: '/resources/dress-code' },
      { name: 'Safety Protocols', description: 'Workplace safety requirements', href: '/resources/safety' },
      { name: 'Communication Guidelines', description: 'Professional communication standards', href: '/resources/communication' }
    ]
  },
  {
    title: 'Resources & Tools',
    description: 'Helpful resources for contractors',
    items: [
      { name: 'Brand Assets', description: 'Logos and brand materials', href: '/resources/brand-assets' },
      { name: 'Templates', description: 'Document and presentation templates', href: '/resources/templates' },
      { name: 'Training Materials', description: 'Skill development resources', href: '/resources/training' },
      { name: 'Contact Directory', description: 'Important contact information', href: '/resources/contacts' }
    ]
  }
]

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need for Contractor Success
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive resources and tools to maintain professional standards 
            across all contractor engagements with Paradigm Productions Group
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 p-6 hover:border-primary-600 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.href}
                    className="block p-3 rounded-lg border border-gray-700 hover:border-primary-600 hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-primary-400 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-gray-500 group-hover:text-primary-400 transition-colors duration-300 ml-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <a 
                  href={`/resources/${category.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-300"
                >
                  View all {category.title.toLowerCase()} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
