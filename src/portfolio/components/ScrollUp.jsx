import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export function ScrollUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-up ${show ? "show" : ""}`}
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaAngleUp aria-hidden="true" />
    </button>
  );
}
