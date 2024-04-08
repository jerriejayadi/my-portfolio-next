import Image from "next/image";

interface WorkExperienceDetailProps {
  companyLogo: any;
  companyName: string;
  jobPosition: string;
  year: string;
}

export default function WorkExperienceDetail({
  companyLogo,
  companyName,
  jobPosition,
  year,
}: WorkExperienceDetailProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <Image
          alt=""
          src={companyLogo}
          className="w-5 h-5 rounded-full"
          width={30}
          height={30}
        />
        <div>
          <div className="font-semibold">{companyName}</div>
          <div className="text-xs font-light tracking-wide ">{jobPosition}</div>
        </div>
      </div>
      <div className="text-xs font-light">{year}</div>
    </div>
  );
}
