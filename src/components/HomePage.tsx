import { useEffect, useState } from "react";
import Footer from "./Footer";
import cpp from "../../assets/cpp-gif.gif";
import plus from "../../assets/plus.png";
import pp from "../../assets/pp-gif.gif";
import quiz from "../../assets/quiz.gif";
import shop from "../../assets/shop.gif";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import email from "../../assets/email.png"

function HomePage() {
  const [logosHidden, setLogosHidden] = useState(true);
  const [projectListHidden, setProjectListHidden] = useState(true);
  const [aboutMeHidden, setAboutMeHidden] = useState(true);
  const [premierPicksHidden, setPremierPicksHidden] = useState(true);
  const [gameHidden, setGameHidden] = useState(true);
  const [quizHidden, setQuizHidden] = useState(true);
  const [shopHidden, setShopHidden] = useState(true);
  const [currentMonth, setCurrentMonth] = useState<null | string>(null);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    function getMonth() {
      const month = new Date().getMonth();
      setCurrentMonth(months[month]);
    }
    getMonth();
  }, []);

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
    "Vercel",
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
      <section
        id="home"
        className="bg-[#2a2a2a] h-dvh grid grid-rows-1 justify-center grid-cols-1"
      >
        <div className="row-span-1 py-5 bg-[#e4e2dd] px-5 lg:mx-[20%] md:mx-[5%] min-h-[80%] max-h-content flex flex-col justify-center gap-5 my-auto">
          <div
            onClick={handleAboutMeClick}
            className="group uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer"
          >
            <p className="hover:scale-110 hover:mx-2 font-title font-extrabold tracking-wider text-lg">
              about me
            </p>
            <img src={plus} className="max-h-3 group-hover:animate-spin-slow" />
          </div>
          {!aboutMeHidden && (
            <>
              <div className="bg-[#f9f9f8] rounded px-2 py-1 text-center shadow-md">
                <p className="font-body text-sm leading-relaxed">Hi 👋 </p>
                <br />
                <p className="font-body text-sm leading-relaxed">
                  I'm Olivia (Liv!) and I'm a{" "}
                  <span className="font-bold">full-stack junior developer</span>{" "}
                  based in London.
                </p>
                <br />
                <p className="font-body text-sm leading-relaxed">
                  I have experience with{" "}
                  <span className="font-bold">
                    React, Node, Express, HTML and CSS,
                  </span>{" "}
                  amongst others.
                </p>
                <br />
                <p className="font-body text-sm leading-relaxed">
                  My background is in Account Management and Business
                  Development in the influencer and affiliate marketing
                  industry. I've always had a passion for fashion and beauty
                  since my work experience days at Condé Nast, and have had the
                  privilege of working with some incredible brands during my
                  career, including Nike, Selfridges, Space NK & Charlotte
                  Tilbury.
                </p>
                <br />
                <p className="font-body text-sm leading-relaxed">
                  As a Business Developer Manager, I oversaw the technical
                  integration and launch of my clients and worked closely with
                  dev teams. This exposure, coupled with my solutions-driven
                  mindset, sparked my interest in software development.
                </p>
                <br />
                <p className="font-body text-sm leading-relaxed">
                  I knew I wanted to pursue a career change, so I took the leap
                  and completed a full-time{" "}
                  <span className="font-bold">
                    {" "}
                    Software Engineering Bootcamp with General Assembly
                  </span>{" "}
                  between January and April 2024. This was the best decision
                  I've ever made and truly solidified my passion for coding.
                </p>
              </div>
            </>
          )}

          <hr />

          <div className="uppercase font-semibold tracking-wide text-gray-800 flex flex-wrap gap-1">
            <div className="group">
              <span
                onClick={handleSkillsClick}
                className="flex items-center gap-1 cursor-pointer"
              >
                <p className="hover:scale-110 hover:mx-2 font-title font-extrabold tracking-wider text-lg">
                  skills
                </p>
                <img
                  src={plus}
                  className="max-h-3 group-hover:animate-spin-slow"
                />
              </span>
            </div>

            <div className="w-[100%]"></div>

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-4 rounded justify-center">
                  <p className="tracking-widest mb-2 w-[100%] text-center text-[#2a2a2a]">
                    Languages
                  </p>
                  {languages.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-4 rounded justify-center">
                  <p className="tracking-widest mb-2 w-[100%] text-center text-[#2a2a2a]">
                    Front-end frameworks
                  </p>
                  {frontEnd.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-4 rounded justify-center">
                  <p className="tracking-widest mb-2 w-[100%] text-center text-[#2a2a2a]">
                    Back-end frameworks
                  </p>
                  {backEnd.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-4 rounded justify-center">
                  <p className="tracking-widest mb-2 w-[100%] text-center text-[#2a2a2a]">
                    Databases
                  </p>
                  {databaseSkills.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {!logosHidden && (
              <>
                <div className="my-2 flex gap-1 md:gap-2 w-[100%] md:w-[48%] md:mx-auto  items-center flex-wrap bg-[#fbfaf9] px-2 py-4 rounded justify-center">
                  <p className="tracking-widest mb-2 w-[100%] text-center text-[#2a2a2a]">
                    Deployment & Tools
                  </p>
                  {deployment.map((skill) => {
                    return (
                      <div className="rounded px-3 py-1 w-fit bg-[#e4e2dd] text-[#2a2a2a] text-xs normal-case tracking-wider">
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
              className="flex items-center gap-1 cursor-pointer group"
            >
              <p className="hover:scale-110 hover:mx-2 font-title font-extrabold tracking-wider text-lg">
                projects
              </p>
              <img
                src={plus}
                className="max-h-3 group-hover:animate-spin-slow"
              />
            </div>
            {!projectListHidden && (
              <ul className="cursor-default list-disc ml-6 font-body normal-case text-lg">
                <li
                  onClick={handlePremierPicksClick}
                  className="text-base hover:text-xl hover:text-[#787878] cursor-pointer uppercase tracking-wider font-bold my-2"
                >
                  Premier Picks
                </li>
                {!premierPicksHidden && (
                  <div className="max-w-4xl shadow-md flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 px-2 ">
                    <img
                      className="my-5 h-48 shadow-lg rounded border"
                      src={pp}
                      alt="App gif"
                    />
                    <p className="font-body text-sm normal-case font-normal text-center md:text-left flex flex-col justify-center gap-4 my-2">
                      A Premier League predictions app, that enables members to
                      input and edit predictions for upcoming match weeks. The
                      code checks predictions against match scores, awarding
                      points for user accuracy. User points are displayed in the
                      league leaderboard, which is sorted in descending order.
                      <br />
                      <div className="flex justify-center gap-2 flex-wrap md:justify-start">
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          React
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Flask
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Tailwind
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Typescript
                        </div>
                      </div>
                      <p className="font-semibold">
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
                  className="text-base hover:text-xl hover:text-[#787878] cursor-pointer my-2 uppercase tracking-wider font-bold"
                >
                  Cabbage Patch Protector
                </li>
                {!gameHidden && (
                  <div className="max-w-4xl shadow-md flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 px-2">
                    <img
                      src={cpp}
                      max-w-3xl
                      alt="Cabbage Patch Protector gameplay gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-body text-sm normal-case font-normal text-center md:text-left flex flex-col justify-center gap-4 my-2">
                      An original twist on the classic Minesweeper game. Cabbage
                      Patch Protector is a JavaScript grid-based game that is
                      playable on desktop across three difficulty levels.
                      Correctly locate all the caterpillars on the board,
                      marking them with a jar as you go and try to beat your
                      high score!
                      <br />
                      <div className="flex justify-center gap-2 flex-wrap md:justify-start">
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          JavaScript
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          HTML
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          CSS
                        </div>
                      </div>
                      <p className="font-semibold">
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
                  className="text-base hover:text-xl hover:text-[#787878] cursor-pointer uppercase tracking-wider font-bold my-2"
                >
                  Quiz Game
                </li>
                {!quizHidden && (
                  <div className="max-w-4xl shadow-md flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 px-2 ">
                    <img
                      src={quiz}
                      alt="Quiz Game example gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-body text-sm normal-case font-normal text-center md:text-left flex flex-col justify-center gap-4 my-2">
                      A mutliple choice quiz game, fetching 10 random general
                      knowledge questions from the Open Trivia public API.
                      Players select one of four possible answers, and their
                      score is revealed once the quiz is completed.
                      <br />
                      <div className="flex justify-center gap-2 flex-wrap md:justify-start">
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          React
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          TypeScript
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Bulma
                        </div>
                      </div>
                      <p className="font-semibold">
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
                  className="uppercase tracking-wider font-bold text-base hover:text-xl hover:text-[#787878] cursor-pointer my-2"
                >
                  GourmetVoyage E-Shop
                </li>
                {!shopHidden && (
                  <div className="max-w-4xl shadow-md flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 px-2">
                    <img
                      src={shop}
                      alt="GourmetVoyage site walkthrough gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-body text-sm normal-case font-normal text-center md:text-left flex flex-col justify-center gap-4 my-2">
                      Buyers can browse, 'purchase' and leave reviews on
                      products that are posted to the site via the seller
                      portal. Sellers can create, update and edit their products
                      and the have access to a dashboard which shows units per
                      product and total units sold.
                      <br />
                      <div className="flex justify-center gap-2 flex-wrap md:justify-start">
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          React
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Express
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Bulma
                        </div>
                        <div className="px-2 rounded uppercase bg-[#e4e2dd] tracking-wider font-bold">
                          Typescript
                        </div>
                      </div>
                      <p className="font-semibold">
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
          <h1 className="font-title font-extrabold tracking-wider text-lg inline mx-auto">
            GET IN TOUCH
          </h1>
          <p className="font-body inline mx-auto text-center md:max-w-[80%]">
            I am currently looking for new opportunities and keen to chat about
            anything coding related! My inbox is always open, so please do get
            in touch.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/olivia--darby/"
              target="_blank"
            >
              <img
                src={linkedin}
                className="h-8 cursor-pointer"
                alt="Linkedin link"
              />
            </a>
            <a href="https://github.com/livdarby" target="_blank">
              <img
                src={github}
                className="h-8 cursor-pointer"
                alt="GitHub link"
              />
            </a>
            <a
              href="mailto: oliviadarby@live.co.uk ?subject=Portfolio query  &body=Please enter your request here."
              target="_blank"
            >
              <img
                src={email}
                className="h-8 cursor-pointer"
                alt="GitHub link"
              />
            </a>
          </div>
          {/* <div className="flex gap-4 justify-center mx-2 items-center">
            <div className="w-[50%]">
              <h1>What's trending in {currentMonth}?</h1>
              <div>
                <h1>Listening</h1>
                <iframe
                  className="border-radius:12px my-2 h-40 w-[100%]"
                  src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <h1>Watching</h1>
                <iframe
                  className="border-radius:12px rounded-xl my-2 h-40 w-[100%]"
                  src="https://www.youtube.com/embed/9k9NMbQe0C4?si=UvnHHtX2L8sCT-2y"
                  title="YouTube video player"
                  allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            <div className="w-[40%] h-[100%] flex flex-col justify-center">
              <h1>Learning</h1>
              <iframe
                className="w-[100%] h-[80%]"
                // type="text/html"
                sandbox="allow-scripts allow-same-origin allow-popups"
                allowFullScreen
                // style="max-width:100%"
                src="https://read.amazon.co.uk/kp/card?asin=B01D3WHZZO&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_MNNQDRW9CEKYS74NSJN7"
              ></iframe>
            </div>
          </div> */}
        </div>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default HomePage;
