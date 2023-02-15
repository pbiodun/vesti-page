import CardAd from "../views/CardAd";
import Nav from "../containers/NavBar";
import Offerings from "../views/Offerings";
import Pathways from "../views/Pathways";
import Showcase from "../views/Showcase";
import WalletCard from "../views/WalletCard";
import OpenAccount from "../views/OpenAccount";
import Testimonials from "../views/Testimonials";
import FaqSection from "../views/FaqSection";
import DownloadApp from "../views/DownloadApp";
import Footer from "../containers/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Showcase />
      <WalletCard />
      <CardAd />
      <Pathways />
      <Offerings />
      <OpenAccount />
      <Testimonials />
      <FaqSection />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Home;
