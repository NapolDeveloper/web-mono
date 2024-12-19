interface CrewTagProps {
  text: string;
}

const CrewTag = ({ text }: CrewTagProps): JSX.Element => {
  return (
    <div className="flex border border-solid border-suldak-mint-600 text-suldak-mint-600 w-fit whitespace-nowrap rounded-[80px] py-[8px] px-[16px]">
      {text}
    </div>
  );
};

export default CrewTag;
