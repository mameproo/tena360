import { useState } from 'react';
import { Search, Filter, Pill, Info } from 'lucide-react';

const DrugsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showInfo, setShowInfo] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'analgesics', name: 'Pain Relief' },
    { id: 'antibiotics', name: 'Antibiotics' },
    { id: 'cardiovascular', name: 'Heart & Blood' },
    { id: 'respiratory', name: 'Respiratory' },
    { id: 'diabetes', name: 'Diabetes' },
    { id: 'vitamins', name: 'Vitamins & Supplements' },
  ];

  const drugs = [
    // Cardiovascular
    {
      id: 1,
      genericName: 'Lisinopril',
      brandNames: ['Zestril', 'Prinivil'],
      category: 'cardiovascular',
      uses: ['Hypertension', 'Heart failure'],
      prescription: true,
    },
    {
      id: 2,
      genericName: 'Amlodipine',
      brandNames: ['Norvasc'],
      category: 'cardiovascular',
      uses: ['Hypertension', 'Angina'],
      prescription: true,
    },
    {
      id: 3,
      genericName: 'Atorvastatin',
      brandNames: ['Lipitor'],
      category: 'cardiovascular',
      uses: ['High cholesterol'],
      prescription: true,
    },
    // Analgesics
    {
      id: 4,
      genericName: 'Paracetamol',
      brandNames: ['Panadol', 'Tylenol'],
      category: 'analgesics',
      uses: ['Pain', 'Fever'],
      prescription: false,
    },
    {
      id: 5,
      genericName: 'Ibuprofen',
      brandNames: ['Advil', 'Nurofen'],
      category: 'analgesics',
      uses: ['Pain', 'Inflammation', 'Fever'],
      prescription: false,
    },
    {
      id: 6,
      genericName: 'Diclofenac',
      brandNames: ['Voltaren'],
      category: 'analgesics',
      uses: ['Pain', 'Inflammation'],
      prescription: false,
    },
    // Antibiotics
    {
      id: 7,
      genericName: 'Amoxicillin',
      brandNames: ['Amoxil'],
      category: 'antibiotics',
      uses: ['Bacterial infections'],
      prescription: true,
    },
    {
      id: 8,
      genericName: 'Ciprofloxacin',
      brandNames: ['Cipro'],
      category: 'antibiotics',
      uses: ['Bacterial infections'],
      prescription: true,
    },
    {
      id: 9,
      genericName: 'Azithromycin',
      brandNames: ['Zithromax'],
      category: 'antibiotics',
      uses: ['Respiratory infections', 'STIs'],
      prescription: true,
    },
    // Respiratory
    {
      id: 10,
      genericName: 'Salbutamol',
      brandNames: ['Ventolin'],
      category: 'respiratory',
      uses: ['Asthma', 'COPD'],
      prescription: false,
    },
    {
      id: 11,
      genericName: 'Budesonide',
      brandNames: ['Pulmicort'],
      category: 'respiratory',
      uses: ['Asthma', 'COPD'],
      prescription: true,
    },
    {
      id: 12,
      genericName: 'Montelukast',
      brandNames: ['Singulair'],
      category: 'respiratory',
      uses: ['Asthma', 'Allergic rhinitis'],
      prescription: true,
    },
    // Diabetes
    {
      id: 13,
      genericName: 'Metformin',
      brandNames: ['Glucophage'],
      category: 'diabetes',
      uses: ['Type 2 diabetes'],
      prescription: true,
    },
    {
      id: 14,
      genericName: 'Glibenclamide',
      brandNames: ['Daonil'],
      category: 'diabetes',
      uses: ['Type 2 diabetes'],
      prescription: true,
    },
    {
      id: 15,
      genericName: 'Insulin',
      brandNames: ['Humulin', 'Novolin'],
      category: 'diabetes',
      uses: ['Type 1 & 2 diabetes'],
      prescription: true,
    },
    // Vitamins & Supplements
    {
      id: 16,
      genericName: 'Vitamin D3',
      brandNames: ['Calcirol', 'Sunny D', 'Vitamine D'],
      category: 'vitamins',
      uses: ['Vitamin D deficiency', 'Bone health', 'Immune support'],
      prescription: false,
    },
    {
      id: 17,
      genericName: 'Vitamin B12',
      brandNames: ['Cobalamin'],
      category: 'vitamins',
      uses: ['Anemia', 'Nerve health'],
      prescription: false,
    },
    {
      id: 18,
      genericName: 'Folic Acid',
      brandNames: ['Folacin'],
      category: 'vitamins',
      uses: ['Pregnancy', 'Anemia'],
      prescription: false,
    },
    // More Analgesics
    {
      id: 19,
      genericName: 'Tramadol',
      brandNames: ['Ultram'],
      category: 'analgesics',
      uses: ['Moderate to severe pain'],
      prescription: true,
    },
    {
      id: 20,
      genericName: 'Aspirin',
      brandNames: ['Ecotrin'],
      category: 'analgesics',
      uses: ['Pain', 'Fever', 'Anti-platelet'],
      prescription: false,
    },
  ];

  const filteredDrugs = drugs.filter(drug => {
    const matchesSearch = drug.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         drug.brandNames.some(brand => brand.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || drug.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Drug Information</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive database of medications with pricing and availability in Ethiopia
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by generic or brand name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Drug Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDrugs.map((drug) => (
            <div key={drug.id} className="bg-primary-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {drug.genericName}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {drug.brandNames.map((brand, index) => (
                        <span key={index} className="text-sm text-gray-600">
                          {brand}{index < drug.brandNames.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Pill className="h-5 w-5 text-primary-500" />
                    {drug.prescription && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Rx
                      </span>
                    )}
                  </div>
                </div>

                {/* Uses */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Uses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {drug.uses.map((use, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Icon with Tooltip/Popover */}
                <div className="relative mb-4">
                  <button
                  type="button"
                  className="flex items-center text-blue-800 hover:text-blue-600 focus:outline-none"
                  onMouseEnter={() => setShowInfo(drug.id)}
                  onMouseLeave={() => setShowInfo(null)}
                  onClick={() => setShowInfo(showInfo === drug.id ? null : drug.id)}
                  >
                  <Info className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium hidden md:inline">drug details coming soon</span>
                  </button>
                  {showInfo === drug.id && (
                    <div className="absolute left-0 mt-2 z-10 bg-blue-50 text-blue-800 rounded-lg px-4 py-3 shadow-lg text-sm font-medium w-max min-w-[240px]">
                    Detailed information about this drug, including side effects, interactions, and local pricing, will be available soon. Stay tuned!
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors font-medium">
                    Find Pharmacy
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDrugs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No drugs found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrugsPage;
