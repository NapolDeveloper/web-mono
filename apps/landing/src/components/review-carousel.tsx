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
import ReviewImg11 from '@assets/images/image-review-11.png';
import ReviewImg12 from '@assets/images/image-review-12.png';
import ReviewImg13 from '@assets/images/image-review-13.png';
import ReviewImg14 from '@assets/images/image-review-14.png';
import ReviewImg15 from '@assets/images/image-review-15.png';
import ReviewImg16 from '@assets/images/image-review-16.png';
import ReviewImg17 from '@assets/images/image-review-17.png';
import ReviewImg18 from '@assets/images/image-review-18.png';
import ReviewImg19 from '@assets/images/image-review-19.png';
import ReviewImg20 from '@assets/images/image-review-20.png';
import ReviewImg21 from '@assets/images/image-review-21.png';
import ReviewImg22 from '@assets/images/image-review-22.png';
import ReviewImg23 from '@assets/images/image-review-23.png';
import ReviewImg24 from '@assets/images/image-review-24.png';
import ReviewImg25 from '@assets/images/image-review-25.png';
import ReviewImg26 from '@assets/images/image-review-26.png';
import ReviewImg27 from '@assets/images/image-review-27.png';
import ReviewImg28 from '@assets/images/image-review-28.png';
import ReviewImg29 from '@assets/images/image-review-29.png';
import ReviewImg30 from '@assets/images/image-review-30.png';
import ReviewImg31 from '@assets/images/image-review-31.png';
import ReviewImg32 from '@assets/images/image-review-32.png';
import InfiniteCarousel from './infinite-carousel';

function ReviewCarousel() {
  const topImages = [
    ReviewImg1,
    ReviewImg2,
    ReviewImg3,
    ReviewImg4,
    ReviewImg5,
    ReviewImg6,
    ReviewImg7,
    ReviewImg8,
    ReviewImg9,
    ReviewImg10,
    ReviewImg11,
    ReviewImg12,
    ReviewImg13,
    ReviewImg14,
    ReviewImg15,
    ReviewImg16,
  ];
  const bottomImages = [
    ReviewImg17,
    ReviewImg18,
    ReviewImg19,
    ReviewImg20,
    ReviewImg21,
    ReviewImg22,
    ReviewImg23,
    ReviewImg24,
    ReviewImg25,
    ReviewImg26,
    ReviewImg27,
    ReviewImg28,
    ReviewImg29,
    ReviewImg30,
    ReviewImg31,
    ReviewImg32,
  ];

  return (
    <>
      <div className="mobile:hidden overflow-hidden space-y-[20px]">
        <InfiniteCarousel
          items={topImages}
          speed={4}
          direction="left"
          itemWidth={416}
          itemHeight={250}
        />

        <InfiniteCarousel
          items={bottomImages}
          speed={4}
          direction="right"
          itemWidth={416}
          itemHeight={250}
        />
      </div>
      <div className="tablet:hidden pc:hidden overflow-hidden space-y-[8px]">
        <div>
          <InfiniteCarousel
            items={topImages}
            speed={2.3}
            direction="left"
            itemWidth={168}
            itemHeight={120}
          />
        </div>
        <div>
          <InfiniteCarousel
            items={bottomImages}
            speed={2.3}
            direction="right"
            itemWidth={168}
            itemHeight={120}
          />
        </div>
      </div>
    </>
  );
}

export default ReviewCarousel;
