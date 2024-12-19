import Link from 'next/link';
import React from 'react';

interface FooterProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const Footer: React.ForwardRefRenderFunction<HTMLDivElement, FooterProps> = (
  props,
  ref,
) => {
  return (
    <div
      ref={ref}
      id="footer"
      className="bg-suldak-mint-600 flex h-[174px] w-full flex-col text-center items-center py-[31px] text-[12px] text-white mobile:py-[28px] mobile:text-[14px]"
    >
      <div className="flex-col h-[100px]">
        <div className="flex items-center">
          <Link
            href="https://suldak.notion.site/8c83b32c990b4cbf9d34ad8944214284"
            target="_blank"
            rel="noopener noreferrer"
          >
            이용약관
          </Link>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <Link
            href="https://suldak.notion.site/6993e29d3a7d4625ab12fc2807cd712b"
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보 처리방침
          </Link>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <Link
            href="https://www.instagram.com/suldak.official/"
            target="_blank"
            rel="noopener noreferrer"
          >
            인스타그램
          </Link>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <Link
            href="https://suldak.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            블로그
          </Link>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <a href="mailto:suldak.official@gmail.com">Contact</a>
        </div>
        <div>Copyright © 술닥술닥 all rights reserved</div>
      </div>
    </div>
  );
};

export default React.forwardRef(Footer);
