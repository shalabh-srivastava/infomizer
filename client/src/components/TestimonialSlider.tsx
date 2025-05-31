import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Infomizer's ML course helped me build Crop Prophet – now deployed in 100+ Punjab farms!",
    name: "Astitva Bhatt",
    position: "Placed at Agritech Startup",
    course: "Machine Learning"
  },
  {
    quote: "The Java course gave me hands-on experience with real enterprise projects. Got placed at a top product company!",
    name: "Priya Sharma",
    position: "Software Developer at Paytm",
    course: "Java Backend"
  },
  {
    quote: "1:1 mentorship made all the difference. The Python course helped me transition from manual testing to automation.",
    name: "Rahul Kumar",
    position: "Automation Engineer at Zomato",
    course: "Python Development"
  },
  {
    quote: "Industry experts as mentors gave me insights that no online tutorial could provide. Amazing learning experience!",
    name: "Sneha Patel",
    position: "Data Scientist at Swiggy",
    course: "Machine Learning"
  },
  {
    quote: "The capstone project experience was like working in a real company. Prepared me well for interviews.",
    name: "Amit Singh",
    position: "Backend Developer at Flipkart",
    course: "Java Backend"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 min-h-[200px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <blockquote className="text-lg text-gray-300 italic mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="text-primary font-semibold">
              - {testimonials[currentIndex].name}
            </div>
            <div className="text-gray-400 text-sm">
              {testimonials[currentIndex].position}
            </div>
            <div className="text-blue-400 text-sm mt-1">
              {testimonials[currentIndex].course} Graduate
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;