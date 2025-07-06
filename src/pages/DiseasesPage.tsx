import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react"; // Adjust import if using different icons

interface Disease {
  id: string;
  name: string;
  severity: string;
  symptoms: string[];
  bodySystemId: string;
}

interface BodySystem {
  id: string;
  name: string;
  icon: React.ElementType;
}

// Dummy data for demonstration (replace with your actual data)
const bodySystems: BodySystem[] = [
  {
    id: "all",
    name: "All Systems",
    icon: Search,
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0c-4-2-6-6-6-10a6 6 0 1112 0c0 4-2 8-6 10z" /></svg>,
  },
  {
    id: "digestive",
    name: "Digestive System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-2-6-6-6-10a6 6 0 1112 0c0 4-2 8-6 10z" /></svg>,
  },
  {
    id: "nervous",
    name: "Nervous System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0l-1.41-1.41M6.34 6.34L4.93 4.93" /></svg>,
  },
  {
    id: "circulatory",
    name: "Circulatory System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-2-6-6-6-10a6 6 0 1112 0c0 4-2 8-6 10z" /></svg>,
  },
  {
    id: "immune",
    name: "Immune System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5.25-3.5 10-7 12-3.5-2-7-6.75-7-12V7l7-4z" /></svg>,
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="20" rx="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 15l4-4m8 4l4-4" /></svg>,
  },
  {
    id: "endocrine",
    name: "Endocrine System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="8" ry="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 12v2c0 2.21 3.58 4 8 4s8-1.79 8-4v-2" /></svg>,
  },
  {
    id: "urinary",
    name: "Urinary System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16m10-16v16M5 20h14" /></svg>,
  },
  {
    id: "reproductive",
    name: "Reproductive System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v6m-4-6a4 4 0 018 0" /></svg>,
  },
  {
    id: "integumentary",
    name: "Integumentary System",
    icon: () => <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8v8H8z" /></svg>,
  },
];

