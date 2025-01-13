'use client';

import Link from 'next/link';
import ContactChannelImage from './contact-channel-image';
interface Props {
  name: string;
  link?: string;
  copy?: string;
  show?: string;
  onCopy?: () => void;
}

function ContactChannel({ name, link, copy, show, onCopy }: Props) {
  const handleCopy = async () => {
    if (copy) {
      try {
        await navigator.clipboard.writeText(copy);
        onCopy?.();
      } catch (err) {
        console.error('Failed to copy text:', err);
      }
    }
  };

  return (
    <div className="flex mobile:items-center mobile:flex-col  mobile:text-center bg-white rounded-[40px] mobile:w-[340px] mobile:h-[274px] w-[580px] h-[200px] p-[40px]">
      <ContactChannelImage link={link} />
      <div className="flex flex-col ml-[40px] mobile:ml-0 mt-[20px] pc:mt-[33px] text-suldak-gray-900">
        <div className="text-[24px] font-semibold w-full">{name}</div>
        {link && (
          <Link
            className="text-[16px]"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {show}
          </Link>
        )}
        {copy && (
          <button className="text-[16px] text-left" onClick={handleCopy}>
            {copy}
          </button>
        )}
      </div>
    </div>
  );
}

export default ContactChannel;
