import { BookOpen, Play } from 'lucide-react';

const COURSES = [
  {
    id: 'IuB5TBOdamc',
    title: 'Pharmacology Made Simple With Fun Memory Hacks!',
    channelTitle: 'Health Channel',
    description: '',
  },
  {
    id: 'mDPdHdlyXAE',
    title: 'The Amazing Benefits of Propranolol You NEED to Know!',
    channelTitle: 'Health',
    description: '',
  },
  {
    id: 'ghwRTfusb8k',
    title: 'Sildenafil Explained: Benefits, Side Effects & How It Works ',
    channelTitle: 'Health',
    description: '',
  },
  {
    id: '0owd2kkBJPg',
    title: 'The Complete Guide To Metoprolol Side Effects And Benefits!',
    channelTitle: 'Health',
    description: '',
  },
  {
    id: 'lI6LbOEp_rk',
    title: 'Course 5: Preventive Healthcare',
    channelTitle: 'Health',
    description: '.',
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">YouTube Health Courses</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover health education videos from YouTube
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.length > 0 ? (
            COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${course.id}`}
                    title={course.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <a
                      href={`https://www.youtube.com/watch?v=${course.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-12 w-12 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{course.channelTitle}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${course.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium inline-block"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No YouTube courses found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
