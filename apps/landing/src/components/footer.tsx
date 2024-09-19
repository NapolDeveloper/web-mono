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
      className="bg-suldak-mint-600 flex h-[174px] w-full flex-col text-center items-center py-[31px] text-[12px] text-white mobile:py-[28px] mobile:text-[14px]"
    >
      <div className="flex-col h-[100px]">
        <div className="flex items-center">
          <div>푸터 메뉴</div>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <div>푸터 메뉴</div>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <div>푸터 메뉴</div>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <div>푸터 메뉴</div>
          <div className="mx-2 w-[1px] h-[8px] mobile:h-[10px] bg-white opacity-50"></div>
          <div>푸터 메뉴</div>
        </div>
        <div>Copyright © 술닥술닥 all rights reserved</div>
      </div>
    </div>
  );
};

export default React.forwardRef(Footer);

