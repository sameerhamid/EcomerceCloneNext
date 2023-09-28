import ContentContainer from "../components/ui/content-container/content-container";
import MainWrapper from "../components/ui/wrapper/wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";


function Home() {
  const { t } = useTranslation("common");


  const topProducts = [

    { id: 0, name: "Prodict 1", image: "/images/slides/slide1.jpg", desc: "loem ipsum dolar isset sjkdgjhdsg kxdfjh sdkjhdfsjhg" },
    { id: 1, name: "Prodict 2", image: "/images/slides/slide2.jpg", desc: "loem ipsum dolar isset sjkdgjhdsg kxdfjh sdkjhdfsjhg" },
    { id: 2, name: "Prodict 3", image: "/images/slides/slide3.jpg", desc: "loem ipsum dolar isset sjkdgjhdsg kxdfjh sdkjhdfsjhg" },
  ]


  const Product = (props) => {


    console.log(props)

    return (
      <div className="product_wrapper mb10">
        <img src={props?.item?.image} alt={props.name} />
        <div className="product_details">
          <div className="mt10 bold-text">{props?.item?.name}</div>
          <div className="mt10 ">{props?.item?.desc}</div>

        </div>

      </div>
    )
  }




  return (
    <MainWrapper t={t}>
      <Fragment >
        <img className="hero_image" src="/images/slides/slide1.jpg" alt="" />
      </Fragment>

      <ContentContainer>





        <Fragment>
          <div className="title mt20 bold-text text-center font20">
            Top Products
          </div>
          <div className="products_wrapper">
            {topProducts?.map((item, key) => <Product item={item} key={key} />)}
          </div>
        </Fragment>




      </ContentContainer>
    </MainWrapper>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;
