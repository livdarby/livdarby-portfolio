import { useState } from "react";

function Footer() {
  const [emailPopUpHidden, setEmailPopUpHidden] = useState(true);
  console.log(emailPopUpHidden);

  function handleClick() {
    emailPopUpHidden ? setEmailPopUpHidden(false) : setEmailPopUpHidden(true);
  }

  return (
    <>
      <nav className="flex justify-evenly bg-[#787878] relative">
        <li
          onClick={handleClick}
          className=" list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:text-[#2a2a2a]"
        >
          Contact Me{" "}
        </li>
        {!emailPopUpHidden && (
          <div className="-my-10 bg-white fixed bottom-[50%] py-10 px-4 border rounded-xl max-w-[90%] md:max-w-[30%] flex flex-col items-center gap-4">
            <p className="uppercase font-semibold text-sm tracking-wide text-center">
              If you have any questions or would like further information,
              please do not hesitate to get in touch. You can fill out the form
              below or{" "}
              <a
                className="underline uppercase font-semibold text-sm tracking-wide"
                href="mailto: oliviadarby@live.co.uk ?subject=Portfolio query  &body=Please enter your request here."
              >
                Click here to Send Mail
              </a>
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/livdarby" target="_blank">
                <img
                  src="../../assets/github.png"
                  className="h-8 cursor-pointer"
                  alt="GitHub link"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/olivia--darby/"
                target="_blank"
              >
                <img
                  src="../../assets/linkedin.png"
                  className="h-8 cursor-pointer"
                  alt="Linkedin link"
                />
              </a>
            </div>
          </div>
        )}

        <li className="list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:text-[#2a2a2a]">
          LinkedIn
        </li>
        <li className="list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:text-[#2a2a2a]">
          GitHub
        </li>
      </nav>
    </>
  );
}

export default Footer;
