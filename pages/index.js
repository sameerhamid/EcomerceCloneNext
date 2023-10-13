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
      <div className="cmr_container">
        <Cmr />

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


const Cmr = () => {
  return (
    <div className="cmr_wrapper screen screen_margin mt20 mb20">
      <div className="cmrimg_wrapper">
        <img src="/images/homeimgs/cmr_img.png" alt="" />
      </div>
      <div className="mufiy_wrapper">
        <div className="mufiy_yellow">
          <span className="font20">lorem ipsum is  dummy text</span>
          <div className="mufiy_blue font20">
            <span>lorem ipusm is the dummy text </span>
          </div>
        </div>
      </div>
    </div>)
}



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;

