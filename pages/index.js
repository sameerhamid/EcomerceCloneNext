import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Navbar from "../components/ui-elements/nav-bar/navbar";
import Locations from "../components/home/Locations";
import SlideimgsSec from "../components/home/SlideimgsSec";


const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="homepage_container">
      <Navbar />

      <div className="hero_wrapper">

        <img src="/images/generic/hero-img.jpeg" alt="" />
        <Overlay />
      </div>
      <div className="cmr_container mt40 content_wrapper">
        <Cmr />
      </div>
      {/* <div className="location_container mt40 screen_margin">
        <Locations />
      </div>
      <div className="slideimg_container mt40 screen_margin">
        <SlideimgsSec />
      </div> */}
    </div>
  );
}


const Overlay = () => {
  return (
    <div className="overlay_wrapper">
      <div className="text white_text bold_text font20 ">lorem ipsum dolor sit amet</div>
      <div className="text white_text bold_text font20 ">lorem ipsum dolor sit amet</div>
      <div className="text white_text bold_text font20 ">lorem ipsum dolor sit amet</div>
    </div>
  )
}


const Cmr = () => {
  return (
    <div className="cmr_wrapper ">
      <div className="cmrimg_wrapper">
        <img src="/images/homeimgs/cmr_img.png" alt="" />
      </div>
      <div className="mufiy_wrapper">
        {/* <div className="mufiy_yellow"> */}
        <span className="font16 yellow_text font20 bold-text">¡Únete a Muvify y disfruta de las mejores y más exclusivas ofertas!</span>
        <div className="mufiy_blue">
          <span className="font30 blue_overlay_text">¿Ya eres parte de Muvify?</span>
        </div>
        {/* </div> */}
      </div>
    </div>)
}


const SecSection = () => {
  return (
    <div className="sec_section_wrapper">
      <div className="left_wrapper">
        <div className="heading  bold_text font40">¡Próximamente!
          ¡Sé parte del
          nuevo
          turbus
          !</div>
        <div className="desription mt20">
          <div>Descarga nuestra app y comienza a disfrutar
            de la experiencia turbus.</div>
          <span className="bold_text">Viaja de norte a sur, de la manera más fácil.</span>
        </div>
        <div className="buttons">
          <img src="/images/generic/Turbus-website-Google Play.png" alt="" />
          <img src="/images/generic/Turbus-website-App Store.png" alt="" />
        </div>
      </div>
      <div className="rigt_wrapper">
        <img src="/images/generic/turboos-mobile.webp" alt="" />
      </div>
    </div>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;

