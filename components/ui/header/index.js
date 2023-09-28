import React, { useState } from "react";
import { cartListState, totalCartValueState } from "../../../recoil/atoms/cart";
import { useRecoilState, useRecoilValue } from "recoil";
import ContentContainer from "../content-container/content-container";
import Image from "next/image";
import classes from "./header.module.less";
import { useRouter } from "next/router";

const Header = () => {
  const cartItems = useRecoilState(cartListState);
  const totalCartValue = useRecoilValue(totalCartValueState);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const options = [
    { label: "All", value: "all" },
    { label: "Aerospace", value: "Aerospace" },
    { label: "Automobiles", value: "Automobiles" },
    { label: "Towers", value: "Towers" },
    { label: "Railways", value: "Railways" },
  ];
  // console.log("cart....", cartItems[0]);
  const searchFunction = () => {
    router.push("/search-page");
  };

  const gotoCartPage = () => {
    router.push("/cart-page");
  };
  const returnHome = () => {
    router.push("/");
  };
  const registerPage = () => {
    router.push("/register");
  };
  const loginPage = () => {
    router.push("/login");
  };
  const gotoWishList = () => {
    router.push("/wish-list");
  };

  return (
    <div className={classes.main_wrapper}>
      <ContentContainer>
        <div className={classes.main_wrapper_inner}>
          <div className={classes.logo_container} onClick={returnHome}>
            Ecommerce
          </div>


          <div className={classes.cart_login}>
            <div
              style={{ display: "flex" }}
              className={classes.cart}
              onClick={gotoWishList}
            >
              <Image
                src={"/images/icons/home/heart-filled.png"}
                width={34}
                height={34}
                alt=""
              />
            </div>
            <div
              style={{ display: "flex" }}
              className={classes.cart}
              onClick={gotoCartPage}
            >
              <Image
                src={"/images/general/icons8-fast-cart-60.png"}
                width={34}
                height={34}
                alt=""
              />
            </div>

            <div className={classes.login_register} onClick={loginPage}>
              <Image
                src={"/images/icons/login-reg.png"}
                width={34}
                height={34}
                alt=""
              />
            </div>
          </div>
        </div>
      </ContentContainer>
      <div className={classes.login_modal}>
      </div>
    </div>
  );
};

export default Header;
