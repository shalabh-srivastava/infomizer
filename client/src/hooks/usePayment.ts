import { Course } from "@/data/courseData";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const usePayment = () => {
  const { toast } = useToast();

  const initiatePayment = (course: Course) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_1234567890",
      amount: course.price * 100, // Amount in paise
      currency: "INR",
      name: "Infomizer",
      description: course.title,
      image: "/logo.png",
      handler: function (response: any) {
        toast({
          title: "Payment Successful!",
          description: `Welcome to ${course.title}. Payment ID: ${response.razorpay_payment_id}`,
        });
        // Here you would typically send the payment details to your backend
        console.log("Payment successful:", response);
      },
      prefill: {
        name: "Student Name",
        email: "student@example.com",
        contact: "9999999999",
      },
      notes: {
        course_id: course.id,
        course_title: course.title,
      },
      theme: {
        color: "#3b82f6",
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "You can try enrolling again anytime.",
            variant: "destructive",
          });
        }
      }
    };

    // Check if Razorpay is loaded
    if (typeof window.Razorpay !== "undefined") {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // Fallback for development/demo
      toast({
        title: "Payment Gateway",
        description: `Redirecting to payment for ${course.title} - ₹${course.price.toLocaleString()}`,
      });
      
      // Simulate payment flow for demo
      setTimeout(() => {
        toast({
          title: "Demo Payment Successful!",
          description: `Welcome to ${course.title}. This is a demo transaction.`,
        });
      }, 2000);
    }
  };

  return { initiatePayment };
};
