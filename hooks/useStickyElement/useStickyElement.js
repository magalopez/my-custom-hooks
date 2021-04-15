import { useState, useEffect } from 'react';

export const useStickyElement = ({ stickyBool = false, topElement, bottomElement, subtractionBottom = 0 }) => {

  const [ sticky, setSticky ] = useState(stickyBool);
 
  useEffect(() => {
    
    const scrollCallBack = window.addEventListener("scroll", () => {
    
      const top = document.querySelector(topElement);
      const bottom = document.querySelector(bottomElement);

      const window_top = window.pageYOffset;
      const top_element = top ? top.offsetTop : undefined;
      const bottom_element = bottom ? bottom.offsetTop - subtractionBottom : undefined;
      
      if (window_top > top_element && window_top < bottom_element) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };

  }, []);

  return [ sticky ];
};