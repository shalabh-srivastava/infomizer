export interface CourseModule {
  title: string;
  topics: string[];
  assignment?: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  studentsEnrolled: number;
  duration: string;
  modules: number;
  features: string[];
  curriculum: CourseModule[];
  color: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const courses: Course[] = [
  {
    id: "java",
    title: "Java Juggernaut: Backend Mastery Bootcamp",
    subtitle: "Master Java syntax, OOP principles, and real-world application development",
    description: "An intensive 30-day bootcamp covering Java fundamentals to enterprise applications. Build robust backend systems with Spring Boot, master OOP concepts, exception handling, collections framework, JDBC, multithreading, and modern Java features. Culminate with a complete e-commerce backend project.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    price: 7000,
    originalPrice: 9999,
    discount: "30% OFF",
    rating: 4.9,
    studentsEnrolled: 1250,
    duration: "30 Days",
    modules: 9,
    features: [
      "Complete Java syntax mastery",
      "Object-Oriented Programming expertise",
      "Exception Handling & Advanced OOP",
      "Collections Framework mastery",
      "JDBC & Database Integration",
      "Multithreading & Concurrency",
      "Java 8+ Modern Features",
      "E-Commerce Backend Project"
    ],
    curriculum: [
      {
        title: "Java Fundamentals",
        topics: [
          "Syntax basics (Variables, Keywords, Operators)",
          "Primitive/Non-primitive Data Types",
          "Control Flow (if-else, loops, switch)",
          "Basic I/O (Scanner class)"
        ],
        assignment: "Student Grade Calculator"
      },
      {
        title: "Object-Oriented Programming Core",
        topics: [
          "Classes, Objects, Constructors",
          "Inheritance (IS-A relationship)",
          "Polymorphism (Method Overloading/Overriding)",
          "Abstraction (Abstract Classes)",
          "Interfaces and Multiple Inheritance"
        ]
      },
      {
        title: "Exception Handling & Advanced OOP",
        topics: [
          "Exception Hierarchy (Checked/Unchecked)",
          "try-catch-finally blocks",
          "Custom Exception Creation",
          "Encapsulation (Access Modifiers)"
        ],
        assignment: "Banking System with Exception Handling"
      },
      {
        title: "Java APIs & File Handling",
        topics: [
          "String Manipulation (StringBuilder, StringBuffer)",
          "I/O Streams (Byte/Character Streams)",
          "File Operations (Read/Write/Delete)",
          "Serialization/Deserialization"
        ]
      },
      {
        title: "Collections Framework",
        topics: [
          "List Interface (ArrayList, LinkedList)",
          "Set Interface (HashSet, TreeSet)",
          "Map Interface (HashMap, TreeMap)",
          "Iterators and Comparators"
        ],
        assignment: "Library Management System"
      },
      {
        title: "JDBC & Database Integration",
        topics: [
          "JDBC Architecture (Drivers, Connections)",
          "CRUD Operations with MySQL",
          "PreparedStatement vs. Statement",
          "Transaction Management"
        ]
      },
      {
        title: "Concurrency & Multithreading",
        topics: [
          "Thread Lifecycle (Creation via Thread/Runnable)",
          "Synchronization (synchronized keyword)",
          "Thread Pools (ExecutorService)"
        ],
        assignment: "Multithreaded Inventory System"
      },
      {
        title: "Java 8+ Features",
        topics: [
          "Lambda Expressions",
          "Functional Interfaces (Predicate, Consumer)",
          "Stream API (map, filter, reduce)",
          "Optional Class & Date/Time API"
        ],
        assignment: "Data Analysis with Streams"
      },
      {
        title: "Capstone Project",
        topics: [
          "E-Commerce Backend Implementation",
          "User Authentication (JWT)",
          "Product Catalog (JDBC/Collections)",
          "Shopping Cart & Order Processing",
          "Payment Gateway Simulation",
          "Tools: Git, Maven, JUnit, MySQL"
        ],
        assignment: "Complete E-Commerce Backend"
      }
    ],
    color: {
      primary: "bg-blue-600",
      secondary: "bg-blue-100",
      accent: "text-blue-600"
    }
  },
  {
    id: "python",
    title: "Snake Charmer: Full-Stack Alchemy with Python",
    subtitle: "Develop proficiency in Python, scripting, and problem-solving",
    description: "Master Python from essentials to full-stack development in 30 days. Cover syntax, OOP, web scraping, automation, Flask API development, GUI creation, and testing. Build a complete hospital management system as your capstone project.",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    price: 7000,
    originalPrice: 9999,
    discount: "30% OFF",
    rating: 4.8,
    studentsEnrolled: 2100,
    duration: "30 Days",
    modules: 9,
    features: [
      "Python syntax and dynamic typing",
      "Object-oriented Python programming",
      "Web scraping and automation",
      "REST API development with Flask",
      "Database integration with SQLAlchemy",
      "GUI development with Tkinter",
      "Testing with pytest framework",
      "Hospital Management System project"
    ],
    curriculum: [
      {
        title: "Python Essentials",
        topics: [
          "Syntax & Dynamic Typing",
          "Core Data Structures (Lists, Tuples, Dicts, Sets)",
          "Functions (Args/Kwargs, Recursion)",
          "Error Handling (Try-Except-Finally)"
        ],
        assignment: "Weather Data Parser (JSON)"
      },
      {
        title: "Object-Oriented Python",
        topics: [
          "Classes vs. Instances",
          "Inheritance & Method Resolution Order",
          "Magic Methods (__str__, __init__)",
          "Decorators (@property, @staticmethod)"
        ]
      },
      {
        title: "Advanced Python Features",
        topics: [
          "Generators (yield keyword)",
          "Context Managers (with statement)",
          "Regular Expressions (re module)"
        ],
        assignment: "Quiz Application"
      },
      {
        title: "Scripting & Automation",
        topics: [
          "OS Module (File/Directory Operations)",
          "Web Scraping (BeautifulSoup, Requests)",
          "Automation with Selenium"
        ],
        assignment: "Automated PDF/CSV Report Generator"
      },
      {
        title: "Database Integration",
        topics: [
          "SQLite/MySQL Connectivity (sqlite3/mysql-connector)",
          "ORM with SQLAlchemy",
          "Basic CRUD Operations"
        ]
      },
      {
        title: "REST API Development",
        topics: [
          "REST Principles (GET/POST/PUT/DELETE)",
          "Flask Framework (Routes, Blueprints)",
          "JSON Serialization/Deserialization"
        ],
        assignment: "Bookstore API"
      },
      {
        title: "GUI Development",
        topics: [
          "Tkinter Widgets (Buttons, Entries, Frames)",
          "Event-Driven Programming",
          "PyQt Basics (QWidgets, Signals/Slots)"
        ]
      },
      {
        title: "Testing & Debugging",
        topics: [
          "Unit Testing (pytest framework)",
          "Test-Driven Development (TDD)",
          "Debugging with pdb"
        ],
        assignment: "Budget Tracker GUI"
      },
      {
        title: "Capstone Project",
        topics: [
          "Hospital Management System",
          "Patient Records (SQLite)",
          "Appointment Scheduler",
          "Data Visualization (Matplotlib)",
          "Tools: Flask, SQLAlchemy, pytest"
        ],
        assignment: "Complete Hospital Management System"
      }
    ],
    color: {
      primary: "bg-green-600",
      secondary: "bg-green-100",
      accent: "text-green-600"
    }
  },
  {
    id: "ml",
    title: "ML Maestro: AI Prodigy from Scratch",
    subtitle: "Implement ML algorithms and deploy predictive models",
    description: "Comprehensive 30-day ML course covering data science fundamentals, supervised/unsupervised learning, deep learning, NLP, and model deployment. Build real-time crop yield predictor as capstone project using cutting-edge AI technologies.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    price: 7000,
    originalPrice: 9999,
    discount: "30% OFF",
    rating: 4.9,
    studentsEnrolled: 890,
    duration: "30 Days",
    modules: 9,
    features: [
      "Data science with NumPy and Pandas",
      "Statistical foundations for ML",
      "Supervised learning algorithms",
      "Unsupervised learning and clustering",
      "Deep learning with TensorFlow",
      "Natural Language Processing",
      "Model deployment strategies",
      "Real-time Crop Yield Predictor"
    ],
    curriculum: [
      {
        title: "Python for Data Science",
        topics: [
          "NumPy Arrays & Operations",
          "Pandas (DataFrames, Series, GroupBy)",
          "Data Visualization (Matplotlib/Seaborn)"
        ],
        assignment: "Titanic Dataset EDA"
      },
      {
        title: "Statistics for ML",
        topics: [
          "Descriptive Statistics (Mean, Median, Variance)",
          "Probability Distributions",
          "Hypothesis Testing (p-value, t-test)"
        ]
      },
      {
        title: "Supervised Learning I",
        topics: [
          "Linear Regression (Cost Function, Gradient Descent)",
          "Logistic Regression (Sigmoid Function)",
          "Model Evaluation (Confusion Matrix, ROC-AUC)"
        ],
        assignment: "House Price Prediction"
      },
      {
        title: "Supervised Learning II",
        topics: [
          "Decision Trees (Entropy, Gini Index)",
          "SVM (Kernels, Hyperparameter Tuning)",
          "Ensemble Methods (Bagging vs. Boosting)"
        ],
        assignment: "Customer Churn Prediction"
      },
      {
        title: "Unsupervised Learning",
        topics: [
          "Clustering (K-Means, Hierarchical)",
          "Dimensionality Reduction (PCA)",
          "Anomaly Detection (Isolation Forest)"
        ],
        assignment: "Market Segmentation"
      },
      {
        title: "Deep Learning Fundamentals",
        topics: [
          "Neural Network Architecture (Layers, Activations)",
          "TensorFlow/Keras Sequential API",
          "Backpropagation & Optimization (Adam, SGD)"
        ]
      },
      {
        title: "Natural Language Processing",
        topics: [
          "Text Preprocessing (Tokenization, Stemming)",
          "Feature Extraction (TF-IDF, Word2Vec)",
          "Sentiment Analysis (RNNs/LSTMs)"
        ],
        assignment: "IMDB Review Classifier"
      },
      {
        title: "Model Deployment",
        topics: [
          "Flask API for Model Serving",
          "Docker Containerization",
          "Cloud Deployment (Heroku/AWS)"
        ]
      },
      {
        title: "Capstone Project",
        topics: [
          "Real-Time Crop Yield Predictor",
          "Data Pipeline (Weather/Soil APIs)",
          "Regression Model (XGBoost/TensorFlow)",
          "Web Interface (Flask)",
          "Tools: Scikit-learn, Heroku, Pandas"
        ],
        assignment: "Complete Crop Yield Prediction System"
      }
    ],
    color: {
      primary: "bg-purple-600",
      secondary: "bg-purple-100",
      accent: "text-purple-600"
    }
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};
