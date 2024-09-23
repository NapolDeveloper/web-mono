import ReviewImg1 from '@assets/images/image-review-1.png';
import ReviewImg2 from '@assets/images/image-review-2.png';
import ReviewImg3 from '@assets/images/image-review-3.png';
import ReviewImg4 from '@assets/images/image-review-4.png';
import ReviewImg5 from '@assets/images/image-review-5.png';
import ReviewImg6 from '@assets/images/image-review-6.png';
import ReviewImg7 from '@assets/images/image-review-7.png';
import ReviewImg8 from '@assets/images/image-review-8.png';
import ReviewImg9 from '@assets/images/image-review-9.png';
import ReviewImg10 from '@assets/images/image-review-10.png';
import InfiniteCarousel from './infinite-carousel';

function ReviewCarousel() {
  const topImages = [
    ReviewImg1,
    ReviewImg2,
    ReviewImg3,
    ReviewImg4,
    ReviewImg5,
  ];
  const bottomImages = [
    ReviewImg6,
    ReviewImg7,
    ReviewImg8,
    ReviewImg9,
    ReviewImg10,
  ];

  return (
    <div className="space-y-[8px] overflow-hidden pc:space-y-[20px]">
      <div className="pl-[20px]">
        <InfiniteCarousel
          items={topImages}
          speed={2}
          direction="left"
          itemWidth={416}
          itemHeight={250}
        />
      </div>
      <div className="pr-[20px]">
        <InfiniteCarousel
          items={bottomImages}
          speed={2}
          direction="right"
          itemWidth={416}
          itemHeight={250}
        />
      </div>
    </div>
  );
}

export default ReviewCarousel;
