import WorkExperienceDetail from "../../Molecules/WorkExperienceDetail";

interface WorkExperienceProps {}

const experienceList = [
  {
    companyName: "Nanobyte",
    companyLogo: "/nanobyte.jpg",
    jobPosition: "Front End Developer Support",
    year: "2022-present",
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
        <a
          href={`/CV.pdf`}
          download
          className="w-full px-3 py-2 text-sm font-bold transition duration-100 rounded-md bg-primaryOrange hover:bg-secondaryOrange text-primaryBlack"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
