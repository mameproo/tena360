import { Heart, Users, Shield, Award, Target, Eye, CheckCircle, Star } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Patients Served', value: '2000+', color: 'text-blue-600' },
    { icon: Shield, label: 'Verified Medicines', value: '50+', color: 'text-green-600' },
    { icon: Award, label: 'Healthcare Partners', value: '10+', color: 'text-purple-600' },
    { icon: Star, label: 'Success Rate', value: '95%', color: 'text-yellow-600' },
  ];

  const features = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      titleAmharic: 'በታካሚ ላይ ያተኮረ እንክብካቤ',
      description: 'We put patients first, ensuring accessible and quality healthcare for all Ethiopians.'
    },
    {
      icon: Shield,
      title: 'Verified & Safe',
      titleAmharic: 'የተረጋገጠ እና ደህንነቱ የተጠበቀ',
      description: 'All our medicines and healthcare providers are thoroughly verified and licensed.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      titleAmharic: 'በማህበረሰብ ላይ ያተኮረ',
      description: 'Tailored solutions that understand Ethiopian culture and local healthcare needs.'
    },
    {
      icon: Target,
      title: 'Accessible Healthcare',
      titleAmharic: 'ተደራሽ የሆነ ጤና አገልግሎት',
      description: 'Making healthcare accessible across Ethiopia, from urban centers to rural communities.'
    },
  ];
  const values = [
    {
      title: 'Excellence',
      titleAmharic: 'ብቃት',
      description: 'Striving for the highest quality in everything we do'
    },
    {
      title: 'Integrity',
      titleAmharic: 'ታማኝነት',
      description: 'Building trust through transparency and ethical practices'
    },
    {
      title: 'Innovation',
      titleAmharic: 'ፈጠራ',
      description: 'Embracing new technologies to improve healthcare delivery'
    },
    {
      title: 'Community',
      titleAmharic: 'ማህበረሰብ',
      description: 'Working together to build healthier Ethiopian communities'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Health Partner in Ethiopia
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            የታመነ የጤና አጋርዎ በኢትዮጵያ
          </p>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto">
            Tena360 is revolutionizing healthcare access in Ethiopia by providing comprehensive, 
            culturally-sensitive health solutions that bridge traditional wisdom with modern medicine.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-primary-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                  <p className="text-gray-600">የኛ ተልዕኮ</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To democratize healthcare access across Ethiopia by creating a comprehensive digital platform 
                that connects patients with verified healthcare providers, medicines, and educational resources, 
                while respecting and integrating traditional Ethiopian healing practices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-secondary-500 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                  <p className="text-gray-600">የኛ ራእይ</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become Ethiopia's leading healthcare platform where every citizen has access to quality, 
                affordable healthcare services regardless of their location, empowering communities with 
                knowledge and tools for better health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
        <p className="text-lg text-gray-600">Making a difference in Ethiopian healthcare</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4`}>
            <Icon className={`h-8 w-8 ${stat.color}`} />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
            </div>
          );
        })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive healthcare solutions for Ethiopia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{feature.titleAmharic}</p>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Tena360?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Built for Ethiopia, by Ethiopians who understand the unique healthcare challenges and opportunities in our country.
              </p>
              
              <div className="space-y-6">
                {[
                  'Localized healthcare solutions designed for Ethiopian communities',
                  'Verified and licensed healthcare providers and pharmacies',
                  'Integration of traditional medicine with modern healthcare',
                  'Accessible in multiple Ethiopian languages',
                  'Affordable pricing and flexible payment options',
                  'Strong focus on preventive care and health education'
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-sm text-primary-700">Support Available</div>
              </div>
              <div className="bg-green-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-sm text-green-700">Years Experience</div>
              </div>
              <div className="bg-blue-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-blue-700">Verified Providers</div>
              </div>
              <div className="bg-yellow-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">15+</div>
                <div className="text-sm text-yellow-700">Regions Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="py-16 bg-white-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-primary-600">{value.title[0]}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{value.titleAmharic}</p>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Tena360 Today</h2>
          <p className="text-xl mb-4">ዛሬ ተጋሩን</p>
          <p className="text-lg mb-8 opacity-90">
            Be part of Ethiopia's healthcare revolution. Access quality healthcare services, 
            learn from experts, and contribute to healthier communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;