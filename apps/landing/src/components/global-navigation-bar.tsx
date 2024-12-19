import { usePathname } from 'next/navigation';
import Logo from '@assets/icons/ico-medium-logo.svg';
import Link from 'next/link';

function GlobalNavigationBar() {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const footer = document.getElementById('footer');
    if (footer) {
      // 모든 페이지에서 동일하게 처리
      footer.scrollIntoView({
        behavior: 'smooth',
        block: 'end', // viewport의 끝에 요소가 위치하도록 스크롤
      });
    }
  };

  return (
    <>
      <div className="w-screen fixed top-0 left-0 right-0 h-[60px] bg-suldak-mint-500 backdrop-blur-sm z-50">
        <div className="h-full w-full flex items-center relative">
          <div className="absolute" style={{ left: '18.75%' }}>
            <Logo />
          </div>
          <nav className="w-full flex justify-end items-center">
            <div className="flex gap-8 absolute" style={{ right: '18.75%' }}>
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

      {/* 스페이서 div */}
      <div className="h-[60px]" />
    </>
  );
}

export default GlobalNavigationBar;
