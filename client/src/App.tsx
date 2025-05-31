import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import CourseDetailPage from "@/pages/CourseDetailPage";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function Router() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar 
            courseId={selectedCourse} 
            onClose={() => {
              setSidebarOpen(false);
              setSelectedCourse(null);
            }}
          />
        )}
      </AnimatePresence>
      
      <Switch>
        <Route path="/" component={() => 
          <HomePage 
            onCourseSelect={(courseId: string) => {
              setSelectedCourse(courseId);
              setSidebarOpen(true);
            }}
            sidebarOpen={sidebarOpen}
          />
        } />
        <Route path="/course/:courseId" component={CourseDetailPage} />
        <Route component={() => <div>404 Not Found</div>} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
