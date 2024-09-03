'use client';
import { useEffect, useRef, useState } from 'react';
import CopySection from 'src/components/copy-section';
import GroupSection from 'src/components/group-section';
import Header from 'src/components/header';
import NavigationBar from 'src/components/navigation-bar';
import ReservationSection from 'src/components/reservation-section';
import ReservationToaster from 'src/components/reservation-toaster';
import ReviewSection from 'src/components/review-section';
import ServiceSection from 'src/components/service-section';


function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const reservationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToReservation = () => {
    reservationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header scrollToReservation={scrollToReservation} />
      <CopySection />
      <GroupSection />
      <ServiceSection />
      <ReviewSection />
      <ReservationSection ref={reservationRef} />
      <NavigationBar scrollToReservation={scrollToReservation} />
      <ReservationToaster />
    </div>
  );
}

export default LandingPage;
