import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop — scrolls the window to (0, 0) on every route change.
 * Place this inside <BrowserRouter> so useLocation is available.
 * Renders nothing — purely a side-effect component.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