const diseases: Disease[] = [
  {
    id: "1",
    name: "Malaria",
    severity: "High",
    symptoms: ["Fever", "Chills", "Sweating"],
    bodySystemId: "circulatory",
  },
  {
    id: "2",
    name: "Tuberculosis",
    severity: "High",
    symptoms: ["Cough", "Fever", "Night sweats", "Weight loss"],
    bodySystemId: "respiratory",
  },
  {
    id: "3",
    name: "Typhoid Fever",
    severity: "Medium",
    symptoms: ["Fever", "Abdominal pain", "Headache", "Weakness"],
    bodySystemId: "digestive",
  },
  {
    id: "4",
    name: "Diarrhea",
    severity: "Medium",
    symptoms: ["Loose stools", "Dehydration", "Abdominal cramps"],
    bodySystemId: "digestive",
  },
  {
    id: "5",
    name: "Pneumonia",
    severity: "High",
    symptoms: ["Cough", "Fever", "Shortness of breath", "Chest pain"],
    bodySystemId: "respiratory",
  },
  {
    id: "6",
    name: "Hepatitis B",
    severity: "Medium",
    symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Nausea"],
    bodySystemId: "digestive",
  },
  {
    id: "7",
    name: "HIV/AIDS",
    severity: "High",
    symptoms: ["Weight loss", "Fever", "Night sweats", "Fatigue"],
    bodySystemId: "immune",
  },
  {
    id: "8",
    name: "Hypertension",
    severity: "Low",
    symptoms: ["Headache", "Dizziness", "Nosebleeds", "Blurred vision"],
    bodySystemId: "circulatory",
  },
  {
    id: "9",
    name: "Diabetes Mellitus",
    severity: "Medium",
    symptoms: ["Frequent urination", "Increased thirst", "Fatigue"],
    bodySystemId: "endocrine",
  },
  {
    id: "10",
    name: "Measles",
    severity: "Medium",
    symptoms: ["Fever", "Rash", "Cough", "Runny nose"],
    bodySystemId: "immune",
  },
  {
    id: "11",
    name: "Asthma",
    severity: "Medium",
    symptoms: ["Wheezing", "Shortness of breath", "Cough", "Chest tightness"],
    bodySystemId: "respiratory",
  },
  {
    id: "12",
    name: "Meningitis",
    severity: "High",
    symptoms: ["Fever", "Headache", "Neck stiffness", "Nausea"],
    bodySystemId: "nervous",
  },
  {
    id: "13",
    name: "Rheumatic Heart Disease",
    severity: "High",
    symptoms: ["Chest pain", "Fatigue", "Shortness of breath"],
    bodySystemId: "circulatory",
  },
  {
    id: "14",
    name: "Schistosomiasis",
    severity: "Medium",
    symptoms: ["Abdominal pain", "Blood in urine", "Fatigue"],
    bodySystemId: "urinary",
  },
  {
    id: "15",
    name: "Leprosy",
    severity: "Medium",
    symptoms: ["Skin lesions", "Numbness", "Muscle weakness"],
    bodySystemId: "integumentary",
  },
  {
    id: "16",
    name: "Epilepsy",
    severity: "Medium",
    symptoms: ["Seizures", "Confusion", "Loss of consciousness"],
    bodySystemId: "nervous",
  },
  {
    id: "17",
    name: "Goiter",
    severity: "Low",
    symptoms: ["Neck swelling", "Difficulty swallowing", "Cough"],
    bodySystemId: "endocrine",
  },
  {
    id: "18",
    name: "Gonorrhea",
    severity: "Medium",
    symptoms: ["Painful urination", "Discharge", "Pelvic pain"],
    bodySystemId: "reproductive",
  },
  {
    id: "19",
    name: "Syphilis",
    severity: "Medium",
    symptoms: ["Sores", "Rash", "Fever", "Fatigue"],
    bodySystemId: "reproductive",
  },
  {
    id: "20",
    name: "Tetanus",
    severity: "High",
    symptoms: ["Muscle stiffness", "Spasms", "Difficulty swallowing"],
    bodySystemId: "nervous",
  },
  {
    id: "21",
    name: "Rabies",
    severity: "High",
    symptoms: ["Fever", "Hydrophobia", "Confusion", "Paralysis"],
    bodySystemId: "nervous",
  },
  {
    id: "22",
    name: "Cholera",
    severity: "High",
    symptoms: ["Severe diarrhea", "Vomiting", "Dehydration"],
    bodySystemId: "digestive",
  },
  {
    id: "23",
    name: "Brucellosis",
    severity: "Medium",
    symptoms: ["Fever", "Sweats", "Joint pain", "Fatigue"],
    bodySystemId: "immune",
  },
  {
    id: "24",
    name: "Onchocerciasis",
    severity: "Medium",
    symptoms: ["Itching", "Skin changes", "Vision loss"],
    bodySystemId: "integumentary",
  },
  {
    id: "25",
    name: "Poliomyelitis",
    severity: "High",
    symptoms: ["Paralysis", "Fever", "Muscle weakness"],
    bodySystemId: "nervous",
  },
  {
    id: "26",
    name: "Urinary Tract Infection",
    severity: "Low",
    symptoms: ["Burning urination", "Frequent urination", "Pelvic pain"],
    bodySystemId: "urinary",
  },
  {
    id: "27",
    name: "Osteomyelitis",
    severity: "Medium",
    symptoms: ["Bone pain", "Fever", "Swelling"],
    bodySystemId: "musculoskeletal",
  },
  {
    id: "28",
    name: "Sickle Cell Disease",
    severity: "High",
    symptoms: ["Anemia", "Pain", "Swelling", "Infections"],
    bodySystemId: "circulatory",
  },
  {
    id: "29",
    name: "Scabies",
    severity: "Low",
    symptoms: ["Itching", "Rash", "Sores"],
    bodySystemId: "integumentary",
  },
  {
    id: "30",
    name: "Dengue Fever",
    severity: "Medium",
    symptoms: ["Fever", "Headache", "Muscle pain", "Rash"],
    bodySystemId: "circulatory",
  },
];
const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-700 border-red-300";
    case "medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-300";
    case "low":
      return "bg-green-100 text-green-700 border-green-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const DiseasesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSystem, setSelectedSystem] = useState("all");

  const filteredDiseases = useMemo(() => {
    return diseases.filter((disease) => {
      const matchesSystem =
        selectedSystem === "all" || disease.bodySystemId === selectedSystem;
      const matchesQuery =
        disease.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSystem && matchesQuery;
    });
  }, [searchQuery, selectedSystem]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Disease Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive information about common diseases in Ethiopia
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search diseases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Body System Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedSystem}
                onChange={(e) => setSelectedSystem(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {bodySystems.map((system) => (
                  <option key={system.id} value={system.id}>
                    {system.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Body Systems Quick Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {bodySystems.map((system) => {
            const Icon = system.icon;
            return (
              <button
                key={system.id}
                onClick={() => setSelectedSystem(system.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  selectedSystem === system.id
                    ? "bg-primary-500 text-white border-primary-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-primary-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{system.name}</span>
              </button>
            );
          })}
        </div>

        {/* Disease Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDiseases.map((disease: Disease) => (
            <div
              key={disease.id}
              className="bg-primary-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {disease.name}
                    </h3>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold ${getSeverityColor(disease.severity)}`}
                  >
                    {disease.severity}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Symptoms:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {disease.symptoms.map((symptom: string) => (
                        <span
                          key={symptom}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Full info coming soon */}
                    <div className="flex items-center gap-2 mt-4">
                    <p className="text-sm text-gray-500 italic">
                      Full info coming soon.
                    </p>
                    <div className="relative group">
                      <svg
                      className="w-5 h-5 text-blue-400 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      >
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-4h.01" />
                      </svg>
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm text-gray-700 z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                        We're working to provide more details about this disease. Please check back soon for comprehensive information and updates!
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      disease.name + " disease"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white py-2 px-4 rounded-lg shadow-md hover:from-primary-600 hover:to-primary-700 transition-all font-semibold text-base"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(
                      disease.name + " disease treatment"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-primary-500 text-primary-600 py-2 px-4 rounded-lg shadow-md hover:bg-primary-50 transition-all font-semibold text-base"
                  >
                    <svg
                      className="w-5 h-5 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2m0 14v2m6-8a6 6 0 10-12 0c0 2.21 1.2 4.15 3 5.19V19a1 1 0 001 1h4a1 1 0 001-1v-1.81c1.8-1.04 3-3 3-5.19z"
                      />
                    </svg>
                    <span>Find Treatment</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No diseases found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasesPage;
