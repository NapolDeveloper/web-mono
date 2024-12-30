'use client';

import { useEffect, useState } from 'react';
import GlobalNavigationBar from '@/components/global-navigation-bar';
import CrewPageHeader from '@/components/crew/crew-page-header';
import MascotSection from '@/components/crew/mascot-section';
import CrewSection from '@/components/crew/crew-section';
import Footer from '@/components/footer';

const OurCrewPage = (): JSX.Element | null => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <GlobalNavigationBar />
      <CrewPageHeader />
      <MascotSection />
      <CrewSection />
      <Footer />
    </div>
  );
};

export default OurCrewPage;
