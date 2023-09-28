import TncSection from "../../components/tnc/tnc";
import ContentContainer from "../../components/ui/content-container/content-container";
import MainWrapper from "../../components/ui/wrapper/wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
const TnC = () => {
  const { t } = useTranslation("common");
  return (
    <MainWrapper t={t}>
      <ContentContainer>
      <TncSection />
      </ContentContainer>
    </MainWrapper>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default TnC;
