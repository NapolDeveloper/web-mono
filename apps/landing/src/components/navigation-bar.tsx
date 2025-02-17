'use client';

import HeadRight from '@assets/icons/ico-head-right.svg';
import SmallLogo from '@assets/icons/ico-small-logo.svg';
import BigLogo from '@assets/icons/ico-big-logo.svg';

interface NavigationProps {
  scrollToReservation?: () => void;
}

function NavigationBar({ scrollToReservation }: NavigationProps) {
  const handleBlogClick = () => {
    if (typeof window !== 'undefined') {
      window.open('https://suldak.tistory.com/', '_blank');
    }
  };

  return (
    <div className="fixed bottom-0 z-40 flex w-full justify-center">
      <div className="w-full pc:w-[62.5%] bg-white shadow-suldak-card mobile:rounded-t-[20px] pc:rounded-[12px] tablet:rounded-[12px]">
        <div className="flex items-center justify-between px-6 py-4 text-[20px]">
          <div className="flex items-center">
            <div className="relative h-[48px] w-[90px] mobile:ml-[16px] mobile:h-[42px] mobile:w-[78px] pc:hidden tablet:hidden">
              <SmallLogo />
            </div>
            <div className="relative h-[48px] w-[90px] mobile:hidden pc:mr-[20px] tablet:mr-[20px]">
              <BigLogo />
            </div>
            <div className="mobile:hidden">즐거운 술 문화를 위한 플랫폼</div>
          </div>
          <div className="flex space-x-4">
            {scrollToReservation ? (
              <button
                className="flex items-center rounded-[30px] bg-suldak-mint-500 px-[20px] py-[10px] text-[16px] text-white mobile:text-[14px]"
                onClick={scrollToReservation}
              >
                사전예약
                <HeadRight className="ml-2" fill="white" />
              </button>
            ) : null}
            <button
              className="flex items-center rounded-[30px] bg-suldak-mint-500 px-[20px] py-[10px] text-[16px] text-white mobile:hidden"
              onClick={handleBlogClick}
            >
              블로그 보기
              <HeadRight className="ml-2" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
