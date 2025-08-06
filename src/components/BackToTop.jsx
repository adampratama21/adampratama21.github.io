import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;

      const scrollPosition = document.documentElement.scrollTop;

      setIsVisible(scrollPosition > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className="d-flex justify-content-center align-items-center">
        <span>^</span>
      </button>
    )
  );
}
