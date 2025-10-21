"use client";

import Image from "next/image";
import HeadRight from "@assets/icons/ico-head-right.svg";
import SmallLogo from "@assets/icons/ico-small-logo.svg";
import BigLogo from "@assets/icons/ico-big-logo.svg";
import AppStore from "@/assets/images/ico-sns-apple.png";
import GooglePlay from "@/assets/images/ico-sns-playstore.png";

function NavigationBar() {
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
  // mobile:ml-[16px]
  return (
    <div className="fixed bottom-0 z-40 flex w-full justify-center">
      <div className="w-full pc:w-[62.5%] bg-white shadow-suldak-card mobile:rounded-t-[20px] pc:rounded-[12px] tablet:rounded-[12px]">
        <div className="flex items-center justify-between px-6 py-4 text-[20px]">
          <div className="flex items-center">
            <div className="relative h-[48px] w-[90px]  mobile:h-[42px] mobile:w-[78px] pc:hidden tablet:hidden">
              <SmallLogo />
            </div>
            <div className="relative h-[48px] w-[90px] mobile:hidden pc:mr-[20px] tablet:mr-[20px]">
              <BigLogo />
            </div>
            <div className="mobile:hidden">즐거운 술 문화를 위한 플랫폼</div>
          </div>
          <div className="flex gap-[10px]">
            <button
              className="flex items-center rounded-[30px] bg-suldak-mint-500 px-[20px] py-[10px] text-white gap-[4px]"
              onClick={handleAppStoreClick}
            >
              <Image src={AppStore} width={20} height={20} className="mb-1" />
              <div className="text-center font-bold text-[16px] tracking-[0.02em] whitespace-nowrap mobile:hidden">
                App Store
              </div>
            </button>
            <button
              className="flex items-center rounded-[30px] bg-suldak-mint-500 px-[20px] py-[10px] text-white gap-[4px]"
              onClick={handleGooglePlayClick}
            >
              <Image src={GooglePlay} width={20} height={20} />
              <div className="text-center font-bold text-[16px] tracking-[0.02em] whitespace-nowrap mobile:hidden">
                Google Play
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
