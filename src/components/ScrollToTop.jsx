import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };

    scrollToTop();
  }, [pathname]);
}
