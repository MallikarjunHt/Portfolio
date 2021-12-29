import React from "react";
import SkillCard from "./SkillCard";

export default function Skills({ skills }) {
  return (
    <div class="flex flex-wrap space-x-4 justify-center">
      {skills.map((skill) => {
        return (
          <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} discription={skill.discription} />
        );
      })}
    </div>
  );
}