import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to manage canonical URLs for SEO purposes
 * Automatically updates the canonical link tag based on the current route
 */
export const useCanonicalURL = () => {
  const location = useLocation();

  useEffect(() => {
    const baseURL = "https://rajuvishwa.dev";
    let canonicalURL = baseURL;

    // Set canonical URL based on current path
    if (location.pathname === "/") {
      canonicalURL = `${baseURL}/`;
    } else if (location.pathname.startsWith("/blog/")) {
      canonicalURL = `${baseURL}${location.pathname}`;
    } else {
      // For any other routes, use the pathname
      canonicalURL = `${baseURL}${location.pathname}`;
    }

    // Find or create the canonical link element
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    // Update the href attribute
    canonicalLink.setAttribute("href", canonicalURL);
  }, [location.pathname]);
};
