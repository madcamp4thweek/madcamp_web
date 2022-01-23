import { useState, useEffect } from "react";
import {throttle} from 'lodash';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    console.log(window.pageYOffset);
    // console.log("scrolled");
    // await setScrollY(window.pageYOffset);
    
  };

  useEffect(() => {
    
    window.addEventListener("scroll", throttle(listener,100));
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY
  };
}

export default useScroll;
