'use client';

import Image from 'next/image';
import ReservationImg from '@assets/images/bg-reservation.png';
import { forwardRef, ForwardedRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useEnrollReservation } from '@apis/useEnrollReservation';

function ReservationSection(props: any, ref: ForwardedRef<HTMLDivElement>) {
  const [email, setEmail] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState<
    'success' | 'error' | null
  >(null);
  const { mutate, isLoading } = useEnrollReservation();

  const handleSubscribe = async () => {
    if (email.trim()) {
      try {
        const data = await mutate(email);
        if (process.env.NODE_ENV === 'development') {
          console.log('Enrollment response:', data);
        }
        toast.success('성공적으로 등록되었습니다!');
        setEmail('');
        setEnrollmentStatus('success');
      } catch (error) {
        toast.error(' 오류: 다시 시도해주세요.');
        setEnrollmentStatus('error');
      }
    }
  };

  return (
    <div
      className="relative h-[684px] bg-suldak-mint-500 w-full mobile:h-[390px]"
      ref={ref}
    >
      <div className="mobile:hidden tablet:hidden">
        <Image
          src={ReservationImg}
          alt={'사전예약'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center text-white">
        <div className="text-[80px] font-bold mobile:text-[36px]">
          술닥술닥 사전예약
        </div>
        <div className="mb-[40px] text-center text-[30px] mobile:text-[16px]">
          메일주소를 입력하시면 술닥술닥의
          <br className="pc:hidden" />
          오픈 소식을 알려드릴게요!
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center text-[25px] mobile:flex-col mobile:justify-center mobile:space-y-[8px] mobile:text-[16px] tablet:flex-col tablet:space-y-[8px]">
            <input
              className="h-[68px] w-[330px] rounded-[10px] bg-white/50 px-4 text-black mobile:h-[48px] tablet:w-[600px] pc:w-[809px]"
              value={email}
              onChange={function (e) {
                setEmail(e.target.value);
              }}
              type="email"
            />
            <button
              className="ml-[20px] h-[68px] w-[233px] rounded-[10px] bg-white text-[25px] font-bold text-suldak-mint-500 mobile:hidden tablet:hidden"
              onClick={handleSubscribe}
              disabled={isLoading || !email.trim()}
            >
              {isLoading ? '처리 중...' : 'Subscribe'}
            </button>
            <button
              className="h-[68px] w-[233px] rounded-[10px] bg-white text-[25px] font-bold text-suldak-mint-500 mobile:h-[48px] mobile:w-[330px] mobile:text-[16px] tablet:w-[600px] pc:hidden"
              onClick={handleSubscribe}
              disabled={isLoading || !email.trim()}
            >
              {isLoading ? '처리 중...' : '제출하기'}
            </button>
          </div>
          <div className="h-[24px] text-center">
            {enrollmentStatus === 'success' && (
              <div className="text-black">
                사전예약이 완료되었습니다. 감사합니다.
              </div>
            )}
            {enrollmentStatus === 'error' && (
              <div className="text-red-500">다시 시도해주세요.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ForwardedReservationSection = forwardRef(ReservationSection);

ForwardedReservationSection.displayName = 'ReservationSection';

export default ForwardedReservationSection;
