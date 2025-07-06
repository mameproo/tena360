import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTelegram,
  faTiktok,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your form submission logic here, such as sending data to an API endpoint
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+251-11-123-4567', '+251-91-234-5678'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['medicarephar198@gmail.com'],
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Bole Atlas, Addis Ababa', 'Ethiopia'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['24/7', 'Monday - Sunday'],
      color: 'text-purple-600'
    },
  ];

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Partnership Opportunity',
    'Feedback & Suggestions',
    'Pharmacy Services',    'Course Information',
    'Other'
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1C31mTBaGz/",
      icon: faFacebookF,
      label: "Facebook",
      color: "text-blue-600"
    },
    {
      href: "https://www.instagram.com/medicarepharmancy?igsh=MXIwdHAwcGFlZWlxNQ==",
      icon: faInstagram,
      label: "Instagram",
      color: "text-pink-500"
    },
    {
      href: "https://youtube.com/@medicarepharmacy269",
      icon: faYoutube,
      label: "YouTube",
      color: "text-red-600"
    },
    {
      href: "https://t.me/medicare21",
      icon: faTelegram,
      label: "Telegram",
      color: "text-blue-400"
    },
    {
      href: "https://Tiktok.com/@medicare019",
      icon: faTiktok,
      label: "TikTok",
      color: "text-black"
    },
    {
      href: "https://et.linkedin.com/in/getnet-melkamu-04712a288",
      icon: faLinkedinIn,
      label: "LinkedIn",
      color: "text-blue-700"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help with all your healthcare needs.
          </p>
          <p className="text-gray-600 mt-2">ከኛ ጋር ይገናኙ - እርስዎን ለመርዳት እዚህ ነን</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
             
              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors ${link.color}`}
                      aria-label={link.label}
                    >
                      <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Help */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-4">Need Quick Help?</h3>
                <div className="space-y-3">
                  <button className="flex items-center w-full text-left p-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Start Live Chat</span>
                  </button>
                  <button className="flex items-center w-full text-left p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Call Support</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+251-91-234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please describe how we can help you..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">Privacy Policy</a> and 
                    consent to Tena360 contacting me about this inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Find Us</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              {/* Google Maps Embed for Bole Atlas, Addis Ababa */}
              <iframe
                title="Tena360 Location"
                src="https://www.google.com/maps?q=Bole+Atlas,+Addis+Ababa,+Ethiopia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px', width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
