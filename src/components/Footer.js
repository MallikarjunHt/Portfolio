import React, {useEffect, useState} from 'react'
import GitHubButton from 'react-github-btn'
import axios from 'axios';
import ProjectCard from './ProjectCard';

const getStars = async (url) => {
    const data = await fetch(url).then(res => res.json()).then(data => data);
    return data;
}

function Footer({githubUrl}) {
    const [data, setData] = useState([]);
        useEffect(async() => {
            console.log("affect")
            setData(await getStars(githubUrl));
        });
        console.log("data", data);
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with <span role="img" aria-label="heart">💙</span> by <a className="text-blue-500 hover:underline" href="https://github.com/BraydenTW">Mallikarjun H T</a>
      </p>
      {data.map((name, description, topics, url) => (
                <ProjectCard project={name, description, topics, url} />
            ))}
       <GitHubButton href={"https://github.com/MallikarjunHt"} data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Followers</GitHubButton>
      &nbsp;&nbsp;
    </div>
  )
}

export default Footer