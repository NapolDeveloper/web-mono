import AriMascot from '@assets/icons/ico-mascot-ari.svg';
import CoriMascot from '@assets/icons/ico-mascot-cori.svg';
import TalkImg from '@assets/icons/ico-talk.svg';
import MascotCard from '@/components/crew/mascot-card';
// SVG 컴포넌트를 위한 타입 정의
type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface MascotData {
  Mascot: SVGComponent;
  name: string;
  role: string;
  description: string;
  tags: string[];
}

// SVG 컴포넌트들의 타입을 명시적으로 지정
const ariMascot = AriMascot as SVGComponent;
const coriMascot = CoriMascot as SVGComponent;

const mascots: MascotData[] = [
  {
    Mascot: ariMascot,
    name: '아리',
    role: '술닥술닥의 주류 담당',
    description: '알코올계의 백과사전 병아리',
    tags: ['#소맥', '#모임좋아', '#새로운 술 환영'],
  },
  {
    Mascot: coriMascot,
    name: '코리',
    role: '술닥술닥의 맛집 담당',
    description: '맛잘알 갈매기',
    tags: ['#와인', '#맛집탐방', '#쩝쩝박사'],
  },
];

function MascotSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[860px] py-[120px]">
      <div className="flex flex-col w-[1200px] justify-center">
        <div className="text-[32px] font-semibold">
          <TalkImg />
          술닥술닥의 마스코트를 소개합니다
        </div>
        <div className="flex gap-x-[40px] mt-[40px]">
          {mascots.map((mascot, index) => (
            <MascotCard key={index} {...mascot} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MascotSection;
