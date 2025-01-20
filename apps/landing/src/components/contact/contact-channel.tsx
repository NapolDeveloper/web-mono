'use client';

import ContentWrapper from '@components/contact/content-wrapper';
interface Props {
  name: string;
  link?: string;
  copy?: string;
  show?: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onCopy?: () => void;
}

function ContactChannel({ name, link, copy, show, Icon, onCopy }: Props) {
  const handleCopy = async () => {
    if (!copy) return;

    try {
      await navigator.clipboard.writeText(copy);
      onCopy?.();
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <ContentWrapper link={link} onClick={handleCopy}>
      <Icon />
      <div className="mobile:w-max mobile:h-[54px] mobile:mt-[20px] flex flex-col ml-[40px] mobile:ml-0  pc:mt-[33px] text-suldak-gray-900">
        <div className="text-[24px] font-semibold w-full">{name}</div>
        <div className="text-[16px]"> {show}</div>
        {copy}
      </div>
    </ContentWrapper>
  );
}

export default ContactChannel;
