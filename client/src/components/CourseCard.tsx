import { motion } from "framer-motion";
import { Course } from "@/data/courseData";

interface CourseCardProps {
  course: Course;
  onSelect: (courseId: string) => void;
  index: number;
}

const CourseCard = ({ course, onSelect, index }: CourseCardProps) => {
  return (
    <motion.div
      className="gradient-border card-hover cursor-pointer"
      onClick={() => onSelect(course.id)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="gradient-border-inner h-full">
        <img 
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {course.id.toUpperCase()}
            </span>
            <div className="flex items-center text-yellow-400">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-400 text-sm">{course.rating}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-gray-400 mb-4 text-sm line-clamp-3">
            {course.description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{course.duration} Intensive</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>{course.modules} Comprehensive Modules</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{course.studentsEnrolled}+ enrolled</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">₹{course.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
            </div>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
              {course.discount}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
