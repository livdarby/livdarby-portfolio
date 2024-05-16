import { useState } from "react";
import emailjs from "emailjs-com";

function Footer() {
  const [emailPopUpHidden, setEmailPopUpHidden] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(emailPopUpHidden);

  function handleClick() {
    emailPopUpHidden ? setEmailPopUpHidden(false) : setEmailPopUpHidden(true);
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        // EmailJS service ID, template Id and user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <>
      <nav className="flex justify-evenly bg-[#2a2a2a] opacity-90 relative">
        <li
          onClick={handleClick}
          className=" list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:text-[#2a2a2a]"
        >
          Contact Me{" "}
        </li>
        {!emailPopUpHidden && (
          <div className="-my-[50%] md:bottom-[100%] bottom-[50%] bg-white fixed py-10 px-4 border rounded-xl max-w-[90%] md:max-w-[30%] flex flex-col items-center gap-4">
            <p className="uppercase font-semibold text-sm tracking-wide text-center">
              If you have any questions or would like further information,
              please get in touch.
            </p>
            <form
              onSubmit={handleSubmit}
              action="mailto:oliviadarby@live.co.uk"
              method="POST"
              encType="multipart/form-data"
              name="EmailForm"
              className="flex flex-col gap-2 bg-[#2a2a2a] w-[90%] p-4 text-white rounded-lg"
            >
              <div className="flex items-center justify-center">
                <label className="w-[35%]">Name:</label>
                <input
                  className="w-[85%] border border-[#2a2a2a] rounded text-black"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="w-[35%]">Email:</label>
                <input
                  className="w-[85%] border border-[#2a2a2a] rounded text-black"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <label className="w-[35%]">Message:</label>
                <textarea
                  className="w-[85%] border border-[#2a2a2a] rounded text-black"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  cols={20}
                ></textarea>
              </div>

              <button type="submit" value="Submit">
                Send
              </button>
            </form>
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
            <a
              className="underline uppercase font-semibold text-xs tracking-wide text-center"
              href="mailto: oliviadarby@live.co.uk ?subject=Portfolio query  &body=Please enter your request here."
            >
              Alternatively, Click here to Send an eMail
            </a>
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
