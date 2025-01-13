import Link from 'next/link';
interface Props {
  link?: string;
}

function ContactChannelImage({ link }: Props) {
  return link ? (
    <Link
      href={link}
      className="bg-[#EDF7F9] w-[120px] h-[120px] rounded-full"
      target="_blank"
      rel="noopener noreferrer"
    />
  ) : (
    <div className="bg-[#EDF7F9] w-[120px] h-[120px] rounded-full"></div>
  );
}

export default ContactChannelImage;
