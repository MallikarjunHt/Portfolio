import React from "react";

const SkillCard = ({ skillName, skillIcon, discription }) => {
    return (
        <div class="flex p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm rounded-md">
            {skillIcon}
            <div>
                <h2 class="font-semibold text-xl">{skillName}</h2>
                <p class="mt-1 text-gray-400 text-sm cursor-pointer">{discription}</p>
            </div>
        </div>
    );
};

export default SkillCard;