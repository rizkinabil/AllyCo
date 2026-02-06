export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About AllyCo</h1>
          <p className="text-xl">
            Learn more about our mission, values, and what drives us to help organizations succeed.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                At AllyCo, we are committed to being a trusted partner that brings intelligence and expertise to help
                organizations succeed in their digital transformation journey.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We understand that digital transformation is not just about technology—it's about people, processes, and
                culture. That's why we take a holistic approach to every engagement.
              </p>
              <p className="text-lg text-gray-700">
                Through incremental delivery and continuous collaboration, we ensure sustainable results that create
                real business value.
              </p>
            </div>
            <div className="bg-blue-100 h-96 rounded-lg flex items-center justify-center text-6xl">🎯</div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Partnership</h3>
              <p className="text-gray-700">
                We build long-term relationships based on trust, transparency, and mutual success. Your goals become our
                goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligence & Expertise</h3>
              <p className="text-gray-700">
                Our team combines deep knowledge of technology, business strategy, and organizational change management.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Incremental Delivery</h3>
              <p className="text-gray-700">
                We break down complex transformations into manageable, deliverable increments that create continuous
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AllyCo */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose AllyCo?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl text-blue-900 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-700">
                  Years of successful digital transformation engagements across diverse industries.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-900 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer-Centric Approach</h3>
                <p className="text-gray-700">
                  We listen, understand, and tailor our approach to your unique organizational needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-900 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-700">
                  Our consultants bring decades of combined experience in digital transformation and organizational
                  change.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-900 flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Support</h3>
                <p className="text-gray-700">
                  We don't just deliver a solution; we partner with you throughout your transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Start Your Transformation</h2>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
