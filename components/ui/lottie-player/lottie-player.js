import Lottie from "lottie-react";

import bus from "./anims/bus.json";
import bus_white from "./anims/bus_white.json";
import train from "./anims/train.json";
import train_anim_white from "./anims/train_white.json";
import at_anim from "./anims/at.json";
import at_anim_white from "./anims/at_white.json";
import bip_anim from "./anims/bip.json";
import bip_anim_white from "./anims/bip_white.json";
import go_anim from "./anims/go.json";
import go_anim_white from "./anims/go_white.json";
import pool_anim from "./anims/pool.json";
import pool_anim_white from "./anims/pool_white.json";

const LottiePlayer = (props) => {
  const getAnim = (key) => {
    switch (key) {
      case "bus_anim":
        return bus;
      case "bus_anim_white":
        return bus_white;
      case "train_anim":
        return train;
      case "train_anim_white":
        return train_anim_white;
      case "at_anim":
        return at_anim;
      case "at_anim_white":
        return at_anim_white;
      case "bip_anim":
        return bip_anim;
      case "bip_anim_white":
        return bip_anim_white;
      case "go_anim":
        return go_anim;
      case "go_anim_white":
        return go_anim_white;
      case "pool_anim":
        return pool_anim;
      case "pool_anim_white":
        return pool_anim_white;
    }
  };

  return (
    <Lottie
      animationData={getAnim(props.animation)}
      loop={props.loop}
      autoPlay={true}
    />
  );
};

export default LottiePlayer;
