import CrewTag from './crew-tag';

interface Props {
  Mascot: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  MobileMascot: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  name: string;
  role: string;
  description: string;
  tags: string[];
}

function MascotCard({
  Mascot,
  MobileMascot,
  name,
  role,
  description,
  tags,
}: Props) {
  return (
    <div className="flex mobile:w-[350px] w-[580px] h-[504px] mobile:h-[368px] justify-center items-center rounded-[40px] border border-gray-400 py-[40px] px-[118px] mobile:py-[20px]">
      <div className="flex flex-col justify-center items-center">
        <div className="pc:hidden tablet:hidden">
          <MobileMascot />
        </div>
        <div className="mobile:hidden">
          <Mascot />
        </div>
        <div className="text-[22px] mobile:text-[20px] font-bold mt-[24px]">
          {name}
        </div>
        <div>{role}</div>
        <div>{description}</div>
        <div className="flex w-full justify-center gap-x-[10px] mt-[16px] mobile:mt-[8px]">
          {tags.map((tag: string, index: number) => (
            <CrewTag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MascotCard;
