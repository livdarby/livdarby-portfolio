import { useState } from "react";

function HomePage() {
  const [logosHidden, setLogosHidden] = useState(true);
  const [projectListHidden, setProjectListHidden] = useState(true);
  const [aboutMeHidden, setAboutMeHidden] = useState(true);
  const [premierPicksHidden, setPremierPicksHidden] = useState(true);
  const [gameHidden, setGameHidden] = useState(true);
  const [quizHidden, setQuizHidden] = useState(true);
  const [shopHidden, setShopHidden] = useState(true);

  const languages = ["JavaScript", "TypeScript", "Python"];
  const frontEnd = ["React", "HTML", "CSS", "Tailwind CSS", "Bulma"];
  const backEnd = ["Node.js", "Express", "Flask"];
  const databaseSkills = [
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "SQLAlchemy",
    "Mongoose",
  ];
  const deployment = [
    "Heroku",
    "Netlify",
    "Git",
    "GitHub",
    "Insomnia",
    "TablePlus",
    "Mongo Atlas",
  ];

  function handleSkillsClick() {
    logosHidden ? setLogosHidden(false) : setLogosHidden(true);
    !projectListHidden && setProjectListHidden(true);
    !aboutMeHidden && setAboutMeHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
    !quizHidden && setQuizHidden(true);
    !shopHidden && setShopHidden(true);
  }

  function handleProjectsClick() {
    projectListHidden
      ? setProjectListHidden(false)
      : setProjectListHidden(true);
    !logosHidden && setLogosHidden(true);
    !aboutMeHidden && setAboutMeHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
    !quizHidden && setQuizHidden(true);
    !shopHidden && setShopHidden(true);
  }

  function handleAboutMeClick() {
    aboutMeHidden ? setAboutMeHidden(false) : setAboutMeHidden(true);
    !projectListHidden && setProjectListHidden(true);
    !logosHidden && setLogosHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
    !quizHidden && setQuizHidden(true);
    !shopHidden && setShopHidden(true);
  }

  function handlePremierPicksClick() {
    premierPicksHidden
      ? setPremierPicksHidden(false)
      : setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
    !quizHidden && setQuizHidden(true);
    !shopHidden && setShopHidden(true);
  }

  function gameClick() {
    gameHidden ? setGameHidden(false) : setGameHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !quizHidden && setQuizHidden(true);
    !shopHidden && setShopHidden(true);
  }

  function quizClick() {
    quizHidden ? setQuizHidden(false) : setQuizHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
    !shopHidden && setShopHidden(true);
  }

  function shopClick() {
    shopHidden ? setShopHidden(false) : setShopHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
    !quizHidden && setQuizHidden(true);
  }

  return (
    <>
      <section className="bg-[#2a2a2a] h-screen flex flex-col justify-center">
        <div className="py-5 bg-[#e4e2dd] px-5 lg:mx-[20%] md:mx-[5%] min-h-[80%] max-h-content flex flex-col justify-center gap-5 my-auto">
          <div
            onClick={handleAboutMeClick}
            className="uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer"
          >
            <p className="font-title font-extrabold tracking-wider text-lg">
              about me
            </p>
            <img src="../assets/plus.png" className="max-h-3" />
          </div>
          {!aboutMeHidden && (
            <>
              <div>
                <p className="font-garamond text-lg">Hi 👋 </p>
                <p className="font-garamond text-lg">
                  I'm Olivia (I also go by Liv!) and I'm a full-stack junior
                  developer based in London.
                </p>
                <p className="font-garamond text-lg">
                  I have experience with{" "}
                  <span className="font-bold">
                    React, Node, Express, HTML and CSS,
                  </span>{" "}
                  amongst others.
                </p>
                <p className="font-garamond text-lg">
                  My background is in Account Management and Business
                  Development in the influencer and affiliate marketing
                  industry. I've always had a passion for fashion and beauty
                  since my work experience days at Condé Nast, and have had the
                  privilege of working with some incredible brands during my
                  career, including Nike, Selfridges, Space NK & Charlotte
                  Tilbury.
                </p>
                <p className="font-garamond text-lg">
                  As a Business Developer Manager, I oversaw the technical
                  integration and launch of my clients and worked closely with
                  dev teams. This exposure, coupled with my solutions-driven
                  mindset, sparked my interest in software development.
                </p>
                <p className="font-garamond text-lg">
                  I knew I wanted to pursue a career change, so I took the leap
                  and completed a full-time Software Engineering Bootcamp with
                  General Assembly between January and April 2024. This was the
                  best decision I've ever made and truly solidified my passion
                  for coding.
                </p>
              </div>
              <div>
                <h1 className="font-title font-bold tracking-wider">
                  Currently listening to...
                </h1>
                <iframe
                  className="border-radius:12px my-2 h-40 w-[40%]"
                  src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <h1 className="font-title font-bold tracking-wider uppercase">
                  Currently watching...
                </h1>
              </div>
              <div>
                <h1 className="font-title font-bold tracking-wider uppercase">
                  Currently doing...
                </h1>
              </div>
            </>
          )}

          <hr />

          <div className="uppercase font-semibold tracking-wide text-gray-800 flex flex-wrap gap-1">
            <span
              onClick={handleSkillsClick}
              className="flex items-center gap-1 cursor-pointer"
            >
              <p className="font-title font-extrabold tracking-wider text-lg">
                skills
              </p>
              <img src="../assets/plus.png" className="max-h-3" />
            </span>
            <div className="w-[100%]"></div>

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto items-center flex-wrap bg-[#fbfaf9] px-2 py-1 rounded justify-center">
                  <p className="tracking-widest w-[100%] text-center text-[#2a2a2a] mt-4">
                    Languages
                  </p>
                  {languages.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 mb-4 mt-2 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-1 rounded justify-center">
                  <p className="tracking-widest w-[100%] text-center text-[#2a2a2a] mt-4">
                    Front-end frameworks
                  </p>
                  {frontEnd.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 mb-4 mt-2 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-1 rounded justify-center">
                  <p className="tracking-widest w-[100%] text-center text-[#2a2a2a] mt-4">
                    Back-end frameworks
                  </p>
                  {backEnd.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 mb-4 mt-2 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="flex my-2 gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-1 rounded justify-center">
                  <p className="tracking-widest w-[100%] text-center text-[#2a2a2a] mt-4">
                    Databases
                  </p>
                  {databaseSkills.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 mb-4 mt-2 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="flex my-2 gap-1 md:gap-2 w-[100%] md:w-[55%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-1 rounded justify-center">
                  <p className="tracking-widest w-[100%] text-center text-[#2a2a2a] mt-4">
                    Deployment & Tools
                  </p>
                  {deployment.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 mb-4 mt-2 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <hr />
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex flex-col gap-1 justify-center">
            <div
              onClick={handleProjectsClick}
              className="flex items-center gap-1 cursor-pointer"
            >
              <p className="font-title font-extrabold tracking-wider text-lg">
                projects
              </p>
              <img src="../assets/plus.png" className="max-h-3" />
            </div>
            {!projectListHidden && (
              <ul className="cursor-default list-disc ml-6 font-garamond normal-case text-lg">
                <li
                  onClick={handlePremierPicksClick}
                  className="hover:text-xl hover:text-[#787878] cursor-pointer  my-2"
                >
                  Premier Picks
                </li>
                {!premierPicksHidden && (
                  <div className="flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 md:bg-transparent">
                    <img
                      className="my-5 h-48 shadow-lg rounded border"
                      src="../../assets/pp-gif.gif"
                      alt="App gif"
                    />
                    <p className="font-garamond normal-case font-normal text-center md:text-left">
                      A Premier League predictions app, that enables members to
                      input and edit predictions for upcoming match weeks. The
                      code checks predictions against match scores, awarding
                      points for user accuracy. User points are displayed in the
                      league leaderboard, which is sorted in descending order.
                      <br />
                      <p className="my-2 font-semibold">
                        <a
                          className="underline"
                          target="_blank"
                          href="https://premier-picks.netlify.app/"
                        >
                          Sign up today!
                        </a>
                      </p>
                    </p>
                  </div>
                )}
                <li
                  onClick={gameClick}
                  className="hover:text-xl hover:text-[#787878] cursor-pointer my-2"
                >
                  Cabbage Patch Protector
                </li>
                {!gameHidden && (
                  <div className="flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 md:bg-transparent">
                    <img
                      src="../../assets/cpp-gif.gif"
                      alt="Cabbage Patch Protector gameplay gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-garamond normal-case font-normal text-center md:text-left">
                      An original twist on the classic Minesweeper game. Cabbage
                      Patch Protector is a JavaScript grid-based game that is
                      playable on desktop across three difficulty levels.
                      Correctly locate all the caterpillars on the board,
                      marking them with a jar as you go and try to beat your
                      high score!
                      <br />
                      <p className="my-2 font-semibold">
                        <a
                          className="underline"
                          target="_blank"
                          href="https://livdarby.github.io/SEB-Project-1/"
                        >
                          Click here to play!
                        </a>
                      </p>
                    </p>
                  </div>
                )}
                <li
                  onClick={quizClick}
                  className="hover:text-xl hover:text-[#787878] cursor-pointer my-2"
                >
                  Quiz Game
                </li>
                {!quizHidden && (
                  <div className="flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 md:bg-transparent">
                    <img
                      src="../../assets/quiz.gif"
                      alt="Quiz Game example gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-garamond normal-case font-normal text-center md:text-left">
                      A mutliple choice quiz game, fetching 10 random general
                      knowledge questions from the Open Trivia public API.
                      Players select one of four possible answers, and their
                      score is revealed once the quiz is completed.
                      <br />
                      <p className="my-2 font-semibold">
                        <a
                          className="underline"
                          target="_blank"
                          href="https://catherine-liv-project-2.netlify.app/"
                        >
                          Click here to play!
                        </a>
                      </p>
                    </p>
                  </div>
                )}
                <li
                  onClick={shopClick}
                  className="hover:text-xl hover:text-[#787878] cursor-pointer my-2"
                >
                  GourmetVoyage E-Shop
                </li>
                {!shopHidden && (
                  <div className="flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 md:bg-transparent">
                    <img
                      src="../../assets/shop.gif"
                      alt="GourmetVoyage site walkthrough gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-garamond normal-case font-normal text-center md:text-left">
                      Buyers can browse, 'purchase' and leave reviews on
                      products that are posted to the site via the seller
                      portal. Sellers can create, update and edit their products
                      and the have access to a dashboard which shows units per
                      product and total units sold.
                      <br />
                      <p className="my-2 font-semibold">
                        <a
                          className="underline"
                          target="_blank"
                          href="https://gourmet-e-shop-front.netlify.app/"
                        >
                          Take a look!
                        </a>
                      </p>
                    </p>
                  </div>
                )}
              </ul>
            )}
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}

export default HomePage;
