import TalkImg from '@assets/icons/ico-talk.svg';
import ReviewCarousel from './review-carousel';

function ReviewSection() {
  return (
    <div className="h-[950px] w-full bg-gray-100 py-[120px] mobile:h-[516px] mobile:py-[60px] mobile:text-center tablet:text-center">
      <div className="flex w-full items-center mobile:flex-col mobile:justify-center tablet:justify-center pc:ml-[18%]">
        <TalkImg className="mr-4 mobile:mb-[8px]" />
        <h2 className="text-[32px] font-bold mobile:text-[22px]">
          당신이 궁금해하는 모든 것
        </h2>
      </div>
      <p className="mb-[40px] text-[18px] font-normal mobile:text-[14px] pc:mb-[64px] pc:ml-[18%]">
        먹는 것에 진심인 사람들의 맛집 후기부터,
        <br /> 다양한 주제의 블로그 포스팅까지
      </p>
      <ReviewCarousel />
    </div>
  );
}

export default ReviewSection;
