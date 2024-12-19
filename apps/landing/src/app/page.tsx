'use client';

import { useEffect, useRef, useState } from 'react';
import { scrollToElement, getElementHeight } from '@utils/scroll';
import ServiceSection from '@/components/service-section';
import CopySection from '@/components/copy-section';
import GroupSection from '@/components/group-section';
import Header from '@/components/header';
import NavigationBar from '@/components/navigation-bar';
import ReservationSection from '@/components/reservation-section';
import ReviewSection from '@/components/review-section';
import Footer from '@/components/footer';
import GlobalNavigationBar from '@/components/global-navigation-bar';

type ScrollHandler = () => void;

const LandingPage = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const reservationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToReservation: ScrollHandler = () => {
    if (typeof window === 'undefined') return;

    const navigationBarHeight = getElementHeight('.navigation-bar');
    scrollToElement(reservationRef.current, navigationBarHeight);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <GlobalNavigationBar />
      <Header scrollToReservation={scrollToReservation} />
      <CopySection />
      <GroupSection />
      <ServiceSection />
      <ReviewSection />
      <ReservationSection ref={reservationRef} />
      <Footer />
      <NavigationBar scrollToReservation={scrollToReservation} />
    </div>
  );
};

export default LandingPage;
