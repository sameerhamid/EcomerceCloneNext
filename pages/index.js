import ContentContainer from "../components/ui/content-container/content-container";
import MainWrapper from "../components/ui/wrapper/wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";



function Home() {
  // const { y } = useTranslation("common");
  const router = useRouter();

  const handleRouteCategories = () => {
    router.push("/categories");
  }
  const { t } = useTranslation("common");
  const Product = ({ prod }) => {
    return (

      <div className="products mb20" onClick={handleRouteCategories}>
        <div className="imgs">
          <img src={prod.image} alt="" />
        </div>
        <div className="product_details" >
          <div className="bold-text">{prod.name}</div>
          <div>  {prod.desc}</div>
        </div>

      </div>
    )
  }


  const Slides = ({ slide }) => {
    return (
      <div className="slidesimages">
        <img src={slide.image} alt="" />
      </div>
    )
  }
  const Offer = ({ offerimg }) => {
    return (
      <div className="offerimages">
        <div>
          <img src={offerimg?.image} alt="" />

        </div>
        <div className="offerdetails" style={{ backgroundColor: offerimg.bgcolor }}>
          <div className="title font20 bold-text">
            {offerimg.title}
          </div>
          <div>
            {offerimg.desc}
          </div>
        </div>
      </div>
    )
  }
  const Whatnew = ({ item }) => {


    return (
      <div className="whatnew_container mt20 mb20">
        <img src={item.image} alt="" />
      </div>
    )
  }

  const Family = ({ familyoffer }) => {
    return (<div className="family-Wrapper mt20 mb20 ">
      <div>
        <img src={familyoffer.image} alt="" />
      </div>
      <div className="family_details">
        <div className="title bold-text "> {familyoffer.title}</div>
        <div className="bold-text">{familyoffer.brand}</div>
        <div> {familyoffer.itemfeature}</div>
        <div> {familyoffer.normalprice}</div >
        <div className="bold-text">{familyoffer.price}</div >
        <div className="starsimg"><img src={familyoffer.star} /> </div >
        <div>{familyoffer.moreoption}</div >
        <div>{familyoffer.validity}</div >
        <div>{familyoffer.supplylasts}</div >
        <div className="icons"> <div className="carticon" ><img src={familyoffer.cart} /> </div >
          <div className="likeicon"><img src={familyoffer.like} /> </div ></div>
      </div>
    </div>

    )

  }
  const Storage = ({ item }) => {
    return (
      <div className="storage_container">
        <div>
          <img src={item.image} alt="" />
        </div>
        <div className="overlapText">
          {item.overlapText}
        </div>
      </div>
    )
  }
  const Thing = ({ thing }) => {
    return (
      <div className="thing_container">
        <div>
          <img src={thing.image} alt="" />
        </div>
      </div>
    )
  }
  const Look = ({ item }) => {
    return (

      <div className="looks_container">
        <img src={item.image} alt="" />
      </div>
    )
  }
  const IdeaBtns = ({ idea }) => {
    return (
      <div className="itemsbtns  bold-text">
        <div> {idea.name}</div>
      </div>
    )
  }
  const IdeaImg = ({ item }) => {
    return (
      <div className="ideasimgs">
        <img src={item.image} alt="" />
      </div>
    )

  }

  const topthings = [


    { id: 0, image: "/images/slides/things1.avif" },
    { id: 1, image: "/images/slides/things2.avif" },
    { id: 2, image: "/images/slides/things3.avif" },
    { id: 3, image: "/images/slides/things4.avif" },
    { id: 4, image: "/images/slides/things5.avif" },


  ]

  const topProducts = [

    { id: 0, name: "Electronics", image: "/images/slides/slide1.jpg", desc: "lorem ipsum dolar isset lorem ipsum dolar isset" },
    { id: 1, name: "Product 2", image: "/images/slides/slide2.jpg", desc: "lorem ipsum dolar isset lorem ipsum dolar isset" },
    { id: 2, name: "Product 3", image: "/images/slides/slide3.jpg", desc: "lorem ipsum dolar isset lorem ipsum dolar isset" },
  ]
  const slideimages = [
    { id: 0, image: "/images/slides/product1.avif", desc: "lorem ipsum dolar qucik dog jumps over the lazy dog" },
    { id: 1, image: "/images/slides/product2.avif", desc: "lorem  dolar qucik dog jumps over the lazy dog" },
    { id: 2, image: "/images/slides/product3.avif", desc: "lorem ipsum qucik dog jumps over the lazy dog" }

  ]

  const offers = [
    { id: 0, image: "/images/slides/offer1.avif", title: "New Lower Price", desc: "Our favourite products at reduced prices", bgcolor: "red" },
    { id: 1, image: "/images/slides/offer2.avif", title: "Get an IKEA kitchen, starting at Rs 95,000", desc: "Buy affordable modular kithcens at IKEA", bgcolor: "grey" },
    { id: 2, image: "/images/slides/offer3.avif", title: "Affordable bedroom sets starting at Rs.17,990", desc: "Explore our curated bedroom furniture sets at most affordable prices", bgcolor: "grey" },
    { id: 3, image: "/images/slides/offer1.avif", title: "New Lower Price", desc: "Our favourite products at reduced prices", bgcolor: "red" },
    { id: 4, image: "/images/slides/offer2.avif", title: "Get an IKEA kitchen, starting at Rs 95,000", desc: "Buy affordable modular kithcens at IKEA", bgcolor: "grey" },
    { id: 5, image: "/images/slides/offer3.avif", title: "Affordable bedroom sets starting at Rs.17,990", desc: "Explore our curated bedroom furniture sets at most affordable prices", bgcolor: "grey" },

  ]
  const familyoffers = [
    { id: 0, image: "/images/slides/familyoffer1.avif", title: "IKEA Family price", brand: "IKEA 365+", itemfeature: "Food container with lid,3.1 | (105 oz)", normalprice: "Normal price Rs.1,109", price: "Rs 909", star: "/images/slides/stars.jpg", moreoption: "more options", validity: "Price valid Aug 31-Oct 11 or while supply lasts", supplylasts: "Supply lasts", cart: "/images/slides/cart.png", like: "/images/slides/like.png" },
    { id: 1, image: "/images/slides/familyoffer2.avif", title: "IKEA Family price", brand: "IKEA 365+", itemfeature: "Food container with lid,3.1 | (105 oz)", normalprice: "Normal price Rs.1,109", price: "Rs 909", star: "/images/slides/stars.jpg", moreoption: "more options", validity: "Price valid Aug 31-Oct 11 or while supply lasts", supplylasts: "Supply lasts", cart: "/images/slides/cart.png", like: "/images/slides/like.png" },
    { id: 2, image: "/images/slides/familyoffer3.avif", title: "IKEA Family price", brand: "IKEA 365+", itemfeature: "Food container with lid,3.1 | (105 oz)", normalprice: "Normal price Rs.1,109", price: "Rs 909", star: "/images/slides/stars.jpg", moreoption: "more options", validity: "Price valid Aug 31-Oct 11 or while supply lasts", supplylasts: "Supply lasts", cart: "/images/slides/cart.png", like: "/images/slides/like.png" },

  ]
  const storageItems = [
    { id: 0, image: "/images/slides/storageitem1.avif", overlapText: "Small storage & organiser from Rs19" },
    { id: 1, image: "/images/slides/storageitem2.avif", overlapText: "Food storage & organising from Rs99" },
    { id: 2, image: "/images/slides/storageitem3.avif", overlapText: "Hook & organisation from Rs50" },
    { id: 3, image: "/images/slides/storageitem4.avif", overlapText: "Plants & flowers from Rs69" },
    { id: 4, image: "/images/slides/storageitem5.avif", overlapText: "Vases & bows from Rs19" },
    { id: 5, image: "/images/slides/storageitem6.avif", overlapText: "Storage boxes & baskets  from Rs19" },
    { id: 6, image: "/images/slides/storageitem7.avif", overlapText: "Cleaning & accessories from Rs59" },
    { id: 7, image: "/images/slides/storageitem8.avif", overlapText: "Small storage & organiser from Rs19" },

  ]
  const whatsnew = [
    { id: 0, image: "/images/slides/whatsnew1.avif" },
    { id: 1, image: "/images/slides/whatsnew2.avif" },
    { id: 2, image: "/images/slides/whatsnew3.avif" },
    { id: 3, image: "/images/slides/whatsnew4.avif" },
    { id: 4, image: "/images/slides/whatsnew5.avif" },


  ]
  const looks = [
    { id: 0, image: "/images/slides/look1.avif" },
    { id: 1, image: "/images/slides/look2.avif" },
    { id: 2, image: "/images/slides/look3.avif" },
    { id: 3, image: "/images/slides/look4.avif" },
    { id: 4, image: "/images/slides/look5.avif" },
    { id: 5, image: "/images/slides/look6.avif" },
    { id: 6, image: "/images/slides/look7.avif" },
    { id: 7, image: "/images/slides/look8.avif" },
    { id: 8, image: "/images/slides/look9.avif" },
    { id: 9, image: "/images/slides/look10.avif" }
  ]
  const ideasBtns = [
    { id: 0, name: "All" },
    { id: 1, name: "Bedroom" },
    { id: 2, name: "Living room" },
    { id: 3, name: "Kitchen" },
    { id: 4, name: "Workspace" },
    { id: 5, name: "outdoor" },
    { id: 6, name: "Baby & children room" },
    { id: 7, name: "Dining", },
    { id: 8, name: "HallWay", },
    { id: 9, name: "Laundry" },
    { id: 10, name: "Accessories" },

  ]
  const ideasimages = [
    { id: 1, image: "/images/ideasimgs/idea1.avif" },
    { id: 2, image: "/images/ideasimgs/idea2.avif" },
    { id: 3, image: "/images/ideasimgs/idea3.avif" },
    { id: 4, image: "/images/ideasimgs/idea4.avif" },
    { id: 5, image: "/images/ideasimgs/idea5.avif" },
    { id: 6, image: "/images/ideasimgs/idea6.avif" }
  ]


  return (
    <MainWrapper t={t}>
      <Fragment >
        <img className="hero_image" src="/images/slides/slide1.jpg" alt="" />
      </Fragment>
      <ContentContainer>

        <Fragment >
          <div className="things_wrapper mt20 mb20">
            <div className="istthing">
              {topthings.slice(0, 1).map((thing) => <Thing thing={thing} />)} </div>
            <div className="secondthing">
              {topthings.slice(1, 3).map((thing) => <Thing thing={thing} />)} </div>
            <div className="thirdtthing">
              {topthings.slice(3, 5).map((thing) => <Thing thing={thing} />)} </div></div>
        </Fragment>
        <Fragment>
          <div className="title mt20 bold-text text-center font20">
            Top Products
          </div>
          <div className="products_wrapper">
            {topProducts?.map((prod, key) => <Product prod={prod} />)}

          </div>

        </Fragment>

        <Fragment>

          <div className="slide_wrapper">

            {slideimages?.map((slide) => <Slides slide={slide} />)}
          </div>

        </Fragment>

        <Fragment>
          <div className="offers_wrapper mt20 mb20" >
            <AliceCarousel
              responsive={{ 0: { items: 1 }, 1024: { items: 3 }, 768: { items: 3 } }}
              autoPlay={true}
              animationDuration={1500}
              infinite={true}
              disableButtonsControl={false}
              keyboardNavigation
              items={offers?.map((offerimg, key) => <Offer offerimg={offerimg} />)}

            />
          </div>
        </Fragment>
        <Fragment>
          <div className="title mt20 bold-text text-center font20">
            What's NEW at IKEA
          </div>
          <div className="whatsnew_wrapper">
            <div className="istwhatnew">
              {whatsnew?.slice(0, 1).map((item) => <Whatnew item={item} />)}
            </div>
            <div className="secondwhatnew">
              {whatsnew?.slice(1, 3).map((item) => <Whatnew item={item} />)}
            </div>
            <div className="thirdwhatnew">
              {whatsnew?.slice(3, 5).map((item) => <Whatnew item={item} />)}
            </div>

          </div>
        </Fragment>
        <Fragment>
          <div className="familyoffers_wrapper">
            {familyoffers?.map((familyoffer, key) => <Family familyoffer={familyoffer} />)}
          </div>
        </Fragment>
        <Fragment>
          <div className="title mt20 mb20 bold-text font20">A lot more for a lot less</div>

          <div className="storage_items_wrapper">
            <AliceCarousel
              responsive={{ 0: { items: 1 }, 1024: { items: 4 }, 768: { items: 3 } }}
              autoPlay={true}
              animationDuration={1500}
              infinite={true}
              disableButtonsControls
              items={storageItems?.map((item) => <Storage item={item} />)}
            />
          </div>
        </Fragment>
        <Fragment>
          <div className="title bold-text font20">
            Looks by you
          </div>
          <div className="desc">
            Ideas based on your recently viewed products
          </div>
          <div className="looks_wrapper mt20 mb20">
            <AliceCarousel
              responsive={{ 0: { items: 1 }, 1024: { items: 3 }, 768: { items: 2 } }}
              autoPlay={true}
              animationDuration={1500}
              infinite={true}
              disableButtonsControls
              items={looks?.map((item) => <Look item={item} />)}
            />
          </div>
        </Fragment>
        <Fragment>
          <div className="title bold-text font20">
            More ideas and inspiration
          </div>
          <div className="ideaBtns_Wrapper">

            {ideasBtns?.map((idea) => <IdeaBtns idea={idea} />)}
          </div>
        </Fragment>
        <Fragment>
          <div className="ideasimages_container  mb20">
            <div className="istidea1">
              {ideasimages?.slice(0, 1).map((item) => <Whatnew item={item} />)}
            </div>
            <div className="secondidea2">
              {ideasimages?.slice(1, 3).map((item) => <Whatnew item={item} />)}
            </div>
            <div className="thirdidea3">
              {ideasimages?.slice(3, 5).map((item) => <Whatnew item={item} />)}
            </div>
            {/* {ideasimages?.map((item) => <IdeaImg item={item} />)} */}
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

