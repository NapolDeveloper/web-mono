function CrewPageHeader() {
  return (
    <div className="flex w-full h-[404px] mobile:h-[200px] justify-center items-center bg-suldak-mint-500 text-white mobile:text-[20px] text-[42px]">
      <div className="flex flex-col w-[1200px] max-w-full mobile:px-[40px] tablet:px-[40px]">
        <div className="font-bold text-[56px] mobile:text-[36px]">
          반가워요!
        </div>
        <div>건강하고 유쾌한 음주 문화를</div>
        <div>
          만들어가는 <span className="font-bold">팀 술닥</span>입니다.
        </div>
      </div>
    </div>
  );
}

export default CrewPageHeader;
