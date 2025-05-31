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
    },
    {
      title: "Maven Documentation",
      description: "Build automation tool for Java projects",
      url: "https://maven.apache.org/guides/",
      type: "documentation"
    },
    {
      title: "Hibernate ORM",
      description: "Object-relational mapping framework for Java",
      url: "https://hibernate.org/orm/documentation/",
      type: "documentation"
    },
    {
      title: "JUnit 5 User Guide",
      description: "Testing framework for Java applications",
      url: "https://junit.org/junit5/docs/current/user-guide/",
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
      title: "Django Documentation",
      description: "High-level Python web framework documentation",
      url: "https://docs.djangoproject.com/",
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
    },
    {
      title: "SQLAlchemy Documentation",
      description: "Python SQL toolkit and Object Relational Mapping",
      url: "https://docs.sqlalchemy.org/",
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
      title: "PyTorch Documentation",
      description: "Deep learning framework documentation",
      url: "https://pytorch.org/docs/stable/index.html",
      type: "documentation"
    },
    {
      title: "Keras Documentation",
      description: "High-level neural networks API",
      url: "https://keras.io/",
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

  const jsResources = [
    {
      title: "MDN JavaScript Documentation",
      description: "Comprehensive JavaScript language reference",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      type: "documentation"
    },
    {
      title: "JavaScript.info",
      description: "Modern JavaScript tutorial and reference",
      url: "https://javascript.info/",
      type: "guide"
    },
    {
      title: "ECMAScript Specification",
      description: "Official JavaScript language specification",
      url: "https://tc39.es/ecma262/",
      type: "documentation"
    },
    {
      title: "Node.js Documentation",
      description: "Server-side JavaScript runtime documentation",
      url: "https://nodejs.org/en/docs/",
      type: "documentation"
    },
    {
      title: "Express.js Documentation",
      description: "Fast, minimalist web framework for Node.js",
      url: "https://expressjs.com/",
      type: "documentation"
    },
    {
      title: "Lodash Documentation",
      description: "JavaScript utility library documentation",
      url: "https://lodash.com/docs/",
      type: "documentation"
    },
    {
      title: "Axios Documentation",
      description: "Promise-based HTTP client for JavaScript",
      url: "https://axios-http.com/docs/intro",
      type: "documentation"
    }
  ];

  const reactResources = [
    {
      title: "React Official Documentation",
      description: "Official React library documentation",
      url: "https://react.dev/",
      type: "documentation"
    },
    {
      title: "React Router Documentation",
      description: "Declarative routing for React applications",
      url: "https://reactrouter.com/",
      type: "documentation"
    },
    {
      title: "Redux Toolkit Documentation",
      description: "State management for JavaScript applications",
      url: "https://redux-toolkit.js.org/",
      type: "documentation"
    },
    {
      title: "React Hook Form",
      description: "Performant forms with easy validation",
      url: "https://react-hook-form.com/",
      type: "documentation"
    },
    {
      title: "Material-UI Documentation",
      description: "React components implementing Google's Material Design",
      url: "https://mui.com/",
      type: "documentation"
    },
    {
      title: "Styled Components",
      description: "CSS-in-JS library for styling React components",
      url: "https://styled-components.com/docs",
      type: "documentation"
    },
    {
      title: "React Testing Library",
      description: "Testing utilities for React components",
      url: "https://testing-library.com/docs/react-testing-library/intro/",
      type: "documentation"
    }
  ];

  const phpResources = [
    {
      title: "PHP Official Documentation",
      description: "Complete PHP language reference and manual",
      url: "https://www.php.net/docs.php",
      type: "documentation"
    },
    {
      title: "Laravel Documentation",
      description: "PHP web application framework documentation",
      url: "https://laravel.com/docs",
      type: "documentation"
    },
    {
      title: "Symfony Documentation",
      description: "PHP framework for web applications",
      url: "https://symfony.com/doc/current/index.html",
      type: "documentation"
    },
    {
      title: "Composer Documentation",
      description: "Dependency manager for PHP",
      url: "https://getcomposer.org/doc/",
      type: "documentation"
    },
    {
      title: "PSR Standards",
      description: "PHP Standard Recommendations",
      url: "https://www.php-fig.org/psr/",
      type: "guide"
    },
    {
      title: "PHPUnit Documentation",
      description: "Testing framework for PHP",
      url: "https://phpunit.de/documentation.html",
      type: "documentation"
    },
    {
      title: "WordPress Developer Documentation",
      description: "Documentation for WordPress development",
      url: "https://developer.wordpress.org/",
      type: "documentation"
    }
  ];

  const rustResources = [
    {
      title: "The Rust Programming Language",
      description: "Official Rust language book and tutorial",
      url: "https://doc.rust-lang.org/book/",
      type: "documentation"
    },
    {
      title: "Rust Standard Library",
      description: "Standard library API reference",
      url: "https://doc.rust-lang.org/std/",
      type: "documentation"
    },
    {
      title: "Cargo Documentation",
      description: "Rust's package manager and build system",
      url: "https://doc.rust-lang.org/cargo/",
      type: "documentation"
    },
    {
      title: "Rust by Example",
      description: "Learn Rust through practical examples",
      url: "https://doc.rust-lang.org/rust-by-example/",
      type: "guide"
    },
    {
      title: "Tokio Documentation",
      description: "Asynchronous runtime for Rust",
      url: "https://tokio.rs/",
      type: "documentation"
    },
    {
      title: "Serde Documentation",
      description: "Serialization framework for Rust",
      url: "https://serde.rs/",
      type: "documentation"
    },
    {
      title: "Actix Web Documentation",
      description: "Web framework for Rust",
      url: "https://actix.rs/",
      type: "documentation"
    }
  ];

  const goResources = [
    {
      title: "Go Official Documentation",
      description: "Complete Go programming language documentation",
      url: "https://golang.org/doc/",
      type: "documentation"
    },
    {
      title: "Go by Example",
      description: "Hands-on introduction to Go using examples",
      url: "https://gobyexample.com/",
      type: "guide"
    },
    {
      title: "Go Standard Library",
      description: "Package documentation for Go standard library",
      url: "https://pkg.go.dev/std",
      type: "documentation"
    },
    {
      title: "Gin Web Framework",
      description: "HTTP web framework for Go",
      url: "https://gin-gonic.com/docs/",
      type: "documentation"
    },
    {
      title: "Echo Framework",
      description: "High performance, extensible web framework",
      url: "https://echo.labstack.com/guide/",
      type: "documentation"
    },
    {
      title: "GORM Documentation",
      description: "ORM library for Go",
      url: "https://gorm.io/docs/",
      type: "documentation"
    },
    {
      title: "Go Modules Reference",
      description: "Go dependency management system",
      url: "https://golang.org/ref/mod",
      type: "documentation"
    }
  ];

  const angularResources = [
    {
      title: "Angular Official Documentation",
      description: "Complete Angular framework documentation",
      url: "https://angular.io/docs",
      type: "documentation"
    },
    {
      title: "Angular CLI Documentation",
      description: "Command-line interface for Angular",
      url: "https://angular.io/cli",
      type: "documentation"
    },
    {
      title: "RxJS Documentation",
      description: "Reactive programming library for JavaScript",
      url: "https://rxjs.dev/guide/overview",
      type: "documentation"
    },
    {
      title: "Angular Material",
      description: "Material Design components for Angular",
      url: "https://material.angular.io/",
      type: "documentation"
    },
    {
      title: "NgRx Documentation",
      description: "State management for Angular applications",
      url: "https://ngrx.io/docs",
      type: "documentation"
    },
    {
      title: "Angular Testing Guide",
      description: "Testing utilities and best practices",
      url: "https://angular.io/guide/testing",
      type: "guide"
    },
    {
      title: "Ionic Documentation",
      description: "Mobile app development with Angular",
      url: "https://ionicframework.com/docs",
      type: "documentation"
    }
  ];

  const typescriptResources = [
    {
      title: "TypeScript Official Documentation",
      description: "Complete TypeScript language documentation",
      url: "https://www.typescriptlang.org/docs/",
      type: "documentation"
    },
    {
      title: "TypeScript Handbook",
      description: "Comprehensive guide to TypeScript",
      url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      type: "guide"
    },
    {
      title: "DefinitelyTyped",
      description: "Type definitions for JavaScript libraries",
      url: "https://definitelytyped.org/",
      type: "platform"
    },
    {
      title: "TSConfig Reference",
      description: "TypeScript configuration options reference",
      url: "https://www.typescriptlang.org/tsconfig",
      type: "documentation"
    },
    {
      title: "TypeScript Deep Dive",
      description: "In-depth TypeScript guide and reference",
      url: "https://basarat.gitbook.io/typescript/",
      type: "guide"
    },
    {
      title: "Type Challenges",
      description: "Collection of TypeScript type challenges",
      url: "https://github.com/type-challenges/type-challenges",
      type: "practice"
    },
    {
      title: "TypeScript ESLint",
      description: "Linting tools for TypeScript",
      url: "https://typescript-eslint.io/",
      type: "documentation"
    }
  ];

  const cppResources = [
    {
      title: "cppreference.com",
      description: "Comprehensive C++ language reference",
      url: "https://en.cppreference.com/",
      type: "documentation"
    },
    {
      title: "ISO C++ Standard",
      description: "Official C++ standardization information",
      url: "https://isocpp.org/",
      type: "documentation"
    },
    {
      title: "C++ Core Guidelines",
      description: "Best practices for modern C++",
      url: "https://github.com/isocpp/CppCoreGuidelines",
      type: "guide"
    },
    {
      title: "Boost C++ Libraries",
      description: "Free peer-reviewed portable C++ libraries",
      url: "https://www.boost.org/doc/",
      type: "documentation"
    },
    {
      title: "CMake Documentation",
      description: "Cross-platform build system for C++",
      url: "https://cmake.org/documentation/",
      type: "documentation"
    },
    {
      title: "Google Test Framework",
      description: "C++ testing framework",
      url: "https://google.github.io/googletest/",
      type: "documentation"
    },
    {
      title: "Modern C++ Features",
      description: "C++11/14/17/20 feature overview",
      url: "https://github.com/AnthonyCalandra/modern-cpp-features",
      type: "guide"
    }
  ];

  const csharpResources = [
    {
      title: "C# Documentation",
      description: "Official Microsoft C# documentation",
      url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      type: "documentation"
    },
    {
      title: ".NET Documentation",
      description: "Complete .NET platform documentation",
      url: "https://docs.microsoft.com/en-us/dotnet/",
      type: "documentation"
    },
    {
      title: "ASP.NET Core Documentation",
      description: "Web application framework documentation",
      url: "https://docs.microsoft.com/en-us/aspnet/core/",
      type: "documentation"
    },
    {
      title: "Entity Framework Core",
      description: "Object-relational mapping framework",
      url: "https://docs.microsoft.com/en-us/ef/core/",
      type: "documentation"
    },
    {
      title: "Xamarin Documentation",
      description: "Cross-platform mobile development",
      url: "https://docs.microsoft.com/en-us/xamarin/",
      type: "documentation"
    },
    {
      title: "NuGet Package Manager",
      description: "Package manager for .NET",
      url: "https://docs.microsoft.com/en-us/nuget/",
      type: "documentation"
    },
    {
      title: "xUnit Testing Framework",
      description: "Unit testing framework for .NET",
      url: "https://xunit.net/docs/getting-started/netcore/cmdline",
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
    },
    {
      title: "Docker Documentation",
      description: "Containerization platform documentation",
      url: "https://docs.docker.com/",
      type: "documentation"
    },
    {
      title: "Kubernetes Documentation",
      description: "Container orchestration platform docs",
      url: "https://kubernetes.io/docs/",
      type: "documentation"
    },
    {
      title: "VS Code Documentation",
      description: "Popular code editor documentation",
      url: "https://code.visualstudio.com/docs",
      type: "documentation"
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
          <ResourceSection title="Java Development Resources" resources={javaResources} delay={0.1} />
          <ResourceSection title="Python Programming Resources" resources={pythonResources} delay={0.2} />
          <ResourceSection title="Machine Learning Resources" resources={mlResources} delay={0.3} />
          <ResourceSection title="JavaScript Resources" resources={jsResources} delay={0.4} />
          <ResourceSection title="React Development Resources" resources={reactResources} delay={0.5} />
          <ResourceSection title="PHP Development Resources" resources={phpResources} delay={0.6} />
          <ResourceSection title="Rust Programming Resources" resources={rustResources} delay={0.7} />
          <ResourceSection title="Go Programming Resources" resources={goResources} delay={0.8} />
          <ResourceSection title="Angular Development Resources" resources={angularResources} delay={0.9} />
          <ResourceSection title="TypeScript Resources" resources={typescriptResources} delay={1.0} />
          <ResourceSection title="C++ Programming Resources" resources={cppResources} delay={1.1} />
          <ResourceSection title="C# Development Resources" resources={csharpResources} delay={1.2} />
          <ResourceSection title="General Development Resources" resources={generalResources} delay={1.3} />
        </div>
      </section>
    </motion.div>
  );
};

export default ResourcesPage;