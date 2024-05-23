import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import HomePage from "./HomePage";
import Footer from "./Footer";
import down from "../../assets/down-arrow.png";
import logo from "../../assets/liv.png";

function LogoPage() {
  const navigate = useNavigate();
  type CustomLinkProps = {
    scrollTo: string;
    children: React.ReactNode;
    className?: string;
  };

  const CustomLink = ({ scrollTo, children, className }: CustomLinkProps) => {
    const handleNavigate = () => {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => {
          scroller.scrollTo(scrollTo, {
            duration: 200,
            delay: 0,
            smooth: "easeOutQuart",
          });
        }, 50);
      } else {
        scroller.scrollTo(scrollTo, {
          duration: 200,
          delay: 0,
          smooth: "easeOutQuart",
        });
      }
    };
    return (
      <RouterLink to="/" onClick={handleNavigate} className={className}>
        {children}
      </RouterLink>
    );
  };

  function downArrow() {
    console.log("down arrow!");
  }

  return (
    <>
      {
        <div className="flex flex-col justify-center items-center h-dvh bg-[#2a2a2a]">
          <div className="flex flex-col items-center my-auto">
            <img src={logo} alt="Logo" className="w-[80%] md:w-[40%] lg:w-[60%] my-auto" />
            <h1 className="font-title w-screen text-center text-lg md:text-lg lg:text-2xl tracking-xwide text-[#e4e2dd]">
              JUNIOR DEVELOPER
            </h1>
          </div>
          <CustomLink className="w-screen flex justify-center" scrollTo="home">
            <img
              onClick={downArrow}
              src={down}
              alt="Down arrow to read more"
              className="w-[8%] md:w-[3%] mb-16 animate-bounce cursor-pointer scroll-smooth"
            />
          </CustomLink>{" "}
        </div>
      }
      <HomePage />
      {/* <Footer /> */}
    </>
  );
}

export default LogoPage;
