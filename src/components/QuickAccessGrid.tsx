import Link from 'next/link'

const quickAccessItems = [
  {
    id: 'w9',
    title: 'W9 Tax Forms',
    description: 'Download and submit W9 tax forms quickly',
    icon: '📋',
    href: '/forms/w9',
    color: 'bg-blue-50 hover:bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    description: 'Review professional conduct guidelines',
    icon: '📖',
    href: '/resources/code-of-conduct',
    color: 'bg-green-50 hover:bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 'dress-code',
    title: 'Dress Code',
    description: 'Professional appearance standards',
    icon: '👔',
    href: '/resources/dress-code',
    color: 'bg-purple-50 hover:bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 'direct-deposit',
    title: 'Direct Deposit',
    description: 'Set up direct deposit for payments',
    icon: '💳',
    href: '/forms/direct-deposit',
    color: 'bg-yellow-50 hover:bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    id: 'insurance',
    title: 'Submit Insurance',
    description: 'Upload insurance documentation',
    icon: '🛡️',
    href: '/forms/insurance',
    color: 'bg-red-50 hover:bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    id: 'support',
    title: 'Get Support',
    description: 'Contact our contractor support team',
    icon: '💬',
    href: '/support',
    color: 'bg-indigo-50 hover:bg-indigo-100',
    iconColor: 'text-indigo-600'
  }
]

export default function QuickAccessGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for contractor onboarding and ongoing compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`${item.color} p-6 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md group`}
            >
              <div className="flex items-start space-x-4">
                <div className={`text-3xl ${item.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
