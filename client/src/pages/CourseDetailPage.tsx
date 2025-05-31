import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { getCourseById } from "@/data/courseData";
import { usePayment } from "@/hooks/usePayment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Star, CheckCircle, BookOpen, Award } from "lucide-react";

const CourseDetailPage = () => {
  const [match, params] = useRoute("/course/:courseId");
  const { initiatePayment } = usePayment();
  
  if (!match || !params?.courseId) {
    return <div>Course not found</div>;
  }

  const course = getCourseById(params.courseId);
  
  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnrollment = () => {
    initiatePayment(course);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white mb-4"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl">
              {course.subtitle}
            </p>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                <span>{course.studentsEnrolled}+ Students</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-yellow-400" />
                <span>{course.rating}/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700 mb-8">
                <CardHeader>
                  <CardTitle className="text-white">Course Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {course.description}
                  </p>
                  
                  <h3 className="text-lg font-semibold text-white mb-4">What You'll Learn</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Curriculum */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Course Curriculum</CardTitle>
                  <CardDescription className="text-gray-400">
                    {course.modules} comprehensive modules designed for mastery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <motion.div
                        key={index}
                        className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white">
                            Module {index + 1}: {module.title}
                          </h3>
                          <Badge variant="secondary">
                            Module {index + 1}
                          </Badge>
                        </div>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start text-gray-300">
                              <BookOpen className="mr-2 h-4 w-4 mt-1 text-primary flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                        {module.assignment && (
                          <div className="mt-3 p-3 bg-blue-900/20 rounded-lg border border-blue-800">
                            <span className="text-sm font-medium text-blue-300">
                              Assignment: {module.assignment}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Enrollment Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-24"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white">
                      ₹{course.price.toLocaleString()}
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      ₹{course.originalPrice.toLocaleString()}
                    </div>
                    <Badge className="bg-red-100 text-red-700 mt-2">
                      Limited Time: {course.discount}
                    </Badge>
                  </div>
                  
                  <Button 
                    onClick={handleEnrollment}
                    className="w-full bg-primary text-white py-3 px-6 text-lg font-semibold hover:bg-blue-600 mb-4"
                    size="lg"
                  >
                    Enroll Now - Pay via Razorpay
                  </Button>
                  
                  <div className="space-y-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="mr-3 h-4 w-4" />
                      <span>30-day intensive program</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-3 h-4 w-4" />
                      <span>Daily 2-hour live sessions</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="mr-3 h-4 w-4" />
                      <span>Industry certification</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-3 h-4 w-4" />
                      <span>Job placement support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-3 h-4 w-4" />
                      <span>Lifetime access to materials</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetailPage;
