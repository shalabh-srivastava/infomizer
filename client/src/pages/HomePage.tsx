import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courseData";

interface HomePageProps {
  onCourseSelect: (courseId: string) => void;
  sidebarOpen: boolean;
}

const HomePage = ({ onCourseSelect, sidebarOpen }: HomePageProps) => {
  return (
    <motion.div 
      className={`transition-all duration-500 ${sidebarOpen ? 'ml-80' : ''}`}
      layout
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform into an Industry-Ready Coder in 30 Days
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from Industry Experienced Mentors. 100% Placement Support.
          </motion.p>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block mb-4">
              <span className="font-bold">LIMITED SEATS: Only 50 spots remaining!</span>
            </div>
            <br />
            <a 
              href="#courses"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors inline-block"
            >
              Secure Your Spot Now
            </a>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">400+ Students</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">100% Job Placement</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-white font-semibold">Industry Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive bootcamps designed to take you from beginner to industry-ready professional in just 30 days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => {}} // Remove sidebar functionality
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Infomizer?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine industry expertise with practical learning to ensure your success
            </p>
          </motion.div>
          
          {/* Comparison Table */}
          <motion.div 
            className="mb-16 overflow-hidden rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <table className="w-full bg-gray-900">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-4 px-6 text-left text-gray-300 font-semibold">Your Competitors</th>
                  <th className="py-4 px-6 text-left text-primary font-semibold">Infomizer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="py-4 px-6 text-gray-400">Generic projects</td>
                  <td className="py-4 px-6 text-white font-medium">Capstones from Flipkart/Amazon Tech Leads</td>
                </tr>
                <tr className="border-t border-gray-700 bg-gray-800/50">
                  <td className="py-4 px-6 text-gray-400">Video tutorials</td>
                  <td className="py-4 px-6 text-white font-medium">Live 1:1 Mentorship + Offline Labs</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="py-4 px-6 text-gray-400">No job support</td>
                  <td className="py-4 px-6 text-white font-medium">Guaranteed Internship Interviews</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Student Success Stories */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Student Success Stories</h3>
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8 border border-gray-700">
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "Infomizer's ML course helped me build Crop Prophet – now deployed in 100+ Punjab farms!"
              </blockquote>
              <cite className="text-primary font-semibold">- Astitva Bhatt, Placed at Agritech Startup</cite>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
