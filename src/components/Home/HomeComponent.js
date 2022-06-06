import React from "react";
import CardElement from "../Utilities/card";
export const HomeComponent = () => {
  const mainOptions = [
    {
      title: "Reserve Tuition",
      description:
        "You can easily book up to 15 Min with a Tutor to revisit a topic and practice a specific English Skill to increase your English level.",
      icon: "faVideo",
      link: "/tuitions",
      cta: "Make a Reservation",
      bg: "bg-blue-500",
    },
    {
      title: "FIA MOOC",
      description: `Open Courses for any FIA student to practice everyday skills that are 
        worthy of knowing those in any job (Finances,Oratory, etc.)`,
      icon: "faGraduationCap",
      link: "/",
      cta: "Check the Courses",
      bg: "bg-yellow-400",
    },
    {
      title: "FIA English",
      description: `Technical English Courses to improve the knowledge of this language. Specifically, in your application field`,
      icon: "faLanguage",
      link: "/",
      cta: "Start Learning",
      bg: "bg-green-400",
    },
  ];
  return (
    <div className="p-7 text-2xl font-semibold w-full flex-1  h-[calc(100%_-_4rem)]">
      <div className="flex justify-evenly items-center h-full">
        {mainOptions.map((option, id) => {
          return (
            <CardElement
              key={id}
              title={option.title}
              description={option.description}
              icon={option.icon}
              link={option.link}
              cta={option.cta}
              bg={option.bg}
            />
          );
        })}
      </div>
    </div>
  );
};
