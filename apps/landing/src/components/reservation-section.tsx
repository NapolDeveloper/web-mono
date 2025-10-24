"use client";

import Image from "next/image";
import type { ForwardedRef } from "react";
import { forwardRef, useState } from "react";
import ReservationImg from "@assets/images/bg-reservation.png";
import AppStore from "@/assets/images/ico-sns-apple-mint.png";
import GooglePlay from "@/assets/images/ico-sns-playstore.png";

function ReservationSection() {
  const handleAppStoreClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://apps.apple.com/kr/app/%EC%88%A0%EB%8B%A5%EC%88%A0%EB%8B%A5/id6581483622", "_blank");
    }
  };
  const handleGooglePlayClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://play.google.com/store/apps/details?id=me.suldak.cheers", "_blank");
    }
  };

  return (
    <div className="relative h-[684px] bg-suldak-mint-500 w-full mobile:h-[390px]">
      <div className="mobile:hidden tablet:hidden">
        <Image alt="사전예약" layout="fill" objectFit="cover" src={ReservationImg} />
      </div>
      <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center text-white">
        <div className="text-[60px] font-bold mobile:text-[30px] mb-[20px]">지금 바로 술닥술닥을 만나보세요</div>
        <div className="flex justify-center items-center gap-4">
          <button
            type="button"
            className="flex items-center rounded-full bg-white px-[20px] py-[16px] font-bold text-suldak-mint-500 gap-[4px]"
            onClick={handleAppStoreClick}
          >
            <Image alt="App Store" src={AppStore} width={24} height={24} className="mb-1" />
            <div className="text-center text-[22px] mobile:text-[16px] tracking-[0.02em] whitespace-nowrap">
              App Store
            </div>
          </button>
          <button
            type="button"
            className="flex items-center rounded-full bg-white px-[20px] py-[16px] font-bold text-suldak-mint-500 gap-[4px]"
            onClick={handleGooglePlayClick}
          >
            <Image alt="Google Play" src={GooglePlay} width={24} height={24} />
            <div className="text-center text-[22px] mobile:text-[16px] tracking-[0.02em] whitespace-nowrap">
              Google Play
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationSection;
