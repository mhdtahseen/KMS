import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export type BookingFormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  destination: string;
  message: string;
};

export function useBookingForm(successMessage: string, errorMessage: string, locale: string) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const submitForm = async (_data: BookingFormData) => {
    setIsSubmitting(true);
    void _data;
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success(successMessage);
      
      // Redirect to thank you page after success
      setTimeout(() => {
        router.push(`/${locale}/thank-you`);
      }, 1000);
      
    } catch {
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm,
  };
}
