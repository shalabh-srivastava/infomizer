import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import CourseDetailPage from "@/pages/CourseDetailPage";
import AboutPage from "@/pages/AboutPage";
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <Switch>
        <Route path="/" component={() => 
          <HomePage 
            onCourseSelect={() => {}} // Remove sidebar functionality
            sidebarOpen={false}
          />
        } />
        <Route path="/about" component={AboutPage} />
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
