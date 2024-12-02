import type { ReactNode } from 'react';
import React, { useRef, useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

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
        className="flex  relative items-center shrink-0 mr-[20px] mobile:mr-[10px]"
        key={index}
        style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
      >
        {typeof item === 'string' || isStaticImageData(item) ? (
          <div
            className="flex overflow-hidden rounded-[20px] mobile:rounded-[12px]"
            style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
          >
            <Image
              alt={`Carousel item ${index + 1}`}
              src={item}
              layout="responsive"
              objectFit="cover"
              width={itemWidth}
              height={itemHeight}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        ) : (
          item
        )}
      </div>
    ));
  };

  return (
    <div className="flex overflow-hidden whitespace-nowrap" ref={carouselRef}>
      {renderItems()}
    </div>
  );
}

export default InfiniteCarousel;
