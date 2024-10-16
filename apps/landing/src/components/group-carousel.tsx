import React from 'react';
import InfiniteCarousel from './infinite-carousel';
import CarouselCard from '@components/carousel-card';
import ProfileImg1 from '@assets/images/image-profile-1.png';
import ProfileImg2 from '@assets/images/image-profile-2.png';
import ProfileImg3 from '@assets/images/image-profile-3.png';
import ProfileImg4 from '@assets/images/image-profile-4.png';
import ProfileImg5 from '@assets/images/image-profile-5.png';
import ProfileImg6 from '@assets/images/image-profile-6.png';
import ProfileImg7 from '@assets/images/image-profile-7.png';
import ProfileImg8 from '@assets/images/image-profile-8.png';
function GroupCarousel() {
  const carouselItems = [
    {
      tags: [
        { content: '오프라인', color: 'green' as const },
        { content: '고민상담', color: 'gray' as const },
      ],
      title: '해리포터 얘기 같이해요!',
      location: '홍대입구역',
      date: '9.21(토)',
      time: '오후 5:00',
      currentMembers: 1,
      maxMembers: 3,
      ProfilePics: [{ src: ProfileImg1, alt: 'Profile 1' }],
    },
    {
      tags: [
        { content: '온라인', color: 'orange' as const },
        { content: '스포츠', color: 'gray' as const },
      ],
      title: 'KBO같이 보며 한잔',
      location: '구글밋',
      date: '9.17(화)',
      time: '오후 6:30',
      currentMembers: 4,
      maxMembers: 6,
      ProfilePics: [
        { src: ProfileImg2, alt: 'Profile 2' },
        { src: ProfileImg3, alt: 'Profile 3' },
        { src: ProfileImg4, alt: 'Profile 4' },
      ],
    },
    {
      tags: [
        { content: '온라인', color: 'orange' as const },
        { content: '영화/드라마', color: 'gray' as const },
      ],
      title: '공포영화 같이봐요👻',
      location: '디스코드',
      date: '9.29(일)',
      time: '오후 8:30',
      currentMembers: 5,
      maxMembers: 6,
      ProfilePics: [
        { src: ProfileImg5, alt: 'Profile 5' },
        { src: ProfileImg6, alt: 'Profile 6' },
        { src: ProfileImg7, alt: 'Profile 7' },
      ],
    },
    {
      tags: [
        { content: '오프라인', color: 'green' as const },
        { content: '고민상담', color: 'gray' as const },
      ],
      title: '마케터너들 주목✨🎉',
      location: '강남역',
      date: '9.5(목)',
      time: '오후 8:00',
      currentMembers: 1,
      maxMembers: 4,
      ProfilePics: [{ src: ProfileImg8, alt: 'Profile 8' }],
    },
  ];
  const renderCarouselItems = () => {
    return carouselItems.map((item, index) => (
      <CarouselCard key={index} {...item} />
    ));
  };
  return (
    <section className="flex relative mobile:mt-[40px] mt-[64px] w-full bg-white ">
      <div className="flex carousel-container mobile:hidden w-screen max-w-[2100px] overflow-x-hidden">
        <InfiniteCarousel
          items={renderCarouselItems()}
          speed={4}
          direction="left"
          itemWidth={480}
          itemHeight={380}
        />
      </div>
      <div className="flex carousel-container tablet:hidden pc:hidden w-screen max-w-[2100px] overflow-x-hidden">
        <InfiniteCarousel
          items={renderCarouselItems()}
          speed={2.25}
          direction="left"
          itemWidth={210}
          itemHeight={188}
        />
      </div>
    </section>
  );
}
export default GroupCarousel;
