import { useState } from "react";
import emailjs from "emailjs-com";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

function Footer() {
  const [emailPopUpHidden, setEmailPopUpHidden] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailJsMessage, setEmailJsMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleClick() {
    emailPopUpHidden ? setEmailPopUpHidden(false) : setEmailPopUpHidden(true);
  }

  function handleCloseButton() {
    setFormData({ name: "", email: "", message: "" });
    setEmailJsMessage("");
    setErrorMessage("");
    setEmailPopUpHidden(true)
  }

  function handleChange(e: any) {
    setEmailJsMessage("");
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e: any) => {
    setEmailJsMessage("");
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    console.log(serviceId, templateId, userId);

    if (serviceId && templateId && userId) {
      emailjs.send(serviceId, templateId, formData, userId).then(
        (result) => {
          console.log(result.text);
          //   alert("Email sent successfully!");
          setEmailJsMessage(
            "Email sent successfully! I will be in touch with you soon."
          );
        },
        (error) => {
          console.log(error.text);
          //   alert("Failed to send email. Please try again later.");
          setErrorMessage("Failed to send email. Please try again later.");
        }
      );
    }
  };

  return (
    <>
      <nav className="pb-5 pt-2 flex justify-evenly bg-[#424242] relative">
        <li
          onClick={handleClick}
          className=" list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:underline"
        >
          Contact Me{" "}
        </li>

        {!emailPopUpHidden && (
          <div className="-my-[50%] md:bottom-[100%] bottom-[50%] bg-white fixed py-10 px-4 border rounded-xl max-w-[90%] md:max-w-[30%] flex flex-col items-center gap-4">
            <p
              onClick={handleCloseButton}
              className="cursor-pointer w-[90%] font-bold text-right"
            >
              X
            </p>
            {emailJsMessage && (
              <p className="font-garamond">{emailJsMessage}</p>
            )}
            {errorMessage && <p className="font-garamond">{errorMessage}</p>}
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
                  src={github}
                  className="h-8 cursor-pointer"
                  alt="GitHub link"
                />
              </a>
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
            </div>
            <a
              className="underline uppercase font-semibold text-xs tracking-wide text-center"
              href="mailto: oliviadarby@live.co.uk ?subject=Portfolio query  &body=Please enter your request here."
            >
              Alternatively, Click here to Send an eMail
            </a>
          </div>
        )}

        <li className="list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:underline">
          LinkedIn
        </li>
        <li className="list-none my-2 uppercase text-sm tracking-wide font-semibold text-white cursor-pointer hover:underline">
          GitHub
        </li>
      </nav>
    </>
  );
}

export default Footer;
