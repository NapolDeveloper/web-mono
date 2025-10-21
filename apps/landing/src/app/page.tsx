"use client";

import { useEffect, useRef, useState } from "react";
import { scrollToElement, getElementHeight } from "@utils/scroll";
import ServiceSection from "@/components/service-section";
import CopySection from "@/components/copy-section";
import GroupSection from "@/components/group-section";
import Header from "@/components/header";
import NavigationBar from "@/components/navigation-bar";
import ReservationSection from "@/components/reservation-section";
import ReviewSection from "@/components/review-section";
import Footer from "@/components/footer";
import GlobalNavigationBar from "@/components/global-navigation-bar";

type ScrollHandler = () => void;

const LandingPage = (): JSX.Element | null => {
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
      <Header />
      <CopySection />
      <GroupSection />
      <ServiceSection />
      <ReviewSection />
      <ReservationSection />
      <Footer />
      <NavigationBar />
    </div>
  );
};

export default LandingPage;
