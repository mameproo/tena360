import { useLocation, Link } from 'react-router-dom';
import { useMemo } from 'react';
import { Search, Pill } from 'lucide-react';

// --- Real data from DiseasesPage and DrugsPage (add more fields for card display) ---
const diseases = [
  { id: 1, name: 'Hypertension', amharicName: 'የደም ግፊት', symptoms: ['Headache', 'Dizziness', 'Chest pain', 'Fatigue'], severity: 'moderate', diagnosis: 'Blood pressure measurement, medical history', treatment: 'Lifestyle changes, medication, diet modification' },
  { id: 2, name: 'Diabetes Mellitus', amharicName: 'የስኳር በሽታ', symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Blurred vision'], severity: 'high', diagnosis: 'Blood glucose test, HbA1c test', treatment: 'Insulin therapy, oral medications, diet control' },
  { id: 3, name: 'Asthma', amharicName: 'የትንቢላ በሽታ', symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Coughing'], severity: 'moderate', diagnosis: 'Spirometry, peak flow measurement', treatment: 'Inhalers, bronchodilators, corticosteroids' },
  { id: 9, name: 'Cancer', amharicName: '', symptoms: ['Varies by type'], severity: 'high', diagnosis: 'Biopsy, imaging', treatment: 'Surgery, chemotherapy, radiation' },
  // ...add more diseases as needed
];

const drugs = [
  { id: 1, genericName: 'Lisinopril', brandNames: ['Zestril', 'Prinivil'], uses: ['Hypertension', 'Heart failure'], dosage: '5-40mg once daily', price: { min: 20, max: 60, currency: 'ETB' }, availability: 'Available at most pharmacies', prescription: true },
  { id: 2, genericName: 'Amlodipine', brandNames: ['Norvasc', 'Amlong', 'Amlopress'], uses: ['Hypertension', 'Angina'], dosage: '2.5-10mg once daily', price: { min: 12, max: 35, currency: 'ETB' }, availability: 'Prescription required', prescription: true },
  { id: 11, genericName: 'Paracetamol', brandNames: ['Panadol', 'Tylenol', 'Paramol'], uses: ['Fever reduction', 'Pain relief', 'Headache'], dosage: '500mg-1000mg every 4-6 hours (max 4g/day)', price: { min: 5, max: 25, currency: 'ETB' }, availability: 'Available at most pharmacies', prescription: false },
  // ...add more drugs as needed
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high': return 'bg-red-100 text-red-800 border-red-200';
    case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const SearchResultPage = () => {
  const query = useQuery().get('q') || '';
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    // Search diseases
    const diseaseResults = diseases.filter(d =>
      d.name.toLowerCase().includes(q) || (d.amharicName && d.amharicName.includes(query))
    ).map(d => ({ ...d, type: 'Disease' }));
    // Search drugs
    const drugResults = drugs.filter(drug =>
      drug.genericName.toLowerCase().includes(q) ||
      (drug.brandNames && drug.brandNames.some(b => b.toLowerCase().includes(q))) ||
      (drug.uses && drug.uses.some(u => u.toLowerCase().includes(q)))
    ).map(drug => ({ ...drug, type: 'Drug' }));
    return [...diseaseResults, ...drugResults];
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Search className="h-6 w-6 text-primary-500" />
          <h1 className="text-2xl font-bold text-gray-900">Search Results for "{query}"</h1>
        </div>
        {results.length === 0 ? (
          <div className="text-gray-500 text-lg text-center py-16">No results found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item, idx) => (
              item.type === 'Disease' ? (
                <div key={idx} className="bg-primary-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{(item as any).name}</h3>
                        <p className="text-sm text-gray-600">{(item as any).amharicName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor((item as any).severity)}`}>{(item as any).severity}</span>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Symptoms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(item as any).symptoms && (item as any).symptoms.map((symptom: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{symptom}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Diagnosis:</h4>
                      <p className="text-sm text-gray-600">{(item as any).diagnosis}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Treatment:</h4>
                      <p className="text-sm text-gray-600">{(item as any).treatment}</p>
                    </div>
                    <Link to="/diseases" className="inline-block bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm font-semibold">View All Diseases</Link>
                  </div>
                </div>
              ) : (
                <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{(item as any).genericName}</h3>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {(item as any).brandNames && (item as any).brandNames.map((brand: string, i: number) => (
                            <span key={i} className="text-sm text-gray-600">{brand}{i < (item as any).brandNames.length - 1 ? ', ' : ''}</span>
                          ))}
                        </div>
                      </div>
                      <Pill className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Uses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(item as any).uses && (item as any).uses.map((use: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{use}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Dosage:</h4>
                      <p className="text-sm text-gray-600">{(item as any).dosage}</p>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Price:</h4>
                      <p className="text-sm text-gray-600">{(item as any).price ? `${(item as any).price.min}-${(item as any).price.max} ${(item as any).price.currency}` : ''}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Availability:</h4>
                      <p className="text-sm text-gray-600">{(item as any).availability}</p>
                    </div>
                    <Link to="/drugs" className="inline-block bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors text-sm font-semibold">View All Drugs</Link>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
