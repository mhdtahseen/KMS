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
  _gotcha: string;
};

export function useBookingForm(
  successMessage: string,
  errorMessage: string,
  locale: string
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const submitForm = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        const message =
          (json as { error?: string }).error ?? errorMessage;
        setSubmitError(message);
        toast.error(message);
        return;
      }

      toast.success(successMessage);

      setTimeout(() => {
        router.push(`/${locale}/thank-you`);
      }, 1000);
    } catch {
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitError,
    submitForm,
  };
}
