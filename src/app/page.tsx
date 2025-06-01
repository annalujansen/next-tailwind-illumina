import ContactUs from "../components/Homepage/ContactUs/page";
import { Home } from "../components/Homepage/Home";
import AboutUs from "../components/Homepage/AboutUs/page";
import Services from "../components/Homepage/Services/page";
//import Packages from "../components/Homepage/Packages/page";

export default function Homepage() {
  return (
    <>
      <div className="w-full bg-fundo-0 text-color-7 selection:bg-color-5">
        <Home />
        <Services />
        <AboutUs />
        {/* <Packages /> */}
        <ContactUs />
      </div>
    </>
  );
}