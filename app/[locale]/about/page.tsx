import { Instagram } from "iconsax-react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin, CiMail } from "react-icons/ci";

export default function Home() {
  return (
    <div
      className={`grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 `}
    >
      <div>
        <Image
          className={`rounded-3xl pl-20`}
          alt=""
          src={`/profile.jpg`}
          width={500}
          height={500}
        />
      </div>

      <div className={`lg:order-first lg:row-span-2`}>
        <div className={`text-5xl font-bold mb-10`}>
          I’m Jerrie Jayadi, Front End Developer Indonesia
        </div>
        <div>
          I started my journey as a Front End Developer as a Gamers when I was
          in elementary school. I was still an anti-social kid at that time, so
          I played a lot with my computer.
          <br />
          <br />
          Growing up as a kid who plays a lot of computer AND an introvert, when
          the adults are asking me &quot;what is your dreams?&quot; I just
          answered them &quot;I wanna be a programmer&quot; so that I can evade
          the conversation quickly.
          <br />
          <br />
          Thanks to the almighty Lord, in High School, there is a computer class
          where they taught basic Web Programming, from HTML, CSS, PHP and
          JavaScript. That is my first milestone as a programmer, especially web
          development. During my days in Universities, i get to learn how to use
          frameworks such as bootstraps.
          <br />
          <br />
          Today, I am here as a Front End Developer thanks to the journey that
          God let me through. Looking back to how I passed those days, I
          can&apos;t help but feel grateful overtime. It&apos;s all because of
          God and only God. Without His power, I don&apos;t think I&apos;ll make
          it to this point.
        </div>
      </div>

      <div className={`pl-20 flex flex-col gap-4 divide-y-2 divide-gray-500`}>
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
