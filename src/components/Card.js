import React from "react";
import profile from "../images/profile.png";

const getSocials = (social) => {
    var socialArr = [];
    Object.keys(social).forEach(function(key) {
        socialArr.push(social[key]);
      });
      return socialArr
}
export default function Card({ name, title, social }) {
    const socialArray = getSocials(social);
    
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full"
            src={profile}
            alt="Profile face"
          />
        </div>
       
    
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            {name}
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            {title}
          </p>
          <div className="flex align-center justify-center mt-4">
          {socialArray.map(({url, iconName, title} )=> {
              return (<a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href={url}
            >
                {iconName}
              <span class="sr-only">{title}</span>
            </a>);
          })}
          </div>
        </div>
      </div>
    </div>
  );
}