import WineBarIcon from '@assets/icons/ico-wine-bar.svg';
import HeartIcon from '@assets/icons/ico-heart.svg';
import MessageIcon from '@assets/icons/ico-message.svg';

interface CrewCardProps {
  Crew: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  alchol: string;
  favor: string;
  comment: string;
}

function CrewCard({ Crew, name, role, alchol, favor, comment }: CrewCardProps) {
  return (
    <div className="flex w-[580px] h-[226px] justify-center items-center">
      <div className="flex-shrink-0">
        <Crew />
      </div>
      <div className="flex flex-col w-[335px] h-[226px] ml-[20px] overflow-hidden">
        <div className="text-[24px] font-semibold">{name}</div>
        <div className="text-[16px]">{role}</div>
        <div className="flex items-center text-[14px] mt-[26px] gap-x-[4px] text-suldak-gray-700">
          <div className="flex-shrink-0">
            <WineBarIcon />
          </div>
          <div className="break-words">{alchol}</div>
        </div>
        <div className="flex  text-[14px] gap-x-[4px] text-suldak-gray-700">
          <div className="flex-shrink-0 mt-0">
            <HeartIcon />
          </div>
          <div className="break-words overflow-hidden">{favor}</div>
        </div>
        <div className="flex items-start text-[14px] gap-x-[4px] text-suldak-gray-700">
          <div className="flex-shrink-0">
            <MessageIcon />
          </div>
          <div className="break-words overflow-hidden">{comment}</div>
        </div>
      </div>
    </div>
  );
}

export default CrewCard;
