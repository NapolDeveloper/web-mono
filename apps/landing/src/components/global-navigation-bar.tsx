'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from '@assets/icons/ico-medium-logo.svg';
import Bars from '@assets/icons/ico-bars.svg';
import Link from 'next/link';

function GlobalNavigationBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    router.push('/contact');
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="w-screen fixed top-0 left-0 right-0 h-[62px] bg-suldak-mint-500 backdrop-blur-sm z-50">
        <div className="h-full w-full flex items-center justify-between relative mobile:px-[20px]">
          <div className="absolute left-[18.75%] tablet:left-[40px] mobile:relative mobile:left-0">
            <Logo />
          </div>
          <div className="flex justify-end w-full mobile:w-auto">
            <button className="hidden mobile:block" onClick={handleMenuToggle}>
              <div className="w-6 h-6 relative">
                {isMenuOpen ? (
                  <>
                    <div className="absolute w-6 h-0.5 bg-white top-1/2 transform -translate-y-1/2 rotate-45"></div>
                    <div className="absolute w-6 h-0.5 bg-white top-1/2 transform -translate-y-1/2 -rotate-45"></div>
                  </>
                ) : (
                  <Bars />
                )}
              </div>
            </button>
            <nav className="mobile:hidden w-full flex justify-end items-center">
              <div className="flex gap-8 absolute right-[18.75%] tablet:right-[40px]">
                <Link
                  href="/"
                  className={`text-lg text-white hover:opacity-80 transition-opacity ${
                    pathname === '/' ? 'font-bold' : 'font-normal'
                  }`}
                >
                  HOME
                </Link>
                <Link
                  href="/our-crew"
                  className={`text-lg text-white hover:opacity-80 transition-opacity ${
                    pathname === '/our-crew' ? 'font-bold' : 'font-normal'
                  }`}
                >
                  Our Crew
                </Link>
                <button
                  onClick={handleContactClick}
                  className="text-lg text-white hover:opacity-80 transition-opacity"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="hidden mobile:block fixed h-full top-[60px] left-0 right-0 bg-suldak-mint-400 z-50">
          <div className="flex flex-col items-center py-[24px] gap-[24px]">
            <Link
              href="/"
              className={`text-[20px] text-white hover:opacity-80 transition-opacity ${
                pathname === '/' ? 'font-bold' : 'font-normal'
              }`}
              onClick={handleLinkClick}
            >
              HOME
            </Link>
            <Link
              href="/our-crew"
              className={`text-[20px] text-white hover:opacity-80 transition-opacity ${
                pathname === '/our-crew' ? 'font-bold' : 'font-normal'
              }`}
              onClick={handleLinkClick}
            >
              Our Crew
            </Link>
            <button
              onClick={handleContactClick}
              className="text-[20px] text-white"
            >
              Contact
            </button>
          </div>
        </div>
      ) : null}

      <div className="h-[62px] bg-suldak-mint-500" />
    </>
  );
}

export default GlobalNavigationBar;
