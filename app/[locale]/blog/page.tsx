import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import ArticleSection from "../_components/ArticleSection";
import HeroSection from "../_components/HeroSection";
import Footer from "../_components/Organisms/Footer";
import Navbar from "../_components/Organisms/Navbar";
import WorkExperience from "../_components/Organisms/WorkExperience";

export default function Blog() {
  return (
    <>
      <div className={`w-full  sm:w-[70%] `}>
        <div className={`text-4xl sm:text-5xl font-bold leading-tight`}>
          Writing about Jesus Christ my God and personal experience with Him,
          Software Engineering, Hobbies, personal thoughts, etc
        </div>
        <div className={`text-base mt-6 text-primaryOrange`}>
          Anything that has been running on my mind and moved me to share to you
          guys. Collected in chronological order{" "}
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 mt-4 sm:mt-16 sm:-ml-8 sm:max-w-[90%]`}
      >
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
    </>
  );
}
