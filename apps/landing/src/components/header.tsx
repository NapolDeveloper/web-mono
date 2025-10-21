"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import HeadRight from "@/assets/icons/ico-head-right.svg";
import HeadImg from "@/assets/images/image-head.png";
import AnimationData from "@/assets/images/animation-web-blog.json";
import VectorImg from "@/assets/images/img-vector.png";
import AppStore from "@/assets/images/ico-sns-apple-mint.png";
import GooglePlay from "@/assets/images/ico-sns-playstore.png";

// Lottie 컴포넌트를 동적으로 불러오기
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function Header(): JSX.Element {
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
    <>
      <div className="flex relative tablet:h-[800px] pc:h-[900px] mobile:h-[600px] w-full bg-suldak-mint-500">
        <div className="flex w-full relative justify-center items-center bg-suldak-mint-500">
          {/* Desktop View Animation */}
          <div className="flex w-full tablet:hidden mobile:hidden justify-center items-center">
            <div className="absolute bottom-0 justify-center items-center">
              <Image src={VectorImg} width={1100} height={444} alt="배경 벡터 이미지" className="z-10" priority />
            </div>
            <div className="absolute z-20 bottom-4 justify-center items-center">
              <Lottie animationData={AnimationData} loop autoplay style={{ width: "1000px", height: "474px" }} />
            </div>
          </div>

          {/* Tablet View Image */}
          <div className="absolute justify-center items-center bottom-0 pc:hidden mobile:hidden">
            <Image src={HeadImg} alt="태블릿용 헤더 이미지" height={743} width={600} priority />
          </div>

          {/* Mobile View Image */}
          <div className="absolute justify-center items-center bottom-0 pc:hidden tablet:hidden">
            <Image src={HeadImg} alt="모바일용 헤더 이미지" height={288} width={355} priority />
          </div>
        </div>
      </div>

      <section className="absolute left-1/2 top-[100px] -translate-x-1/2 transform text-center">
        <div className="mb-4 text-nowrap font-GMarket text-[42px] font-medium text-white mobile:text-[20px]">
          나와 우리, 그리고 한 잔의 술
          <div className="text-[64px] font-bold mobile:text-[36px]">
            술닥술닥에서 <br className="pc:hidden" />한 잔 하실래요?
          </div>
        </div>
        <div className="my-[16px] text-[20px] font-medium text-white mobile:text-[14px]">
          관심사를 함께 나누며 즐겁게 한 잔!
          <br />
          당신의 취향을 술닥술닥에서 만나보세요.
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <button
            type="button"
            className="flex items-center rounded-full bg-white px-[20px] py-[16px] font-bold text-suldak-mint-500 gap-[4px] mobile:px-[14px] mobile:py-[8px]"
            onClick={handleAppStoreClick}
          >
            <Image src={AppStore} width={20} height={20} className="mb-1" />
            <div className="text-center text-[16px]  tracking-[0.02em] whitespace-nowrap mobile:text-[12px]">
              App Store
            </div>
          </button>
          <button
            type="button"
            className="flex items-center rounded-full bg-white px-[20px] py-[16px] font-bold text-suldak-mint-500 gap-[4px] mobile:px-[14px] mobile:py-[8px]"
            onClick={handleGooglePlayClick}
          >
            <Image src={GooglePlay} width={20} height={20} />
            <div className="text-center text-[16px] tracking-[0.02em] whitespace-nowrap mobile:text-[12px]">
              Google Play
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
