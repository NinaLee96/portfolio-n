import React, { useState } from "react";
import * as landingStyles from "../styles/landing.module.scss";
import { useSpring, animated } from "react-spring";

const Landing = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });

  return (
    <div className={landingStyles.background}>
      {/* <animated.div style={props}>I will fade in</animated.div> */}
    </div>
  );
};

export default Landing;
