import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen,
  RotateCcw, 
  Briefcase, 
  Stethoscope, 
  Pill, 
  GraduationCap, 
  TrendingUp,
  Shield,
  Users,
  Clock,
  ArrowUp
} from 'lucide-react';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [showScroll, setShowScroll] = useState(false);

  const mainActions = [
    { 
      icon: Search, 
      title: 'Find a Medicine', 
      description: 'Search for drugs and medications',
      path: '/drugs',
      color: 'bg-blue-500'
    },
    { 
      icon: BookOpen, 
      title: 'Browse Courses', 
      description: 'Learn healthcare skills',
      path: '/courses',
      color: 'bg-green-500'
    },
    { 
      icon: RotateCcw, 
      title: 'Refill Rx', 
      description: 'Refill your prescription',
      path: '/refill',
      color: 'bg-purple-500'
    },
    { 
      icon: Pill, 
      title: 'Drugs', 
      description: 'Browse all available drugs',
      path: '/drugs',
      color: 'bg-orange-500'
    },
  ];
  const highlights = [
    { icon: Stethoscope, title: 'Featured Diseases', count: '50+', path: '/diseases' },
    { icon: Pill, title: 'Popular Drugs', count: '100+', path: '/drugs' },
    { icon: GraduationCap, title: 'Trending Courses', count: '5+', path: '/courses' },
    { icon: Briefcase, title: 'Job Openings', count: '10+', path: '/jobs' },
    { icon: RotateCcw, title: 'Prescription Refill', count: 'Fast', path: '/refill' },
  ];

  const stats = [
    { icon: Users, label: 'Patients Served', value: '2000+' },
    { icon: Shield, label: 'Verified Medicines', value: '100+' },
    { icon: Clock, label: 'Years of Service', value: '5+' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Gradient Overlays for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-secondary-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-secondary-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Tena360
              </span>
            </h1>
            
            {/* Amharic Subtitle */}
            <p className="text-2xl md:text-3xl mb-4 text-primary-200 font-medium">
              ሙሉ ጤና በአንድ ቦታ
            </p>
            
            {/* Description */}
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted healthcare partner in Ethiopia. Complete health solutions in one place.
            </p>
            
            {/* Smart Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <SearchBar 
                  placeholder="Search disease..."
                  className="transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  onSearch={(query) => {
                    if (query.trim()) {
                      window.location.href = `/search?q=${encodeURIComponent(query)}`;
                    }
                  }}
                />
                {/* Search bar glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl blur-xl -z-10"></div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {mainActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={index}
                    to={action.path}
                    className="group relative"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                      <div className="flex flex-col items-center text-center">
                        <div className={`${action.color} p-3 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-primary-200 transition-colors">
                          {action.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/diseases"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Exploring
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Call-to-Actions */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link
                  key={index}
                  to={action.path}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`${action.color} p-4 rounded-lg mb-4 inline-block group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-gray-600">{action.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover comprehensive healthcare solutions tailored for Ethiopia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Link
                  key={index}
                  to={highlight.path}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className="text-2xl font-bold text-primary-600">{highlight.count}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {highlight.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-gray-600">
              Join the growing community of Ethiopians who trust Tena360
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 p-4 rounded-lg mb-4 inline-block">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Ethiopians who trust Tena360 for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/diseases"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Exploring
            </Link>
            <Link
              to="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default HomePage;
