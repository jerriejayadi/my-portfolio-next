interface ArticleSection {
  date: string;
  title: string;
  summary: string;
}

const ArticleSection = ({ date, title, summary }: ArticleSection) => {
  return (
    <div className="flex flex-col gap-5  transition duration-100 hover:bg-gray-700 rounded-3xl  py-5 md:px-4 lg:px-8">
      <div className="text-sm opacity-50">| {date}</div>
      <div className="flex flex-col gap-3">
        <div className="text-base">{title}</div>
        <div className="text-sm leading-loose opacity-50">{summary}</div>
      </div>
      <div className="text-sm text-primaryOrange">Read Article &gt;</div>
    </div>
  );
};

export default ArticleSection;
