
import { LuBus } from "react-icons/lu"
import { FaGreaterThan } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"
import NavbarSec from "../../components/myComponents/NavbarSec";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const About = () => {
    const router = useRouter();

    const handleAddToBagClick = () => {
        router.push("/menu");
    }

    return (
        <>
            <NavbarSec />

            <div className="about_container">
                <div><img src="../images/slides/aboutimages/buyproduct1.jpg" width={300} alt="" /></div>
                <div><img src="../images/slides/aboutimages/buyproduct1.jpg" width={300} alt="" /></div>


                <div className="buynow_container">
                    <div className="heading"><div><span className="title">TABBERAS<AiOutlineHeart className="greaterthan" /></span>
                        <span className="desc">Food slice assistant,green</span></div></div>
                    <div className="price text-bold">Rs.<span className="title">199</span></div>
                    <div className="desc">Price incl.of all taxes</div>
                    <div className="title">How to get it</div>
                    <div>
                        <div>

                            <div className="check">
                                <LuBus /><div><span className="title">Delivery<FaGreaterThan className="greaterthan" /></span>
                                    <span className="desc">check availabiliy</span></div></div>
                            <hr></hr>
                            <div className="check">
                                <LuBus />
                                <div><span className="title">In store<FaGreaterThan className="greaterthan" /></span>
                                    <span className="desc">Check in-store stock</span></div></div>
                        </div>
                        <button className="add_to_bag" onClick={handleAddToBagClick}>Add to bag</button>
                    </div>

                </div>  </div>
        </>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
});

export default About;
