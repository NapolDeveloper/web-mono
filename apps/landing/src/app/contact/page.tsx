'use client';

import ContactChannel from '@/components/contact/contact-channel';
import Footer from '@/components/footer';
import GlobalNavigationBar from '@/components/global-navigation-bar';
import { useState } from 'react';
import MessageIcon from '@assets/icons/ico-big-message.svg';

const ContactPage = (): JSX.Element | null => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopy = () => {
    setShowCopyNotification(true);
    setTimeout(() => {
      setShowCopyNotification(false);
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-suldak-mint-500">
      <GlobalNavigationBar />
      <div className="relative flex flex-col my-[40px] pc:my-0 w-full pc:h-[920px] items-center justify-center">
        {/* MessageIcon을 배경으로 배치 */}
        <div className="absolute flex left-[180px] mobile:hidden tablet:hidden justify-center z-0">
          <MessageIcon />
        </div>
        {/* 메인 콘텐츠를 앞으로 배치 */}
        <div className="flex-col flex gap-[40px] mobile:gap-[20px] relative z-10">
          <div className="text-white mobile:text-center text-[56px] mobile:text-[36px] font-semibold">
            Contact Us
          </div>
          <div className="flex mobile:flex-col tablet:flex-col gap-[40px] mobile:gap-[20px]">
            <ContactChannel
              name="E-mail"
              copy="suldak.official@gmail.com"
              onCopy={handleCopy}
            />
            <ContactChannel
              name="Blog"
              link="http://suldak.tistory.com"
              show="suldak.tistory.com"
            />
          </div>
          <div className="flex mobile:flex-col tablet:flex-col gap-[40px] mobile:gap-[20px]">
            <ContactChannel name="Kakao talk" />
            <ContactChannel
              name="Instagram"
              show="@suldak.official"
              link="https://www.instagram.com/suldak.official/"
            />
          </div>
        </div>
      </div>
      <Footer />

      {/* 이메일 복사 알림*/}
      <div
        className={`fixed bottom-[20px] left-1/2 w-[335px] h-[45px] justify-center items-center flex transform -translate-x-1/2 bg-suldak-gray-800 text-white px-4 py-2 rounded-[10px] transition-opacity duration-300 ${
          showCopyNotification ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        복사되었습니다!
      </div>
    </div>
  );
};

export default ContactPage;
