import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Organisms/Navbar";
import ArticleSection from "./_components/ArticleSection";
import WorkExperience from "./_components/Organisms/WorkExperience";
import { AiOutlineMail } from "react-icons/ai";
import Footer from "./_components/Organisms/Footer";
import Navbar2 from "./_components/Organisms/Navbar2";

export default function Home() {
  return (
    <main>
      <div className={`w-full`}>
        <HeroSection />
      </div>
      <div
        className={`flex flex-col md:flex-row mt-24 justify-between gap-24 md:gap-0`}
      >
        <div className={`flex flex-col w-full md:w-1/2 gap-10 md:-ml-6`}>
          <ArticleSection
            date={"5 September 2023"}
            title={"How to: Play Genshin Impact with Heart"}
            summary={
              "Ex fugiat duis qui mollit consequat sit et qui nostrud nostrud duis eiusmod. Irure aute laborum non deserunt nulla amet nulla velit eiusmod ad officia proident."
            }
            url={`/blog/article1`}
          />
          <ArticleSection
            date={"5 September 2023"}
            title={"How to: Play Genshin Impact with Heart"}
            summary={
              "Ex fugiat duis qui mollit consequat sit et qui nostrud nostrud duis eiusmod. Irure aute laborum non deserunt nulla amet nulla velit eiusmod ad officia proident."
            }
            url={`/blog/article2`}
          />
          <ArticleSection
            date={"5 September 2023"}
            title={"How to: Play Genshin Impact with Heart"}
            summary={
              "Ex fugiat duis qui mollit consequat sit et qui nostrud nostrud duis eiusmod. Irure aute laborum non deserunt nulla amet nulla velit eiusmod ad officia proident."
            }
            url={`/blog/article3`}
          />
        </div>
        <div className={`md:w-1/2 md:px-4 lg:px-12 gap-4 flex-col flex`}>
          <div className="flex flex-col w-full gap-5 p-4 border border-gray-700 rounded-lg">
            <div className="flex gap-3">
              <AiOutlineMail className="w-6 h-6" />
              Stay up to date
            </div>
            <div className="text-sm">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                className="w-full px-3 py-1 text-sm border border-gray-700 rounded-sm bg-inherit bg-opacity-30"
                placeholder="Email Address"
              />
              <button className="px-3 py-1 font-bold transition-all duration-100 border-gray-700 rounded-md bg-primaryOrange hover:bg-secondaryOrange text-primaryBlack">
                Join
              </button>
            </div>
          </div>
          <WorkExperience />
        </div>
      </div>
    </main>
  );
}
