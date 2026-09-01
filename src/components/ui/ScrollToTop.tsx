
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
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

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-[999]
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-white/20
        bg-[#ff2d55]
        text-white
        shadow-lg shadow-[#915EFF]/30
        transition-all duration-300
        hover:-translate-y-1
        hover:scale-110
        hover:bg-[#00e5ff]
        active:scale-95
        sm:bottom-8 sm:right-8
      "
    >
      <ChevronUp size={22} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
