import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";



function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      Hello world!
    </div>
  );
}



export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;

