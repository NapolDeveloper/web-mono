'use client';

import Link from 'next/link';

interface ContentWrapperProps {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
}

function ContentWrapper({ children, link, onClick }: ContentWrapperProps) {
  const className =
    'flex mobile:items-center tablet:items-center mobile:flex-col mobile:text-center bg-white rounded-[40px] mobile:w-[340px] mobile:h-[274px] w-[580px] h-[200px] p-[40px] pc:text-left tablet:text-left';

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default ContentWrapper;
