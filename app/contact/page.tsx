'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl">
            We'd love to hear from you. Let's discuss how AllyCo can support your transformation journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-3xl text-blue-900 flex-shrink-0">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      123 Business Avenue
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-blue-900 flex-shrink-0">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-blue-900 flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@allyco.com" className="text-blue-900 hover:underline">
                        info@allyco.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-blue-900 flex-shrink-0">🕐</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday – Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-900 hover:text-blue-800 font-semibold">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-800 font-semibold">
                    Twitter
                  </a>
                  <a href="#" className="text-blue-900 hover:text-blue-800 font-semibold">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-8 py-6 rounded-lg text-center">
                  <p className="text-xl font-semibold mb-2">Thank you for reaching out!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="digital-strategy">Digital Strategy Consultation</option>
                      <option value="transformation">Transformation Services</option>
                      <option value="implementation">Technology Implementation</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your transformation goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a typical transformation take?</h3>
              <p className="text-gray-700">
                The timeline varies based on complexity and scope, but our incremental delivery approach typically shows
                results within 3-6 months with continued value delivery thereafter.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What industries do you serve?</h3>
              <p className="text-gray-700">
                We have experience across multiple industries including finance, healthcare, manufacturing, retail, and
                technology sectors.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide post-implementation support?</h3>
              <p className="text-gray-700">
                Yes, we offer comprehensive post-implementation support including training, optimization, and ongoing
                advisory services.
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How do you measure success?</h3>
              <p className="text-gray-700">
                We establish clear KPIs at the beginning and track them throughout the transformation to ensure
                alignment with your business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
