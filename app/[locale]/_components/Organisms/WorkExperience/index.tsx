import WorkExperienceDetail from "../../Molecules/WorkExperienceDetail";

interface WorkExperienceProps {}

const experienceList = [
  {
    companyName: "Nanovest",
    companyLogo: "/logo192.png",
    jobPosition: "Front End Developer Support",
    year: "2022-present",
  },
  {
    companyName: "AiDiTech",
    companyLogo: "/logo192.png",
    jobPosition: "Researchers",
    year: "2021-2022",
  },
];

export default function WorkExperience() {
  return (
    <div className="flex flex-col w-full gap-5 p-4 border border-gray-700 rounded-lg">
      <div>Work</div>
      {experienceList.map((rows: any, index: number) => (
        <WorkExperienceDetail
          key={index}
          companyLogo={rows.companyLogo}
          companyName={rows.companyName}
          jobPosition={rows.jobPosition}
          year={rows.year}
        />
      ))}

      <div>
        <button className="w-full px-3 py-2 text-sm font-bold transition duration-100 rounded-md bg-primaryOrange hover:bg-secondaryOrange text-primaryBlack">
          Download CV
        </button>
      </div>
    </div>
  );
}
