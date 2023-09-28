import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import Root from "./_root";
import { appWithTranslation } from "next-i18next";
import common_en from "../public/locales/en/common.json";
import common_es from "../public/locales/es/common.json";
import i18next from "i18next";
import store from "../redux/store";
import '../styles/globals.less'
function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined")
    i18next.init({
      interpolation: { escapeValue: false }, // React already does escaping
      lng: localStorage.getItem("selectedLanguage") || "es", // language to use
      resources: {
        en: {
          common: common_en, // 'common' is our custom namespace
        },
        es: {
          common: common_es,
        },
      },
    });
  return (
    <RecoilRoot>
      <Provider store={store}>
        <Root>
          {/* <Header /> */}
          <Component {...pageProps} />
          {/* <Footer /> */}
        </Root>
      </Provider>
    </RecoilRoot>
  );
}

export default appWithTranslation(MyApp);
