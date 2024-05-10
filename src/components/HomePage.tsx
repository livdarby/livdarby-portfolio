import { useState } from "react";

function HomePage() {
  const [logosHidden, setLogosHidden] = useState(true);
  const [projectListHidden, setProjectListHidden] = useState(true);
  const [premierPicksHidden, setPremierPicksHidden] = useState(true);

  function handleSkillsClick() {
    logosHidden ? setLogosHidden(false) : setLogosHidden(true);
    !projectListHidden && setProjectListHidden(true);
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
  }

  return (
    <>
      <section className="bg-[#2a2a2a] h-screen flex flex-col justify-center">
        <div className="bg-[#e4e2dd] px-5 lg:mx-[20%] md:mx-[5%] h-[80%] flex flex-col justify-center gap-5 my-auto">
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex flex-col gap-1">
            <span
              onClick={handleSkillsClick}
              className="flex items-center gap-1 cursor-pointer"
            >
              <p>skills</p>
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
              <p>projects</p>
              <img src="../assets/plus.png" className="max-h-3" />
            </div>
            {!projectListHidden && (
              <ul className="cursor-default list-disc ml-6">
                <li
                  onClick={handlePremierPicksClick}
                  className="hover:text-lg hover:text-[#e3cfdc] cursor-pointer"
                >
                  Premier Picks
                </li>
                {!premierPicksHidden && (
                  <div className="flex gap-5 items-center">
                    {/* <img
                      className="h-48 my-5 shadow-lg rounded border"
                      src="../../assets/premier-picks.png"
                      alt="Premier Picks screenshot"
                    /> */}
                    <img className="my-5 h-48 shadow-lg rounded border" src="../../assets/pp-gif.gif" alt="App gif" />
                    <p className="normal-case">
                      A Premier League predictions app.
                    </p>
                  </div>
                )}
                <li className="hover:text-lg hover:text-[#e3cfdc] cursor-pointer">
                  Cabbage Patch Protector
                </li>
                <li className="hover:text-lg hover:text-[#e3cfdc] cursor-pointer">
                  Quiz Game
                </li>
                <li className="hover:text-lg hover:text-[#e3cfdc] cursor-pointer">
                  GourmetVoyage E-Shop
                </li>
              </ul>
            )}
          </div>
          <hr />
          <div className="uppercase font-semibold tracking-wide text-gray-800 flex gap-1 items-center cursor-pointer">
            about me <img src="../assets/plus.png" className="max-h-3" />
          </div>
          <hr />
        </div>
      </section>
    </>
  );
}

export default HomePage;
