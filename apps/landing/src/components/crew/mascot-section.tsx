import AriMascot from '@assets/icons/ico-mascot-ari.svg';
import CoriMascot from '@assets/icons/ico-mascot-cori.svg';
import TalkImg from '@assets/icons/ico-talk.svg';
import MascotCard from '@/components/crew/mascot-card';
import SmallAriMascot from '@assets/icons/ico-small-ari.svg';
import SmallCoriMascot from '@assets/icons/ico-small-cori.svg';
// SVG 컴포넌트를 위한 타입 정의
type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface MascotData {
  Mascot: SVGComponent;
  MobileMascot: SVGComponent; // 모바일용 마스코트 추가
  name: string;
  role: string;
  description: string;
  tags: string[];
}

const ariMascot = AriMascot as SVGComponent;
const coriMascot = CoriMascot as SVGComponent;
const smallAriMascot = SmallAriMascot as SVGComponent;
const smallCoriMascot = SmallCoriMascot as SVGComponent;

const mascots: MascotData[] = [
  {
    Mascot: ariMascot,
    MobileMascot: smallAriMascot,
    name: '아리',
    role: '술닥술닥의 주류 담당',
    description: '알코올계의 백과사전 병아리',
    tags: ['#소맥', '#모임좋아', '#새로운 술 환영'],
  },
  {
    Mascot: coriMascot,
    MobileMascot: smallCoriMascot,
    name: '코리',
    role: '술닥술닥의 맛집 담당',
    description: '맛잘알 갈매기',
    tags: ['#와인', '#맛집탐방', '#쩝쩝박사'],
  },
];

function MascotSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[860px] tablet:h-auto mobile:h-[1200px] py-[120px] mobile:py-[60px]">
      <div className="flex flex-col pc:w-[1200px] mobile:w-full mobile:px-[20px] tablet:w-full tablet:px-[40px] justify-center">
        <div className="text-[32px] mobile:text-[22px] font-semibold">
          <div className="flex tablet:justify-center mobile:justify-center mb-[10px] mobile:mb-[8px]">
            <TalkImg />
          </div>
          <div className="mobile:hidden tablet:hidden  w-full">
            술닥술닥의 마스코트를 소개합니다
          </div>
          <div className="pc:hidden  text-center">
            술닥술닥의 마스코트를 <br />
            소개합니다
          </div>
        </div>
        <div className="flex mobile:flex-col tablet:flex-col mobile:items-center tablet:items-center gap-x-[40px] tablet:gap-y-[40px]  mt-[40px] mobile:gap-x-0 mobile:gap-y-[20px]">
          {mascots.map((mascot, index) => (
            <MascotCard key={index} {...mascot} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MascotSection;
