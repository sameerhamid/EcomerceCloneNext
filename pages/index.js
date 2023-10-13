import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Navbar from "../components/ui-elements/nav-bar/navbar";


const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <Navbar />

      <div className="hero_wrapper">

        <img src="/images/generic/hero-img.jpeg" alt="" />

        <Overlay />

      </div>
    </div>
  );
}


const Overlay = () => {
  return (
    <div className="overlay_wrapper">
      <div className="text white_text bold_text font20 screen_margin">lorem ipsum dolor sit amet</div>
      <div className="text white_text bold_text font20 screen_margin">lorem ipsum dolor sit amet</div>
      <div className="text white_text bold_text font20 screen_margin">lorem ipsum dolor sit amet</div>
    </div>
  )
}



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;

