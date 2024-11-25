'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeadRight from '@/assets/icons/ico-head-right.svg';
import HeadImg from '@/assets/images/image-head.png';
import AnimationData from '@/assets/images/animation-web-blog.json';
import VectorImg from '@/assets/images/img-vector.png';

interface HeaderProps {
  scrollToReservation: () => void;
}

// Lottie 컴포넌트를 동적으로 불러오기
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

function Header({ scrollToReservation }: HeaderProps): JSX.Element {
  return (
    <>
      <div className="flex relative tablet:h-[800px] pc:h-[900px] mobile:h-[600px] w-full bg-suldak-mint-500">
        <div className="flex w-full relative justify-center items-center bg-suldak-mint-500">
          {/* Desktop View Animation */}
          <div className="flex w-full tablet:hidden mobile:hidden justify-center items-center">
            <div className="absolute bottom-0 justify-center items-center">
              <Image
                src={VectorImg}
                width={1100}
                height={444}
                alt="배경 벡터 이미지"
                className="z-10"
                priority
              />
            </div>
            <div className="absolute z-20 bottom-4 justify-center items-center">
              <Lottie
                animationData={AnimationData}
                loop
                autoplay
                style={{ width: '1000px', height: '474px' }}
              />
            </div>
          </div>

          {/* Tablet View Image */}
          <div className="absolute justify-center items-center bottom-0 pc:hidden mobile:hidden">
            <Image
              src={HeadImg}
              alt="태블릿용 헤더 이미지"
              height={743}
              width={600}
              priority
            />
          </div>

          {/* Mobile View Image */}
          <div className="absolute justify-center items-center bottom-0 pc:hidden tablet:hidden">
            <Image
              src={HeadImg}
              alt="모바일용 헤더 이미지"
              height={288}
              width={355}
              priority
            />
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
        <button
          type="button"
          className="mx-auto flex items-center rounded-full bg-white px-[20px] py-[16px] font-bold text-suldak-mint-500"
          onClick={scrollToReservation}
        >
          지금 사전예약하기
          <HeadRight className="ml-2" fill="#08BECA" />
        </button>
      </section>
    </>
  );
}

export default Header;
