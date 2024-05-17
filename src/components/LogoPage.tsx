import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import HomePage from "./HomePage";
import Footer from "./Footer";

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
        <div className="flex flex-col justify-center items-center h-screen bg-[#2a2a2a]">
          <img src="../assets/liv.png" alt="Logo" className="w-[80%] md:w-[30%] my-auto" />
          <CustomLink className="w-screen flex justify-center" scrollTo="home">
            <img
              onClick={downArrow}
              src="../assets/down-arrow.png"
              alt="Down arrow to read more"
              className="w-[15%] md:w-[2%] mb-16 animate-bounce cursor-pointer scroll-smooth"
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
