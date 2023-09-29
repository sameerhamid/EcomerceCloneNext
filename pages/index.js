import ContentContainer from "../components/ui/content-container/content-container";
import MainWrapper from "../components/ui/wrapper/wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";


function Home() {
  const { t } = useTranslation("common");


  const topProducts = [

    { id: 0, name: "Prodict 1", image: "/images/slides/slide1.jpg", desc: "lorem ipsum dolar isset lorem ipsum dolar isset" },
    { id: 1, name: "Prodict 2", image: "/images/slides/slide2.jpg", desc: "lorem ipsum dolar isset lorem ipsum dolar isset" },
    { id: 2, name: "Prodict 3", image: "/images/slides/slide3.jpg", desc: "lorem ipsum dolar isset lorem ipsum dolar isset" },
  ]

  const collections = [
    { id: 0, name: "Prodict 1", image: "/images/collections/coll1.avif", },
    { id: 1, name: "Prodict 2", image: "/images/collections/coll2.avif", },
    { id: 2, name: "Prodict 3", image: "/images/collections/coll3.avif", },

  ]

  const collectionSlide = [
    { id: 0, image: "/images/collections/slider/slide1.avif", title: "New lower price", subTitle: "Our favourite products at reduced prices" },
    { id: 1, image: "/images/collections/slider/slide2.avif", title: "Get an IKEA Kitchen, starting at Rs.95,000", subTitle: "Buy affordable modular kitchens at IKEA" },
    { id: 2, image: "/images/collections/slider/slide3.avif", title: "  Affordable bedroom sets starting at Rs.17, 990", subTitle: "Explore our curated bedroom furniture sets at most affordable prices" },
  ]


  const Product = (props) => {

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


  const Collection = props => {
    return (
      <div className="collection">
        <img src={props.item.image} alt="" />
      </div>
    )
  }


  const CollectionSlide = ({ slide }) => {
    return (
      <div className="collection_slide">
        <div className="img_container">
          <img src={slide.image} alt="" />
        </div>

        <div className="collection_slide_details">

          <div className="title bold-text font20">{slide.title}</div>
          <div className="font16 ">{slide.subTitle}</div>

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

        <Fragment>
          <div className="title font20 bold-text ">
            Collections in focus
          </div>

          <div className="collections_wrapper">
            {collections?.map(collection => <Collection item={collection} />)}

          </div>
        </Fragment>


        <div className="line mt20 mb20"></div>


        <Fragment>

          <div className="collection_slides_wrapper">
            {collectionSlide?.map(slide => <CollectionSlide slide={slide} />)}
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
