import { useTranslations } from "next-intl";
import Image from "next/image";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const SOCIAL_MEDIA = [
  {
    id: 0,
    name: "instagram",
  },
];

const HeroSection = () => {
  const t = useTranslations("Index");
  return (
    <section id="home">
      <div className="flex flex-col md:text-left ">
        <div className={`md:w-1/5`}>
          <Image
            className={`rounded-full w-20 h-20 md:w-28 md:h-28`}
            src="/profile.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className={`md:w-3/5`}>
          <h1 className={`font-bold text-4xl mt-6 md:text-6xl`}>
            {t("title")}
          </h1>
          <p className={"text-lg mt-4 mb-6 md:mt-8"}>{t("desc")}</p>
        </div>
        <div>
          <div className={`flex`}>
            <AiOutlineInstagram className={`w-8 h-8 text-primaryOrange`} />
            <AiFillLinkedin className={`w-8 h-8 text-primaryOrange`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
