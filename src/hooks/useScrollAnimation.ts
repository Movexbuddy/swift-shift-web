import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay") || "0";
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-up, .slide-in-left, .zoom-in").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};
