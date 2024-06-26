import React from "react";
import beautybebo from "../assets/portfolio/beautybebo.jpg";
import colorclip from "../assets/portfolio/colorclip.jpg";
import bathandBeauty from "../assets/portfolio/bathandBeauty.jpg";
import portfolio from "../assets/portfolio/portfolio.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: beautybebo,
      link: 'https://beauty-bebo-clone.vercel.app/',
      repo: 'https://github.com/Akash-kumar-2021/beauty-bebo-clone'
    },
    {
      id: 2,
      src: bathandBeauty,
      link: 'https://bath-body-clone.vercel.app/',
      repo: 'https://github.com/Akash-kumar-2021/Bath-Body-Clone'
    },
    {
      id: 3,
      src: colorclip,
      link: 'https://color-fipper.vercel.app/',
      repo: 'https://github.com/Akash-kumar-2021/ColorFipper'
    },
    
    {
      id: 4,
      src: portfolio,
      link: 'https://akash-kumar-2021.github.io/Portfolio/',
      repo: 'https://github.com/Akash-kumar-2021/Portfolio'
    }, 
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black to-gray-800 w-full text-white md:h-screen portfolio "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
