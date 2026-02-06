export default function Services() {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Develop a comprehensive digital transformation roadmap aligned with your business objectives.',
      icon: '📊',
    },
    {
      title: 'Process Optimization',
      description: 'Identify and streamline operational processes to improve efficiency and reduce costs.',
      icon: '⚙️',
    },
    {
      title: 'Technology Implementation',
      description: 'Implement modern technology solutions that support your transformation goals.',
      icon: '💻',
    },
    {
      title: 'Change Management',
      description: 'Guide your organization through change with proven change management methodologies.',
      icon: '🔄',
    },
    {
      title: 'Capability Building',
      description: 'Build internal capabilities and skills to sustain transformation outcomes long-term.',
      icon: '🎓',
    },
    {
      title: 'Consulting & Advisory',
      description: 'Get strategic guidance from experienced consultants who understand your industry.',
      icon: '💡',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">Comprehensive solutions to support your digital transformation journey.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-700">We understand your business, challenges, and goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-700">We create a detailed roadmap for your transformation.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-700">We deliver incrementally and iteratively with measurable results.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustain</h3>
              <p className="text-gray-700">We ensure successful adoption and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Benefits of Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <div className="text-3xl text-blue-900 flex-shrink-0">📈</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Time to Market</h3>
                <p className="text-gray-700">Accelerate your digital initiatives with proven methodologies.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-3xl text-blue-900 flex-shrink-0">💰</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-gray-700">Reduce costs through optimized processes and technology investments.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-3xl text-blue-900 flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improved Operations</h3>
                <p className="text-gray-700">Enhance operational efficiency and agility across the organization.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-3xl text-blue-900 flex-shrink-0">👥</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Enablement</h3>
                <p className="text-gray-700">Build skills and capabilities within your teams for long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore How We Can Help</h2>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
