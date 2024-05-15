import { useState } from "react";

function HomePage() {
  const [logosHidden, setLogosHidden] = useState(true);
  const [projectListHidden, setProjectListHidden] = useState(true);
  const [premierPicksHidden, setPremierPicksHidden] = useState(true);
  const [gameHidden, setGameHidden] = useState(true);
  const [quizHidden, setQuizHidden] = useState(true);
  const [shopHidden, setShopHidden] = useState(true);

  const frontEndSkills = ["JavaScript", "HTML", "CSS", "TypeScript", "React"];
  const backEndSkills = [
    "JavaScript",
    "Express.js",
    "Node.js",
    "Python",
    "Flask",
    "SQLAlchemy",
  ];
  const databaseSkills = ["SQL", "PostgreSQL", "MongoDB"];
  const tools = ["Git", "GitHub", "Insomnia", "TablePlus", "Mongo Atlas"];

  function handleSkillsClick() {
    logosHidden ? setLogosHidden(false) : setLogosHidden(true);
    !projectListHidden && setProjectListHidden(true);
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
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex flex-col gap-1">
            <span
              onClick={handleSkillsClick}
              className="flex items-center gap-1 cursor-pointer"
            >
              <p className="font-title font-extrabold tracking-wider text-lg">
                skills
              </p>
              <img src="../assets/plus.png" className="max-h-3" />
            </span>
            <div className="flex gap-2 normal-case tracking-wider">
              {!logosHidden &&
                frontEndSkills.map((skill) => {
                  return (
                    <div className="rounded px-2 my-1 w-fit bg-[#2a2a2a] text-[#e4e2dd] text-sm">
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div className="flex gap-2 normal-case tracking-wider">
              {!logosHidden &&
                backEndSkills.map((skill) => {
                  return (
                    <div className="rounded px-2 my-1 w-fit bg-[#2a2a2a] text-[#e4e2dd] text-sm">
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div className="flex gap-2 normal-case tracking-wider">
              {!logosHidden &&
                databaseSkills.map((skill) => {
                  return (
                    <div className="rounded px-2 my-1 w-fit bg-[#2a2a2a] text-[#e4e2dd] text-sm">
                      {skill}
                    </div>
                  );
                })}
            </div>
            <div className="flex gap-2 normal-case tracking-wider">
              {!logosHidden &&
                tools.map((skill) => {
                  return (
                    <div className="rounded px-2 my-1 w-fit bg-[#2a2a2a] text-[#e4e2dd] text-sm">
                      {skill}
                    </div>
                  );
                })}
            </div>
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
                  className="hover:text-xl hover:text-[#177561] cursor-pointer  my-2"
                >
                  Premier Picks
                </li>
                {!premierPicksHidden && (
                  <div className="flex flex-col md:flex-row gap-5 items-center -ml-6 sm:mx-0 bg-[#f9f9f8] rounded px-1 md:bg-transparent">
                    {/* <img
                      className="h-48 my-5 shadow-lg rounded border"
                      src="../../assets/premier-picks.png"
                      alt="Premier Picks screenshot"
                    /> */}
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
                  className="hover:text-xl hover:text-[#177561] cursor-pointer my-2"
                >
                  Cabbage Patch Protector
                </li>
                {!gameHidden && (
                  <div className="md:flex items-center gap-5 -ml-6 sm:ml-0">
                    <img
                      src="../../assets/cpp-gif.gif"
                      alt="Cabbage Patch Protector gameplay gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-garamond normal-case font-normal">
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
                  className="hover:text-xl hover:text-[#177561] cursor-pointer my-2"
                >
                  Quiz Game
                </li>
                {!quizHidden && (
                  <div className="md:flex items-center gap-5 -ml-6 sm:ml-0">
                    <img
                      src="../../assets/quiz.gif"
                      alt="Quiz Game example gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-garamond normal-case font-normal">
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
                  className="hover:text-xl hover:text-[#177561] cursor-pointer my-2"
                >
                  GourmetVoyage E-Shop
                </li>
                {!shopHidden && (
                  <div className="md:flex items-center gap-5 -ml-6 sm:ml-0">
                    <img
                      src="../../assets/shop.gif"
                      alt="GourmetVoyage site walkthrough gif"
                      className="my-5 w-96 shadow-lg rounded border"
                    />
                    <p className="font-garamond normal-case font-normal">
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
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer">
            <p className="font-title font-extrabold tracking-wider text-lg">
              about me
            </p>
            <img src="../assets/plus.png" className="max-h-3" />
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}

export default HomePage;
