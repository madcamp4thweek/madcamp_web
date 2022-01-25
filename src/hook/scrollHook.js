import { useState, useEffect } from "react";
import {throttle} from "lodash";
export function useScroll(handleScroll) {

  const [scrollY, setScrollY] = useState(0);
  const listener = () => {
    setScrollY(window.pageYOffset);

  };
  useEffect(() => {
    window.addEventListener("scroll", throttle(listener,50));
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY
  };
}
export default useScroll;