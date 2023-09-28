import classes from "./tabs.module.less";
import { useState } from "react";

const Tabs = (props) => {
  const desc = (
    <span>
      {" "}
      About this item Improves your concentration improves your hand eye co
      preservationists problem solving skills Improves creativity & imagination
      skills Storio makes toys that are entertaining and safe. All toys are EN71
      certified which is defined by stringent European standards and hence
      devoid of banned phthalates. Speedup your solving time without any effort
      and bring you the best turning feeling in advance. Easy turning and smooth
      play. Cubes are known to develop cognitive and problem-solving skills
      among kids. It betters their eye-hand coordination; improves concentration
      in general and ensures that they are able to process their thoughts
      faster. And for adults it's a good stress buster if played during breaks
      at work! The anti-stick design can prevent the cube viscosity, make the
      cube solve smoothly optimized big round corner - optimized parts of the
      round corner pieces,
    </span>
  );
  const policy = (
    <span>
      7.5% Instant Discount up to INR 1500 on Standard Chartered Bank Credit
      Card EMI Trxn. Minimum purchase value INR 10000 Here's how 10% Instant
      Discount up to INR 500 on IDBI Bank Card Trxns. Min purchase value INR
      2000 Here's how 5% Instant Discount up to INR 250 on HSBC Cashback Card
      Credit Card Transactions. Minimum purchase value INR 1000 Here's how No
      cost EMI available on select cards. Please check 'EMI options' above for
      more details. Here's how Get GST invoice and save up to 28% on business
      purchases.{" "}
    </span>
  );
  const [selectedTab, setSelectedTab] = useState(0);
  const renderTab = (tab, index) => {
    return (
      <div
        key={index}
        className={
          classes.single_tab +
          " " +
          (selectedTab == index ? classes.active : "")
        }
        onClick={() => setSelectedTab(index)}
        style={{ cursor: "pointer", width: "300px" }}
      >
        {tab}
      </div>
    );
  };

  return (
    <div className={classes.tabs_wraper}>
      <div className={classes.tabs_container}>
        <div className={classes.tabs_container_inner + " font10"}>
          {props.data &&
            props.data.length > 0 &&
            props.data.map((tab, index) => {
              return renderTab(tab, index);
            })}
        </div>
      </div>

      <div className={classes.tabs_content_container}>
        {selectedTab === 0 ? desc : policy}
      </div>
    </div>
  );
};

export default Tabs;
