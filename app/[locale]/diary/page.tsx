import ArticleSection from "../_components/ArticleSection";

const Diary = () => {
  return (
    <>
      <div className={`w-full  sm:w-[70%] `}>
        <div className={`text-4xl sm:text-5xl font-bold leading-tight`}>
          Hello, my beloved friends! This is my private diary! You are very
          special that you&apos;re able to get in to this page!
        </div>
        <div className={`text-base mt-6 text-primaryOrange`}>
          My personal diary, where I write anything that I literally want.
          Thoughts, journey, and Jesus Christ of course.
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
};

export default Diary;
