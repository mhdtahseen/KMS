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

  const submitForm = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? 'Request failed');
      }

      toast.success(successMessage);

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
