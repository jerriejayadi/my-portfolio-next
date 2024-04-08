import { Instagram } from "iconsax-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin, CiMail } from "react-icons/ci";

export default function About() {
  const t = useTranslations("about");
  return (
    <div
      className={`grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 `}
    >
      <div className={`sm:pl-20`}>
        <Image
          className={`rounded-3xl`}
          alt=""
          src={`/profile.jpg`}
          width={500}
          height={500}
        />
      </div>

      <div className={`lg:order-first lg:row-span-2`}>
        <div className={`text-4xl font-bold mb-10 sm:text-5xl`}>
          {t("title")}
        </div>
        <div>
          {t.rich("desc", {
            guidelines: (chunk) => (
              <>
                <br />
                <br />
                {chunk}
              </>
            ),
          })}
        </div>
      </div>

      <div
        className={`sm:pl-20 flex flex-col gap-4 divide-y-2 divide-gray-500`}
      >
        <div className={`flex flex-col gap-4`}>
          <div className={``}>
            <a
              className={`flex flex-row gap-4`}
              href={`https://www.instagram.com/jerriejayadi`}
            >
              <Instagram className={`w-6 h-6`} />{" "}
              <span>Follow on Instagram</span>
            </a>
          </div>
          <div className={``}>
            <a
              className={`flex flex-row gap-4`}
              href={`https://www.linkedin.com/in/jerriejayadi `}
            >
              <CiLinkedin className={`w-6 h-6`} />{" "}
              <span>Follow on LinkedIn</span>
            </a>
          </div>
          <div>
            <a
              className={`flex flex-row gap-4`}
              href={`https://www.github.com/jerriejayadi`}
            >
              <AiFillGithub className={`w-6 h-6`} />{" "}
              <span>Follow on Github</span>
            </a>
          </div>
        </div>
        <div className={`py-4`}>
          <a
            className={`flex flex-row gap-4`}
            href={`https://www.github.com/jerriejayadi`}
          >
            <CiMail className={`w-6 h-6`} /> <span>jerriejayadi@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
