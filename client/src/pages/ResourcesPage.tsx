import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Book, Code, FileText, Video } from "lucide-react";

const ResourcesPage = () => {
  const javaResources = [
    {
      title: "Oracle Java Documentation",
      description: "Official Java SE documentation and API reference",
      url: "https://docs.oracle.com/javase/",
      type: "documentation"
    },
    {
      title: "Spring Framework Documentation",
      description: "Complete Spring Boot and Spring Framework guides",
      url: "https://spring.io/docs",
      type: "documentation"
    },
    {
      title: "Java Code Conventions",
      description: "Oracle's official Java coding standards",
      url: "https://www.oracle.com/java/technologies/javase/codeconventions-contents.html",
      type: "guide"
    },
    {
      title: "JDK 17 Features",
      description: "New features and improvements in Java 17",
      url: "https://openjdk.org/projects/jdk/17/",
      type: "documentation"
    }
  ];

  const pythonResources = [
    {
      title: "Python Official Documentation",
      description: "Complete Python language reference and library docs",
      url: "https://docs.python.org/3/",
      type: "documentation"
    },
    {
      title: "Flask Documentation",
      description: "Official Flask web framework documentation",
      url: "https://flask.palletsprojects.com/",
      type: "documentation"
    },
    {
      title: "PEP 8 Style Guide",
      description: "Official Python style guide for code formatting",
      url: "https://peps.python.org/pep-0008/",
      type: "guide"
    },
    {
      title: "NumPy Documentation",
      description: "Scientific computing library for Python",
      url: "https://numpy.org/doc/",
      type: "documentation"
    },
    {
      title: "Pandas Documentation",
      description: "Data manipulation and analysis library",
      url: "https://pandas.pydata.org/docs/",
      type: "documentation"
    }
  ];

  const mlResources = [
    {
      title: "Scikit-learn Documentation",
      description: "Machine learning library for Python",
      url: "https://scikit-learn.org/stable/",
      type: "documentation"
    },
    {
      title: "TensorFlow Documentation",
      description: "Open source machine learning platform",
      url: "https://www.tensorflow.org/learn",
      type: "documentation"
    },
    {
      title: "Kaggle Learn",
      description: "Free micro-courses on machine learning topics",
      url: "https://www.kaggle.com/learn",
      type: "course"
    },
    {
      title: "Papers With Code",
      description: "Latest ML research papers with implementation",
      url: "https://paperswithcode.com/",
      type: "research"
    },
    {
      title: "Matplotlib Documentation",
      description: "Python plotting library documentation",
      url: "https://matplotlib.org/stable/",
      type: "documentation"
    }
  ];

  const generalResources = [
    {
      title: "Git Documentation",
      description: "Version control system documentation and tutorials",
      url: "https://git-scm.com/doc",
      type: "documentation"
    },
    {
      title: "Stack Overflow",
      description: "Programming Q&A community",
      url: "https://stackoverflow.com/",
      type: "community"
    },
    {
      title: "GitHub",
      description: "Code hosting platform for collaboration",
      url: "https://github.com/",
      type: "platform"
    },
    {
      title: "LeetCode",
      description: "Practice coding problems and interview prep",
      url: "https://leetcode.com/",
      type: "practice"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "documentation":
        return <Book className="w-5 h-5" />;
      case "guide":
        return <FileText className="w-5 h-5" />;
      case "course":
        return <Video className="w-5 h-5" />;
      case "platform":
      case "community":
      case "practice":
        return <Code className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const ResourceSection = ({ title, resources, delay = 0 }: { title: string; resources: any[]; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-white text-xl">{title}</CardTitle>
          <CardDescription className="text-gray-400">
            Essential resources and documentation for your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-primary transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: delay + index * 0.1 }}
              >
                <div className="mr-3 mt-1 text-primary group-hover:text-blue-400 transition-colors">
                  {getIcon(resource.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{resource.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 ml-auto mt-1 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

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
            Free Learning Resources
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated collection of official documentation, guides, and tools to accelerate your learning
          </motion.p>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceSection title="Java Development Resources" resources={javaResources} delay={0.2} />
          <ResourceSection title="Python Programming Resources" resources={pythonResources} delay={0.4} />
          <ResourceSection title="Machine Learning Resources" resources={mlResources} delay={0.6} />
          <ResourceSection title="General Development Resources" resources={generalResources} delay={0.8} />
        </div>
      </section>
    </motion.div>
  );
};

export default ResourcesPage;