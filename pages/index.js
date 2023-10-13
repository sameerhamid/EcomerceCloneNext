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

      <div className="download_wrapper">
        <div className="download_container">
          <SecSection />
        </div>
        <div className="leftCircle"></div>
        <div className="right_triangle"></div>
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

