import React, { useRef, useEffect, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface InfiniteCarouselProps {
  items: (ReactNode | string | StaticImageData)[];
  speed?: number;
  direction?: 'left' | 'right';
  itemWidth: number;
  itemHeight: number;
}

function InfiniteCarousel({
  items,
  speed = 1,
  direction = 'left',
  itemWidth,
  itemHeight,
}: InfiniteCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      let position = 0;

      const animateCarousel = () => {
        position += speed * (direction === 'left' ? 1 : -1);
        const maxScroll = carousel.scrollWidth / 2;
        if (position > maxScroll) position -= maxScroll;
        if (position < 0) position += maxScroll;
        carousel.scrollLeft = position;
      };

      const intervalId = setInterval(animateCarousel, 16); // 약 60fps

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [speed, direction]);

  const isStaticImageData = (item: any): item is StaticImageData => {
    return typeof item === 'object' && 'src' in item;
  };

  const renderItems = () => {
    return items.concat(items).map((item, index) => (
      <div
        key={index}
        className={`inline-block shrink-0 mr-[8px]`}
        style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
      >
        {typeof item === 'string' || isStaticImageData(item) ? (
          <Image
            src={item}
            alt={`Carousel item ${index + 1}`}
            width={itemWidth}
            height={itemHeight}
            objectFit="cover"
          />
        ) : (
          item
        )}
      </div>
    ));
  };

  return (
    <div ref={carouselRef} className="flex overflow-hidden whitespace-nowrap">
      {renderItems()}
    </div>
  );
}

export default InfiniteCarousel;
