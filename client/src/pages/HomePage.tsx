import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import TestimonialSlider from "@/components/TestimonialSlider";
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
          
          {/* Comparison Chart */}
          <motion.div 
            className="mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
                <h3 className="text-xl font-bold text-gray-300 mb-6 text-center">Other Training Institutes</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-red-400">
                    <span className="mr-3">❌</span>
                    <span>Generic projects</span>
                  </div>
                  <div className="flex items-center text-red-400">
                    <span className="mr-3">❌</span>
                    <span>Video tutorials</span>
                  </div>
                  <div className="flex items-center text-red-400">
                    <span className="mr-3">❌</span>
                    <span>No job support</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-blue-900/20 rounded-lg p-8 border border-primary">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">Infomizer</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Capstones from Industry Experts</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Live 1:1 Mentorship + Offline Labs</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="mr-3">✅</span>
                    <span>Job Interview Support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Success Stories */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Student Success Stories</h3>
            <TestimonialSlider />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
