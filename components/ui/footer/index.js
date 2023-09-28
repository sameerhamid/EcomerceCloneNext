import React, { useState } from "react";
import Image from "next/image";
import classes from "./footer.module.less";

const Footer = () => {
  const images = [
    "facebook.png",
    "pintrest.png",
    "twitter.png",
    "youtube.png",
    "wechat.png",
    "whatsapp.png",
    "reddit.png",
    "linkedin.png",
    "instagram.png",
  ];
  const footerLinks = [
    {
      title: "About Us",
      content: [
        "Meet us",
        "SKYBIZ Group",
        "Careers",
        "SKYBIZ Education project",
        "Tech Master Event platform",
        "Contact",
      ],
    },
    {
      title: "Shortcuts",
      content: [
        "Means and cost of transport",
        "Orders",
        "Prices",
        "Payments",
        "Sales documents",
        "Complaint form",
        "Right of withdrawal from the agreement",
        "Help",
      ],
    },
    {
      title: "Information",
      content: [
        "Terms of cooperation",
        "Data Protection Policy",
        "GDPR information",
        "Cookies policy",
        "Manage cookies",
        "Environmental information",
        "The ODR platform",
      ],
    },
  ];
  const routeToLink = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className={classes.footer_wrapper}>
        <div className={classes.logo_social}>
          <div className={classes.logo}>
            <Image
              src={"/images/icons/skybiz.jpg"}
              width={200}
              height={100}
              alt=""
            />
          </div>
          <div className={classes.social}>
            <div className="font12 bold">Join Us</div>
            <div className={classes.icons}>
              {images.map((icon, index) => {
                return (
                  <Image
                    key={index}
                    src={`/images/icons/socialmedia/${icon}`}
                    width={40}
                    height={40}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
        {footerLinks.map((link, index) => {
          return (
            <div className={classes.links_wrapper} key={index}>
              <div className="bold">{link.title}</div>
              <div className={classes.about_item}>
                {link.content.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.link + " font9"}
                      onClick={() => routeToLink(item)}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
