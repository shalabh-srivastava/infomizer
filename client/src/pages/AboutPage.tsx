import { motion } from "framer-motion";

const AboutPage = () => {
  const faculty = [
    {
      name: "Suryaprakash Tiwari",
      role: "Lead Instructor",
      expertise: "Full-Stack Development & System Design"
    },
    {
      name: "Suyeb Khan",
      role: "Senior Instructor",
      expertise: "Machine Learning & Data Science"
    },
    {
      name: "Mrityunjay Srivastava",
      role: "Backend Specialist",
      expertise: "Java Enterprise & Microservices"
    }
  ];

  const mentors = [
    {
      name: "Abhay Negi",
      role: "Industry Mentor",
      expertise: "Distributed Systems & Microservices"
    },
    {
      name: "Rahul Maurya",
      role: "Industry Mentor", 
      expertise: "Cloud Architecture & DevOps"
    }
  ];

  const ta = [
    {
      name: "Swaraj Saw",
      role: "Teaching Assistant",
      expertise: "Student Support & Code Review"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Expert Team
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from industry veterans who have built products at top tech companies
          </motion.p>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Faculty
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our instructors bring real-world experience from leading tech companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">
                    <span className="font-medium">Expertise:</span> {member.expertise}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mentors Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Industry Mentors
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get guidance from professionals currently working at top tech companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{mentor.name}</h3>
                  <p className="text-green-400 font-medium mb-2">{mentor.role}</p>
                  <p className="text-gray-300 text-sm">{mentor.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Teaching Assistant Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Teaching Assistant
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dedicated support for your learning journey
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            {ta.map((assistant, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {assistant.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{assistant.name}</h3>
                  <p className="text-orange-400 font-medium mb-2">{assistant.role}</p>
                  <p className="text-gray-300 text-sm">{assistant.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Structure */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Support Structure
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive support system designed for your success
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "👨‍🏫",
                title: "Live Sessions",
                description: "2-hour daily lectures with real-time interaction"
              },
              {
                icon: "🎯",
                title: "1:1 Mentorship",
                description: "Personal guidance from industry experts"
              },
              {
                icon: "💻",
                title: "Offline Labs",
                description: "Hands-on coding practice with immediate feedback"
              },
              {
                icon: "🚀",
                title: "Career Support",
                description: "Interview preparation and job placement assistance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;