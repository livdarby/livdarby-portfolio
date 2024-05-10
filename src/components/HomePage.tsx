import { useState } from "react";

function HomePage() {
  const [logosHidden, setLogosHidden] = useState(true);
  const [projectListHidden, setProjectListHidden] = useState(true);
  const [premierPicksHidden, setPremierPicksHidden] = useState(true);
  const [gameHidden, setGameHidden] = useState(true);

  function handleSkillsClick() {
    logosHidden ? setLogosHidden(false) : setLogosHidden(true);
    !projectListHidden && setProjectListHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
    !gameHidden && setGameHidden(true);
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
  }

  function gameClick() {
    gameHidden ? setGameHidden(false) : setGameHidden(true);
    !premierPicksHidden && setPremierPicksHidden(true);
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
            <p hidden={logosHidden}>Confident:</p>
            {!logosHidden && (
              <div className="flex gap-2">
                <img
                  src="../../assets/js.png"
                  alt="JavaScript logo"
                  className="h-10"
                />
                <img
                  src="../../assets/react.png"
                  alt="React logo"
                  className="h-10"
                />
                <img
                  src="../../assets/python.png"
                  alt="Python logo"
                  className="h-10"
                />
                <img
                  src="../../assets/node.jpg"
                  alt="Node.js logo"
                  className="h-10"
                />
                <img
                  src="../../assets/flask.webp"
                  alt="Flask logo"
                  className="h-10"
                />
                <img
                  src="../../assets/express.png"
                  alt="Express logo"
                  className="h-10"
                />
                <img
                  src="../../assets/git.png"
                  alt="Git logo"
                  className="h-10"
                />
              </div>
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
              <ul className="cursor-default list-disc ml-6 font-body normal-case">
                <li
                  onClick={handlePremierPicksClick}
                  className="hover:text-lg hover:text-[#177561] cursor-pointer  my-2"
                >
                  Premier Picks
                </li>
                {!premierPicksHidden && (
                  <div className="md:flex gap-5 items-center -ml-6 sm:mx-0">
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
                    <p className="font-body normal-case font-normal md:text-xs">
                      A Premier League predictions app, that enables members to
                      input and edit predictions for upcoming match weeks. The
                      code checks predictions against match scores, awarding
                      points according to the user's accuracy. User points are
                      displayed in the league leaderboard, which is sorted
                      according to total points scored.
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
                  className="hover:text-lg hover:text-[#177561] cursor-pointer my-2"
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
                    <p className="font-body normal-case font-normal">
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
                <li className="hover:text-lg hover:text-[#177561] cursor-pointer my-2">
                  Quiz Game
                </li>
                <li className="hover:text-lg hover:text-[#177561] cursor-pointer my-2">
                  GourmetVoyage E-Shop
                </li>
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
