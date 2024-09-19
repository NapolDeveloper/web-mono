import { useState, useCallback } from 'react';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface EnrollResponse {
  data: boolean;
  errorCode: number;
  message: string;
  success: boolean;
}

export const useEnrollReservation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(async (email: string): Promise<EnrollResponse> => {
    if (!email || !isValidEmail(email)) {
      throw new Error('Invalid email address');
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservation/user`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.NEXT_PUBLIC_TOKEN || '',
          },
          body: JSON.stringify({ userEmail: email }),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: EnrollResponse = await response.json();
      console.log('Reservation enrolled successfully:', data);
      return data;
    } catch (err) {
      console.error('Error enrolling reservation:', err);
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred'),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { mutate, isLoading, error };
};
